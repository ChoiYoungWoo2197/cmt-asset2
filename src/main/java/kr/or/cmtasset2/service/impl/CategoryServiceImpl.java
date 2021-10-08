package kr.or.cmtasset2.service.impl;

import kr.or.cmtasset2.mapper.CategoryMapper;
import kr.or.cmtasset2.mapper.CategoryStandardMapper;
import kr.or.cmtasset2.model.Category;
import kr.or.cmtasset2.model.CategoryStandard;
import kr.or.cmtasset2.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryMapper categoryMapper;

    private final CategoryStandardMapper categoryStandardMapper;

    @Override
    public List<Category> getCategorys() {
        return categoryMapper.getCategorys();
    }

    @Override
    public void createCategory(Category category) {
        categoryMapper.createCategory(category);
    }

    @Override
    public Category getCategory(int categoryKey) {
        return categoryMapper.getCategory(categoryKey);
    }

    @Override
    @Transactional
    public void updateCategory(Category category, List<CategoryStandard> categoryStandards) {
        categoryMapper.updateCategory(category);

        List<CategoryStandard> originCategoryStandards = categoryStandardMapper.getCategoryStandardsByCategoryKey(category.getCategoryKey());
        List<CategoryStandard> deleteCategoryStandards = new ArrayList<>(originCategoryStandards);
        deleteCategoryStandards.removeAll(categoryStandards);

        for (int i = 0; i < categoryStandards.size(); i++) {
            CategoryStandard categoryStandard = categoryStandards.get(i);

            //카테고리규격키&이름이 빈값일 경우 생성안되게 하는 조건 필요!!!!!

            if(categoryStandard.getCategoryStandardKey() != 0) {
                if("".equals(categoryStandard.getName())) {
                    categoryStandardMapper.deleteCategoryStandard(categoryStandard.getCategoryStandardKey());
                } else {
                    categoryStandardMapper.updateCategoryStandard(categoryStandard);
                }
            } else {
                if(! "".equals(categoryStandard.getName())) {
                    categoryStandardMapper.createCategoryStandard(categoryStandard);
                }
            }
        }

        for (int i = 0; i < deleteCategoryStandards.size(); i++) {
            CategoryStandard categoryStandard = deleteCategoryStandards.get(i);

            categoryStandardMapper.deleteCategoryStandard(categoryStandard.getCategoryStandardKey());
        }

    }

    @Override
    @Transactional
    public void deleteCategory(int categoryKey) {
        List<CategoryStandard> categoryStandards = categoryStandardMapper.getCategoryStandardsByCategoryKey(categoryKey);

        for (int i = 0; i < categoryStandards.size(); i++) {
            CategoryStandard categoryStandard = categoryStandards.get(i);

            categoryStandardMapper.deleteCategoryStandard(categoryStandard.getCategoryStandardKey());
        }

        categoryMapper.deleteCategory(categoryKey);
    }

    @Override
    public List<Category> getChildCategorys(int categoryKey) {
        return categoryMapper.getChildCategorys(categoryKey);
    }

}
