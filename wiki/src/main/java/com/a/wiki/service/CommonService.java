package com.a.wiki.service;

import org.apache.ibatis.session.SqlSession;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommonService {

	@Autowired
	SqlSession sql;
	
	//로그인 기능
	public JSONObject login(String jsonStr) {
		
		JSONObject result = new JSONObject();
		try {
			//jsonStr 을 JSONObject 로 변환
			JSONObject param = new JSONObject(jsonStr);
			
			int count = sql.selectOne("mybatis.selectMember", param.toMap());
			
			if(count == 0) {
				String msg = "아이디 혹은 비밀번호가 일치하지 않습니다.";
				result.put("msg", msg);
				result.put("result", "-1");
			}else {
				result.put("result", "0");
			}
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.toString());
		}
		
		return result;
	}
	
	//회원가입 기능
	public JSONObject join (String jsonStr) {
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
		
		return result;
	}
	
	
}
