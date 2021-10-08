package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Company;
import kr.or.cmtasset2.service.CompanyManagerService;
import kr.or.cmtasset2.service.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    private final CompanyManagerService companyManagerService;

    @GetMapping
    public List<Company> list() {
        // 리스트에 manager 정보도 같이 담겨야됨
        return companyService.getCompanys();
    }

    @PostMapping
    public void createCompany(@ModelAttribute Company company) {
        company.setCreateDate(new Date());
        //구현해야됨
//        company.setCreateId("");

//        companyService.createCompany(company);
    }


}
