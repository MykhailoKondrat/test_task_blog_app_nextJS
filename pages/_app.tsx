import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import styled from 'styled-components';
import store from '../redux/store';
// import { fetchPosts } from '../redux/mainSlice';

const MyApp = ({ Component, pageProps }): ReactElement => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
//
// if use func below we will get fresh data from server  every
// page change.
//
// MyApp.getInitialProps = async (appContext) => {
//   const reduxStore = store;
//   const { dispatch } = reduxStore;
//   const result = await dispatch(fetchPosts());
//   const pageProps = result.payload.data;
//   return { pageProps };
// };
