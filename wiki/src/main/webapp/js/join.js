//회원가입 기능
function join() {
	
	//데이터 가져오기
	var params = joinDataGetter();
    
	//유효성 검증
	if(!validData(params)){
		return;
	}
	
	//데이터 전송
	sendData(params);
}



// --------------------------------------------------------
//--------------------------------------------------------
//--------------------------------------------------------



//유효성 검증
function validData(params){
	
	// 필수 항목 입력 확인
	if(params['memberId']	== ""){
		alert('아이디는 필수 입력 항목입니다.');
		return false;
	}else if(params['memberPassword']	 == ""){
		alert('비밀번호는 필수 입력 항목입니다.');
		return false;
	}else if(params['memberPasswordCheck'] 	== ""){
		alert('비밀번호 확인은 필수 입력 항목입니다.');
		return false;
	}
	
	// 비밀번호 일치 확인
	if(params['memberPassword'] !== params['memberPasswordCheck']){
		alert('비밀번호가 일치하지 않습니다.');
		return false;
	}
	
	// 이메일 정규식 검증
	let chkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
	if(params['memberEmail'] !== "" && chkEmail.test(params['memberEmail']) == false ){
	    	  alert('잘못된 형식의 이메일입니다.');
	    	  return false;
	}
	return true;
}

//입력데이터 가져오기
function joinDataGetter(){
	var userId 	= document.getElementById('memberId').value;
    userPw 			= document.getElementById('memberPassword').value;
    userPwChk 	= document.getElementById('memberPasswordCheck').value;
    userEmail 		= document.getElementById('memberEmail').value;

	var params = {};
	params['memberId'] 						= userId;
	params['memberPassword'] 				= userPw;
	params['memberPasswordCheck'] 	= userPwChk;
	params['memberEmail'] 					= userEmail;
	
	return params;
}

//데이터 전송
function sendData(params){
	//데이터 요청
	fetch(
		'http://localhost:8080/v1/join',
		{
			method	: 'post',
			headers	: { 'Content-Type': 'application/text; charset=UTF-8;' },
			body		: JSON.stringify(params)
		})
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}
		})
		.then(function (data) {
			
			//전송 후처리
			requestAfter(data);
		})
}

//전송 후처리
function requestAfter(data){
	if (data) {
        //data.result : 0 이면 성공 , -1이면 실패
		if (data.result == "0") {
			alert('회원가입 되었습니다.');
			location.href="/login";
		} else if (data.result == "-1") {
			alert(data.msg);
		}
	} else {
		alert('error');
	}
}
