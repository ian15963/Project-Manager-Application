package com.project.cost.repositories;

import com.project.cost.models.ServicePk;
import com.project.cost.models.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicesRepository extends JpaRepository<Services, ServicePk> {


    void delete(Services services);
}
