import { compose, withState } from 'recompose'
import { Formik } from 'formik'

const Form89 = props =>
 <Formik
    initialValues={{ name: '', email: '', job: ''}}
    {...props}
  >
    {({ handleSubmit, handleChange, handleBlur, values, error, isSubmitting }) =>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type='text'
          name='name'
          value={values && values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={error && error.name && 'error'}
        />
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
        padding: 2em;
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

