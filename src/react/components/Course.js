/* Packages */
import React from 'react';


/* Component */
export class Course extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="Course">
                <a 
                    className="Course__name"
                    href={this.props.name.link}
                >
                    <h3>{this.props.name.text}</h3>
                </a>

                <p className="Course__school">
                    {this.props.school}
                </p>

                <p className="Course__duration">
                    {this.props.duration} weeks
                </p>

                <p className="Course__effort">
                    {this.props.effort} hours/week
                </p>

                <p className="Course__frequency">
                    {this.props.frequency}
                </p>

                {this.props.prerequisites &&
                    <div className="Course__prerequisites">
                        <p>{this.props.prerequisites}</p>
                    </div>
                }
            </div>
        );
    }
}


export default Course;