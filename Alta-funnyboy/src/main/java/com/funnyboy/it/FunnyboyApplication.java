package com.funnyboy.it;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

/**
 * 启动类
 * @author funnyboy0128
 *
 */
@EnableScheduling
@ComponentScan
@SpringBootApplication
@EnableEurekaClient
public class FunnyboyApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(FunnyboyApplication.class, args);
	}
}
