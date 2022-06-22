const HomeImage = () =>
  <div>
    <img src='https://drive.google.com/file/d/13xRsdD15NumDd2d3UA7gp0IsOo9YZYZd/view?usp=sharing' className='desktop' alt='Vela 2 - Vela Bikes' />
    <img src='https://drive.google.com/file/d/13xRsdD15NumDd2d3UA7gp0IsOo9YZYZd/view?usp=sharing' className='mobile' alt='Smartbike - Vela Bikes' />
    <style jsx>{`
      img {
        min-height: 50vh;
        object-fit: cover;
        object-position: right;
        width: 100%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: 0em;
          object-fit: cover;
          width: 98.9vw;
          height: calc(100vh - 3.5em);
          object-position: bottom-right;
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
      }
    }
  `}</style>
</div>

export default HomeImage
