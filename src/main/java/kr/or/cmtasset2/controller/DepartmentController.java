package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Department;
import kr.or.cmtasset2.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/department")
@RequiredArgsConstructor //final이나 @NonNull이 붙은 필드에 생성자를 생성해줍니다.
public class DepartmentController {

    private final DepartmentService departmentService;

    @GetMapping
    public List<Department> list() {
        return departmentService.getDepartments();
    }

    /*@GetMapping(value = {"/checkCode/{code}", "/checkCode"})
    public String checkCode(@PathVariable(required = false, value = "code") String code) {
        if(code == null) {
            return "required";
        } else {
            Department department = departmentService.getDepartment(code);

            return department == null ? "success" : "duplicate";
        }
    }*/

    @PostMapping
    public String create(@ModelAttribute Department department) {
        Department existDepartment = departmentService.getDepartment(department.getCode());

        if(existDepartment == null) {
            department.setCreateDate(new Date());
            //구현해야됨
//        department.setCreateId("");

            departmentService.createDepartment(department);

            return "success";
        } else {
            return "duplicate";
        }
    }

    @GetMapping(value = "/{code}")
    public Department read(@PathVariable("code") String code) {
        Department department = departmentService.getDepartment(code);

        return department;
    }

    @PutMapping(value = "/{code}")
    public String update(@PathVariable("code") String code, @ModelAttribute Department department) {
        List<Department> childDepartments = departmentService.getChildDepartments(code);

        if("".equals(department.getName().trim()) || "".equals(department.getUseYn().trim())) {
            return "required";
        } else if(childDepartments.size() > 0 && "N".equals(department.getUseYn())) {
            return "child";
        } else {
            departmentService.updateDepartment(department);

            return "success";
        }
    }

    @DeleteMapping(value = "/{code}")
    public String delete(@PathVariable("code") String code) {
        List<Department> childDepartments = departmentService.getChildDepartments(code);

        if(childDepartments.size() == 0) {
            departmentService.deleteDepartment(code);
            return "success";
        } else {
            return "fail";
        }
    }

    @PostMapping(value = "/file-upload")
    public Collection<Department> fileUpload(@RequestBody Collection<Department> departments) {
        if(departments.size() > 0) {
            return departmentService.fileUpload(departments);
        } else {
            return null;
        }


    }

}
