package com.poc.sso.pocbe.config;

import com.azure.spring.cloud.autoconfigure.implementation.aad.security.AadResourceServerHttpSecurityConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CorsConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter;
import org.springframework.web.cors.CorsConfiguration;

import static org.springframework.http.HttpMethod.*;
import static org.springframework.security.web.header.writers.ReferrerPolicyHeaderWriter.ReferrerPolicy.NO_REFERRER;

@Configuration
@EnableMethodSecurity
@EnableWebSecurity
public class SecurityConfig extends AadResourceServerHttpSecurityConfigurer {

    @Override
    public void configure(HttpSecurity http) throws Exception {
        super.configure(http);
        http
            .cors(SecurityConfig::customizeCors)
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
            .oauth2ResourceServer().jwt();
    }

    private static void customizeCors(CorsConfigurer<HttpSecurity> configurer) {
        configurer.configurationSource(source -> {
            CorsConfiguration corsConfiguration = new CorsConfiguration();
            corsConfiguration.addAllowedOrigin("http://localhost:4200");
            corsConfiguration.addAllowedOriginPattern("localhost:4200");
            corsConfiguration.addAllowedMethod(OPTIONS);
            corsConfiguration.addAllowedMethod(POST);
            return corsConfiguration;
        });
    }

}
