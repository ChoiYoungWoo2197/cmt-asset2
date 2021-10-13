package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Department;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DepartmentMapper {

    List<Department> getDepartments();

    void createDepartment(Department department);

    Department getDepartment(String code);

    void updateDepartment(Department department);

    void deleteDepartment(String code);

    List<Department> getChildDepartments(String code);

}
