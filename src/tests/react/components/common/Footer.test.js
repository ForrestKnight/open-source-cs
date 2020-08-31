/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Footer} from '../../../../react/components/common/Footer';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Footer />);
});


/* Tests */
test('Render Footer component', () => {
    expect(component).toMatchSnapshot();
});