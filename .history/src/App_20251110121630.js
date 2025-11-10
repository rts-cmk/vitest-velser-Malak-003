export function handleInput(value) {
  if (typeof value === 'number') {
    return value + 10 
  }

  if (typeof value === 'string') {
    return value.toUpperCase() 
  }

  if (value === null) {
    return 'no value' 
  }

}