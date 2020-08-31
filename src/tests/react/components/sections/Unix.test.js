/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Unix} from '../../../../react/components/sections/Unix';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Unix />);
});


/* Tests */
test('Render Unix section', () => {
    expect(component).toMatchSnapshot();
});

