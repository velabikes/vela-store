import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { withRouter } from 'next/router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { makeStore } from '../lib/redux'
import { compose } from 'recompose'
import { PersistGate } from 'redux-persist/integration/react'
import withShopify from '../lib/shopify'
import { ApolloProvider } from 'react-apollo';

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store, apollo } = this.props

    return (
      <Container>
        <Provider store={store}>
          <ApolloProvider client={apollo}>
            <PersistGate loading={<div>loading</div>} persistor={store.__persistor}>
              <div style={{ display: 'flex' }}>
                <Header />
                <div style={{ marginLeft: '6em' }}>
                  <Component {...pageProps} />
                </div>
              </div>
            </PersistGate>
          </ApolloProvider>
        </Provider>
      </Container>
    )
  }
}

export default compose(
  withShopify,
  withRouter,
  withRedux(makeStore)
)(MyApp)
