package com.funnyboy.it.common.base.vo;

import java.io.Serializable;

import com.funnyboy.it.common.utils.Constants;

public class ResponseVO implements Serializable {

	private static final long serialVersionUID = 4163339299698099076L;

	private String code = Constants.CODE_SUCCESS;

	private String message = Constants.MESSAGE_SUCCESS;

	private Object data;

	public ResponseVO() {

	}

	public ResponseVO(String code,String message) {
		this.code = code;
		this.message =message;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

}
