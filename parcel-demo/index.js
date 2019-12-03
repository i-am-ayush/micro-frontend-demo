import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'antd/dist/antd.min.css';
import './index.css'


export async function bootstrap() {
  console.log('react app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  ReactDOM.render(<App/>, document.getElementById('parcel'));
}

export async function unmount() {
  ReactDOM.unmountComponentAtNode(document.getElementById('parcel'));
}
ReactDOM.render(<App/>, document.getElementById('parcel'));