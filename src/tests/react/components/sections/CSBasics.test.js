/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {CSBasics} from '../../../../react/components/sections/CSBasics';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<CSBasics />);
});


/* Tests */
test('Render CSBasics section', () => {
    expect(component).toMatchSnapshot();
});

