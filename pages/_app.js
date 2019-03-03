import App, {Container} from 'next/app'

import Masthead from '/components/struct/Masthead'
import MessengerChat from '/components/home/MessengerChat'
import Footer from  '/components/struct/Footer'

class MyApp extends App {
  render () {
    const {Component, pageProps, store, router} = this.props
    return (
      <Container>
        <Masthead showSmall={router.pathname !== '/'} />
        <Component {...pageProps} />
        <Footer />
      </Container>
    )
  }
}

export default MyApp
