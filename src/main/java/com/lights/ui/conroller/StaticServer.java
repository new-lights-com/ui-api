package com.lights.ui.conroller;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
@Controller
public class StaticServer {

    @RequestMapping(value = {"/", "/**/{path:[^.]*}"})
    public String forward() {
        return "forward:/index.html";
    }

}
