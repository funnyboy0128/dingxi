package com.funnyboy.it.modules.sys.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.funnyboy.it.modules.sys.model.UserModel;
import com.funnyboy.it.modules.sys.repository.UserRepositry;
import com.funnyboy.it.modules.sys.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepositry userRepositry;

	@Override
	public void saveOrUpdate(UserModel userModel) {

		userRepositry.save(userModel);
	}

}
