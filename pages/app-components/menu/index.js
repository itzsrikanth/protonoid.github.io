import React from 'react';
import { faKey, faAlignLeft, faCode, faPalette, faRandom, faColumns, faLockOpen, faCompressArrowsAlt, faCropAlt } from '@fortawesome/free-solid-svg-icons';
import MenuButton from '../menu-button';
import './style.scss';

export default class Menu extends React.Component {
    onHover = () => {

    }
    menuGen = icons => icons.map((iconMap, idx) =>
        <a key={idx} href="/"
            className="menu__button d-flex justify-content-start align-items-center">
            <div className="menu__background-effect"></div>
            <MenuButton iconAttrib={{
                icon: iconMap.icon,
                color: 'inherit',
                size: 'sm'
            }} />
            <span className="menu_button-title my-2 ml-3">{iconMap.title}</span>
        </a>
    );
    render() {
        const menuOptions = [];
        [
            {
                titleBreaker: 'crypto',
                options: [
                    {
                        icon: faKey,
                        title: 'base64'
                    }, {
                        icon: faLockOpen,
                        title: 'JWT'
                    }
                ]
            }, {
                titleBreaker: 'text',
                options: [
                    {
                        icon: faAlignLeft,
                        title: 'text transform'
                    }, {
                        icon: faRandom,
                        title: 'convertor'
                    }, {
                        icon: faColumns,
                        title: 'text comparator'
                    }
                ]
            }, {
                titleBreaker: 'coding',
                options: [
                    {
                        icon: faCode,
                        title: 'REPL'
                    }, {
                        icon: faRandom,
                        title: 'convertor'
                    }, {
                        icon: faPalette,
                        title: 'formatter'
                    }, {
                        icon: faColumns,
                        title: 'code comparator'
                    },
                    {
                        icon: faCompressArrowsAlt,
                        title: 'image compress'
                    }
                ]
            }, {
                titleBreaker: 'image processing',
                options: [
                    {
                        icon: faCropAlt,
                        title: 'crop image'
                    }
                ]
            }
        ].forEach((iconMap, idx) => {
            menuOptions.push(
                <div key={idx} className="menu__title-breaker mt-3 my-2">{iconMap.titleBreaker}</div>
            );
            menuOptions.push(
                this.menuGen(iconMap.options)
            );
        });
        return <nav className="menu d-flex flex-column">
            {menuOptions}
        </nav>;
    }
}
