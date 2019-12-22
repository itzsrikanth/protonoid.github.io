
import React from 'react';

import Header from '../header';
import Footer from '../footer';

import '../../global.scss';

class Layout extends React.Component {
    render() {
        return (
            <>
                <Header attrib={this.props.attrib}></Header>
                <div className="container">{this.props.body}</div>
                <Footer></Footer>
            </>
        );
    }
}

export default Layout;
