package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.PermissionMapper;
import kr.or.cmtasset2.model.Permission;
import kr.or.cmtasset2.service.PermissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PermissionServiceImpl implements PermissionService {

    private final PermissionMapper permissionMapper;

    @Override
    public List<Permission> getPermissions() {
        return permissionMapper.getPermissions();
    }

}
