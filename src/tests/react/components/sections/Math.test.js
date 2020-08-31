/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Math} from '../../../../react/components/sections/Math';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Math />);
});


/* Tests */
test('Render Math section', () => {
    expect(component).toMatchSnapshot();
});

