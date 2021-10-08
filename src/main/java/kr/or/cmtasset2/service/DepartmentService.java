package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.Department;

import java.util.List;

public interface DepartmentService {

    List<Department> getDepartments();

    void createDepartment(Department department);

    Department getDepartment(int departmentKey);

    void updateDepartment(Department department);

    void deleteDepartment(int departmentKey);

    List<Department> getChildDepartments(int departmentKey);

}
