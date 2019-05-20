import { compose, withState } from 'recompose'

const Modal89 = ({ visible }) =>
  <div className='modal89'>
    <div className='content'>
      conteudo
    </div>
    <style jsx>{`
      .modal89 {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: red;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${visible ? '1' : '0'};
        pointer-events: none;
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
    <Modal89 visible={modalVisible} />
    <img src="" />
    <span onClick={() => setModalVisible(!modalVisible)}>89</span>
    <style jsx>{`
      span {
        background: green;
        padding: 2em;
        display: block;
      }
    `}</style>
  </div>

export default compose(
  withState('modalVisible', 'setModalVisible', false)
)(Cta89)

