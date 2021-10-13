package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.DepartmentMapper;
import kr.or.cmtasset2.model.Department;
import kr.or.cmtasset2.service.DepartmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
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
    public Department getDepartment(String code) {
        return departmentMapper.getDepartment(code);
    }

    @Override
    public void updateDepartment(Department department) {
        departmentMapper.updateDepartment(department);
    }

    @Override
    public void deleteDepartment(String code) {
        departmentMapper.deleteDepartment(code);
    }

    @Override
    public List<Department> getChildDepartments(String code) {
        return departmentMapper.getChildDepartments(code);
    }

    @Override
    public Collection<Department> fileUpload(Collection<Department> departments) {
        Collection<Department> departments1 = new ArrayList<>();
        for(Department department : departments) {
            if(department.getCode().equals("") == true || department.getCode() == null) {
                continue;
            }

            Department isExistDepartment = getDepartment(department.getCode());
            Department isExistParentDepartment = department.getParentCode().equals("") == false ? getDepartment(department.getParentCode()) : null;
            if(isExistDepartment == null) {
                if(department.getParentCode().equals("") == true
                        || (isExistParentDepartment != null && department.getParentCode().equals("") == false)) {
                    createDepartment(department);
                    departments1.add(department);
                }
            } else {
                if(department.getParentCode().equals("") == true
                        || (isExistParentDepartment != null && department.getParentCode().equals("") == false)) {
                    updateDepartment(department);
                    departments1.add(department);
                }
            }
        }

        return departments1;
    }

}
