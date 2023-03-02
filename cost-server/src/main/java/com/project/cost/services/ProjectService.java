package com.project.cost.services;

import com.project.cost.models.Projects;
import com.project.cost.repositories.ProjectRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public List<Projects> getAllProjects(){
        return projectRepository.findAll();
    }

    @Transactional
    public Projects save(Projects project){
        return projectRepository.save(project);
    }

    @Transactional
    public void deleteProject(Long id){
        projectRepository.deleteById(id);
    }

    public Optional<Projects> findProjectById(Long id){
        return projectRepository.findById(id);
    }




}
