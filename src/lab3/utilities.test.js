import util from './utilities'

describe('test multiple functions', () => {
    describe('test calculator', () => {
        it('Should return 3 when input is 1 and 2', () => {
            // const actual = cal.sum(1, 2)     // when using "import cal from './calculator'"
            const actual = util.sum(1, 2)
            expect(actual).toEqual(3)
        })

        it('Should return 1 when input is 2 and 1', () => {
            const actual = util.minus(2, 1)
            expect(actual).toEqual(1)
        })

        it('Should return 2 when input is 2 and 1', () => {
            const actual = util.times(2, 1)
            expect(actual).toEqual(2)
        })

        it('Should return 2 when input is 2 and 1', () => {
            const actual = util.divide(2, 1)
            expect(actual).toEqual(2)
        })


        it('Should return Infinity when input is 2 and 0', () => {
            const actual = util.divide(2, 0)
            expect(actual).toEqual(Infinity)
        })
    })

    describe('test other functions', () => {
        it('Should return array of 3 when the input is "yes"', () => {
            const arr = util.getArrayOf3Items('yes')
            expect(arr).toHaveLength(3);
        })
    })
})