package com.poc.sso.pocbe.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static java.lang.String.format;

// TODO remove maxAge = 0
@CrossOrigin(maxAge = 0, origins = "http://localhost:4200")
@RestController
public class Controller {
    @GetMapping({"/user-info"})
    public String userInfo() {
        return format("This is UserInfo!");
    }
}
