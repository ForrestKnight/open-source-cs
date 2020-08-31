/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {DesktopNavigationLink} from '../../../../../react/components/ui/DesktopNavigation/DesktopNavigationLink'


/* Fixtures */
import links from '../../../../fixtures/links'


/* Test config */
let component;
beforeEach(() => {
    component = shallow(<DesktopNavigationLink />)
});


/* Tests */
test('Render DesktopNavigationLink component without links', () => {
    expect(component).toMatchSnapshot();
})


test('Render DesktopNavigationLink component with internal link', () => {
    component = shallow(<DesktopNavigationLink {...links[0]}/>)
    expect(component).toMatchSnapshot();
})


test('Render DesktopNavigationLink component with external link', () => {
    component = shallow(<DesktopNavigationLink {...links[1]}/>)
    expect(component).toMatchSnapshot();
})


test('Render DesktopNavigationLink component with internal link and sublink', () => {
    component = shallow(<DesktopNavigationLink {...links[2]}/>)
    expect(component).toMatchSnapshot();
})


test('Render DesktopNavigationLink component with external link with sublink', () => {
    component = shallow(<DesktopNavigationLink {...links[3]}/>)
    expect(component).toMatchSnapshot();
})