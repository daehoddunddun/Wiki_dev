function login(){
    let userId = document.getElementById('memberId').value;
    userPw = document.getElementById('memberPassword').value;

    var params = {};
    params['memberId'] = userId;
    params['memberPassword'] = userPw;
    
    //데이터 요청
    fetch(
        'http://localhost:8080/v1/login',
        {
            method: 'put',
            headers: { "Content-Type": "application/text; charset=UTF-8;" },
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
                    alert('로그인 되었습니다.');
                    location.href="/";
                } else if (data.result == "-1") {
                    alert(data.msg)
                }
            }
            else
                console.log("error");
        });
}