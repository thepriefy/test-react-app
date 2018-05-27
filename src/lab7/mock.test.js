import sinon from 'sinon'
import {getRandomNumber} from "./mock"

describe('Test mock', () => {
    let mockCallback

    beforeAll(() => {
        mockCallback = sinon.mock()
    })

    afterAll(() => {
        mockCallback.restore()
    })

    afterEach(() => {
        mockCallback.resetHistory()
    })

    it('Should run Mock correctly', () => {
        const mockRandom = sinon.mock(Math).expects('random').once().returns(0.55)
        const mockFloor = sinon.mock(Math).expects('floor').once().withExactArgs(6.5).returns(0.55)

        const number = getRandomNumber()

        mockRandom.verify()
        mockFloor.verify()
    })
})