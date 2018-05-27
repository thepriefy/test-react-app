import util from './utilities'

it('Should not return 5 when input are 1 and 3', () => {
    const result = util.sum(1, 3)
    expect(result).not.toEqual(5);
})

it('Should return array of 3 when the input is "yes"', () => {
    const arr = util.getArrayOf3Items('yes')
    expect(arr).toHaveLength(3);
})

it('Should return object with "name" property and value equal "React" when the input is "yes"', () => {
    const arr = util.getObjWithNameProperty('yes')
    expect(arr).toHaveProperty('name', 'React');
})