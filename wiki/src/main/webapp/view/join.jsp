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
    <script src="../js/join.js"></script>
</head>

<body>
    <!-- Header -->
<header class="flex_wrap f_sb">
    <div class="flex_wrap f_sb">
        <h1 class="logo"><a href="/"><img src="../images/logo_hd.png" alt=""></a></h1>
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
        <h2 class="tit_join">회원가입</h2>
        <ul class="join_wrap">
            <li>
                <label for="">사용자 이름</label>
                <input type="text" id="memberId">
            </li>
            <li>
                <label for="">비밀번호</label>
                <input type="password" id="memberPassword">
            </li>
            <li>
                <label for="">비밀번호 확인</label>
                <input type="password" id="memberPasswordCheck">
            </li>
            <li>
                <label for="">이메일</label>
                <input type="text" id="memberEmail">
            </li>
            <li>
                <button type="button" class="btn btn_blue" onclick="join();">계정 만들기</button>
            </li>
        </ul>
    </div>
    <!-- // Contents -->
</body>

</html>