package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Authority;
import kr.or.cmtasset2.service.AuthorityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/authority")
@RequiredArgsConstructor
public class AuthorityController {

    private final AuthorityService authorityService;

    @GetMapping
    public List<Authority> list() {
        return authorityService.getAuthoritys();
    }

    /*@GetMapping("/checkCode")
    public Authority check(@ModelAttribute String code) {
        System.out.println("code=> " + code);

        return null;
    }*/

    @GetMapping(value = {"/checkDuplicate/{code}", "/checkCode"})
    public String checkDuplicate(@PathVariable(required = false, value = "code") String code) {
        if(code == null) {
            return "required";
        } else {
            Authority authority = authorityService.checkAuthorityCode(code);

            return authority == null ? "success" : "duplicate";
        }
    }

}
