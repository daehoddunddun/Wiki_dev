function join() {
	let userId = document.getElementById('memberId').value;
    userPw = document.getElementById('memberPassword').value;
    userEmail = document.getElementById('memberEmail').value;

	var params = {};
	params['memberId'] = userId;
	params['memberPassword'] = userPw;
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