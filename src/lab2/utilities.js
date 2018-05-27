const sum = (a, b) => {
    return a + b
}

const getArrayOf3Items = (input) => {
    if(input === 'yes')
        return [1, 2, 3]
    else
        return [0]
}

const getObjWithNameProperty = (input) => {
    if(input === 'yes')
        return {
            'name': 'React',
            'date': '26 - 27 May 2018'
        }

    else
        return {
            'date': '26 - 27 May 2018'
        }
}

export default {sum, getArrayOf3Items, getObjWithNameProperty}