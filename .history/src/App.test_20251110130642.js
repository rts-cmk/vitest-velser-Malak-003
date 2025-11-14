import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { handleInput, getMessage } from './App.js'

// Øvelse 1

describe('handleInput', () => {
  it('adds 10 to numbers', () => {
    expect(handleInput(5)).toBe(15)

    expect(handleInput(0)).toBe(10)
  })


  it('makes strings uppercase', () => {
    expect(handleInput('hi')).toBe('HI')

    expect(handleInput('Test')).toBe('TEST')
  })


  it('returns "no value" for null', () => {
    expect(handleInput(null)).toBe('no value')
  })

})


// Øvelse 2

describe('handleInput', () => {
  let input // bruges til at gemme vores testdata

  beforeEach(() => {
    input = null
    console.log('Starter ny test')
  })

  afterEach(() => {
    input = null
    console.log('Test færdig')
  })

  describe('når input er et tal', () => {
    it('lægger 10 til tallet', () => {
      input = 5
      expect(handleInput(input)).toBe(15)
    })
  })

  describe('når input er en tekst', () => {
    it('laver tekst til store bogstaver', () => {
      input = 'hej'
      expect(handleInput(input)).toBe('HEJ')
    })
  })

  describe('når input er null', () => {
    it('retunere "no value"'), () => {
        input = null
        expect(handleInput(input)).toBe('no value')
    }
  })
})



// Øvelse 3

describe('getMessage', () => {
  it('giver succesbesked, når alt går godt', async () => {
    const result = await getMessage(true) // vent på resultat
    expect(result).toBe('Alt gik godt') // tjek resultatet
  })


  it('giver fejlbesked, når noget går galt', async () => {
    await expect(getMessage(false)).rejects.toBe('Noget gik galt')
  })
})


