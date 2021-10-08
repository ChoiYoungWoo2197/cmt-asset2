package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Department;
import kr.or.cmtasset2.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RequestMapping("/organization")
@RequiredArgsConstructor //final이나 @NonNull이 붙은 필드에 생성자를 생성해줍니다.
public class OrganizationController {

    private final DepartmentService departmentService;

    @GetMapping
    public String organizationJsTree() {
//        return "organization/jsTree";
        return "organization/organization";
    }

}
