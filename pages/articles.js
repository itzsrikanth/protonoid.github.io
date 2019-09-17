import React from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';

class Article extends React.Component {
    static async getInitialProps(req) {
        return {
            query: req.query.content
        };
    }

    render() {
        const { body } = this.props.query;
        return (
            <div>
                <p>Checkmate ..!</p>
                <div dangerouslySetInnerHTML={{ __html: body }}></div>
            </div>
        );
    }
}

export default withRouter(Article);
