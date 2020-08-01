

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import FinalJSApp from './App';



ReactDOM.render(
  <FinalJSApp />,
  document.getElementById('root')
);





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// let reRenderEntireTree = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App />
//         {/* <App 
//       state={state} 
//       dispatch={store.dispatch.bind(store)}       Это было до npm react-redux           
//       store = {store}
//       /> */}
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// reRenderEntireTree(store.getState());
// store.subscribe(() => {
//   let state = store.getState();               
//   reRenderEntireTree(state);
// });