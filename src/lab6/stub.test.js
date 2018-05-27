import sinon from 'sinon'
import {getRandomNumber} from "./stub"

describe('Test stub', () => {
    it('Should run stub with callsFake correctly', () => {
        const stubRandom = sinon.stub(Math, 'random').callsFake(() => 0.55)

        const number = getRandomNumber()

        expect(stubRandom.callCount).toEqual(1)
    })

    it('Should run stub with withArgs correctly', () => {
        // const stubRandom = sinon.stub(Math, 'random').callsFake(() => 0.55)
        const stubFloor = sinon.stub(Math, 'floor').withArgs(6.5).returns(6)

        const number = getRandomNumber()
        expect(stubFloor.calledOnce).toEqual(true)
    })

    // it.only('Should run stub with withArgs correctly', () => {
    //     const stubRandom = sinon.stub(Math, 'random').callsFake(() => 0.55)
    //     const stubFloor = sinon.stub(Math, 'floor').withArgs(6.5).returns(6)
    //
    //     const number = getRandomNumber()
    //     expect(stubFloor.calledOnce).toEqual(true)
    // })
})