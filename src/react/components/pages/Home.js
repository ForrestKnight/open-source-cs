/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Components */
import Description from '../sections/Description';
import CourseSection from '../sections/CourseSection';


/* Data */
import CSBasicsCourses from '../../data/CSBasicsCourses';
import ProgrammingCourses from '../../data/ProgrammingCourses';
import MathCourses from '../../data/MathCourses';
import SystemsCourses from '../../data/SystemsCourses';


/* Component */
export class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        this.page_ID__Set('Home');
    }


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    }


    render() {
        return (
            <div id="Home" className="Home">
                <Description />
                
                <CourseSection 
                    name="CS Basics"
                    courses={CSBasicsCourses}
                />

                <CourseSection 
                    name="Programming"
                    courses={ProgrammingCourses}
                />

                <CourseSection 
                    name="Math"
                    courses={MathCourses}
                />

                <CourseSection 
                    name="Systems"
                    courses={SystemsCourses}
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


export default connect(undefined, mapDispatchToProps)(Home);