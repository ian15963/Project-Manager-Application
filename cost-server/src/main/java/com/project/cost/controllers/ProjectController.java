package com.project.cost.controllers;
import com.project.cost.models.Projects;
import com.project.cost.services.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    ProjectService projectService;

    @GetMapping
    public ResponseEntity<List<Projects>> getAllProjects(){
        return ResponseEntity.status(HttpStatus.OK).body(projectService.getAllProjects());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getProject(@PathVariable(value = "id") Long id){
        Optional<Projects> projectsOptional = projectService.findProjectById(id);
        if(!projectsOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("O projeto não foi encontrado");
        }
        return ResponseEntity.status(HttpStatus.OK).body(projectsOptional.get());
    }

    @PostMapping
    public ResponseEntity<Projects> createProject(@RequestBody Projects projects){

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(projects.getId()).toUri();
        return ResponseEntity.created(uri).body(projectService.save(projects));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> deleteProject(@PathVariable(value = "id") Long id){
        Optional<Projects> projectsOptional = projectService.findProjectById(id);
        if(!projectsOptional.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Projeto não encontrado");
        }
        projectService.deleteProject(id);
        return ResponseEntity.status(HttpStatus.OK).body("Projeto deletado com sucesso");
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateProject(@RequestBody Projects projects,
                                                  @PathVariable(value = "id") Long id){
        Optional<Projects> projectsOptional = projectService.findProjectById(id);
        if(!projectsOptional.isPresent()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Projeto não encontrado");
        }
        return ResponseEntity.status(HttpStatus.OK).body(projectService.save(projects));

    }
}
