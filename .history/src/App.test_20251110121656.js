import { describe, it, expect } from 'vitest'
import { handleInput } from './App.js'

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