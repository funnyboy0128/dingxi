package com.funnyboy.it.common.base.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

/**
 * @author funnyboy0128
 *
 */
@MappedSuperclass
public class BaseModel implements Serializable {

	private static final long serialVersionUID = -8258655466229214131L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "CREATE_DATE")
	private Date createDate = new Date();
	
	@Column(name = "UPDATE_DATE")
	private Date updateDate = new Date();
	
	@Column(name = "CREATE_BY")
	private String createBy;
	
	@Column(name = "UPDATE_BY")
	private String updateBy;
	
	@Column(name = "STATUS")
	private String status="1";

	public Date getCreateDate() {
		return createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getCreateBy() {
		return createBy;
	}

	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}

	public String getUpdateBy() {
		return updateBy;
	}

	public void setUpdateBy(String updateBy) {
		this.updateBy = updateBy;
	}
}
