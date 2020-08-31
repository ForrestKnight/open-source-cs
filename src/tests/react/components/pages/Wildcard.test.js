/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Wildcard} from '../../../../react/components/pages/Wildcard';


/* Test Config */
let component, page_ID__Set;
beforeEach(() => {
    page_ID__Set = jest.fn();
    component = shallow(
        <Wildcard 
            page_ID__Set={page_ID__Set}
        />
    );
});


/* Tests */
test('Render Wildcard page', () => {
    expect(component).toMatchSnapshot();
});


test('Page_ID__Set function', () => {
    setTimeout(() => {
        expect(page_ID__Set).toHaveBeenCalled();
    }, 500);
});
