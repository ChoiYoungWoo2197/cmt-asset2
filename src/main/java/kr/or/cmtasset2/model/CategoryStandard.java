package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryStandard { // 카테고리별 규격

    private int categoryStandardKey;

    private int categoryKey;

    private String name;

//    private String useYn;

}
