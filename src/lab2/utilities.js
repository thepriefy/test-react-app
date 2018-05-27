const sum = (a, b) => {
    return a + b
}

const getArrayOf3Items = (input) => {
    if(input === 'yes')
        return [1, 2, 3]
    else
        return [0]
}

export default {sum, getArrayOf3Items}