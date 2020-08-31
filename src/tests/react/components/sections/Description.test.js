/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Description} from '../../../../react/components/sections/Description';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Description />);
});


/* Tests */
test('Render Description section', () => {
    expect(component).toMatchSnapshot();
});

