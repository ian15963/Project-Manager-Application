package com.project.cost.services;

import com.project.cost.models.Category;
import com.project.cost.repositories.CategoryRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    @Transactional
    public Category createCategory(Category category){
        return categoryRepository.save(category);
    }

}
