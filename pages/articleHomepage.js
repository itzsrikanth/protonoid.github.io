import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../components/layout';

class Articles extends React.Component {

    static async getInitialProps(req) {
        return {
            categories: Object.keys(req.query)
                .map(key => req.query[key])
        };
    }

    render() {
        let i;
        const links = [];
        /**
         * The request comes in with `/blogs/articles` appended,
         * it is removed to follow the directory structure in this project
         */
        const slug = this.props.router.asPath.replace(/^\/blogs\/articles/, '');
        /**
         * `thisRouteValue` is initialized with a structured value to avoid
         * null check error in heading. Fallback title is mentioned there
         */
        let thisRouteValue = {
            markdown: {
                attributes: {}
            }
        };
        const categories = this.props.categories.filter(cat => {
            /**
             * this check is to remove current page being listed as its 
             * own sub-categories. Current URL details are collected into
             * `thisRouteValue`
             */
            const sanitySlug = /\/$/.test(slug) ? slug : `${slug}/`;
            const currentRouteCheck = cat.location === sanitySlug;
            if (currentRouteCheck) {
                thisRouteValue = cat;
            }
            const depth = cat.location
                .replace(sanitySlug, '')
                .replace(/\/$/, '')
                .split('/').length;
            /**
             * The conditions for filter are:
             * 1) it should start with current path
             * 2) it should not be full match for current path
             * 3) it should be just one step deeper, not more than that. More
             *      deeper paths should be nested as sub-sub-category.
             */
            return cat.location.startsWith(slug) && !currentRouteCheck && depth === 1;
        });
        for (i = 0; i < categories.length; i++) {
            links.push(
                <li className="col-md-3" key={i}>
                    <div>
                        <Link href={`/blogs/articles${categories[i].location}`}>
                            <a>{categories[i].markdown.attributes.title}</a>
                        </Link>
                    </div>
                </li>
            );
        }
        const firstFold = slug
            ? <div className="row">
                <div className="col-md-12" dangerouslySetInnerHTML={{ __html: thisRouteValue.markdown.body }}></div>
            </div>
            : <h1>Article Categories</h1>;
        const body = (
            <>
                {firstFold}
                <ul className="row">
                    {links}
                </ul>
            </>
        );
        return <Layout attrib={thisRouteValue.markdown.attributes} body={body}></Layout>
        // return body;
    }
}

export default withRouter(Articles);
