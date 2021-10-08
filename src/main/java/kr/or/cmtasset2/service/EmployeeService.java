package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.Employee;

import java.util.List;

public interface EmployeeService {

    List<Employee> getEmployees();

    List<Employee> getEmployeesInDepartment(int departmentKey);

    void createEmployee(Employee employee);

    Employee getEmployee(String id);

}
