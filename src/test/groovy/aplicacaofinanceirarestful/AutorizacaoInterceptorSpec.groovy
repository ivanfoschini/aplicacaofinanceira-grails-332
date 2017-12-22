package aplicacaofinanceirarestful

import grails.testing.web.interceptor.InterceptorUnitTest
import spock.lang.Specification

class AutorizacaoInterceptorSpec extends Specification implements InterceptorUnitTest<AutorizacaoInterceptor> {

    def setup() {
    }

    def cleanup() {

    }

    void "Test autorizacao interceptor matching"() {
        when:"A request matches the interceptor"
        withRequest(controller:"autorizacao")

        then:"The interceptor does match"
        interceptor.doesMatch()
    }
}
