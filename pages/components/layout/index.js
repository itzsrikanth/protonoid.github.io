
import React from 'react';

import Header from '../header';
import Footer from '../footer';

import '../../styles/global.scss';
import './style.scss';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header attrib={this.props.attrib}></Header>
                <div className="container proto-main">{this.props.body}</div>
                <Footer></Footer>
            </>
        );
    }
}

export default Layout;
