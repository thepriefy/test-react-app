import {runCallback} from './spy'
import sinon from 'sinon'

describe('Test runCallback', () => {
    let spyCallback

    beforeAll(() => {
        spyCallback = sinon.spy()
    })

    afterAll(() => {
        spyCallback.restore()
    })

    afterEach(() => {
        spyCallback.resetHistory()
    })

    it('Should return spy correctly', () => {
        const spyCallback = sinon.spy()

        runCallback(spyCallback)

        expect(spyCallback.callCount).toEqual(1)
        expect(spyCallback.calledOnceWith({foo: 'foo'})).toEqual(true)
    })
})