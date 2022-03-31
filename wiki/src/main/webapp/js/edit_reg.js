//저장 기능
function save(){
	var editCode = $('#summernote').summernote('code');
	
	//데이터 저장 요청
	fetch(
		'http://localhost:8080/v1/saveEdit',
    {
        method: 'post',
        headers: { "Content-Type": "application/text; charset=UTF-8;" },
        body: JSON.stringify({content : editCode})
    })
    .then(function (response) {
        if (response.ok) {
        	return response.json();
        }
    })
    .then(function (data) {
   		console.log(data);
        if (data) 
    	{
        	//data.result : 0 이면 성공 , -1이면 실패
        	if(data.result == "0"){
        		alert('저장 되었습니다.');
        	}else if(data.result == "-1"){
        		alert(data.msg)
        	}
        
    	}
        else
		console.log("error");
     });
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