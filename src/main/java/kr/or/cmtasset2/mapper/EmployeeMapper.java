package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Employee;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
//@Repository
public interface EmployeeMapper {

    List<Employee> getEmployees();

//    List<Employee> getEmployeesInDepartment(@Param("departmentKey") int departmentKey);
    List<Employee> getEmployeesInDepartment(int departmentKey);

    void createEmployee(Employee employee);

    Employee getEmployee(String id);

}
