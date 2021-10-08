package kr.or.cmtasset2.service;

import kr.or.cmtasset2.model.Category;
import kr.or.cmtasset2.model.CategoryStandard;

import java.util.List;

public interface CategoryService {

    List<Category> getCategorys();

    void createCategory(Category category);

    Category getCategory(int categoryKey);

    void updateCategory(Category category, List<CategoryStandard> categoryStandards);

    void deleteCategory(int categoryKey);

    List<Category> getChildCategorys(int categoryKey);

}
