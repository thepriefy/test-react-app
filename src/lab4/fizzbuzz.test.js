import fb from './fizzbuzz'

it('Should return "fizz" when input is 6', () => {
    const val = fb.fizzbuzz(6)
    expect(val).toEqual('fizz')
})

it('Should return "buzz" when input is 10', () => {
    const val = fb.fizzbuzz(10)
    expect(val).toEqual('buzz')
})

it('Should return "fizz buzz" when input is 30', () => {
    const val = fb.fizzbuzz(30)
    expect(val).toEqual('fizz buzz')
})

it('Should return 7 when input is 7', () => {
    const val = fb.fizzbuzz(7)
    expect(val).toEqual(7)
})

it('Should return "fizz buzz" when no input', () => {
    const val = fb.fizzbuzz()
    expect(val).toEqual('fizz buzz')
})