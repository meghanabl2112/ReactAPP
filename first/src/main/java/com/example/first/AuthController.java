  package com.example.first;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private Userservice userservice;

    @Autowired
    private Userrepository userrepository;
    
    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User existinguser = userservice.findByUsername(user.getUsername());
        if(existinguser!=null && passwordEncoder.matches(user.getPassword(), existinguser.getPassword())){
            return ResponseEntity.ok(" Login Successful");
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized Login");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        System.out.println("Attempting to register user: " + user.getUsername());
        if(userrepository.findByUsername(user.getUsername())!=null){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("User already exists");
        }
        
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userservice.saveUser(user);
        System.out.println("User registered successfully");
        return ResponseEntity.status(HttpStatus.CREATED).body("User registered successfully");
    }
    
}
