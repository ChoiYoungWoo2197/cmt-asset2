package kr.or.cmtasset2.mapper;

import kr.or.cmtasset2.model.Category;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CategoryMapper {

    List<Category> getCategorys();

    void createCategory(Category category);

    Category getCategory(int categoryKey);

    void updateCategory(Category category);

    void deleteCategory(int categoryKey);

    List<Category> getChildCategorys(int categoryKey);

}
