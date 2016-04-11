import React, { Component, PropTypes } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import Header from '../Header';
import SideNavigation from '../SideNavigation';
import Feedback from '../Feedback';
import Footer from '../Footer';
import { createStore, renderDevTools } from '../../store_enhancers/devTools';
import * as reducers from '../../reducers';

const reducer = combineReducers(reducers);
const store = createStore(reducer);

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
    };
  }

  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        <SideNavigation />
        <Provider store={store}>
          {this.props.children}
        </Provider>
        <Feedback />
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
