import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';

import '../global.scss';

class App extends React.Component {
    render() {
        return (
            <>
                <h1>Hello, World..!!</h1>
                <Link href="/blogs"><a>Blogs</a></Link>
            </>
        );
    }
}

export default withRouter(App);
