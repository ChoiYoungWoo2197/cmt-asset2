package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Permission { // 허가

    private int permissionKey;

    private String name;

    private int parentKey;

    private String remark;

    private Date createDate;

    //
    private String childNames;

    private String childKeys;

}
