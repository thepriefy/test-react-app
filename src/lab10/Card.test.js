import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import Card from './Card'

describe('Test Card component with props', () => {
    it('Match it snapshot', () => {
        const props = {
            header_text: 'This is header',
            content_text: 'This is content',
            footer_text: 'This is footer'
        }

        const wrapper = shallow(<Card {...props}/>)
        expect(wrapper).toMatchSnapshot()
    })
})