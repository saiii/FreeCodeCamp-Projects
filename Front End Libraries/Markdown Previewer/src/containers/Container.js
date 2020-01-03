import React, { Component } from 'react';
import './Container.css';
import Editor from '../components/editor';
import Preview from '../components/preview';
import marked from 'marked';

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: placeholder,
            editor: false,
            previewer: false
        }
        this.textChangeHandler = this.textChangeHandler.bind(this)
        this.editorMaximizeHandler = this.editorMaximizeHandler.bind(this)
    }

    componentDidMount() {
        document.getElementById('preview').innerHTML = marked(this.state.markdown);
    }

    componentDidUpdate(prevProps, prevState) {
        document.getElementById('preview').innerHTML = marked(this.state.markdown);
    }

    textChangeHandler = (event) => {
        this.setState({markdown: event.target.value})
    }

    editorMaximizeHandler = () => {
        this.setState(state => ({editor: !state.editor}))
    }

    render() {
        return (
            <div className='Container'>
                <Editor id='edit' value={this.state.markdown} changed={this.textChangeHandler} clicked={this.editorMaximizeHandler}/>
                {console.log(this.state.editor)}
                <Preview id='preview'>{marked(this.state.markdown)}</Preview>
            </div>
        );
    };
};

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default Container;