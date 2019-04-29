import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'
import { Provider } from 'react-redux'
import withShopify from '../lib/shopify'
import Header from '../components/Header'
import Footer from '../components/Footer'
import withRedux from 'next-redux-wrapper'
import { makeStore } from '../lib/redux'

class MyApp extends App {
  constructor (props) {
    super(props)
    this.state = { routerLoading: false }
  }

  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount () {
    const self = this
    Router.events.on('routeChangeStart', () => self.setState({ routerLoading: true }))
    Router.events.on('routeChangeComplete', () => self.setState({ routerLoading: false }))
    Router.events.on('routeChangeError', () => self.setState({ routerLoading: false }))
  }

  render () {
    const { Component, pageProps, store } = this.props
    const { routerLoading } = this.state

    return (
      <Container>
        <Provider store={store}>
          <div style={{ display: 'flex' }}>
            <Header loading={routerLoading} />
            <div style={{ marginLeft: '6em' }}>
              <Component {...pageProps} />
            </div>
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(MyApp)
