package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.CompanyManagerMapper;
import kr.or.cmtasset2.mapper.CompanyMapper;
import kr.or.cmtasset2.model.CompanyManager;
import kr.or.cmtasset2.service.CompanyManagerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyManagerServiceImpl implements CompanyManagerService {

    private final CompanyManagerMapper companyManagerMapper;

    @Override
    public List<CompanyManager> getCompanyManagersByCompanyKey(int companyKey) {
        return companyManagerMapper.getCompanyManagersByCompanyKey(companyKey);
    }

    @Override
    public void createCompanyManager(CompanyManager companyManager) {
        companyManagerMapper.createCompanyManager(companyManager);
    }

    @Override
    public void updateCompanyManager(CompanyManager companyManager) {
        companyManagerMapper.updateCompanyManager(companyManager);
    }

    @Override
    public void deleteCompanyManager(int companyManagerKey) {
        companyManagerMapper.deleteCompanyManager(companyManagerKey);
    }
}
