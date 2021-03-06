import {sum, minus, times, divide} from './calculator'  // when using 'export {sum, minus, times, divide}'
// import cal from './calculator'   // when using "export default {sum, minus, times, divide}"

it('Should return 3 when input is 1 and 2', () => {
    // const actual = cal.sum(1, 2)     // when using "import cal from './calculator'"
    const actual = sum(1, 2)
    expect(actual).toEqual(3)
})

it('Should return 1 when input is 2 and 1', () => {
    const actual = minus(2, 1)
    expect(actual).toEqual(1)
})

it('Should return 2 when input is 2 and 1', () => {
    const actual = times(2, 1)
    expect(actual).toEqual(2)
})

it('Should return 2 when input is 2 and 1', () => {
    const actual = divide(2, 1)
    expect(actual).toEqual(2)
})


it('Should return Infinity when input is 2 and 0', () => {
    const actual = divide(2, 0)
    expect(actual).toEqual(Infinity)
})

