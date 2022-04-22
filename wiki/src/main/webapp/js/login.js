// 로그인 기능 
function login(){
	
	// 데이터 가져오기
	var params = loginDataGetter();

	// 유효성 검증
	if(!validData(params)){
		return;
	}

	// 데이터 전송
	sendData(params);
}
	


// --------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------


	
	
// 유효성 검증
function validData(params){
	// 필수 항목 입력 확인
	if(params['memberId']	== ""){
		alert('아이디는 필수 입력 항목입니다.');
		return false;
	}else if(params['memberPassword']	 == ""){
		alert('비밀번호는 필수 입력 항목입니다.');
		return false;
	}
	return true;
}

// 데이터 가져오기
function loginDataGetter(){
	var userId 	= document.getElementById('memberId').value;
    userPw		 	= document.getElementById('memberPassword').value;

    var params = {};
    params['memberId'] 			= userId;
    params['memberPassword'] 	= userPw;

    return params;
}

// 데이터 전송
function sendData(params){
	// 데이터 요청
    fetch(
        'http://localhost:8080/v1/login',
        {
            method	: 'put',
            headers	: { "Content-Type": "application/text; charset=UTF-8;" },
            body		: JSON.stringify(params)
        })
	    .then(function (response) {
	        if (response.ok) {
	            return response.json();
	        }
	    })
	    .then(function (data) {
			// 전송 후 처리
	    	requestAfter(data);
	    }) 
}


// 전송 후 처리 
function requestAfter(data){
	// data.result : 0 이면 성공 , -1이면 실패
	if (data.result == "0") {
		alert('로그인 되었습니다.');
		location.href="/";
	} else if (data.result == "-1") {
		alert(data.msg)
	}
}