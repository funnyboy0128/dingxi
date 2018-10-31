package com.funnyboy.it.common.base.vo;

import java.io.Serializable;

public class RequestVO implements Serializable {

	private static final long serialVersionUID = -3708135141176452986L;
	
	//报表类型
	private String type;
	//开始时间
	private String startDate;
	//结束时间
	private String endDate;
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	
}
