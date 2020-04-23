import React from 'react';
import { faSpellCheck } from '@fortawesome/free-solid-svg-icons';
import Toolbar from './app-components/toolbar';
import Footer from './app-components/footer';
import Menu from './app-components/menu';
import EditorContainer from './app-components/editorContainer';
import './app-components/App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [[[
        {
          icon: faSpellCheck,
          tooltip: 'spell check',
          enabled: true,
          id: 'spell-check1'
        },
        {
          icon: faSpellCheck,
          tooltip: 'spell check',
          id: 'spell-check2'
        },
        {
          icon: faSpellCheck,
          tooltip: 'spell check',
          id: 'spell-check3'
        }
      ]]],
      options: {
        spellCheck: true,
        stripPastedStyles: false
      }
    };
  }

  passInfo = () => {
    return this.state.menuItems;
  }
  getClickId = (id) => {
    for (var i = 0; i < this.state.menuItems.length; i++) {
      for (var j = 0; j < this.state.menuItems[i].length; j++) {
        for (var k = 0; j < this.state.menuItems[i][j].length; k++) {
          if (this.state.menuItems[i][j][k].id === id) {
            console.log(id);
            return;
          };
        }
      }
    }
  }

  render() {
    return <>
      <Menu />
      <div className="d-flex flex-column layout">
        <Toolbar
          carrier={this.passInfo.bind(this)}
          sendBack={this.getClickId} />
        <div className="d-flex flex-row layout--remaining-height">
          <EditorContainer options={this.state.options} />
        </div>
        <Footer />
      </div>
    </>;
  }
}
