
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import './style.scss';

class Header extends React.Component {
    render() {
        return (
            <>
                <Head>
                    <title>{this.props.attrib.title}</title>
                    <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <nav>
                    <div className="container">
                        <ul>
                            <li>
                                <Link href={'/blogs'}>
                                    <a>Blogs</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}

export default Header;
