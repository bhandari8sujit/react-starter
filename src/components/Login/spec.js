import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import  { findTestItemsByAttr } from '../../utils/index';

describe('Login Component', () => {

    const renderComponent = (props={}) => {
        const component = shallow(<Login />);
        return component;
    }

    let component;
    beforeEach(()=>{
        component = renderComponent();
    })

    // it('It should render without errors', () => {      
    //   const wrapper = findTestItemsByAttr(component, 'login-form')
    //   expect(wrapper.length).toBe(1);
    // });

    it('It should render Logo Image', () => {              
        const wrapper = findTestItemsByAttr(component, 'login-logo');
        expect(wrapper.length).toBe(1);
    });

});
