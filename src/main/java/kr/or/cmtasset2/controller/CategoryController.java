package kr.or.cmtasset2.controller;

import kr.or.cmtasset2.model.Category;
import kr.or.cmtasset2.model.CategoryStandard;
import kr.or.cmtasset2.service.CategoryService;
import kr.or.cmtasset2.service.CategoryStandardService;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    private final CategoryStandardService categoryStandardService;

    @GetMapping
    public List<Category> list() {
        return categoryService.getCategorys();
    }

    @PostMapping
    public void create(@ModelAttribute Category category) {
        category.setCreateDate(new Date());
        //구현해야됨
//        category.setCreateId("");

        categoryService.createCategory(category);
    }

    @GetMapping(value = "/{categoryKey}")
    public Map<String, Object> read(@PathVariable("categoryKey") int categoryKey) {
        Category category = categoryService.getCategory(categoryKey);
        List<CategoryStandard> categoryStandards = categoryStandardService.getCategoryStandardsByCategoryKey(categoryKey);

        Map<String, Object> map = new HashMap<>();
        map.put("category", category);
        map.put("categoryStandards", categoryStandards);

        return map;
    }

    // 유효성체크 필요!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    @PutMapping(value = "/{categoryKey}")
    public String update(@PathVariable("categoryKey") int categoryKey, @ModelAttribute Category category,
                                 @RequestParam(value = "standards", defaultValue = "") String standards) throws ParseException {
        List<Category> childCategorys = categoryService.getChildCategorys(categoryKey);

        if("".equals(category.getName().trim()) || "".equals(category.getUseYn().trim())) {
            return "required";
        } else if (childCategorys.size() > 0 && "N".equals(category.getUseYn())) {
            return "child";
        } else {
            category.setUpdateDate(new Date());
            //구현해야됨
//        category.setUpdateId("");

            JSONParser jsonParser = new JSONParser();
            JSONArray jsonArray = (JSONArray) jsonParser.parse(standards);

            List<CategoryStandard> categoryStandards = new ArrayList<>();

            for (int i = 0; i < jsonArray.size(); i++) {
                JSONObject obj = (JSONObject) jsonArray.get(i);

                CategoryStandard categoryStandard = new CategoryStandard();
                categoryStandard.setCategoryStandardKey(Integer.parseInt(String.valueOf(obj.get("standardKey"))));
                categoryStandard.setCategoryKey(categoryKey);
                categoryStandard.setName(String.valueOf(obj.get("name")));

                categoryStandards.add(categoryStandard);
            }

            categoryService.updateCategory(category, categoryStandards);
            return "success";
        }
    }

    @DeleteMapping(value = "/{categoryKey}")
    public String delete(@PathVariable("categoryKey") int categoryKey) {
        List<Category> childCategorys = categoryService.getChildCategorys(categoryKey);

        if(childCategorys.size() == 0) {
            categoryService.deleteCategory(categoryKey);
            return "success";
        } else {
            return "fail";
        }
    }

}
