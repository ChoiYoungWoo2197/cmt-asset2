package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.AuthorityMapper;
import kr.or.cmtasset2.model.Authority;
import kr.or.cmtasset2.service.AuthorityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthorityServiceImpl implements AuthorityService {

    private final AuthorityMapper authorityMapper;

    @Override
    public List<Authority> getAuthoritys() {
        return authorityMapper.getAuthoritys();
    }

    @Override
    public Authority checkAuthorityCode(String code) {
        return authorityMapper.checkAuthorityCode(code);
    }

    @Override
    public void createAuthority(Authority authority) {
        authorityMapper.createAuthority(authority);
    }

    @Override
    public Authority getAuthority(String code) {
        return authorityMapper.getAuthority(code);
    }

    @Override
    public void updateAuthority(Authority authority) {
        authorityMapper.updateAuthority(authority);
    }

    @Override
    public void deleteAuthority(String code) {
        authorityMapper.deleteAuthority(code);
    }

}
