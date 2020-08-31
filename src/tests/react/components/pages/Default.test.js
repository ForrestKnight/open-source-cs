/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Default} from '../../../../react/components/pages/Default';


/* Test Config */
let component, page_ID__Set;
beforeEach(() => {
    page_ID__Set = jest.fn();
    component = shallow(
        <Default 
            page_ID__Set={page_ID__Set}
        />
    );
});


/* Tests */
test('Render Default page', () => {
    expect(component).toMatchSnapshot();
});


test('Page_ID__Set function', () => {
    setTimeout(() => {
        expect(page_ID__Set).toHaveBeenCalled();
    }, 500);
});

