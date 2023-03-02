package com.project.cost.models;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;


import java.util.List;


@Entity
@Data
public class Projects implements Serializable {

    private static final long serialVersionUID = 1L;


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Integer budget;


    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(nullable = false)
    private Integer cost = 0;

    @OneToMany
    @JoinColumn(name = "service_id")
    private List<Services> service;

}
