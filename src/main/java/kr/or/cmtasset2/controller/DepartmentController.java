package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Department;
import kr.or.cmtasset2.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/department")
@RequiredArgsConstructor //final이나 @NonNull이 붙은 필드에 생성자를 생성해줍니다.
public class DepartmentController {

    private final DepartmentService departmentService;

    @GetMapping
    public List<Department> list() {
        return departmentService.getDepartments();
    }

    @PostMapping
    public void create(@ModelAttribute Department department) {
        department.setCreateDate(new Date());
        //구현해야됨
//        department.setCreateId("");

        departmentService.createDepartment(department);
    }

    @GetMapping(value = "/{departmentKey}")
    public Department read(@PathVariable("departmentKey") int departmentKey) {
        Department department = departmentService.getDepartment(departmentKey);

        return department;
    }

    @PutMapping(value = "/{departmentKey}")
    public String update(@PathVariable("departmentKey") int departmentKey, @ModelAttribute Department department) {
        List<Department> childDepartments = departmentService.getChildDepartments(departmentKey);

        if("".equals(department.getName().trim()) || "".equals(department.getUseYn().trim())) {
            return "required";
        } else if(childDepartments.size() > 0 && "N".equals(department.getUseYn())) {
            return "child";
        } else {
            departmentService.updateDepartment(department);

            return "success";
        }
    }

    @DeleteMapping(value = "/{departmentKey}")
    public String delete(@PathVariable("departmentKey") int departmentKey) {
        List<Department> childDepartments = departmentService.getChildDepartments(departmentKey);

        if(childDepartments.size() == 0) {
            departmentService.deleteDepartment(departmentKey);
            return "success";
        } else {
            return "fail";
        }
    }

}
