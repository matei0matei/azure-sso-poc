package com.poc.sso.pocbe.config;

import com.azure.spring.cloud.autoconfigure.implementation.aad.security.AadResourceServerHttpSecurityConfigurer;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableMethodSecurity
@EnableWebSecurity
public class SecurityConfig extends AadResourceServerHttpSecurityConfigurer {

    @Override
    public void init(HttpSecurity http) throws Exception {
        super.init(http);
        http
                .cors()
                .and()
                .csrf().disable()
                .authorizeHttpRequests()
                .anyRequest().authenticated()
                // .and().authenticationProvider()
                .and().sessionManagement(configurer -> configurer.sessionCreationPolicy(STATELESS));
    }
}
