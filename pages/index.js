import Page from '../components/Page'

const Home = () =>
  <Page>
    <img src='http://velabikes.com.br/themes/custom/velatheme/img/Banner-low-azul-60.jpg' />
    <style jsx>{`
      img {
        height: 100vh;
        object-fit: cover;
        width: 100%;
      }
    `}</style>
  </Page>

export default Home
