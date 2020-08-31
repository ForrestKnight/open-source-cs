/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Components */
import Description from '../sections/Description';
import CSBasics from '../sections/CSBasics';
import Programming from '../sections/Programming';
import Math from '../sections/Math';
import Systems from '../sections/Systems';
import Theory from '../sections/Theory';
import Applications from '../sections/Applications';
import Unix from '../sections/Unix';


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
                <CSBasics />
                <Programming />
                <Math />
                <Systems />
                <Theory />
                <Applications />
                <Unix />
            </div>
        );
    }
}


export default Home;