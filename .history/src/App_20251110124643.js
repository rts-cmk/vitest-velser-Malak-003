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


//en funktion, der returnerer en Promise
export function getMessage(isGood) {
  if (isGood) {
    return Promise.resolve('Alt gik godt')
  } else {
    return Promise.reject('Noget gik galt')
  }
}