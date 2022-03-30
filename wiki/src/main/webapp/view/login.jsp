<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WIKI</title>
    <link rel="icon" href="../images/logo_hd.png" type="image/x-icon" />
    <link rel="stylesheet" href="../plugins/axicon/axicon.min.css" />
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/sub.css">
</head>

<body>
    <!-- Header -->
<header class="flex_wrap f_sb">
    <div class="flex_wrap f_sb">
        <h1 class="logo"><a href="#"><img src="../images/logo_hd.png" alt=""></a></h1>
        <input type="text" class="search">
    </div>
    <div class="btn_more_wrap">
        <button class="btn_more"></button>
        <ul>
            <li><a href="#">버튼1</a></li>
            <li><a href="#">버튼2</a></li>
            <li><a href="#">버튼3</a></li>
            <li><a href="#">버튼4</a></li>
        </ul>
    </div>
</header>
<!-- // Header -->
    <!-- Contents -->
    <ul class="snb" role="navigation">
    <li>
        <a href="#">MENU1</a>
        <ul class="sub">
            <li><a href="#">menu1-1</a></li>
            <li><a href="#">menu1-2</a></li>
        </ul>
    </li>
    <li>
        <a href="#">MENU2</a>
        <ul class="sub">
            <li><a href="#">menu2-1</a></li>
            <li><a href="#">menu2-2</a></li>
        </ul>
    </li>
    <li>
        <a href="#">MENU3</a>
        <ul class="sub">
            <li><a href="#">menu3-1</a></li>
            <li><a href="#">menu3-2</a></li>
        </ul>
    </li>
</ul>
    <div class="wrap">
        <h2 class="tit_join">로그인</h2>
        <ul class="join_wrap">
            <li>
                <label for="">사용자 이름</label>
                <input type="text">
            </li>
            <li>
                <label for="">비밀번호</label>
                <input type="password">
            </li>
            <li>
                <button type="button" class="btn btn_blue">계정 만들기</button>
            </li>
            <li>
                <button type="button" class="btn btn_blue">비밀번호 찾기</button>
            </li>
            <li>
                <button type="button" class="btn btn_blue">회원가입</button>
            </li>
        </ul>
    </div>
    <!-- // Contents -->
</body>

	<script type="text/javascript">
		
		let params = {
		    '_id': 'test.getPlayersWhere2',
		    'age': 10,
		    'name': '%'
		};
		
		//1. url (요청하고자하는 주소)
		//2. 방식( protocol, )
		fetch(
			'http://localhost:8080/json',
	    {
	        method: 'put',
	        headers: { "Content-Type": "application/json" },
	        body: JSON.stringify(params)
	    })
	    .then(function (response) {
	        if (response.ok) {
	        	return response.json();
	        }
	    })
	    .then(function (data) {
	    	console.log('2.');
       		console.log(data);
	        if (data) 
        	{
	        	//data.result : 0 이면 성공 , -1이면 실패
	        	if(data.result == "0"){
	        		alert('로그인 되었습니다.');
	        	}else if(data.result == "-1"){
	        		alert(data.msg)
	        	}
	        
        	}
	        else
			console.log("error");
	     });
		
	</script>
</html>
