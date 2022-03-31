package com.a.wiki;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.a.wiki.service.CommonService;

@Controller
public class CommonController {

	@Autowired
	CommonService comService;
	
	//로그인 화면 호출
	@RequestMapping(value="/login")
	public String login() {
		
		return "login";
	}
	
	//로그인 요청
	@ResponseBody
	@RequestMapping(value="/v1/login", produces="application/text; charset=utf8;", method=RequestMethod.PUT)
	public String loginAction(@RequestBody String jsonStr) {
		
		return comService.login(jsonStr).toString();
	}
	
	
	//회원가입 화면 호출
	@RequestMapping(value="/join")
	public String join() {
		
		return "join";
	}
	
	//회원가입 요청
	@ResponseBody
	@RequestMapping(value="/v1/join", produces="application/text; charset=utf8;", method=RequestMethod.POST)
	public String insertMember(@RequestBody String jsonStr) {
		
		return comService.join(jsonStr).toString();
	}
	
}
