import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import Card from './Card'

describe('Test Card component', () => {
    it('Should have 1 .header element', () => {
        const wrapper = shallow(<Card/>)
        expect(wrapper.find('.header')).toHaveLength(1)
    })

    it('Should contain <p> element', () => {
        const wrapper = shallow(<Card/>)
        expect(wrapper.contains(<p className="content">Content</p>)).toEqual(true)
    })

    // it('Simulate click event', () => {
    //     const onButtonClick = sinon.spy();
    //     const wrapper = shallow(<Card />);
    //     wrapper.find('button').simulate('click');
    //     expect(onButtonClick).toHaveProperty('onClick', 1);
    // })
})