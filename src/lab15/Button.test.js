import React from 'react'
import {shallow} from 'enzyme'
import {Button} from './Button'

describe('Test styled-component', () => {
    it('Should have color blue when primary prop exist', () => {
        const wrapper = shallow(<Button primary />)

        // expect(wrapper).toMatchSnapshot()
        expect(wrapper).toHaveStyleRule('color', 'blue');
    })
})