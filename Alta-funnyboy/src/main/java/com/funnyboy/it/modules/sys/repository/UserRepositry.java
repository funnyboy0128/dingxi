package com.funnyboy.it.modules.sys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

import com.funnyboy.it.modules.sys.model.UserModel;

@Transactional
public interface UserRepositry extends JpaRepository<UserModel,Long> {
	
	public List<UserModel> findByUserName(String userName);
	
}
