package com.funnyboy.it.modules.sys.service;

import com.funnyboy.it.modules.sys.model.UserModel;


/**
 * @author funnyboy0128
 *  
 */
public interface UserService {
	
	/**
	 * 保存或更新
	 */
	public void saveOrUpdate(UserModel userModel);

}
