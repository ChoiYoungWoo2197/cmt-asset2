package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.CompanyManager;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CompanyManagerMapper {

    List<CompanyManager> getCompanyManagersByCompanyKey(int companyKey);

    void createCompanyManager(CompanyManager companyManager);

    void updateCompanyManager(CompanyManager companyManager);

    void deleteCompanyManager(int companyManagerKey);

}
