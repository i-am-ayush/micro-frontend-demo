import React from 'react';
import { slide as Menu } from 'react-burger-menu';
function goto(title, href) {
  window.history.pushState({}, title, href);
}
export default props => {
  return (
    <Menu {...props}>
    <a className="menu-item" onClick={() => goto('tryout1-reactpp-1 app', '/19react19')}>tryout-react-app</a>


    <a className="menu-item"onClick={() => goto('parcel-demo app', '/16react16')}>parcel demo</a>
    <a className="menu-item" onClick={() => goto('tryout1 app', '/18react18')}>tryout1</a>

  
    </Menu>
  );
};