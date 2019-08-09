import React from 'react'
import Head from 'next/head'
import { compose, lifecycle } from 'recompose'

const Freshchat = () =>
  <Head>
    <script src='https://wchat.freshchat.com/js/widget.js' />>
  </Head>

const initWidget = () => {
  window.fcWidget.init({
    token: '12f717bd-d0db-4f9d-b288-e8e1e27e98c2',
    host: 'https://wchat.freshchat.com'
  })
}

export default compose(
  lifecycle({
    componentDidMount: () => setTimeout(initWidget, 3500)
  })
)(Freshchat)
