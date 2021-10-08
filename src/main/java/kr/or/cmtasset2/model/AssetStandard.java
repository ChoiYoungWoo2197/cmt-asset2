package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AssetStandard { // 자산상세규격

    private String assetCode;

    private int categoryStandardKey;

    private String content;

}
