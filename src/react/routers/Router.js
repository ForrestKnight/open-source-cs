/* Packages */
import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


/* Components */
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


/* Pages/Routes */
import Home from '../components/pages/Home';
import CSBasics from '../components/pages/CSBasics';
import Programming from '../components/pages/Programming';
import Math from '../components/pages/Math';
import Systems from '../components/pages/Systems';
import Theory from '../components/pages/Theory';
import Applications from '../components/pages/Applications';
import Unix from '../components/pages/Unix';
import Wildcard from '../components/pages/Wildcard';


/* Router */
export class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            loading: false
        };
    };


    componentWillMount() {
        const $pageLoader = document.querySelector('.page-loader');

        // Disable loader
        if ($pageLoader) {
            $pageLoader.setAttribute('data-loading', true);
            this.setState({
                loading: true
            });
        };

        // Fade in React app
        setTimeout(() => {
            $pageLoader.setAttribute('data-loaded', true);
            this.setState({
                loaded: true
            });
        }, 300);
    };


    render() {
        return (
            <BrowserRouter>
                <div 
                    id="Router"
                    data-page_ID={this.props.page_ID}
                    data-loading={this.state.loading}
                    data-loaded={this.state.loaded}
                >
                    <Header />

                    <Switch>
                        <Route 
                            path="/"
                            component={Home}
                            exact
                        />

                        <Route 
                            path="/cs-basics"
                            component={CSBasics}
                            exact
                        />

                        <Route 
                            path="/programming"
                            component={Programming}
                            exact
                        />

                        <Route 
                            path="/math"
                            component={Math}
                            exact
                        />

                        <Route 
                            path="/systems"
                            component={Systems}
                            exact
                        />

                        <Route 
                            path="/theory"
                            component={Theory}
                            exact
                        />

                        <Route 
                            path="/applications"
                            component={Applications}
                            exact
                        />

                        <Route 
                            path="/unix"
                            component={Unix}
                            exact
                        />

                        <Route 
                            path="/*"
                            component={Wildcard}
                        />
                    </Switch>

                    <Footer />
                </div>
            </BrowserRouter>
        );
    };
};


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        page_ID: state.page.id
    };
};


export default connect(mapStateToProps, undefined)(Router);