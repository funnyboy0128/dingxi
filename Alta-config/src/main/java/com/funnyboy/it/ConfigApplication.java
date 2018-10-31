package com.funnyboy.it;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

/**
 * 启动类
 * @author funnyboy0128
 *
 */
@SpringBootApplication
@EnableConfigServer    //开启config server支持
@EnableEurekaClient    //开启Eureka客户端支持
public class ConfigApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigApplication.class, args);
	}
}
