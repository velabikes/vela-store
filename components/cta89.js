import { compose, withState } from 'recompose'
import { Formik } from 'formik'

const Reg89 = props =>
  <div>
<p>REGULAMENTO DA PROMO&Ccedil;&Atilde;O<br />
 <br />
Vela Bikes Com&eacute;rcio e Servi&ccedil;os de Bicicletas, pessoa jur&iacute;dica de direito privado com endere&ccedil;o na cidade de S&atilde;o Paulo, Capital, &agrave; Rua Cunha Gago 169, Pinheiros, CEP: 05421-000, inscrita no CNPJ/MF sob n&ordm;. 20.430.806/0001-27, doravante denominada simplesmente &ldquo;PROMOTORA&rdquo;, por seu representante legal, vem, por este instrumento, apresentar as condi&ccedil;&otilde;es (regulamento para o Concurso Cultural &ldquo;BIKE DO VENTURA&rdquo;), que esta empresa promove. A promo&ccedil;&atilde;o &eacute; volunt&aacute;ria e gratuita, n&atilde;o depende de qualquer modalidade de sorte ou &aacute;lea, de livre acesso a quem queira participar.<br />
 <br />
1. CONDI&Ccedil;&Otilde;ES PARA PARTICIPAR</p>

<p>1.1 A presente promo&ccedil;&atilde;o &eacute; aberta ao p&uacute;blico em geral, podendo participar as pessoas F&iacute;sicas, (residentes no estado de S&atilde;o Paulo), respeitados os termos e condi&ccedil;&otilde;es estabelecidas neste regulamento.<br />
 <br />
1.2 A participa&ccedil;&atilde;o no presente Concurso &eacute; volunt&aacute;ria, gratuita e implica na aceita&ccedil;&atilde;o total e irrestrita dos termos e condi&ccedil;&otilde;es do presente Regulamento.<br />
 <br />
1.3 &Eacute; vedada a participa&ccedil;&atilde;o de funcion&aacute;rios, bem como de seus familiares, da PROMOTORA, de empresas relacionadas, ou quaisquer pessoas diretamente envolvidas com esta promo&ccedil;&atilde;o.<br />
 <br />
1.4 O vencedor devem ter idade m&iacute;nima de 18 anos.<br />
 <br />
2. COMO PARTICIPAR<br />
2.1 Entre os dias 20/05/2019 &agrave; 21/06/2019 at&eacute; &agrave;s 23h59, os interessados em participar do presente Concurso poder&atilde;o entrar no link www.velabikes.com.br, onde preencher&atilde;o um formul&aacute;rio para fins de cadastramento com nome completo, data de nascimento, cidade, estado, telefone e e-mail. <br />
 <br />
2.1.2 Qualquer inscri&ccedil;&atilde;o realizada fora do per&iacute;odo disposto no item 2.1 acima estar&aacute; desclassificada e n&atilde;o participar&aacute; do presente Concurso.<br />
 <br />
2.1.3 A PROMOTORA se reserva o direito de desclassificar as inscri&ccedil;&otilde;es que n&atilde;o preencham os requisitos previstos nos itens anteriores ou em qualquer outra disposi&ccedil;&atilde;o deste Regulamento, independentemente de qualquer comunica&ccedil;&atilde;o pr&eacute;via.<br />
 <br />
2.2 A PROMOTORA reserva-se o direito de desclassificar e excluir os participantes cuja conduta demonstre estar manipulando a opera&ccedil;&atilde;o do Concurso, bem como os participantes que, tentarem fraudar ou burlar as regras estabelecidas neste Regulamento.<br />
 <br />
2.2.1 O participante ser&aacute; respons&aacute;vel pelo conte&uacute;do do texto enviado, sendo que a mesma dever&aacute; ser original e de autoria do respectivo participante.<br />
 <br />
2.3 Os formul&aacute;rios que n&atilde;o forem preenchidos com os dados completos, ou que forem incorretamente preenchidos, ou enviados incorretamente, ou que n&atilde;o permitirem a perfeita identifica&ccedil;&atilde;o e localiza&ccedil;&atilde;o dos participantes, ser&atilde;o eliminados para fins de premia&ccedil;&atilde;o. Os dados fornecidos pelo participante, no momento de sua inscri&ccedil;&atilde;o, dever&atilde;o ser corretos, claros, precisos, completos e apresentados de uma forma que permita a verifica&ccedil;&atilde;o de sua proced&ecirc;ncia e veracidade e autenticidade.<br />
 <br />
2.4 Uma Comiss&atilde;o Julgadora analisar&aacute; todas os textos efetivamente recebidos at&eacute; &agrave;s 23:59 horas do dia 21 de junho de 2019 e selecionar&aacute; um texto, classificando-o como vencedor, em primeiro do concurso. O resultado ser&aacute; divulgado no dia 25 de junho de 2019 no link www.radiorock.com.br. <br />
 <br />
2.4.1 N&atilde;o haver&aacute; possibilidade de empate, sendo que, no caso de haver mais de um texto id&ecirc;ntico, prevalecer&aacute; o texto que, cronologicamente, foi enviado primeiro.<br />
 <br />
2.4.2 Qualquer texto que, no entendimento da Comiss&atilde;o Julgadora e/ou organiza&ccedil;&atilde;o da promo&ccedil;&atilde;o, seja atentat&oacute;ria &agrave; intimidade, vida privada, honra e imagem de quaisquer pessoas f&iacute;sicas e/ou jur&iacute;dicas ser&aacute; eliminado da promo&ccedil;&atilde;o.<br />
 <br />
2.5 Os vencedores ser&atilde;o contatados mediante notifica&ccedil;&atilde;o enviada por telefone ou por e-mail, dentro do prazo de 48 (quarenta e oito) horas ap&oacute;s a data de divulga&ccedil;&atilde;o do resultado da promo&ccedil;&atilde;o.<br />
 <br />
2.5.1 Efetivada a notifica&ccedil;&atilde;o, o vencedor dever&aacute; confirmar a aceita&ccedil;&atilde;o do respectivo pr&ecirc;mio &agrave; organiza&ccedil;&atilde;o do concurso, por meio de e-mail: promocao@89fm.com.br.<br />
 <br />
2.5.2 A organiza&ccedil;&atilde;o do concurso compromete-se a fazer o poss&iacute;vel para contatar o vencedor. Contudo, n&atilde;o poder&aacute; ser responsabilizada caso o vencedor n&atilde;o possam ser contatados dentro do prazo de 48 (quarenta e oito) horas seguintes &agrave; data de divulga&ccedil;&atilde;o do resultado da promo&ccedil;&atilde;o.<br />
 <br />
2.5.3 A organiza&ccedil;&atilde;o da promo&ccedil;&atilde;o n&atilde;o ser&aacute; respons&aacute;vel caso n&atilde;o receba a confirma&ccedil;&atilde;o da aceita&ccedil;&atilde;o do pr&ecirc;mio por parte do vencedor dentro do prazo de 48 (quarenta e oito) horas seguintes &agrave; data da notifica&ccedil;&atilde;o.<br />
 <br />
2.5.4 Caso n&atilde;o seja recebida &agrave; confirma&ccedil;&atilde;o de aceita&ccedil;&atilde;o do pr&ecirc;mio, a organiza&ccedil;&atilde;o da promo&ccedil;&atilde;o notificar&aacute; o vencedor de que o mesmo foi desclassificado e perder&aacute; direito ao pr&ecirc;mio.</p>

<p></p>

<p>
3. DO PR&Ecirc;MIO<br />
3.1 02 (dois) participantes contemplados ganhar&atilde;o (cada um) como pr&ecirc;mio:<br />
01 bicicleta el&eacute;trica Vela S (O cliente pode escolher entre a vers&atilde;o Top Tube e a Low Step).</p>

<p>3.2 O vencedor dever&aacute; retirar o respectivo pr&ecirc;mio na sede da Vela Bikes - Rua Cunha Gago, 169 - Pinheiros - CEP: 05421-000 &ndash; S&atilde;o Paulo/SP<br />
 <br />
3.3 O vencedor assinar&aacute; o respectivo &quot;Recibo de Entrega de Pr&ecirc;mio&quot;, onde atestar&aacute; ter recebido o pr&ecirc;mio conforme descrito neste Regulamento. A assinatura &eacute; obrigat&oacute;ria e dever&aacute; ser realizada na sede da 89fm. <br />
 <br />
3.4 O resultado do Concurso ser&aacute; divulgado no dia 25/06/2019, ap&oacute;s &agrave;s 15h00 no site www.velabikes.com.br; </p>

<p>3.5 O pr&ecirc;mio n&atilde;o poder&aacute; ser trocado por outros, muito menos convertido em dinheiro, consoante a previs&atilde;o do par&aacute;grafo 3&ordm; do artigo 1&ordm; da Lei n.&ordm; 5.768/71.<br />
 <br />
3.6 O pr&ecirc;mio &eacute; pessoal e intransfer&iacute;vel e n&atilde;o poder&aacute; ser trocado, sendo dado ao contemplado, mediante apresenta&ccedil;&atilde;o do RG.<br />
 <br />
3.7 O pr&ecirc;mio distribu&iacute;do &eacute; livre e desembara&ccedil;ado de qualquer &ocirc;nus para o contemplado.<br />
 <br />
3.8 Os formul&aacute;rios que n&atilde;o forem preenchidos com os dados completos, ou que forem incorretamente preenchidos, ou enviados incorretamente, ou que n&atilde;o permitirem a perfeita identifica&ccedil;&atilde;o e localiza&ccedil;&atilde;o dos participantes, ser&atilde;o eliminados para fins de premia&ccedil;&atilde;o. Os dados fornecidos pelo participante, no momento de sua inscri&ccedil;&atilde;o, dever&atilde;o ser corretos, claros, precisos, completos e apresentados de uma forma que permita a verifica&ccedil;&atilde;o de sua proced&ecirc;ncia e veracidade e autenticidade.<br />
 <br />
4. DISPOSI&Ccedil;&Otilde;ES FINAIS<br />
 <br />
4.1 A PROMOTORA n&atilde;o se responsabilizar&aacute; por eventuais preju&iacute;zos que os participantes possam ter, oriundos de situa&ccedil;&otilde;es que estejam fora de seu controle. Para tanto, exemplifica-se as seguintes situa&ccedil;&otilde;es, mas sem se limitar a:<br />
 <br />
4.1.1 Pelas inscri&ccedil;&otilde;es que n&atilde;o forem realizadas por problemas na transmiss&atilde;o de dados no servidor, em provedores de acessos de usu&aacute;rios ou ainda por falta de energia el&eacute;trica, sem exclus&atilde;o das demais situa&ccedil;&otilde;es decorrentes de caso fortuito ou for&ccedil;a maior;<br />
 <br />
4.1.2 Oscila&ccedil;&otilde;es, interrup&ccedil;&otilde;es, falhas de transmiss&atilde;o dos servi&ccedil;os de internet;<br />
 <br />
4.1.3 Por limita&ccedil;&otilde;es tecnol&oacute;gicas de alguns modelos de computadores, tablets, smartphones;<br />
 <br />
4.1.4 Por qualquer inaptid&atilde;o do participante ao uso da internet;<br />
 <br />
4.1.5 Por danos de qualquer esp&eacute;cie causados em virtude do acesso a p&aacute;gina da internet;<br />
 <br />
4.1.6 Por perda de dados, falhas e informa&ccedil;&otilde;es relativas ao uso do sistema pelo participante, por defeitos de sua internet.<br />
 <br />
4.2 A PROMOTORA pode interromper e/ou cancelar o Concurso por motivo de for&ccedil;a maior.<br />
 <br />
4.3 Este regulamento poder&aacute; ser alterado pela PROMOTORA tantas vezes quantas forem necess&aacute;rias, garantida a sua divulga&ccedil;&atilde;o de forma eficaz.<br />
 <br />
4.4 Quaisquer d&uacute;vidas, diverg&ecirc;ncias ou situa&ccedil;&otilde;es n&atilde;o previstas neste Regulamento ser&atilde;o julgadas e decididas de forma soberana e irrecorr&iacute;vel pela Dire&ccedil;&atilde;o da PROMOTORA.<br />
 <br />
4.5 Este Concurso tem car&aacute;ter exclusivamente Cultural, independente da &aacute;lea ou da aquisi&ccedil;&atilde;o de qualquer bem e/ou servi&ccedil;o, bem como, livre de qualquer pagamento, sem necessidade de autoriza&ccedil;&atilde;o pr&eacute;via da Caixa Econ&ocirc;mica Federal, nos termos do artigo 30 do Decreto n.&ordm; 70.951/72,.<br />
 <br />
4.6 O vencedor autoriza, a qualquer tempo, pelo prazo de 5 (cinco) anos a contar da data da divulga&ccedil;&atilde;o do resultado desta promo&ccedil;&atilde;o, o uso de seu nome, voz e imagem, em spots de radiodifus&atilde;o, televis&atilde;o, fotos, cartazes, filmes, websites, redes sociais, instagram, facebook, folhetos, livros, revistas e pe&ccedil;as promocionais, para fins de divulga&ccedil;&atilde;o do pr&ecirc;mio, sem qualquer &ocirc;nus adicional para a PROMOTORA e Submarino Viagens, ainda que o vencedor mesmo n&atilde;o usufrua do pr&ecirc;mio.<br />
 <br />
4.7 No caso de terceiros participarem da foto ou v&iacute;deo dos inscritos, caber&aacute; aos participantes colher a autoriza&ccedil;&atilde;o do uso de imagem deles.<br />
 <br />
4.8 A promo&ccedil;&atilde;o poder&aacute; ser divulgada pelo r&aacute;dio, pela TV, pela internet ou qualquer outro meio<br />
 <br />
4.9 A simples participa&ccedil;&atilde;o no presente Concurso implicar&aacute; no integral reconhecimento das condi&ccedil;&otilde;es e aceita&ccedil;&atilde;o irrestrita deste Regulamento, bem como, presumir-se-&aacute; a condi&ccedil;&atilde;o de que o participante ganhador n&atilde;o possui qualquer impedimento fiscal, legal ou outro que os impe&ccedil;a de receber e/ou usufruir o pr&ecirc;mio ganho.<br />
 <br />
4.10 O regulamento est&aacute; dispon&iacute;vel no site www.velabikes.com.br<br />
 <br />
4.11 A PROMOTORA n&atilde;o se responsabilizar&aacute; pela autenticidade dos dados cadastrais fornecidos pelos participantes.<br />
 <br />
4.12 &Agrave; divulga&ccedil;&atilde;o, condu&ccedil;&atilde;o, participa&ccedil;&atilde;o, premia&ccedil;&atilde;o, bem como qualquer ato/fato decorrente deste Concurso aplicar-se-&aacute; a legisla&ccedil;&atilde;o brasileira.<br />
 <br />
S&atilde;o Paulo, 09 de maio de 2019.<br />
 <br />
REDE AUTONOMISTA DE RADIOFUS&Atilde;O LTDA</p>
  </div>

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
        </fieldset>
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
        </fieldset>
        <fieldset>
          <label>Profissão</label>
          <input
            type='text'
            name='job'
            value={values && values.job}
            onChange={handleChange}
            onBlur={handleBlur}
            className={error && error.job && 'error'}
          />
        </fieldset>
        <fieldset>
         <legend>Como você conheceu a Vela?</legend>
         <label>
           <input
             type='radio'
             name='refer'
           />
           Opcao 1
         </label>
         <br />
         <label>
           <input
             type='radio'
             name='refer'
           />
           Opcao 2
         </label>
         <br />
         <label>
           <input
             type='radio'
             name='refer'
           />
           Opcao 3
         </label>
        </fieldset>
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
      <br />
      <small><Reg89 /></small>
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
        width: 418px;
        max-height: 70vh;
        overflow-y: scroll;
        box-shadow: 0 0px 1px 0 rgba(0,0,0,0.16), 0 0px 10px 0 rgba(0,0,0,0.12);
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

