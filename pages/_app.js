import React from 'react'
import App, { Container } from 'next/app'
import Router, { withRouter } from 'next/router'
import { compose } from 'recompose'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ApolloProvider } from 'react-apollo'
import { PersistGate } from 'redux-persist/integration/react'
import withShopify from '../lib/shopify'
import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { makeStore } from '../lib/redux'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store, apollo } = this.props

    return (
      <Container>
        <Head />
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
