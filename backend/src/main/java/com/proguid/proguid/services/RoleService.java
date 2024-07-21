package com.proguid.proguid.services;

import com.proguid.proguid.entity.Role;
import com.proguid.proguid.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public Role save(Role role) {
        return roleRepository.save(role);
    }

    public Optional<Role> findByName(String name) {
        return roleRepository.findByName(name);
    }
}
