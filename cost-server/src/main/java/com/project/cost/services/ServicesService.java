package com.project.cost.services;

import com.project.cost.models.Services;
import com.project.cost.repositories.ServicesRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ServicesService {

    @Autowired
    ServicesRepository servicesRepository;

    public List<Services> getAllServices(){
        return servicesRepository.findAll();
    }

    @Transactional
    public Services createService(Services services){
        return servicesRepository.save(services);
    }


    @Transactional
    public void deleteServices(Services services){
        servicesRepository.delete(services);
    }

}
