package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Department;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DepartmentMapper {

    List<Department> getDepartments();

    void createDepartment(Department department);

    Department getDepartment(int departmentKey);

    void updateDepartment(Department department);

    void deleteDepartment(int departmentKey);

    List<Department> getChildDepartments(int departmentKey);

}
