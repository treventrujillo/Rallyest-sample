import React from 'react';
import ReactDOM from 'react-dom';
import AppEntry from './components/AppEntry';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';
import { injectGlobal } from 'styled-components';


// eslint-disable-next-line
injectGlobal`
body{
  margin:0px;
  padding: 0px,
  margin: 0px;
  background-color: #e1e6e7;
}
#wrap {
  width: 100%;
  height: auto;
  display: flex;
  /*display: -ms-flexbox;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;
  -ms-flex-direction: row;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;*/
}
#side-bar-left {
  width: 15%;
  -ms-flex: 0 150px;
  -webkit-box-flex:  0;
  -moz-box-flex:  0;
  -ms-box-flex:  0;
  box-flex:  0;  
}
#contents-left {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 15%;
  overflow: hidden;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
}
#overlay {
  width: 15%;
  height: 0px;
  background-color: rgba(56, 56, 56, 0.7);
}
#hero {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("img/swirl_pattern.png");
  background-attachment: fixed;
}

#hero-overlay {
  min-height: 70px;
  max-height: 70px;
  width: 100%;
  background-color: rgba(27, 188, 155, 0.8);
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center;
}
#project-one-container {
  width: 100%;
}
.test{
  width: 100%;
}
`


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppEntry/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
