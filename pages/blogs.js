import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import Layout from '../components/layout';

class Blogs extends React.Component {
    render() {
        const body = (
            <>
                <h1>Articles</h1>
                <Link href="/blogs/articles"><a>Click here</a></Link>
            </>
        );
        return <Layout attrib={{title: 'Blog pages'}} body={body}></Layout>
    }
}

export default withRouter(Blogs);
