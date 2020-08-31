/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Applications} from '../../../../react/components/sections/Applications';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Applications />);
});


/* Tests */
test('Render Applications section', () => {
    expect(component).toMatchSnapshot();
});

