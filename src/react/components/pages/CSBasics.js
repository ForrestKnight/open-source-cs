/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Components */
import CourseSection from '../sections/CourseSection';


/* Data */
import CSBasicsCourses from '../../data/CSBasicsCourses';


/* Component */
export class CSBasics extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.page_ID__Set('CSBasics');
    }


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    }


    render() {
        return (
            <div id="CSBasics" className="page">
                <CourseSection 
                    name="CS Basics"
                    courses={CSBasicsCourses}
                />
            </div>
        );
    }
}


/* Connect to store */
const mapDispatchToProps = (dispatch) => ({
    page_ID__Set: (id) => {
        dispatch(page_ID__Set(id));
    }
});


export default connect(undefined, mapDispatchToProps)(CSBasics);