/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Navigation} from '../../../../react/components/ui/Navigation';


/* Test Config */
let component;
beforeEach(() => {
    component = shallow(<Navigation />);
});


/* Tests */
test('Render Navigation component', () => {
    expect(component).toMatchSnapshot();
});

