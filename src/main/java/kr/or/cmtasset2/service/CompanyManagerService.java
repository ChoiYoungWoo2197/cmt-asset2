package kr.or.cmtasset2.service;

import kr.or.cmtasset2.mapper.CompanyMapper;
import kr.or.cmtasset2.model.CompanyManager;

import java.util.List;

public interface CompanyManagerService {

    List<CompanyManager> getCompanyManagersByCompanyKey(int companyKey);

    void createCompanyManager(CompanyManager companyManager);

    void updateCompanyManager(CompanyManager companyManager);

    void deleteCompanyManager(int companyManagerKey);

}
