package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Company { // 업체

    private int companyKey;

    private String division;

    private String name;

    private String phone;

    private String remark;

    private String useYn;

    private Date createDate;

    private String createId;

    private Date updateDate;

    private String updateId;

}
