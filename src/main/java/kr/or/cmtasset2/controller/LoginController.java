package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Employee;
import kr.or.cmtasset2.service.EmployeeService;
import kr.or.cmtasset2.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;

@Controller
//@RequestMapping("/organization")
@RequiredArgsConstructor //final이나 @NonNull이 붙은 필드에 생성자를 생성해줍니다.
public class LoginController {
    private final LoginService loginService;

    @RequestMapping(value = "/login-post", method = RequestMethod.POST)
    public String loginPost(@RequestParam("id") String id, @RequestParam("password") String password,
                            HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
        HashMap<String, Object> hashMap = new HashMap<String, Object>();
        hashMap.put("id", id);
        hashMap.put("password", password);
        Employee employee = loginService.loginPost(hashMap);

        if(employee != null) {
            HttpSession httpSession = request.getSession();
            httpSession.setAttribute("login", employee);
            return "redirect:/index";
        } else {
            return "/login-fail";
        }
    }

    @RequestMapping(value = "/login-out", method = RequestMethod.GET)
    public String logOut(HttpServletRequest request, HttpServletResponse response, Model model) {
        HttpSession httpSession = request.getSession();
        httpSession.removeAttribute("login");
        httpSession.invalidate();
        return "redirect:/";
    }

}
