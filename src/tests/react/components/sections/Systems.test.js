/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Systems} from '../../../../react/components/sections/Systems';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Systems />);
});


/* Tests */
test('Render Systems section', () => {
    expect(component).toMatchSnapshot();
});

