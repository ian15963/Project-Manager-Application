package com.project.cost.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.Data;

import java.io.Serializable;


@Entity
@Data
@IdClass(ServicePk.class)
public class Services implements Serializable {


    private static final long serialVersionUID = 1L;

    @Id
    private String name;
    @Id
    private Integer cost;
    @Id
    private String description;
}
