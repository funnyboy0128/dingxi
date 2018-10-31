package com.funnyboy.it;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

/**
 *  @author funnyboy0128
 *  
 *  开启EurekaServer支持
 *  @EnableEurekaServer
 *
 */
@SpringBootApplication
@EnableEurekaServer
public class EurekaApplication { 
	public static void main(String[] args) {
		SpringApplication.run(EurekaApplication.class, args);
		//new SpringApplicationBuilder(EurekaApplication.class).web(true).run(args);
	}
}
