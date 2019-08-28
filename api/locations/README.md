#  API Localização de Recargas

Exporta uma função assíncrona, retornando como parâmetro um array com os objetos das devidas localizações da loja e pontos de recarga, a API é utilizada para enviar os dados ao site e facilitar o acesso dos consumidores aos pontos de recarga.

___

###  Dados da API

> Este é um método GET

> https://velabikes.com.br/api/locations

###  Parâmetros de Entrada

Esta API possui apenas parâmetros automáticos.

###  Informações de Resposta

O retorno é dado na forma de um array, ele possui um objeto específico para cada localização de recarga, este que armazena dados do lugar em (Nome, Endereço, Telefone, Aberto ou Fechado e Horários de Funcionamento).

Respostas Adicionais| -
---|---
Formato do Arquivo|JSON
Requerimento de Autenticação|Não
Limitações de Uso|Não

###  Erros de Retorno

**500** - A localização especificada não foi encontrada no Google Maps.
