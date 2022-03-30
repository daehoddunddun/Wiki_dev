package com.a.wiki;

import java.util.HashMap;
import java.util.Map;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @RequestMapping(value="/")
    public String index(Model model){
        model.addAttribute("test", "Hello world! This is Spring MVC project by using IntelliJ");
        return "index";
    }

    @ResponseBody
    @RequestMapping(value="/json", produces = "application/json")
    public String json(@RequestBody String jsonData){
    	
    	JSONObject req =  new JSONObject(jsonData);
    	
//    	System.out.println(req.get("age"));
//    	
        Map<String, String> map = new HashMap<String, String>();
        map.put("test", "Hello world!(/json) This is Spring MVC project by using IntelliJ");
        map.put("result", "-1");
        map.put("msg", "비밀번호가 틀렸습니다.");
        
    	
        JSONObject json =  new JSONObject(map);
        return json.toString();
    }
    
    @ResponseBody
    @RequestMapping(value="/json2", produces = "application/json")
    public String json2(@RequestBody String jsonData){
    	
    	Map<String, String> map = new HashMap<String, String>();
    	
    	
    	
    	JSONObject json =  new JSONObject(map);
    	return json.toString();
    }

}