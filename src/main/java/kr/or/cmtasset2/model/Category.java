package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Category { // 카테고리

    private int categoryKey;

    private String name;

    private int parentKey;

    private int depth;

    private String remark;


    private String useYn;

    private Date createDate;

    private String createId;

    private Date updateDate;

    private String updateId;

    //
    private String parentName;

    private String standards;

    private String createDateFormat;

}
