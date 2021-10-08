package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Permission;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PermissionMapper {

    List<Permission> getPermissions();

}
