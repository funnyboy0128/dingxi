package com.funnyboy.it;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;

/**
 * 启动类
 * @author funnyboy0128
 *
 */
@SpringBootApplication
@EnableEurekaClient //开启Eureka客户端支持
@EnableZuulProxy  //开启代理网关
public class ApigatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApigatewayApplication.class, args);
	}
	
}
