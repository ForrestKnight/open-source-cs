/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Course} from '../../../react/components/Course';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Course />);
});


/* Tests */
test('Render Course component', () => {
    expect(component).toMatchSnapshot();
});

