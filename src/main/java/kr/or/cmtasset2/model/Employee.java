package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee { // 직원

    private String id;

    private int departmentKey;

    private String authorityCode;

    private String password;

    private String name;

    private String email;

    private String phone;

    private String birth;

    private String position;

    private String useYn;

    private Date createDate;

    private String createId;

    private Date updateDate;

    private String updateId;

    //
    private String departmentName;

    private String authorityName;

    private String createDateFormat;

}
