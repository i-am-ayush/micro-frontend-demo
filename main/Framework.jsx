/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React from 'react';
import style from './index.less';
import SideNavPage from './SideNavPage';
import './styles.css';

//import Sidebar from './Sidebar';

export default function Framework(props) {


const { content, loading } = props;

  function goto(title, href) {
    window.history.pushState({}, title, href);
  }

  function setInterval() {
    window.setInterval(() => {
      console.log('master interval');
    }, 1000);
  }

  return (
    
    <>
    <header className={style.header}>
        
         <nav>
           
             {/* <li><a onClick={() => goto('home', '/')}>home</a></li>
             <li><a onClick={() => goto('react app', '/react')}>react16 + antd3</a></li>
             <li><a onClick={() => goto('react15 app', '/15react15')}>react15 + antd2</a></li> */}
              
             
             <div style={{border: "1px solid green",width:"100px",backgroundColor:"white"}}><a onClick={() => goto('tryout1 app', '/18react18')}>Bike-Mania</a></div>
           
             <div style={{border: "1px solid green",width:"100px",marginTop:"10px",backgroundColor:"white"}}><a onClick={() => goto('tryout1-reactpp-1 app', '/19react19')}>Login page</a></div>
             <div style={{border: "1px solid green",width:"100px",marginTop:"10px",backgroundColor:"white"}}><a onClick={() => goto('parcel-demo app', '/16react16')}> demo app</a></div>
           
   
         </nav> 
      </header> 
       {loading ? <div></div> : null}
      <div dangerouslySetInnerHTML={{ __html: content }}/>
    </>

  );
}
