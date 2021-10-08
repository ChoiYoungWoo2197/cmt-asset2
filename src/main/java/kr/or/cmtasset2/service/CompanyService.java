package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.Company;
import kr.or.cmtasset2.model.CompanyManager;

import java.util.List;

public interface CompanyService {

    List<Company> getCompanys();

    void createCompany(Company company, List<CompanyManager> companyManagers);

    Company getCompany(int companyKey);

    void updateCompany(Company company, List<CompanyManager> companyManagers);

    void deleteCompany(int companyKey);

}
