/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {CourseSection} from '../../../../react/components/sections/CourseSection';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<CourseSection />);
});


/* Tests */
test('Render CourseSection section', () => {
    expect(component).toMatchSnapshot();
});

