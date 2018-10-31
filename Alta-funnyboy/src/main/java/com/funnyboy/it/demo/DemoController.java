package com.funnyboy.it.demo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 示例
 * @author funnyboy0128
 *
 */
@RestController
@RequestMapping("/demo")
public class DemoController {

	@RequestMapping(value = "/test", method = RequestMethod.GET)
	public Map<String,String> test() {
	
		Map<String,String> result = new HashMap<String,String>();
		result.put("message", "successful");
		
		return result;
	}
}
