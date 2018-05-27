const sum = (a, b) => {
    return a + b
}

const minus = (a, b) => {
    return a - b
}

const times = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}

const getArrayOf3Items = (input) => {
    if(input === 'yes')
        return [1, 2, 3]
    else
        return [0]
}

export default {sum, minus, times, divide, getArrayOf3Items}
// export default {sum, minus, times, divide}