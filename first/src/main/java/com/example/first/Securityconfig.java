package com.example.first;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
@EnableWebSecurity
public class Securityconfig {

    @SuppressWarnings( "deprecation")
    @Bean
    public SecurityFilterChain securityfilterchain(HttpSecurity http) throws Exception {
        http
        .csrf().disable()
        .authorizeRequests(authorizeRequests -> authorizeRequests
                        .requestMatchers("/api/login","/api/register").permitAll()
                        .anyRequest().authenticated()
            )
             .formLogin(formLogin -> formLogin
                .loginPage("/login")
                .defaultSuccessUrl("/dashboard",true)
                .permitAll()
            )
            .logout(logout -> logout
            .logoutSuccessUrl("/login?logout=true")
            .permitAll()
            );
            
                        
        
                
        return http.build();
    }
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                    .allowedOrigins("http://localhost:3000") // Replace with your frontend URL
                    .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                    .allowedHeaders("*");
            }
        };
    }
    
}
