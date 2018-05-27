import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import Card from './Card'

describe('Test initial state', () => {
    it('Should have state text equal to "This is title."', () => {
        const props = {
            header_text: 'This is header',
            content_text: 'This is content',
            onClick: sinon.spy()
        };

        const wrapper = shallow(<Card {...props}/>, {disableLifecycleMethods: true});
        expect(wrapper.state()).toHaveProperty('title', 'This is title.');
    })

    it('Should have state item_list equal to empty array', () => {
        const props = {
            header_text: 'This is header',
            content_text: 'This is content',
            onClick: sinon.spy()
        };

        const wrapper = shallow(<Card {...props}/>, {disableLifecycleMethods: true});
        expect(wrapper.state()).toHaveProperty('item_list', []);
    })
})