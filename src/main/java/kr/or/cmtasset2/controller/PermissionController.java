package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Authority;
import kr.or.cmtasset2.model.Permission;
import kr.or.cmtasset2.service.AuthorityService;
import kr.or.cmtasset2.service.PermissionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/permission")
@RequiredArgsConstructor
public class PermissionController {

    private final PermissionService permissionService;

    @GetMapping
    public List<Permission> list() {
        return permissionService.getPermissions();
    }

}
