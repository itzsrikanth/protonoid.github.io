import React from 'react';
import MenuButton from '../menu-button';
import './style.scss';

export default class Toolbar extends React.Component {
    clickHandler = e => {
        if (e.currentTarget.hasAttribute('data-disabled')) {
            e.currentTarget.removeAttribute('data-disabled');
        } else {
            e.currentTarget.setAttribute('data-disabled', true);
        }
    }
    render() {
        const iconAttrib = {
            color: 'grey',
            size: 'lg'
        };
        const rowGen = () => this.props.carrier().map((row, idx) => <div key={idx} className="d-flex">
            {row.map((group, idx) => <div key={idx} className="d-flex toolbar__button-group">
                {group.map((btn, idx, arr) => {
                    let extn = 'toolbar__button-holder';
                    switch (idx) {
                        case 0: extn += '--left'; break;
                        case arr.length - 1: extn += '--right'; break;
                        default: break;
                    }
                    return <button key={idx} data-disabled={btn.enabled}
                        onClick={() => this.props.sendBack(btn.id)}
                        className={extn + ' py-1 px-2'}>
                        <MenuButton iconAttrib={{ ...iconAttrib, icon: btn.icon }} />
                    </button>;
                })}
            </div>)}
        </div>);

        return <header className="toolbar p-3 m-4 d-flex align-items-center justify-content-around flex-column">
            {rowGen()}
        </header>;
    }
}
