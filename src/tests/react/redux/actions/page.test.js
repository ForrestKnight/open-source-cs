/* Actions */
import {page_ID__Set} from '../../../../react/redux/actions/page';


/* Tests */
test('page_ID__Set action', () => {
    const action = page_ID__Set();

    expect(action).toEqual({
        type: 'PAGE_ID__SET'
    });
});