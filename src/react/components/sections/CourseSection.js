/* Packages */
import React from 'react';
import Course from '../Course';


/* Component */
export class CourseSection extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <article id={this.props.name.replace(/\s/g, "")} className="CourseSection">
                <header className="CourseSection__header">
                    <h2>{this.props.name}</h2>
                </header>
                <section className="CourseSection__courses">
                    {this.props.coursees &&
                        this.props.courses.map((course) => (
                            <Course {...course} />
                        ))
                    }
                </section>
            </article>
        );
    }
}


export default CourseSection;