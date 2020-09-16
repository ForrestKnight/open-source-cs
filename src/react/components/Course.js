/* Packages */
import React from 'react';


/* Component */
export class Course extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <a 
                className="Course"
                href={this.props.name.link}    
            >
                <h3>{this.props.name.text}</h3>
            
                <p className="Course__school">
                    School: <mark>{this.props.school}</mark>
                </p>

                <p className="Course__duration">
                    Duration: <mark>{this.props.duration} weeks</mark>
                </p>

                <p className="Course__effort">
                    Effort: <mark>{this.props.effort} hours/week</mark>
                </p>

                <p className="Course__frequency">
                    Frequency: <mark>{this.props.frequency}</mark>
                </p>

                {this.props.prerequisites &&
                    <div className="Course__prerequisites">
                        Prereq{this.props.prerequisites.length > 1 && 's'}: 
                        {this.props.prerequisites.map((prereq) => (
                            <mark>
                                {prereq}
                            </mark>
                        ))}
                    </div>
                }
            </a>
        );
    }
}


export default Course;