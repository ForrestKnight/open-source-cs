/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Programming} from '../../../../react/components/sections/Programming';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Programming />);
});


/* Tests */
test('Render Programming section', () => {
    expect(component).toMatchSnapshot();
});

