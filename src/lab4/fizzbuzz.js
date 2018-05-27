const fizzbuzz = (num = 15) => {
    let result = num

    if(result%3 === 0 && result%5 === 0)
        result = 'fizz buzz'
    else if(result%3 === 0)
        result = 'fizz'
    else if(result%5 === 0)
        result = 'buzz'

    return result
}

export default {fizzbuzz}