import React, { useState } from 'react';
// import { Editor, EditorState, RichUtils } from 'draft-js';
// import { createEditor, Transforms } from 'slate';
// import { Slate, Editable, withReact } from 'slate-react';
// import AceEditor from 'react-ace';
// import 'ace-builds/src-noconflict/mode-java';
// import 'ace-builds/src-noconflict/theme-github';
import './style.scss';

/**
 * https://github.com/ianstormtaylor/slate/pull/3472#issuecomment-609359538
 * @param {*} editor 
 const withNewline = editor => {
     editor.insertData = data => {
         const text = data.getData('text/plain');
         if (text) {
             const lines = text.split(/\r\n|\r|\n/);
             let split = false;
             for (const line of lines) {
                 if (split) {
                     Transforms.splitNodes(editor, { always: true });
                    }
                    Transforms.insertText(editor, line);
                    split = true;
                }
            }
        };
        return editor;
    };
*/

const App = () => {
    // const [value, setValue] = useState();
    return (
        <div className="editor mx-4 mb-4">
            {/* <AceEditor
                mode='java'
                theme='github'
                name='editor__ace'
                height='100%'
                width='100%'
                value={value}
                wrapEnabled={true}
                onChange={event => {
                    console.log(event, value);
                    setValue('godzilla')
                    console.log(value);
                }}
                editorProps={{ $blockScrolling: true }}
            /> */}
        </div>
    )
}

// const App = () => {
//     const editor = React.useMemo(() => withNewline(
//         withReact(createEditor())
//     ), []);
//     const [value, setValue] = React.useState([
//         {
//             type: 'paragraph',
//             children: [{ text: 'A' }],
//         },
//     ]);
//     return (
//         <div className="editor mx-4 mb-4">
//             <Slate editor={editor} value={value} onChange={value => setValue(value)}>
//                 <Editable />
//             </Slate>
//         </div>
//     )
// }
export default App;

// export default class EditorContainer extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             editorState: EditorState.createEmpty()
//         };
//         this.onChange = editorState => this.setState({ editorState });
//     }

//     handleKeyCommand = command => {
//         const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
//         if (newState) {
//             this.onChange(command);
//             console.log('handled');
//             return 'handled';
//         }
//         console.log('not');
//         return 'not-handled';
//     }

//     render() {
//         return <div className="editor mx-4 mb-4">
//             <Editor editorState={this.state.editorState}
//                 // handleKeyCommand={this.handleKeyCommand}
//                 onChange={this.onChange} />
//         </div>;
//     }
// }
