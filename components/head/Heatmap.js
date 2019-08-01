import React from 'react'
import Head from 'next/head'

const Heatmap = () =>
  <Head>
    <script dangerouslySetInnerHTML={{ __html: `
      (function(h,e,a,t,m,p) {
      m=e.createElement(a);m.async=!0;m.src=t;
      p=e.getElementsByTagName(a)[0];p.parentNode.insertBefore(m,p);
      })(window,document,‘script’,’https://u.heatmap.it/log.js');`
    }} />
  </Head>

export default Heatmap
