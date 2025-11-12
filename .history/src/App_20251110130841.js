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


// Denne funktion kaster fejl ved ugyldigt input
export function checkAge(age) {
  if (typeof age !== 'number') {
    throw new Error('Alder skal være et tal')
  }

  return 'Gyldig alder'
}
