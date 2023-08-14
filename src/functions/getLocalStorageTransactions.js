export const getLocalStorageData = (key) => {
    const savedData = localStorage.getItem(key)
    if (savedData) {
      const parsedData = JSON.parse(savedData)
      if (Array.isArray(parsedData)) {
        return parsedData
      } return null
    }
  }