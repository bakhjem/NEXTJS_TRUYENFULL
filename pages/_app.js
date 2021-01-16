import App from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux';
import NProgress from 'nprogress'
import 'semantic-ui-css/semantic.min.css'
import * as gtag from '../lib/gtag'
import { store } from '../redux/store';
// import "nprogress/nprogress.css";
import 'antd/dist/antd.css';
import NextNprogress from 'nextjs-progressbar';

Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', url => gtag.pageview(url))

class MyApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }
  // static async getInitialProps({ Component, ctx }) {
  //     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  //     //Anything returned here can be accessed by the client
  //     return { pageProps: pageProps };
  // }
  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps, } = this.props;

    return (
      <Provider store={store}>
        <NextNprogress
          color="#29D"
          options={{ easing: 'ease', speed: 500 }}
          startPosition={0.3}
          stopDelayMs={200}
          height="10"
        />
        <Component {...pageProps} />
      </Provider>
    );
  }

}

//withRedux wrapper that passes the store to the App Component
export default (MyApp);
// export default App