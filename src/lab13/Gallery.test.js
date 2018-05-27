import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import Gallery from './Gallery'

describe('Test Component Life cycle', () => {
    it('Should call fetchImage in componentDidMount', () => {
        const wrapper = shallow(<Gallery />, {disableLifecycleMethods: true});
        const instance = wrapper.instance();
        const mockFetchPost = sinon.mock(instance).expects('fetchImage').once();

        instance.componentDidMount();   // access function in component

        mockFetchPost.verify();
    })
})