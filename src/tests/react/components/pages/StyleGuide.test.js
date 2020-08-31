/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {StyleGuide} from '../../../../react/components/pages/StyleGuide';


/* Test Config */
let component, page_ID__Set;
beforeEach(() => {
    page_ID__Set = jest.fn();
    component = shallow(
        <StyleGuide
            page_ID__Set={page_ID__Set}
        />
    );
});


/* Tests */
test('Render StyleGuide page', () => {
    expect(component).toMatchSnapshot();
});


test('Page_ID__Set function', () => {
    setTimeout(() => {
        expect(page_ID__Set).toHaveBeenCalled();
    }, 500);
});
