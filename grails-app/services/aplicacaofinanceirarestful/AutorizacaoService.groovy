package aplicacaofinanceirarestful

import grails.converters.JSON
import grails.transaction.Transactional
import org.springframework.http.HttpStatus

@Transactional
class AutorizacaoService {

    def autorizar(request, uri) {
    	def autorizado = false
        
    	Usuario usuario = Usuario.findByNomeDeUsuarioAndToken(request.getHeader("nomeDeUsuario"), request.getHeader("token"))
		Servico servico = Servico.findByUri(uri)

        if (usuario && servico) {
        	usuario.papeis.each { Papel papelDoUsuario ->
        		servico.papeis.each { Papel papelDoServico ->
        			if (papelDoUsuario.nome.equals(papelDoServico.nome)) {
        				usuario.ultimoAcesso = new Date()
        				autorizado = true
	        		}
        		}        		
        	}
    	} 

    	return autorizado
    }
}