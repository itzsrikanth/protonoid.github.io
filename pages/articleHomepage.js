import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import '../global.scss';
import catMap from '../categoryMap.json';

class Articles extends React.Component {
    static async getInitialProps(req) {
        return {
            categories: Object.keys(req.query)
                .map(key => /^\/[^\/]+\//.exec(req.query[key].location)[0])
                .filter((value, index, self) => self.indexOf(value) === index)
        };
    }
    render() {
        let i; 
        const links = [];
        for(i = 0; i < this.props.categories.length; i++) {
            links.push(
                <li key={i}>
                    <Link href={`/blogs/articles${this.props.categories[i]}`}>
                        <a>{catMap[this.props.categories[i]].title}</a>
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
