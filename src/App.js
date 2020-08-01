import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Suspense fallback={<Preloader />}>
            <Route path="/profile/:userId?">
              <ProfileContainer />
              {/* <ProfileContainer store={props.store} /> */}
            </Route>
            <Route path="/dialogs">
              <DialogsContainer />
              {/* <DialogsContainer store={props.store}/> */}
            </Route>
          </Suspense>
          <Route path="/users">
            <UsersContainer />

            {/* <UsersContainer store={props.store} /> */}

          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route pasth = "/news" component = {News} />
        <Route pasth = "/music" component = {Music} />
        <Route pasth = "/settings" component = {Settings} /> */}
        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  }
}
////92-ое видео
// export default compose (
//   withRouter,
//   connect(mapStateToProps, {initializeApp}),  
//   )(App)

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }),
)(App)

const FinalJSApp = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

export default FinalJSApp;