import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux'
import { Provider } from 'react-redux'

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FontLight';
    src: url('./static/fonts/HKGrotesk-Light.ttf') format('opentype');
  }
  @font-face {
    font-family: 'FontRegular';
    src: url('./static/fonts/HKGrotesk-Regular.ttf') format('opentype');
  }
  body {
    font-family: FontRegular;
    margin: 0;
  }

  a {
    color: #0070f3;
    text-decoration: none;
    font-family: fontRegular;
    font-weight: 400;
    transition: 0.3s;

    &:hover {
      color: #65d2e9;
    }
  }

  .dark {
    color: white;
  }

  // center slider images
  .slick-initialized .slick-track {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    primaryHover: '#65d2e9'
  }
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </Container>
      </Fragment>
    );
  }
}

export default withRedux(initStore, { debug: true })(MyApp);
