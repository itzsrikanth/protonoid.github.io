import React from 'react';
import Head from 'next/head';
import { withRouter } from 'next/router';

import '../global.scss';

class Article extends React.Component {
    static async getInitialProps(req) {
        return {
            query: req.query.content
        };
    }

    render() {
        const { body, attributes } = this.props.router.query;
        return (
            <>
                <Head>
                    <title>{ attributes.title }</title>
                    <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div dangerouslySetInnerHTML={{ __html: body }}></div>
            </>
        );
    }
}

export default withRouter(Article);
