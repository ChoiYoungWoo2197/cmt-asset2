package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Asset { // 자산정보

    private String code;

    private int categoryKey;

    private int companyKey;

    private String employeeId;

    private int departmentKey;

    private String division;

    private String name;

    private Date buyDate;

    private Date receiveDate;

    private int price;

    private String remark;

    private String useYn;

    private Date createDate;

    private String createId;

    private Date updateDate;

    private String updateId;

}
