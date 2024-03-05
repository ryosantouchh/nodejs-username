const handleImageBase64 = (imageBase64: string) => {
  if (!imageBase64) return null

  const base64regexp = /^data:image\/[a-z]+;base64,/
  const result = imageBase64.replace(base64regexp, '')

  return result
}

export default handleImageBase64
