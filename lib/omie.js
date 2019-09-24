import fetch from 'isomorphic-fetch'

const apiURL = 'https://app.omie.com.br/api/v1'

const auth = {
  app_key: process.env.OMIE_KEY,
  app_secret: process.env.OMIE_SECRET
}

const headers = {
  'Content-Type': 'application/json'
}

//
// Creates a customer
//

export const createCustomer = async ({
  extId,
  email,
  name,
  doc,
  phone,
  zip,
  uf,
  city,
  address,
  number,
  complement
}) => {
  const createCustomerURL = apiURL + '/geral/clientes/'
  const createCustomerBody = {
    ...omieAuth,
    call: 'UpsertCliente',
    param: [{
      'codigo_cliente_integracao': extId,
      'email': email,
      'razao_social': name,
      'cnpj_cpf': doc,
      'telefone1_ddd': phone.split(' ')[0],
      'telefone1_numero': phone.split(' ')[1],
      'cep': zip,
      'estado': UF,
      'cidade': city,
      'endereco': address,
      'endereco_numero': number,
      'complemento': complement
    }]
  }
  const createCustomerOptions = {
    method: 'POST',
    body: JSON.stringify(createCustomerBody),
    headers: omieHeaders
  }
  const response = await fetch(createCustomerURL, createCustomerOptions)
  const json = await response.json()

  return normalizeCustomer(json)
}

//
// Creates a service order
//


export const createServiceOrder = async ({
  clientId,
  extId,
  nCodCC
}) => {
  const createOrderServiceURL = omieURL + '/servicos/os/'
  const createOrderServiceBody = {
    ...omieAuth,
    call: 'IncluirOS',
    param: [{
      'Cabecalho': {
        'cCodIntOS': extId,
        'cEtapa': '20', // ?
        'dDtPrevisao': '19/09/2019', // ?
        'nCodCli': clientId,
        'nQtdeParc': 7 // ?
      },
      'Departamentos': [],
      'Email': {
        'cEnvBoleto': 'N', // ?
        'cEnvLink': 'N', // ?
        'cEnviarPara': 'guilherm@hotmail.com' // ?
      },
      'InformacoesAdicionais': {
        'cCidPrestServ': 'SAO PAULO (SP)',
        'cCodCateg': '1.01.02',
        'cDadosAdicNF': 'OS incluida via API de teste 61395', // ask grazi
        'nCodCC': nCodCC // this should be set in the file by default
      },
      'ServicosPrestados': [
        {
          'cCodServLC116': '7.07', // is this required? We will have it only after service order creation
          'cCodServMun': '01015',
          'cDadosAdicItem': 'Serviços prestados',
          'cDescServ': 'Serviço prestado 001',
          'cRetemISS': 'N',
          'cTribServ': '01',
          'impostos': {
            'cFixarCOFINS': '',
            'cFixarCSLL': '',
            'cFixarIRRF': '',
            'cFixarISS': '',
            'cFixarPIS': '',
            'nAliqCOFINS': 0,
            'nAliqCSLL': 0,
            'nAliqIRRF': 0,
            'nAliqISS': 3,
            'nAliqPIS': 0,
            'nBaseISS': 100,
            'nTotDeducao': 0,
            'nValorCOFINS': 0,
            'nValorCSLL': 0,
            'nValorIRRF': 0,
            'nValorISS': 3,
            'nValorPIS': 0
          },
          'nQtde': 3,
          'nValUnit': 1000
        }
      ]
    }]
  }
}

//
// Normalizes a Customer
// Transforms unnaceptable field names into well thought ones
//

const normalizeCustomer = ({
  codigo_cliente_omie,
  ...customer
}) => ({
  id: codigo_cliente_omie,
  ...customer
})
