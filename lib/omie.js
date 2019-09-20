import fetch from 'isomorphic-fetch'

const omieURL = 'https://app.omie.com.br/api/v1'

const omieAuth = {
  app_key: process.env.OMIE_KEY,
  app_secret: process.env.OMIE_SECRET
}
console.log(omieAuth)
const omieHeaders = {
  'Content-Type': 'application/json' 
}

//
// Creates a customer
//

export const createCustomer = async ({extId, email, name, document, phone, zip, UF, city, address, number, complement}) => {
    const createCustomerURL = omieURL + '/geral/clientes/'
    const createCustomerBody = {
      ...omieAuth,
      call: 'UpsertCliente',
      param: [{
        'codigo_cliente_integracao': extId,
        'email': email,
        'razao_social': name,
        'cnpj_cpf': document,
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
    
    return json
  }

export const createOrderService = async ({nCodCli, cCodIntOS, nCodCC}) => {
    const createOrderServiceURL = omieURL + '/servicos/os/'
    const createOrderServiceBody = {
        ...omieAuth,
        call: 'IncluirOS',
        param: [{
          "Cabecalho": {
              "cCodIntOS": cCodIntOS,
              "cEtapa": "20",
              "dDtPrevisao": "19/09/2019",
              "nCodCli": nCodCli,
              "nQtdeParc": 7
          },
          "Departamentos": [],
          "Email": {
              "cEnvBoleto": "N",
              "cEnvLink": "N",
              "cEnviarPara": "guilherm@hotmail.com"
          },
          "InformacoesAdicionais": {
              "cCidPrestServ": "SAO PAULO (SP)",
              "cCodCateg": "1.01.02",
              "cDadosAdicNF": "OS incluida via API de teste 61395",
              "nCodCC": nCodCC
          },
          "ServicosPrestados": [
              {
                  "cCodServLC116": "7.07",
                  "cCodServMun": "01015",
                  "cDadosAdicItem": "Serviços prestados",
                  "cDescServ": "Serviço prestado 001",
                  "cRetemISS": "N",
                  "cTribServ": "01",
                  "impostos": {
                      "cFixarCOFINS": "",
                      "cFixarCSLL": "",
                      "cFixarIRRF": "",
                      "cFixarISS": "",
                      "cFixarPIS": "",
                      "nAliqCOFINS": 0,
                      "nAliqCSLL": 0,
                      "nAliqIRRF": 0,
                      "nAliqISS": 3,
                      "nAliqPIS": 0,
                      "nBaseISS": 100,
                      "nTotDeducao": 0,
                      "nValorCOFINS": 0,
                      "nValorCSLL": 0,
                      "nValorIRRF": 0,
                      "nValorISS": 3,
                      "nValorPIS": 0
                  },
                  "nQtde": 3,
                  "nValUnit": 1000
              }
          ]
      }]
    }
  }