package aplicacaofinanceirarestful

import org.springframework.http.HttpStatus

class AutorizacaoInterceptor {

	int order = HIGHEST_PRECEDENCE

	AutorizacaoService autorizacaoService

	AutorizacaoInterceptor() {
        matchAll().excludes(controller: 'login')
    }

    boolean before() { 
    	String uri = '/' + controllerName + '/' + actionName	
    	
    	if (autorizacaoService.autorizar(request, uri)) {
    		return true
    	} else {
    		response.status = HttpStatus.UNAUTHORIZED.value()
        	return false
    	}
    }

    boolean after() { return true }

    void afterView() {
        // no-op
    }
}