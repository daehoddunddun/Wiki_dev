function join() {
	let userId = document.getElementById('memberId').value;
    userPw = document.getElementById('memberPassword').value;
    userPwChk = document.getElementById('memberPasswordCheck').value;
    userEmail = document.getElementById('memberEmail').value;

	var params = {};
	params['memberId'] = userId;
	params['memberPassword'] = userPw;
	params['memberPasswordCheck'] = userPwChk;
	params['memberEmail'] = userEmail;
	
    //데이터 요청
	fetch(
		'http://localhost:8080/v1/join',
		{
			method: 'post',
			headers: { 'Content-Type': 'application/text; charset=UTF-8;' },
			body: JSON.stringify(params)
		})
		.then(function (response) {
			if (response.ok) {
				return response.json();
			}
		})
		.then(function (data) {
			console.log(data);
			
			// 필수 항목 입력 확인
			if(userId == ""){
				alert('아이디는 필수 입력 항목입니다.');
				return false;
			}else if(userPw == ""){
				alert('비밀번호는 필수 입력 항목입니다.');
				return false;
			}else if(userPwChk == ""){
				alert('비밀번호 확인은 필수 입력 항목입니다.');
				return false;
			}
			
			// 비밀번호 일치 확인
			if(userPw !== userPwChk){
				alert('비밀번호가 일치하지 않습니다.');
				return false;
			}
			
			// 이메일 정규식 검증
			let chkEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
			if(userEmail !== "" && chkEmail.test(userEmail) == false ){
			    	  alert('잘못된 형식의 이메일입니다.');
			    	  return false;
			}
			
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
		})
}