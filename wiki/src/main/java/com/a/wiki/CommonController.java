package com.a.wiki;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class CommonController {

	//로그인 화면 호출
	@RequestMapping(value="/login")
	public String login() {
		
		return "login";
	}
	
	//로그인 기능
	@ResponseBody
	@RequestMapping(value="/v1/login")
	public String loginAction(@RequestBody String jsonStr) {
		
		JSONObject result = new JSONObject();
		result.put("data", jsonStr);
		
		try {
			JSONObject param = new JSONObject(jsonStr);
			
			if("admin".equals(param.get("memberId"))) {
				result.put("result", "-1");
				result.put("msg", "사용 할 수 없는 사용자이름 입니다.");
			}else {
				result.put("result", "0");
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			result.put("result", "-1");
			result.put("msg", "통신오류");
		}
		
		return result.toString();
	}
	
	
	//회원가입 화면 호출
	@RequestMapping(value="/join")
	public String join() {
		
		return "join";
	}
	
	//회원가입 기능
	@ResponseBody
	@RequestMapping(value="/v1/join")
	public String insertMember(@RequestBody String jsonStr) {
		
		JSONObject result = new JSONObject();
		
		try {
			JSONObject param = new JSONObject(jsonStr);
			
			if("admin".equals(param.get("memberId"))) {
				result.put("result", "-1");
				result.put("msg", "사용 할 수 없는 사용자이름 입니다.");
			}else {
				result.put("result", "0");
			}
			
		} catch (Exception e) {
			// TODO: handle exception
			result.put("result", "-1");
			result.put("msg", "통신오류");
		}
		
		
		
		return result.toString();
	}
	
}
