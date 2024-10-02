package com.example.first;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class Userservice {

    @Autowired
    private Userrepository userrepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public void saveUser(User user){
       userrepository.save(user);
    }

    public User findByUsername(String username){
        return userrepository.findByUsername(username);
}
    
}
