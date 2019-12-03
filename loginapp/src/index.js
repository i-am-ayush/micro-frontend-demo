import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export async function bootstrap() {
    console.log('react app bootstraped');
  }
  
  export async function mount(props) {
   const obj = props;
   var key=obj['auth-id'];
    console.log('props from main framework', props);
    //console.log(props.obj.auth-id);
    console.log("defghi");
    
    ReactDOM.render(<App key1={key}/>, document.getElementById('root3'));
  
  }
  
  export async function unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('root3'));
  }
  //ReactDOM.render(<App/>, document.getElementById('root2'));
 // ReactDOM.render(<App/>, document.getElementById('root2'));
 ReactDOM.render(<App/>, document.getElementById('root3'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
