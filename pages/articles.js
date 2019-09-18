import React from 'react';
import { withRouter } from 'next/router';

import '../global.scss';

class Article extends React.Component {
    static async getInitialProps(req) {
        return {
            query: req.query.content
        };
    }

    render() {
        const { body } = this.props.router.query;
        return (
            <div dangerouslySetInnerHTML={{ __html: body }}></div>
        );
    }
}

export default withRouter(Article);
