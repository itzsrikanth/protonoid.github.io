import React from 'react';
import { withRouter } from 'next/router';

import Layout from '../components/layout';

class App extends React.Component {
    render() {
        const body = (
            <div className="container">
                <h1>Hello, World..!!</h1>
            </div>
        );
        return (
            <>
                <Layout attrib={{title: 'Welcome to Protonoid'}} body={body}></Layout>
            </>
        );
    }
}

export default withRouter(App);
