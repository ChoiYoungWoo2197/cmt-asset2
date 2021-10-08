package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.EmployeeMapper;
import kr.or.cmtasset2.model.Employee;
import kr.or.cmtasset2.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeMapper employeeMapper;

    @Override
    public List<Employee> getEmployees() {
        return employeeMapper.getEmployees();
    }

    @Override
    public List<Employee> getEmployeesInDepartment(int departmentKey) {
        return employeeMapper.getEmployeesInDepartment(departmentKey);
    }

    @Override
    public void createEmployee(Employee employee) {
        employeeMapper.createEmployee(employee);
    }

    @Override
    public Employee getEmployee(String id) {
        return employeeMapper.getEmployee(id);
    }

}
