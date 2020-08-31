/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {MobileNavigationLink} from '../../../../../react/components/ui/MobileNavigation/MobileNavigationLink'


/* Fixtures */
import links from '../../../../fixtures/links'


/* Test config */
let component;
beforeEach(() => {
    component = shallow(<MobileNavigationLink />)
});


/* Tests */
test('Render MobileNavigationLink component without links', () => {
    expect(component).toMatchSnapshot();
})


test('Render MobileNavigationLink component with internal link', () => {
    component = shallow(<MobileNavigationLink {...links[0]}/>)
    expect(component).toMatchSnapshot();
})


test('Render MobileNavigationLink component with external link', () => {
    component = shallow(<MobileNavigationLink {...links[1]}/>)
    expect(component).toMatchSnapshot();
})


test('Render MobileNavigationLink component with internal link and sublink', () => {
    component = shallow(<MobileNavigationLink {...links[2]}/>)
    expect(component).toMatchSnapshot();
})


test('Render MobileNavigationLink component with external link with sublink', () => {
    component = shallow(<MobileNavigationLink {...links[3]}/>)
    expect(component).toMatchSnapshot();
})