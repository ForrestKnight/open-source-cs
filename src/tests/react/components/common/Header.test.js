/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Header} from '../../../../react/components/common/Header';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Header />);
});


/* Tests */
test('Render Header component', () => {
    expect(component).toMatchSnapshot();
});