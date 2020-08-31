/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {CourseSection} from '../../../../react/components/sections/CourseSection';


/* Data */
import courseSections from '../../../fixtures/courseSections';


/* Test Config */
let component;


/* Tests */
test('Render CourseSection without courses', () => {
    component = shallow(
        <CourseSection {...courseSections[0]}/>
    );

    expect(component).toMatchSnapshot();
});


test('Render CourseSection with courses', () => {
    component = shallow(
        <CourseSection {...courseSections[1]}/>
    );

    expect(component).toMatchSnapshot();
});

