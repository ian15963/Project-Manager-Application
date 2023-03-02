package com.project.cost.repositories;

import com.project.cost.models.Projects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends JpaRepository<Projects, Long> {

    void deleteById(Long id);

    Optional<Projects> findById(Long id);


}
