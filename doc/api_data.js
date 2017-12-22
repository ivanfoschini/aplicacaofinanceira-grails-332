define({ "api": [
  {
    "type": "delete",
    "url": "/banco/:id",
    "title": "Delete",
    "group": "Banco",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do banco.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Não existe um banco que possua o identificador passado como parâmetro.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Conflict",
            "description": "<p>O banco cujo identificador foi passado como parâmetro não pode ser excluído.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484224334405,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/banco/1\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"timestamp\": 1484224424107,\n  \"status\": 404,\n  \"error\": \"Not Found\",\n  \"message\": \"Banco não encontrado.\",\n  \"path\": \"/banco/0\"\n}",
          "type": "json"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"timestamp\": 1484224497234,\n  \"status\": 409,\n  \"error\": \"Conflict\",\n  \"message\": \"O banco selecionado possui agências e, portanto, não pode ser excluído.\",\n  \"path\": \"/banco/1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/BancoController.groovy",
    "groupTitle": "Banco",
    "name": "DeleteBancoId"
  },
  {
    "type": "get",
    "url": "/banco",
    "title": "List",
    "group": "Banco",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 1,\n    \"numero\": 1,\n    \"cnpj\": \"00000000000191\",\n    \"nome\": \"Banco do Brasil\"\n  },\n  {\n    \"id\": 2,\n    \"numero\": 2,\n    \"cnpj\": \"00360305000104\",\n    \"nome\": \"Caixa Econômica Federal\"\n  },\n  {\n    \"id\": 3,\n    \"numero\": 3,\n    \"cnpj\": \"60872504000123\",\n    \"nome\": \"Itaú\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484232706578,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/banco\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/BancoController.groovy",
    "groupTitle": "Banco",
    "name": "GetBanco"
  },
  {
    "type": "get",
    "url": "/banco/:id",
    "title": "Show",
    "group": "Banco",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do banco.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"numero\": 1,\n  \"cnpj\": \"00000000000191\",\n  \"nome\": \"Banco do Brasil\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Não existe um banco que possua o identificador passado como parâmetro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484225396181,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/banco/1\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"timestamp\": 1484225446800,\n  \"status\": 404,\n  \"error\": \"Not Found\",\n  \"message\": \"Banco não encontrado.\",\n  \"path\": \"/banco/0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/BancoController.groovy",
    "groupTitle": "Banco",
    "name": "GetBancoId"
  },
  {
    "type": "post",
    "url": "/banco",
    "title": "Save",
    "group": "Banco",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Tipo do conteúdo da requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"Content-Type\":  application/json\n\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Exemplo de requisição",
        "content": "{\n  \"numero\": 1, \n  \"cnpj\": \"00000000000191\",   \n  \"nome\": \"Banco do Brasil\"   \n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"id\": 1,\n  \"numero\": 1,\n  \"cnpj\": \"00000000000191\",\n  \"nome\": \"Banco do Brasil\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnprocessableEntity",
            "description": "<p>Erros de validação de dados ou violação de regras de negócio.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484224814226,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/banco\"\n}",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP/1.1 422 UnprocessableEntity - \"Campos obrigatórios não foram fornecidos.\"\n\n{\n  \"timestamp\": 1484224887178,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O número fornecido não pode ser nulo.\"\n    },\n    {\n      \"message\": \"O CNPJ fornecido não pode ser nulo.\"\n    },\n    {\n      \"message\": \"O nome fornecido não pode ser nulo.\"\n    }\n  ],\n  \"path\": \"/banco\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O número fornecido é menor do que zero.\"\n\n{\n  \"timestamp\": 1484225003793,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O número fornecido deve ser maior do que zero.\"\n    }\n  ],\n  \"path\": \"/banco\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O número fornecido já pertence a outro banco.\"\n\n{\n  \"timestamp\": 1484225086607,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O número fornecido já pertence a outro banco.\"\n    }\n  ],\n  \"path\": \"/banco\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O CNPJ fornecido possui menos do que catorze caracteres.\"\n\n{\n  \"timestamp\": 1484225163986,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O CNPJ fornecido deve possuir 14 caracteres.\"\n    },\n    {\n      \"message\": \"O CNPJ fornecido é inválido.\"\n    }\n  ],\n  \"path\": \"/banco\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O CNPJ fornecido possui mais do que catorze caracteres.\"\n\n{\n  \"timestamp\": 1484225163986,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O CNPJ fornecido deve possuir 14 caracteres.\"\n    },\n    {\n      \"message\": \"O CNPJ fornecido é inválido.\"\n    }\n  ],\n  \"path\": \"/banco\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O CNPJ fornecido é inválido.\"\n\n{\n  \"timestamp\": 1484225163986,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O CNPJ fornecido é inválido.\"\n    }\n  ],\n  \"path\": \"/banco\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/BancoController.groovy",
    "groupTitle": "Banco",
    "name": "PostBanco"
  },
  {
    "type": "put",
    "url": "/banco/:id",
    "title": "Update",
    "group": "Banco",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Tipo do conteúdo da requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"Content-Type\":  application/json\n\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de requisição",
          "content": "{\n  \"numero\": 1, \n  \"cnpj\": \"00000000000191\",   \n  \"nome\": \"Banco do Brasil\"   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numero",
            "description": "<p>Numero do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cnpj",
            "description": "<p>CNPJ do banco.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do banco.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"numero\": 1,\n  \"cnpj\": \"00000000000191\",\n  \"nome\": \"Banco do Brasil\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Não existe um banco que possua o identificador passado como parâmetro.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnprocessableEntity",
            "description": "<p>Erros de validação de dados ou violação de regras de negócio.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484224814226,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/banco/1\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"timestamp\": 1484233284661,\n  \"status\": 404,\n  \"error\": \"Not Found\",\n  \"message\": \"Banco não encontrado.\",\n  \"path\": \"/banco/0\"\n}",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP/1.1 422 UnprocessableEntity - \"Campos obrigatórios não foram fornecidos.\"\n\n{\n  \"timestamp\": 1484224887178,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O número fornecido não pode ser nulo.\"\n    },\n    {\n      \"message\": \"O CNPJ fornecido não pode ser nulo.\"\n    },\n    {\n      \"message\": \"O nome fornecido não pode ser nulo.\"\n    }\n  ],\n  \"path\": \"/banco/1\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O número fornecido é menor do que zero.\"\n\n{\n  \"timestamp\": 1484225003793,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O número fornecido deve ser maior do que zero.\"\n    }\n  ],\n  \"path\": \"/banco/1\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O número fornecido já pertence a outro banco.\"\n\n{\n  \"timestamp\": 1484225086607,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O número fornecido já pertence a outro banco.\"\n    }\n  ],\n  \"path\": \"/banco/1\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O CNPJ fornecido possui menos do que catorze caracteres.\"\n\n{\n  \"timestamp\": 1484225163986,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O CNPJ fornecido deve possuir 14 caracteres.\"\n    },\n    {\n      \"message\": \"O CNPJ fornecido é inválido.\"\n    }\n  ],\n  \"path\": \"/banco/1\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O CNPJ fornecido possui mais do que catorze caracteres.\"\n\n{\n  \"timestamp\": 1484225163986,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O CNPJ fornecido deve possuir 14 caracteres.\"\n    },\n    {\n      \"message\": \"O CNPJ fornecido é inválido.\"\n    }\n  ],\n  \"path\": \"/banco/1\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O CNPJ fornecido é inválido.\"\n\n{\n  \"timestamp\": 1484225163986,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O CNPJ fornecido é inválido.\"\n    }\n  ],\n  \"path\": \"/banco/1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/BancoController.groovy",
    "groupTitle": "Banco",
    "name": "PutBancoId"
  },
  {
    "type": "delete",
    "url": "/estado/:id",
    "title": "Delete",
    "group": "Estado",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do estado.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Não existe um estado que possua o identificador passado como parâmetro.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Conflict",
            "description": "<p>O estado cujo identificador foi passado como parâmetro não pode ser excluído.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484224334405,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/estado/1\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "{\n  \"timestamp\": 1484224424107,\n  \"status\": 404,\n  \"error\": \"Not Found\",\n  \"message\": \"Estado não encontrado.\",\n  \"path\": \"/estado/0\"\n}",
          "type": "json"
        },
        {
          "title": "Conflict",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"timestamp\": 1484224497234,\n  \"status\": 409,\n  \"error\": \"Conflict\",\n  \"message\": \"O estado selecionado possui pelo menos uma cidade e, portanto, não pode ser excluído.\",\n  \"path\": \"/estado/1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/EstadoController.groovy",
    "groupTitle": "Estado",
    "name": "DeleteEstadoId"
  },
  {
    "type": "get",
    "url": "/estado",
    "title": "List",
    "group": "Estado",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do estado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do estado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"id\": 3,\n    \"nome\": \"Espirito Santo\"\n  },\n  {\n    \"id\": 2,\n    \"nome\": \"Rio de Janeiro\"\n  },\n  {\n    \"id\": 1,\n    \"nome\": \"Sao Paulo\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484232706578,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/estado\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/EstadoController.groovy",
    "groupTitle": "Estado",
    "name": "GetEstado"
  },
  {
    "type": "get",
    "url": "/estado/:id",
    "title": "Show",
    "group": "Estado",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do estado.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do estado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do estado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"nome\": \"Sao Paulo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Não existe um estado que possua o identificador passado como parâmetro.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484225396181,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/estado/1\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"timestamp\": 1484225446800,\n  \"status\": 404,\n  \"error\": \"Not Found\",\n  \"message\": \"Estado não encontrado.\",\n  \"path\": \"/estado/0\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/EstadoController.groovy",
    "groupTitle": "Estado",
    "name": "GetEstadoId"
  },
  {
    "type": "post",
    "url": "/estado",
    "title": "Save",
    "group": "Estado",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Tipo do conteúdo da requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"Content-Type\":  application/json\n\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "examples": [
      {
        "title": "Exemplo de requisição",
        "content": "{\n  \"nome\": \"Sao Paulo\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do estado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do estado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 201 Created\n{\n  \"id\": 1,\n  \"nome\": \"Sao Paulo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnprocessableEntity",
            "description": "<p>Erros de validação de dados ou violação de regras de negócio.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\nHTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484232706578,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/estado\"\n}",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP/1.1 422 UnprocessableEntity - \"Campos obrigatórios não foram fornecidos.\"\n\n{\n  \"timestamp\": 1484224887178,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O nome fornecido não pode ser nulo.\"\n    }\n  ],\n  \"path\": \"/estado\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O nome fornecido já pertence a outro estado.\"\n\n{\n  \"timestamp\": 1484232914607,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O nome fornecido já pertence a outro estado.\"\n    }\n  ],\n  \"path\": \"/estado\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/EstadoController.groovy",
    "groupTitle": "Estado",
    "name": "PostEstado"
  },
  {
    "type": "put",
    "url": "/estado/:id",
    "title": "Update",
    "group": "Estado",
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Tipo do conteúdo da requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "nomeDeUsuario",
            "description": "<p>Nome do usuário que está realizando a requisição.</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de acesso.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de cabeçalho:  ",
          "content": "\"Content-Type\":  application/json\n\"nomeDeUsuario\": admin\n\"token\":         PXO9PmSpQwukqfjqg5ukbG3O1Hgl1yH0",
          "type": "String"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do estado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Exemplo de requisição",
          "content": "{\n  \"nome\": \"Sao Paulo\"   \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do estado.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome do estado.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Resposta de sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": 1,\n  \"nome\": \"Sao Paulo\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>Usuário não autorizado a acessar o recurso solicitado.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFound",
            "description": "<p>Não existe um estado que possua o identificador passado como parâmetro.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnprocessableEntity",
            "description": "<p>Erros de validação de dados ou violação de regras de negócio.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized",
          "content": "HTTP/1.1 401 Unauthorized\n{\n  \"timestamp\": 1484224814226,\n  \"status\": 401,\n  \"error\": \"Unauthorized\",\n  \"message\": \"Usuário não autorizado a acessar o recurso solicitado.\",\n  \"path\": \"/estado/1\"\n}",
          "type": "json"
        },
        {
          "title": "NotFound",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"timestamp\": 1484233284661,\n  \"status\": 404,\n  \"error\": \"Not Found\",\n  \"message\": \"Estado não encontrado.\",\n  \"path\": \"/estado/0\"\n}",
          "type": "json"
        },
        {
          "title": "UnprocessableEntity",
          "content": "HTTP/1.1 422 UnprocessableEntity - \"Campos obrigatórios não foram fornecidos.\"\n\n{\n  \"timestamp\": 1484224887178,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O nome fornecido não pode ser nulo.\"\n    }\n  ],\n  \"path\": \"/estado/1\"\n}\n\nHTTP/1.1 422 UnprocessableEntity - \"O nome fornecido já pertence a outro estado.\"\n\n{\n  \"timestamp\": 1484225086607,\n  \"status\": 422,\n  \"error\": \"Unprocessable Entity\",\n  \"errors\": [\n    {\n      \"message\": \"O nome fornecido já pertence a outro estado.\"\n    }\n  ],\n  \"path\": \"/estado/1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "grails-app/controllers/aplicacaofinanceirarestful/EstadoController.groovy",
    "groupTitle": "Estado",
    "name": "PutEstadoId"
  }
] });
