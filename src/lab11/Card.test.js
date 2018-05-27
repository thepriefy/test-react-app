import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import Card from './Card'

describe('Test Card component with props', () => {
    it('Should call props.onClick when .card-btn is clicked', () => {
        const props = {
            header_text: 'This is header',
            content_text: 'This is content',
            onClick: sinon.spy()
        }

        const wrapper = shallow(<Card {...props}/>)
        wrapper.find('.card_btn').simulate('click')
        expect(props.onClick.callCount).toEqual(1)
    })
})