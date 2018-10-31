package com.funnyboy.it.common.base.service;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.funnyboy.it.common.base.model.BaseModel;

/**
 * @author funnyboy0128
 *  
 */
@Service
public class BaseService<T extends JpaRepository,E extends BaseModel> {
	
	@Autowired
	protected EntityManager manager;

	protected Object executeSql(String sql){
		return null;
	}
}
