import util from './utilities'

it('Should not return 5 when input are 1 and 3', () => {
    const result = util.sum(1, 3)
    expect(result).not.toEqual(5);
})