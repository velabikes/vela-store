import React from 'react'
import App from 'next/app'
import Router, { withRouter } from 'next/router'
import { compose } from 'recompose'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ApolloProvider } from 'react-apollo'
import withGA from 'next-ga'
// import LogRocket from 'logrocket'
import Progress from 'components/navigation/Progress'
import withShopify from '../lib/shopify'
import Head from '../components/Head'
import Header from '../components/Header'
import { makeStore } from '../lib/redux'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

    return { pageProps }
  }

  componentDidMount () {
    // LogRocket.init('rishga/vela-store')
  }

  render () {
    const { Component, pageProps, store, apollo, router } = this.props

    return (
      <>
        <Progress />
        <Head />
        <Provider store={store}>
          <ApolloProvider client={apollo}>
            <Header>
              <Component {...pageProps} key={router.route} />
            </Header>
          </ApolloProvider>
        </Provider>
      </>
    )
  }
}

export default compose(
  withShopify,
  withRouter,
  withGA('UA-62942263-12', Router),
  withRedux(makeStore)
)(MyApp)
