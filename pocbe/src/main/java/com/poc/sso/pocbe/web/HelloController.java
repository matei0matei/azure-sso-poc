package com.poc.sso.pocbe.web;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import static io.micrometer.common.util.StringUtils.isNotBlank;
import static java.lang.String.format;

@CrossOrigin(maxAge = 0)
@RestController
public class HelloController {

//    @PreAuthorize("isAuthenticated()")
    @GetMapping({"/hello", "/hello/{name}"})
    public String hello(@PathVariable(value = "name", required = false) String name) {
        return format("Hello, %s!", isNotBlank(name) ? name : "world");
    }

}
