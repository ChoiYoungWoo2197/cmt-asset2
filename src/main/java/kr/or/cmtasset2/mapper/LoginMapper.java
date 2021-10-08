package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Employee;
import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;

@Mapper
public interface LoginMapper {
    Employee loginPost(HashMap<String, Object> map);
}
