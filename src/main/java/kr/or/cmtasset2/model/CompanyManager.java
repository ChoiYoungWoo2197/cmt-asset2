package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyManager { // 업체담당자

    private int companyManagerKey;

    private int companyKey;

    private String name;

    private String phone;

    private String directNumber;

//    private String useYn;

}
