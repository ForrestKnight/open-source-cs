/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {MobileNavigation} from '../../../../../react/components/ui/MobileNavigation/MobileNavigation';


/* Test Config */
let component, navMenu_Mobile__Toggle;
beforeEach(() => {
    navMenu_Mobile__Toggle = jest.fn();
    component = shallow(
        <MobileNavigation 
            navMenu_Mobile__Toggle={navMenu_Mobile__Toggle}
        />
    );
});


/* Tests */
test('Render MobileNavigation component', () => {
    expect(component).toMatchSnapshot();
    expect(component.state('navMenu_Mobile')).toBe(false);
});


test('Toggle nav menu', () => {
    component.find('.MobileNavigation__button').simulate('click');
    expect(navMenu_Mobile__Toggle).toHaveBeenCalled();
});

