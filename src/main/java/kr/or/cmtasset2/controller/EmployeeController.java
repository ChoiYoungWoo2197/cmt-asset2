package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Employee;
import kr.or.cmtasset2.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor //final이나 @NonNull이 붙은 필드에 생성자를 생성해줍니다.
public class EmployeeController {

    private final EmployeeService employeeService;

    @GetMapping("/department={department}")
    public List<Employee> getEmployeesInDepartment(@PathVariable int department) {
        List<Employee> employees = employeeService.getEmployeesInDepartment(department);

        return employees;
    }

    @PostMapping()
    public void create(Employee employee) {
        employeeService.createEmployee(employee);
    }

    @GetMapping(value = "/{id}")
    public Employee read(@PathVariable("id") String id) {
        Employee employee = employeeService.getEmployee(id);

        return employee;
    }

}
