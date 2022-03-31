package com.a.wiki.service;

import org.apache.ibatis.session.SqlSession;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EditService {

	@Autowired
	private SqlSession sql;
	
	public JSONObject saveEdit(String jsonStr) {
		JSONObject result = new JSONObject();
		
		try {
			JSONObject param = new JSONObject(jsonStr);
			sql.insert("edit.saveEdit", param.toMap());
			result.put("result", "0");
		} catch (Exception e) {
			// TODO: handle exception
			result.put("result", "-1");
			System.out.println(e.toString());
		}
		return result;
	}
}
