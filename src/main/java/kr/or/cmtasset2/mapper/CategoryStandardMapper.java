package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.CategoryStandard;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryStandardMapper {

    List<CategoryStandard> getCategoryStandardsByCategoryKey(int categoryKey);

    void createCategoryStandard(CategoryStandard categoryStandard);

    void updateCategoryStandard(CategoryStandard categoryStandard);

    void deleteCategoryStandard(int categoryStandardKey);

}
