package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.Department;

import java.util.Collection;
import java.util.List;

public interface DepartmentService {

    List<Department> getDepartments();

    void createDepartment(Department department);

    Department getDepartment(String code);

    void updateDepartment(Department department);

    void deleteDepartment(String code);

    List<Department> getChildDepartments(String code);

    Collection<Department> fileUpload(Collection<Department> departments);

}
