/**
 * @author Kuitos
 * @since 2019-05-16
 */

import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
// import Vue from 'vue';
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import Framework from './Framework';
import data from './data'
// import Framework from './Framework.vue';

// let app = null;

function render({ appContent, loading }) {
  /*
  examples for vue
   */
  // if (!app) {
  //   app = new Vue({
  //     el: '#container',
  //     data() {
  //       return {
  //         content: appContent,
  //         loading,
  //       };
  //     },
  //     render(h) {
  //       return h(Framework, {
  //         props: {
  //           content: this.content,
  //           loading: this.loading,
  //         },
  //       });
  //     },
  //   });
  // } else {
  //   app.content = appContent;
  //   app.loading = loading;
  // }

  const container = document.getElementById('container');
  console.log("cde")
  ReactDOM.render(<Framework loading={loading} content={appContent} />, container);
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

// var obj={
//   "auth-id" : 1234
// }
var entryObj=data.appList.map(function(x){
    x["activeRule"] =  genActiveRule(x["activeRule"]) 
    x = {...x, render}
    return x
  })
// var xy=[{ name: 'tryout1 app', entry: '//localhost:7112', render, activeRule: genActiveRule('/18react18') }];
// console.log(entryObj)
  
render({ loading: true });

// support custom fetch see: https://github.com/kuitos/import-html-entry/blob/91d542e936a74408c6c8cd1c9eebc5a9f83a8dc0/src/index.js#L163
const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });
 // console.log({ name: 'tryout1 app', entry: '//localhost:7112', render, activeRule: genActiveRule('/18react18') })
registerMicroApps(
  //[
  //   // { name: 'react app', entry: '//localhost:7100', render, activeRule: genActiveRule('/react') },
  //   // { name: 'react15 app', entry: '//localhost:7102', render, activeRule: genActiveRule('/15react15') },
  //   // { name: 'vue app', entry: '//localhost:7101', render, activeRule: genActiveRule('/vue') },
  //   //  { name: 'parcel-demo app', entry: '//localhost:7107', render, activeRule: genActiveRule('/16react16') },
 // { name: 'tryout1 app', entry: '//localhost:7112', render, activeRule: genActiveRule('/18react18') },
   // { name: 'tryout-reactapp-1 app', entry: '//localhost:7113', render, activeRule: genActiveRule('/19react19'),props: {obj}},
//],
   entryObj,
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      },
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      },
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  },
);

//setDefaultMountApp('/react');
runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true, fetch: request });
