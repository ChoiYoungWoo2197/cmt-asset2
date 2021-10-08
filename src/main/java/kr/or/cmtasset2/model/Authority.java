package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor
public class Authority { // 권한

    private String code;

    private String name;

    private String remark;

    private String useYn;

    private Date createDate;

    private String createId;

    private Date updateDate;

    private String updateId;

}
