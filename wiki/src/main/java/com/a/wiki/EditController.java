package com.a.wiki;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.a.wiki.service.EditService;

@Controller
public class EditController {

	@Autowired
	EditService editService;
	
	//글등록 화면 호출
	@RequestMapping(value="/editReg")
	public String editReg() {
		
		return "edit_reg";
	}
	
	//글등록 화면 호출
	@ResponseBody
	@RequestMapping(value="v1/saveEdit", produces="application/text; charset=utf8;", method=RequestMethod.POST)
	public String saveEdit(@RequestBody String jsonStr) {
		
		return editService.saveEdit(jsonStr).toString();
	}
}
