
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import './style.scss';

class Header extends React.Component {
    render() {
        const metaData = [];
        if (this.props.attrib.title) {
            metaData.push(
                <title>{this.props.attrib.title}</title>
            );
        }
        if (this.props.attrib.description) {
            metaData.push(
                <meta name="description" content={this.props.attrib.description} />
            );
        }
        return (
            <>
                <Head>
                    {metaData}
                    <meta charset="utf-8" />
                    <meta name="viewport" key="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                </Head>
                <nav className="d-flex align-items-center">
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
