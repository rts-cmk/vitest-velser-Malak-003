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
export async function getMessage(isGood) {
  if (isGood) {
    return 'Alt gik godt' 
  } else {
    throw 'Noget gik galt'
  }
}
