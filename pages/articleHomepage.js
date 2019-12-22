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

    findChildCategories(catMap, origUrl, fullUrl) {
        const topLevel = /^\/[^\/]+\//.exec(origUrl)[0];
        const bottomLevel = /\/[^\/]+\/$/.exec(origUrl)[0];
        fullUrl += topLevel;
        if (catMap[bottomLevel]) {
            return Object.keys(catMap[bottomLevel].children)
                .map(value => `${fullUrl}${value}`.replace(/\/{2,}/, '/'));
        } else {
            return this.findChildCategories(
                catMap[topLevel],
                origUrl.replace(topLevel, '/')
            );
        }
    }

    render() {
        let i;
        const links = [];
        const slug = this.props.router.asPath.replace(/^\/blogs\/articles/, '');
        const categories = slug
            ? this.findChildCategories(
                catMap, slug, ''
            )
            : this.props.categories;
        for(i = 0; i < categories.length; i++) {
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
