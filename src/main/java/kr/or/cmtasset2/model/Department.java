package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Department { // 부서

    private String code;

    private String name;

    private String parentCode;

    private int depth;

    private String remark;

    private String useYn;

    private Date createDate;

    private String createId;

    private Date updateDate;

    private String updateId;

    //
    private String parentName;

    private String createDateFormat;

}
