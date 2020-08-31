/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Theory} from '../../../../react/components/sections/Theory';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Theory />);
});


/* Tests */
test('Render Theory section', () => {
    expect(component).toMatchSnapshot();
});

