import fetch from 'isomorphic-fetch'

const apiURL = 'https://app.omie.com.br/api/v1'

const auth = {
  app_key: 624372708960, // process.env.OMIE_KEY,
  app_secret: '3c4e1be121c1eb6acb7ab2fc3422d590'// process.env.OMIE_SECRET
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
  state,
  city,
  address,
  number,
  complement
}) => {
  const createCustomerURL = apiURL + '/geral/clientes/'
  const createCustomerBody = {
    ...auth,
    call: 'UpsertCliente',
    param: [{
      'codigo_cliente_integracao': extId,
      'email': email,
      'razao_social': name,
      'cnpj_cpf': doc,
      'telefone1_ddd': phone && phone.split(' ')[0],
      'telefone1_numero': phone && phone.split(' ')[1],
      'cep': zip,
      'estado': state,
      'cidade': city,
      'endereco': address,
      'endereco_numero': number,
      'complemento': complement
    }]
  }
  const createCustomerOptions = {
    method: 'POST',
    body: JSON.stringify(createCustomerBody),
    headers: headers
  }
  const response = await fetch(createCustomerURL, createCustomerOptions)
  const json = await response.json()

  return normalizeCustomer(json)
}

//
// Creates a service order
//

export const createServiceOrder = async ({
  customerId,
  extId
}) => {
  const endpointURL = apiURL + '/servicos/os/'
  const body = {
    ...auth,
    call: 'IncluirOS',
    param: [{
      'Cabecalho': {
        'cCodIntOS': extId,
        'cEtapa': '20',
        'nCodCli': customerId,
        'nQtdeParc': 1
      },
      'InformacoesAdicionais': {
        'cCodCateg': '1.01.02',
        'nCodCC': 1359770974
      },
      'ServicosPrestados': [{
        'cCodServLC116': '14.01',
        'cCodServMun': '01015',
        'cRetemISS': 'N',
        'cTribServ': '1',
        'nQtde': 1,
        'nValUnit': 1
      }]
    }]
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
  }
  const response = await fetch(endpointURL, options)
  const json = await response.json()

  return json
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
