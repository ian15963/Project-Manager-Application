package com.project.cost.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ServicePk implements Serializable {

    private static final long serialVersionUID = 1L;

    private String name;
    private Integer cost;
    private String description;
}
