package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.Authority;

import java.util.List;

public interface AuthorityService {

    List<Authority> getAuthoritys();

    Authority checkAuthorityCode(String code);

    void createAuthority(Authority authority);

    Authority getAuthority(String code);

    void updateAuthority(Authority authority);

    void deleteAuthority(String code);

}
