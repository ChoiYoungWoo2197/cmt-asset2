package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.DepartmentMapper;
import kr.or.cmtasset2.model.Department;
import kr.or.cmtasset2.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {

    private final DepartmentMapper departmentMapper;

    @Override
    public List<Department> getDepartments() {
        return departmentMapper.getDepartments();
    }

    @Override
    public void createDepartment(Department department) {
        departmentMapper.createDepartment(department);
    }

    @Override
    public Department getDepartment(int departmentKey) {
        return departmentMapper.getDepartment(departmentKey);
    }

    @Override
    public void updateDepartment(Department department) {
        departmentMapper.updateDepartment(department);
    }

    @Override
    public void deleteDepartment(int departmentKey) {
        departmentMapper.deleteDepartment(departmentKey);
    }

    @Override
    public List<Department> getChildDepartments(int departmentKey) {
        return departmentMapper.getChildDepartments(departmentKey);
    }

}
