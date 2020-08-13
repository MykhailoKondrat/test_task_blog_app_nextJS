import { Provider } from "react-redux";
import { ReactElement } from "react";
import initStore from "../redux/store";
import { fetchPosts } from "../redux/mainSlice";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  const store = initStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

MyApp.getInitialProps = async () => {
  const reduxStore = initStore([]);
  const { dispatch } = reduxStore;
  const result = await dispatch(fetchPosts());
  const pageProps = result.payload.data;
  return { pageProps };
};
