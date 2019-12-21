import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import '../global.scss';

class Articles extends React.Component {
    static async getInitialProps(req) {
        return {
            articles: Object.keys(req.query).map(key => req.query[key])
        };
    }
    render() {
        let i, links = [];
        for(i = 0; i < this.props.articles.length; i++) {
            links.push(
                <li key={i}>
                    <Link href={`/blogs/articles${this.props.articles[i].location}`}>
                        <a>{this.props.articles[i].markdown.attributes.title}</a>
                    </Link>
                </li>
            );
        }
        return (
            <>
                <h1>Article Homepage</h1>
                <Link href="/"><a>Go Home</a></Link>
                <ul>
                    { links }
                </ul>
            </>
        );
    }
}

export default withRouter(Articles);
