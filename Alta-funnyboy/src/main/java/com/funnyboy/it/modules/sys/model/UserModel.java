package com.funnyboy.it.modules.sys.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.funnyboy.it.common.base.model.BaseModel;

/**
 * @author funnyboy0128
 *  用户实体类
 *
 */
@Entity
@Table(name = "user_t")
public class UserModel extends BaseModel{

	private static final long serialVersionUID = -6165860367686991132L;

	@Column(name = "USER_NAME", columnDefinition="VARCHAR(255)")
	private String userName;

	@Column(name = "REGION", columnDefinition="VARCHAR(255)")
	private String region;

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

}
