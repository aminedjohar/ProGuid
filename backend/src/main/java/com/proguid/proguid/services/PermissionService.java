package com.proguid.proguid.services;

import com.proguid.proguid.entity.Permission;
import com.proguid.proguid.repository.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PermissionService {
    @Autowired
    private PermissionRepository permissionRepository;

    public Permission save(Permission permission) {
        return permissionRepository.save(permission);
    }

    public Optional<Permission> findByName(String name) {
        return permissionRepository.findByName(name);
    }
}

