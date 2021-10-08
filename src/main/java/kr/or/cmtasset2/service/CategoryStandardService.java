package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.CategoryStandard;

import java.util.List;

public interface CategoryStandardService {

    List<CategoryStandard> getCategoryStandardsByCategoryKey(int categoryKey);

    void createCategoryStandard(CategoryStandard categoryStandard);

    void updateCategoryStandard(CategoryStandard categoryStandard);

    void deleteCategoryStandard(int categoryStandardKey);

}
