import React from 'react'
import sinon from 'sinon'
import axios from 'axios'
import {shallow} from 'enzyme'
import Gallery from './Gallery'

describe('Test Component function', () => {
    it('Should setState with new posts when axios.get resolved', () => {
        const wrapper = shallow(<Gallery />, {disableLifecycleMethods: true});
        const instance = wrapper.instance();
        const mockGet = sinon.mock(axios).expects('get').once()
            .withExactArgs('http://localhost/image/sample.jpg')
            .resolves({data: []});
        const mockState = sinon.mock(instance).expects('setState').once()
            .withExactArgs({image: []});

        return instance.fetchImage('http://localhost/image/sample.jpg')
            .then(() => {
                mockGet.verify();
                mockState.verify();
            });
    })
})