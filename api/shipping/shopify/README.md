#  API Preço do Frete
 
Realiza uma chamada POST que calcula o preço e forma de entrega do frete baseado na cidade do comprador, a API é utilizada para enviar os dados ao site no momento que o comprador selecionar uma bicicleta específica para comprar.

___

###  Dados da API

> Este é um método POST

> https://velabikes.com.br/api/shipping/shopify

###  Parâmetros de Entrada

Nome|Automático|Descrição
---|---|---
"rate"|Sim|Dados de endereço utilizados para calcular o frete.

###  Informações de Resposta

O retorno é dado no momento que a bicicleta é escolhida, é apresentado para o usuário os dados da compra e as informações de entrega.

Respostas Adicionais| -
---|---
Formato do Arquivo|JSON
Requerimento de Autenticação|Não
Limitações de Uso|Não

### Exemplo de Chamada

```
{
  "rate": {
    "origin": {
      "country": "CA",
      "postal_code": "K2P1L4",
      "province": "ON",
      "city": "Ottawa",
      "name": null,
      "address1": "150 Elgin St.",
      "address2": "",
      "address3": null,
      "phone": "16135551212",
      "fax": null,
      "email": null,
      "address_type": null,
      "company_name": "Jamie D's Emporium"
    },
    "destination": {
      "country": "CA",
      "postal_code": "K1M1M4",
      "province": "ON",
      "city": "Ottawa",
      "name": "Bob Norman",
      "address1": "24 Sussex Dr.",
      "address2": "",
      "address3": null,
      "phone": null,
      "fax": null,
      "email": null,
      "address_type": null,
      "company_name": null
    },
    "items": [{
      "name": "Short Sleeve T-Shirt",
      "sku": "",
      "quantity": 1,
      "grams": 1000,
      "price": 1999,
      "vendor": "Jamie D's Emporium",
      "requires_shipping": true,
      "taxable": true,
      "fulfillment_service": "manual",
      "properties": null,
      "product_id": 48447225880,
      "variant_id": 258644705304
    }],
    "currency": "USD",
    "locale": "en"
  }
}
```

###  Erros de Retorno

**502** - A chamada não conseguiu acessar o serviço da shopify.
