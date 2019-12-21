import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import '../global.scss';

class Blogs extends React.Component {
    render() {
        return (
            <>
                <h1>Articles</h1>
                <Link href="/blogs/articles"><a>Click here</a></Link>
            </>
        );
    }
}

export default withRouter(Blogs);
