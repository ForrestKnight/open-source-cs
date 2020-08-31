/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {HomeButton} from '../../../../react/components/ui/HomeButton';


/* Test Config */
let component, navMenu_Mobile, navMenu_Mobile__Toggle;
beforeEach(() => {
    navMenu_Mobile__Toggle = jest.fn();
    navMenu_Mobile = true
    component = shallow(
        <HomeButton 
            navMenu_Mobile={navMenu_Mobile}
            navMenu_Mobile__Toggle={navMenu_Mobile__Toggle}
        />
    );
});


/* Tests */
test('Render Home button component', () => {
    expect(component).toMatchSnapshot();
});


test('Toggle nav menu', () => {
    component.find('#HomeButton').simulate('click');
    expect(navMenu_Mobile__Toggle).toHaveBeenCalled();
});