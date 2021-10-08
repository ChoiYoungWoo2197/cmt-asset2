package kr.or.cmtasset2;

import kr.or.cmtasset2.model.Department;
import kr.or.cmtasset2.service.DepartmentService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class DepartmentTest {

//    @Autowired
//    private DepartmentService departmentService;
//
//    @Test
//    @Order(1)
//    public void createDepartment() {
//        Department department = new Department();
//
//        department.setName("행정부");
//        department.setDepth(1);
//        department.setUseYn("Y");
//        department.setCreateDate(new Date());
//        department.setCreateId("생성자아이디");
//
//        departmentService.createDepartment(department);
//
//        Assertions.assertEquals(departmentService.getDepartments().size(), 3);
//    }
//
//    @Test
//    @Order(2)
//    public void getDepartments() {
//        List<Department> departments = departmentService.getDepartments();
//
//        Assertions.assertNotEquals(departments.size(), 0);
//    }

}
