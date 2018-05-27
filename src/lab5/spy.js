const runCallback = (callback) => {
    let params = {foo: 'foo'}
    callback(params)
    // callback(params)
}

export {runCallback}