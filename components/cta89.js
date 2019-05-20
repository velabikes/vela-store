import { compose, withState } from 'recompose'
import { Formik } from 'formik'

const Form89 = props =>
 <Formik
    initialValues={{ name: '', email: '', job: ''}}
    {...props}
  >
    {({ handleSubmit, handleChange, handleBlur, values, error, isSubmitting }) =>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>Nome</label>
          <input
            type='text'
            name='name'
            value={values && values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={error && error.name && 'error'}
          />
        <fieldset>
        <label>Email</label>
        <input
          type='text'
          name='email'
          value={values && values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error && error.email && 'error'}
        />
        <label>Profissão</label>
        <input
          type='text'
          name='job'
          value={values && values.job}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error && error.job && 'error'}
        />
        <button type='submit' disabled={isSubmitting}>
          Enviar
        </button>
      </form>
    }
  </Formik>

const Modal89 = ({ visible, onCloseClick }) =>
  <div className='modal89' onClick={e => { if (e.target === e.currentTarget) onCloseClick()}}>
    <div className='content'>
      <h2>Promoção Velabikes 89fm</h2>
      <div>Preencha os dados indicados</div>
      <br />
      <Form89 />
      <p><small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </small></p>
    </div>
    <style jsx>{`
      .modal89 {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${visible ? '1' : '0'};
        pointer-events: ${visible ? 'all' : 'none'};
        z-index: 99999;
      }
      .content {
        padding: 2em;
        background: white;
        max-width: 340px;
        max-height: 70vh;
        overflow-y: scroll;
      }
    `}</style>
  </div>

const Cta89 = ({ modalVisible, setModalVisible }) =>
  <div>
    <Modal89 visible={modalVisible} onCloseClick={() => setModalVisible(false)} />
    <span onClick={() => setModalVisible(!modalVisible)}><img src="https://www.radiorock.com.br/assets/img/bot2.svg" /></span>
    <style jsx>{`
      span {
        background: white;
        display: block;
        width: 65px;
        height: 65px;
        border-radius: 100px;
        box-shadow: 0 0px 1px 0 rgba(0,0,0,0.16), 0 0px 10px 0 rgba(0,0,0,0.12);
      }
    `}</style>
  </div>

export default compose(
  withState('modalVisible', 'setModalVisible', false)
)(Cta89)

