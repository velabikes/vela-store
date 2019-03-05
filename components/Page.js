import Head from 'next/head'

const Page = (props) =>
  <div {...props}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>

export default Page
