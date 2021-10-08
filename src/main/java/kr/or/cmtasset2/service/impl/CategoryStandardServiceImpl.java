package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.CategoryStandardMapper;
import kr.or.cmtasset2.model.CategoryStandard;
import kr.or.cmtasset2.service.CategoryStandardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryStandardServiceImpl implements CategoryStandardService {

    private final CategoryStandardMapper categoryStandardMapper;

    @Override
    public List<CategoryStandard> getCategoryStandardsByCategoryKey(int categoryKey) {
        return categoryStandardMapper.getCategoryStandardsByCategoryKey(categoryKey);
    }

    @Override
    public void createCategoryStandard(CategoryStandard categoryStandard) {
        categoryStandardMapper.createCategoryStandard(categoryStandard);
    }

    @Override
    public void updateCategoryStandard(CategoryStandard categoryStandard) {
        categoryStandardMapper.updateCategoryStandard(categoryStandard);
    }

    @Override
    public void deleteCategoryStandard(int categoryStandardKey) {
        categoryStandardMapper.deleteCategoryStandard(categoryStandardKey);
    }

}
