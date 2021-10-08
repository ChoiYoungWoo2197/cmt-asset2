package kr.or.cmtasset2.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AssetRental { // 렌탈정보

    private int assetRentalKey;

    private String assetCode;

    private Date periodStartDate;

    private Date periodEndDate;

    private int count;

    private Date applyDate;

    private Date returnDate;

}
