//저장 기능
function save(){
	var editCode = $('#summernote').summernote('code');	//에디터 입력내용
	
	//데이터 저장 요청
	
}


window.addEventListener('DOMContentLoaded', function()
{
	//에디터 초기화
	$('#summernote').summernote({
	    placeholder: '',
	    tabsize: 2,
	    height: 300
	  });
});