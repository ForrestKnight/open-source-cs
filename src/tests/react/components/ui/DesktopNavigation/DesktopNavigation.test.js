/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {DesktopNavigation} from '../../../../../react/components/ui/DesktopNavigation/DesktopNavigation';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<DesktopNavigation />);
});


/* Tests */
test('Render DesktopNavigation component', () => {
    expect(component).toMatchSnapshot();
});

