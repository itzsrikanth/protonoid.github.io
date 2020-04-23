import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss';

export default class MenuButton extends React.Component {
    render() {
        return <FontAwesomeIcon {...this.props.iconAttrib} />;
    }
}
