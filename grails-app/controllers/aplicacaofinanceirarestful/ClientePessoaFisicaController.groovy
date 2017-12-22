package aplicacaofinanceirarestful

import grails.converters.JSON
import groovy.json.JsonSlurper
import org.grails.web.json.JSONObject
import org.springframework.context.MessageSource
import org.springframework.http.HttpStatus

class ClientePessoaFisicaController {

    static allowedMethods = [delete: "DELETE", index: "GET", save: "POST", show: "GET", update: "PUT"]

    CidadeService cidadeService
    ClientePessoaFisicaService clientePessoaFisicaService
    EnderecoService enderecoService
    MessageSource messageSource

    def delete() {
        ClientePessoaFisica clientePessoaFisica = clientePessoaFisicaService.findById(params.id as Long)

        if (!clientePessoaFisica) {
            render NotFoundResponseUtil.instance.createNotFoundResponse(request, response, messageSource.getMessage('aplicacaofinanceirarestful.ClientePessoaFisica.not.found', null, null))
            return
        }

        clientePessoaFisica.enderecos.each { endereco ->
            endereco.delete()
        }

        clientePessoaFisica.delete(flush: true)
        render status: HttpStatus.NO_CONTENT
    }

    def index() {
        List<ClientePessoaFisica> clientesPessoasFisicas = clientePessoaFisicaService.findAllOrderByNome()
        respond clientePessoaFisicaService.clientePessoaFisicaCompactResponse(clientesPessoasFisicas)
    }

    def save() {
        JSONObject jsonObject = request.JSON

        if (!enderecoService.validateEnderecos(jsonObject)) {
            render message: messageSource.getMessage('aplicacaofinanceirarestful.ClientePessoaFisica.enderecos.not.found', null, null), status: HttpStatus.UNPROCESSABLE_ENTITY
            return
        }

        if (!cidadeService.validateCidadeForCliente(jsonObject)) {
            render message: messageSource.getMessage('aplicacaofinanceirarestful.Cidade.not.found', null, null), status: HttpStatus.UNPROCESSABLE_ENTITY
            return
        }

        JsonSlurper jsonSlurper = new JsonSlurper()
        ClientePessoaFisica clientePessoaFisica = jsonSlurper.parseText(jsonObject.toString())

        def responseBody = clientePessoaFisicaService.validate(clientePessoaFisica, messageSource, request, response)

        if (responseBody.isEmpty()) {
            clientePessoaFisica.enderecos.each { endereco ->
                clientePessoaFisica.addToEnderecos(endereco)
            }

            clientePessoaFisica.save(flush: true)
            respond clientePessoaFisicaService.clientePessoaFisicaComEnderecoResponse(clientePessoaFisica), status: HttpStatus.CREATED
        } else {
            render responseBody as JSON
        }
    }

    def show() {
        ClientePessoaFisica clientePessoaFisica = clientePessoaFisicaService.findById(params.id as Long)

        if (clientePessoaFisica) {
            respond clientePessoaFisicaService.clientePessoaFisicaComEnderecoResponse(clientePessoaFisica)
        } else {
            render NotFoundResponseUtil.instance.createNotFoundResponse(request, response, messageSource.getMessage('aplicacaofinanceirarestful.ClientePessoaFisica.not.found', null, null))
        }
    }

    def update() {
        ClientePessoaFisica clientePessoaFisica = ClientePessoaFisica.findById(params.id as Long)

        if (!clientePessoaFisica) {
            render NotFoundResponseUtil.instance.createNotFoundResponse(request, response, messageSource.getMessage('aplicacaofinanceirarestful.ClientePessoaFisica.not.found', null, null))
            return
        }

        JSONObject jsonObject = request.JSON

        if (!enderecoService.validateEnderecos(jsonObject)) {
            render message: messageSource.getMessage('aplicacaofinanceirarestful.ClientePessoaFisica.enderecos.not.found', null, null), status: HttpStatus.UNPROCESSABLE_ENTITY
            return
        }

        if (!cidadeService.validateCidadeForCliente(jsonObject)) {
            render message: messageSource.getMessage('aplicacaofinanceirarestful.Cidade.not.found', null, null), status: HttpStatus.UNPROCESSABLE_ENTITY
            return
        }

        clientePessoaFisica.enderecos.each { endereco ->
            endereco.delete()
        }

        JsonSlurper jsonSlurper = new JsonSlurper()
        clientePessoaFisica.properties = jsonSlurper.parseText(request.JSON.toString())

        def responseBody = clientePessoaFisicaService.validate(clientePessoaFisica, messageSource, request, response)

        if (responseBody.isEmpty()) {
            clientePessoaFisica.save(flush: true)

            respond clientePessoaFisicaService.clientePessoaFisicaComEnderecoResponse(clientePessoaFisica), status: HttpStatus.CREATED
        } else {
            render responseBody as JSON
        }
    }
}