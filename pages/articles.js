import React from 'react';
import { withRouter } from 'next/router';

import Layout from './components/layout';

class Article extends React.Component {
    static async getInitialProps(req) {
        return {
            query: req.query.content
        };
    }

    render() {
        const { body, attributes } = this.props.router.query;
        const layoutBody = (
            <>
                <div id="proto-container" dangerouslySetInnerHTML={{ __html: body }}></div>
            </>
        );
        return (
            <Layout attrib={attributes} body={layoutBody}></Layout>
        );
    }
}

export default withRouter(Article);
