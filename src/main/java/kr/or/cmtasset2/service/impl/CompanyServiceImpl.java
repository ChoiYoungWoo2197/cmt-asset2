package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.CompanyManagerMapper;
import kr.or.cmtasset2.mapper.CompanyMapper;
import kr.or.cmtasset2.model.Category;
import kr.or.cmtasset2.model.CategoryStandard;
import kr.or.cmtasset2.model.Company;
import kr.or.cmtasset2.model.CompanyManager;
import kr.or.cmtasset2.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {

    private final CompanyMapper companyMapper;

    private final CompanyManagerMapper companyManagerMapper;

    @Override
    public List<Company> getCompanys() {
        return companyMapper.getCompanys();
    }

    @Override
    @Transactional
    public void createCompany(Company company, List<CompanyManager> companyManagers) {
        companyMapper.createCompany(company);

        for (int i = 0; i < companyManagers.size(); i++) {
            CompanyManager companyManager = companyManagers.get(i);

            // 생성자 이름이 빈값일 경우 생성안되게 하는 조건 추가
            companyManagerMapper.createCompanyManager(companyManager);
        }

    }

    @Override
    public Company getCompany(int companyKey) {
        return companyMapper.getCompany(companyKey);
    }

    @Override
    @Transactional
    public void updateCompany(Company company, List<CompanyManager> companyManagers) {
        companyMapper.updateCompany(company);

        for (int i = 0; i < companyManagers.size(); i++) {
            CompanyManager companyManager = companyManagers.get(i);

            // 생성자 이름이 빈값일 경우 생성안되게 하는 조건 추가
            if(companyManager.getCompanyManagerKey() != 0) {
                companyManagerMapper.updateCompanyManager(companyManager);
            } else {
                companyManagerMapper.createCompanyManager(companyManager);
            }
        }
    }

    @Override
    @Transactional
    public void deleteCompany(int companyKey) {
        companyMapper.deleteCompany(companyKey);

        List<CompanyManager> companyManagers = companyManagerMapper.getCompanyManagersByCompanyKey(companyKey);

        for (int i = 0; i < companyManagers.size(); i++) {
            CompanyManager companyManager = companyManagers.get(i);

            companyManagerMapper.deleteCompanyManager(companyManager.getCompanyManagerKey());
        }
    }

}
