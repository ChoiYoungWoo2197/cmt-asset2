package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AssetUse { // 자산사용현황

    private String assetUseKey;

    private String assetCode;

    private int departmentKey;

    private String employeeId;

    private String division;

    private Date receiveDate;

    private Date returnDate;

    private String remark;

    private String useYn;

    private Date createDate;

    private String createId;

    private Date updateDate;

    private String updateId;

}
