import React from 'react'
import sinon from 'sinon'
import axios from 'axios'
import {shallow} from 'enzyme'
import Gallery from './Gallery'

describe('Test Component function', () => {
    const wrapper = shallow(<Gallery />, {disableLifecycleMethods: true});
    const instance = wrapper.instance();
    let mockGet
    let mockState

    beforeAll(() => {
        mockGet = sinon.mock()
        mockState = sinon.mock()
    })

    // afterAll(() => {
    //     mockGet.restore()
    //     mockState.restore()
    // })

    afterEach(() => {
        mockGet.restore()
        mockState.restore()
    })

    it('Should setState with new posts when axios.get resolved', () => {
        // const wrapper = shallow(<Gallery />, {disableLifecycleMethods: true});
        // const instance = wrapper.instance();
        mockGet = sinon.mock(axios).expects('get').once()
            .withExactArgs('http://localhost/image/sample.jpg')
            .resolves({data: []});
        mockState = sinon.mock(instance).expects('setState').once()
            .withExactArgs({image: []});

        return instance.fetchImage('http://localhost/image/sample.jpg')
            .then(() => {
                mockGet.verify();
                mockState.verify();
            });
    })

    it('Should setState err_message when axios.get rejected', () => {
        // const wrapper = shallow(<Gallery />, {disableLifecycleMethods: true});
        // const instance = wrapper.instance();
        mockGet = sinon.mock(axios).expects('get').once()
            .withExactArgs('http://localhost/image/sample.jpg')
            .rejects({status: 'Failed', code: 99, data: 'Failed to load.'});
        mockState = sinon.mock(instance).expects('setState').once()
            .withExactArgs({err_message: 'Failed to load.'});

        return instance.fetchImage('http://localhost/image/sample.jpg')
            .then(() => {
                mockGet.verify();
                // mockState.verify();
            });
    })
})