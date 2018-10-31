package com.funnyboy.it.modules.sys.controller;

import io.swagger.annotations.Api;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.funnyboy.it.common.base.vo.ResponseVO;
import com.funnyboy.it.modules.sys.model.UserModel;
import com.funnyboy.it.modules.sys.service.UserService;

@RestController
@RequestMapping("/user")
@Api(value = "UserController User操作类",tags = "User接口") 
public class UserController {
	
	private static final Logger logger = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public ResponseVO create(@RequestBody UserModel userModel) {
		
		logger.debug("user create...");
		ResponseVO response = new ResponseVO();
		userService.saveOrUpdate(userModel);
		
		response.setData("OK");		
		return response;
	}
	
}
