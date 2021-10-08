package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AssetChange { // 자산변경이력

    private int assetChangeKey;

    private String assetCode;

    private String division;

    private String content;

    private Date createDate;

}
