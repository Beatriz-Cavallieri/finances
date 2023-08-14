export const formatCurrency = (value) => {
  try {
    if (typeof value === 'string') {
      value = parseFloat(value)
    }
    if (typeof value !== 'number') {
      throw new Error('Value must be a number.')
    }

    const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
    return formatter.format(value)
  } catch (error) {
    console.error('Error formatting currency:', error.message)
    return 'R$ 0,00'
  }
}