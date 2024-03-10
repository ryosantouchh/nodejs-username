import fs from 'fs'
import path from 'path'

type FilePath = {
  file: string
  path: string
}

type GenerateFileNamesReturn = Array<FilePath>

const directoryPath = path.resolve(__dirname, '../swagger/v1')

const readFilesRecursively = async (directoryPath: fs.PathLike) => {
  const entries = await fs.promises.readdir(directoryPath as fs.PathLike)
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directoryPath as string, entry)

    // Get Directory Name
    const stat = await fs.promises.stat(entryPath)
    const directoryName = path.dirname(entryPath)
    const preSwaggerPath = directoryName.split('/')
    const swaggerIndex = preSwaggerPath.indexOf('swagger')
    preSwaggerPath.splice(0, swaggerIndex)

    const swaggerPath = preSwaggerPath.join('/')

    // Check if the entry is a directory
    if (stat.isDirectory()) {
      // If it's a directory, recursively read files from it
      const nestedFiles: GenerateFileNamesReturn = await readFilesRecursively(
        entryPath
      )
      files.push(...nestedFiles)
    } else {
      // If it's a file, add it to the list of files
      files.push({
        path: swaggerPath,
        file: path.basename(entryPath),
      })
    }
  }

  return files
}

export const generateSwaggerFileNames =
  async (): Promise<GenerateFileNamesReturn> => {
    try {
      // Read files recursively from the directory
      const files = await readFilesRecursively(directoryPath)
      return files
    } catch (error) {
      console.error('Error:', error)
      return []
    }
  }
