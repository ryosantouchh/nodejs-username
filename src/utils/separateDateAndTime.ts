const separateDateAndTime = (ISODateString: string) => {
  const rawDateString = ISODateString.split('T')[0]
  const ISODateWithoutTime = new Date(rawDateString).toISOString

  return ISODateWithoutTime
}

export default separateDateAndTime
