//저장 기능
// 다 하고 리팩토링 해보자!
function save(){

	// 데이터 가져오기
	var editCode 	= $('#summernote').summernote('code'); //에디터 입력내용
	editCodeInner 	= editCode.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
	
	var params = {};
	params['content'] = editCode;
	
	// 유효성 검증
	if(editCodeInner == ""){
		alert('글 내용을 입력해주세요.');
		return;
	}else{
		alert('텍스트가 있는 상태');
	}
	
	//데이터 저장 요청
	fetch(
			'http://localhost:8080/v1/saveEdit',
			{
				method	:'post',
				headers: { 'Content-Type': 'application/text; charset=UTF-8;' },
				body		: JSON.stringify(params)
			})
			.then(function (response) {
			if (response.ok) {
				return response.json();
				}
			})
			.then(function (data) {
				console.log(params['content']);
				console.log(data.result);
				// data.result : 0이면 성공, -1이면 실패
				if(data){
					if(data.result == "0"){
						alert('성공');
					}else if(data.result == "-1"){
						alert('실패');
					}
				}else{
					alert('error');
				}
			})
} 

window.addEventListener('DOMContentLoaded', function(){
	
	//에디터 초기화
	$('#summernote').summernote({
		placeholder: '',
		tabsize: 2
	})
});

