import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export function createMessage(name) {
  if (name) {
    return `Hello, ${name}.`;
  } else {
    return '';
  }
}

function Message(props) {
  return <div>{createMessage(props.name)}</div>;
}

function Greeting() {
    const [text, setText] = useState('');
    const [name, setName] = useState('');

    return (
      <div>
        <div>
          Input your name: <input onChange={(e) => setText(e.target.value)}/>
          <button onClick={() => setName(text)}>OK</button>
        </div>
        <Message name={name} />
      </div>
    );
}


ReactDOM.render(<Greeting />, document.getElementById('root'));

