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

export const putCustomer = async ({
  id,
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
      'codigo_cliente_omie': id,
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
  const { faultstring, ...customer } = await response.json()
  if (faultstring) throw new Error(faultstring)

  return normalizeCustomer(customer)
}

export const findCustomer = async ({ doc }) => {
  const endpointURL = apiURL + '/geral/clientes/'
  const body = {
    ...auth,
    call: 'ListarClientes',
    param: [{
      'pagina': 1,
      'registros_por_pagina': 50,
      'apenas_importado_api': 'N',
      'clientesFiltro': {
        'cnpj_cpf': doc
      }
    }]
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
  }
  const response = await fetch(endpointURL, options)
  const { total_de_registros, clientes_cadastro, faultstring } = await response.json()
  if (total_de_registros !== 1 || faultstring) return false

  return normalizeCustomer(clientes_cadastro[0])
}

//
// Creates a service order
//

export const createServiceOrder = async ({
  customerId,
  extId,
  description
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
      }],
      'Observacoes': {
        'cObsOS': description
      }
    }]
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: headers
  }
  const response = await fetch(endpointURL, options)
  const { faultstring, ...serviceOrder } = await response.json()
  if (faultstring) throw new Error(faultstring)

  return normalizeServiceOrder(serviceOrder)
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

const normalizeServiceOrder = ({
  nCodOS,
  cNumOS
}) => ({
  id: nCodOS,
  number: cNumOS
})
