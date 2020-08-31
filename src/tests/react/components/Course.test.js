/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Course} from '../../../react/components/Course';


/* Data */
import courses from '../../fixtures/courses';


/* Test Config */
let component;


/* Tests */
test('Render Course component without prerequisites', () => {
    component = shallow(
        <Course {...courses[0]}/>
    );

    expect(component).toMatchSnapshot();
});


test('Render Course component with prerequisites', () => {
    component = shallow(
        <Course {...courses[1]}/>
    );
    
    expect(component).toMatchSnapshot();
});

