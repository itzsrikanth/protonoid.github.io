import React from 'react';
import dynamic from 'next/dynamic';
import { withRouter } from 'next/router';

class Article extends React.Component {
    static async getInitialProps(req) {
        console.log(req.query);
        // const mdxDoc = await import('../content/index.mdx');
        // const MdxDoc = await import('../' + req.query.mdx);
        console.log('mdxdoc', `../${req.query.mdx}`);
        return {
            query: req.query,
            // MdxDoc
        };
    }

    render() {
        console.log(this.props.query);
        return (
            <div>
                <p>Checkmate ..!</p>
                {/* <div dangerouslySetInnerHTML={{ __html: this.props.MdxDoc.html }}></div> */}
            </div>
        );
    }
}

export default withRouter(Article);
