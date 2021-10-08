package kr.or.cmtasset2;

import kr.or.cmtasset2.model.Category;
import kr.or.cmtasset2.model.CategoryStandard;
import kr.or.cmtasset2.service.CategoryService;
import kr.or.cmtasset2.service.CategoryStandardService;
import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class CategoryTest extends CmtAsset2ApplicationTests {

//    @Autowired
//    CategoryService categoryService;
//
//    @Autowired
//    CategoryStandardService categoryStandardService;
//
//    @Test
//    @Order(1)
//    public void createCategory() {
//        Assertions.assertEquals(categoryService.getCategorys().size(), 0);
//
//        Category category = new Category();
////        category.setCategoryKey(1L);
//        category.setName("컴퓨터");
//        category.setDepth(1);
//        category.setUseYn("Y");
//        category.setCreateDate(new Date());
//        category.setCreateId("생성자아이디");
//
//        categoryService.createCategory(category);
//
//        Assertions.assertEquals(categoryService.getCategorys().size(), 1);
//    }
//
//    @Test
//    @Order(2)
//    public void createCategoryStandard() {
//        CategoryStandard categoryStandard = new CategoryStandard();
//        categoryStandard.setCategoryKey(1);
//        categoryStandard.setName("pc tag");
//        categoryStandard.setUseYn("Y");
//
//        categoryStandardService.createCategoryStandard(categoryStandard);
//    }
//
//    @Test
//    @Order(3)
//    public void readCategory() {
//        Category category = categoryService.getCategory(1);
//
//        Assertions.assertNotNull(category);
//    }
//
//    @Test
//    @Order(4)
//    public void updateCategory() {
//        Category category = categoryService.getCategory(1);
//        List<CategoryStandard> categoryStandardList = categoryStandardService.getCategoryStandardsByCategoryKey(1);
//
//        for (int i = 0; i < categoryStandardList.size(); i++) {
//            CategoryStandard categoryStandard = categoryStandardList.get(i);
//            categoryStandard.setUseYn("N");
//        }
//
//        CategoryStandard categoryStandard = new CategoryStandard();
//        categoryStandard.setCategoryKey(1);
//        categoryStandard.setName("시리얼 넘버");
//        categoryStandard.setUseYn("Y");
//        categoryStandardList.add(categoryStandard);
//
//        Assertions.assertEquals("컴퓨터", category.getName());
//
//        category.setName("컴퓨터 수정");
//        category.setUpdateDate(new Date());
//        category.setUpdateId("수정자아이디");
//
//        categoryService.updateCategory(category, categoryStandardList);
//
//        Assertions.assertEquals("컴퓨터 수정", category.getName());
//    }
    
}
