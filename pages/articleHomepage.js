import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import '../global.scss';

class Articles extends React.Component {

    static async getInitialProps(req) {
        return {
            categories: Object.keys(req.query)
                .map(key => req.query[key])
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
        const categories = this.props.categories.filter(cat => {
            return cat.location.startsWith(slug) &&
                cat.location.replace(/\/$/, '') !== slug.replace(/\/$/, '')
        });
        for(i = 0; i < categories.length; i++) {
            links.push(
                <li key={i}>
                    <Link href={`/blogs/articles${categories[i].location}`}>
                        <a>{categories[i].markdown.attributes.title}</a>
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
