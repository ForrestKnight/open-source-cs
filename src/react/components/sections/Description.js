/* Packages */
import React from 'react';


/* Component */
export class Description extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="Description" className="Description">
                <h1 className="Description__title">
                    The Open Source Computer Science Degree
                </h1>

                <p className="Description__description">
                    This is a curated list of free courses from reputable universities like MIT, Stanford, and Princeton that satisfy the same requirements as an undergraduate Computer Science degree, minus general education.
                </p>
            </div>
        );
    }
}


export default Description;