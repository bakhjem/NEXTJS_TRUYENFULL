import Document, { Head, Main, NextScript } from 'next/document'
// import classes from '../Css/style.css';
import { GA_TRACKING_ID } from '../lib/gtag';
import Helmet from 'react-helmet'


export default class MyDocument extends Document {
  //  static async getInitialProps(ctx) {
  //    const initialProps = await Document.getInitialProps(ctx)
  //    return { ...initialProps }
  //  }
  static async getInitialProps(...args) {
    const documentProps = await super.getInitialProps(...args)
    // see https://github.com/nfl/react-helmet#server-usage for more information
    // 'head' was occupied by 'renderPage().head', we cannot use it
    return { ...documentProps, helmet: Helmet.renderStatic() }
  }

  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  render() {
    return (
      <html lang="vi" {...this.helmetHtmlAttrComponents}>
        <Head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# book: http://ogp.me/ns/book# profile: http://ogp.me/ns/profile#">
          <meta charset="UTF-8" />
          <meta property="fb:app_id" content="443221833523973"></meta>
          <meta property="og:site_name" content="Truyện NT"></meta>
          <meta property="og:type" content="book"></meta>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;700;900&amp;display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&amp;display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Gentium+Book+Basic:wght@400;700&amp;display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&amp;display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Rubik:wght@500;700&amp;display=swap" rel="stylesheet" /><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&amp;display=swap" rel="stylesheet" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `
            }}
          />
          {this.helmetHeadComponents}
        </Head>
        <body {...this.helmetBodyAttrComponents}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}