package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Authority;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AuthorityMapper {

    List<Authority> getAuthoritys();

    Authority checkAuthorityCode(String code);

    void createAuthority(Authority authority);

    Authority getAuthority(String code);

    void updateAuthority(Authority authority);

    void deleteAuthority(String code);

}
