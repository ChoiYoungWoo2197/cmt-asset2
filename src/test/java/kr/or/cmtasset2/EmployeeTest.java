package kr.or.cmtasset2;

import kr.or.cmtasset2.model.Employee;
import kr.or.cmtasset2.service.EmployeeService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class EmployeeTest extends CmtAsset2ApplicationTests {

    @Autowired
    EmployeeService employeeService;

//    @Test
//    @Order(1)
//    public void createEmployee() {
//        Assertions.assertEquals(employeeService.getEmployees().size(), 0);
//
//        Employee employee = new Employee();
//        employee.setId("test");
//        employee.setDepartmentKey(1);
//        employee.setAuthorityCode("admin");
//        employee.setPassword("12345678");
//        employee.setName("테스트");
//        employee.setEmail("test@naver.com");
//        employee.setPosition("회장");
//        employee.setUseYn("Y");
//        employee.setCreateDate(new Date());
//        employee.setCreateId("생성자아이디");
//
//        employeeService.createEmployee(employee);
//
//        Assertions.assertEquals(employeeService.getEmployees().size(), 1);
//    }

//    @Test
//    @Order(2)
//    public void getEmployeesInDepartment() {
//        List<Employee> employees = employeeService.getEmployeesInDepartment(1);
//
//        Assertions.assertEquals(employees.size(), 1);
//    }

//    @Test
//    @Order(3)
//    public void getEmployees() {
//        List<Employee> employees = employeeService.getEmployees();
//
//        Assertions.assertEquals(employees.size(), 1);
//    }

}
