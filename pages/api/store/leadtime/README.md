#  API Tempo de Entrega

Exporta uma função assíncrona, retornando como parâmetro uma variável com o tempo estipulado para entrega do produto, a API é utilizada para enviar o dado ao site e deixar claro a possível data de entrega para o comprador.

___

###  Dados da API

> Este é um método POST

> https://velabikes.com.br/api/store/leadtime

###  Parâmetros de Entrada

Esta API possui apenas parâmetros automáticos.

###  Informações de Resposta

O retorno é dado na forma de uma variável, ela indica a expectativa máxima de tempo que a bicicleta pode demorar para ser entregue.

Respostas Adicionais| -
---|---
Formato do Arquivo|JSON
Requerimento de Autenticação|Não
Limitações de Uso|Não

###  Erros de Retorno

**502** - A chamada não conseguiu acessar o serviço da shopify.
