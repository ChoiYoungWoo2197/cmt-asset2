package kr.or.cmtasset2.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequiredArgsConstructor //final이나 @NonNull이 붙은 필드에 생성자를 생성해줍니다.
public class TestController {

    @GetMapping
    public Object login() {
        return "login";
    }

    @GetMapping("/index")
    public Object index() {
        return "index";
    }

}
