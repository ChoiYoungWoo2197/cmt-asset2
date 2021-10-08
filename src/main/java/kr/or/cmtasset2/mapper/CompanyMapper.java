package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Company;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyMapper {

    List<Company> getCompanys();

    void createCompany(Company company);

    Company getCompany(int companyKey);

    void updateCompany(Company company);

    void deleteCompany(int companyKey);

}
