package com.project.cost.controllers;

import com.project.cost.models.Services;
import com.project.cost.services.ServicesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/services")
@CrossOrigin(origins = "*")
public class ServicesController {

    @Autowired
    ServicesService servicesService;

    @GetMapping
    public ResponseEntity<List<Services>> getAllServices(){
        return ResponseEntity.status(HttpStatus.OK).body(servicesService.getAllServices());
    }

    @PostMapping
    public ResponseEntity<Services> createService(@RequestBody Services services){
        return ResponseEntity.status(HttpStatus.OK).body(servicesService.createService(services));
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteServices(@RequestBody Services services){
        servicesService.deleteServices(services);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
