<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WIKI</title>
    <link rel="icon" href="../images/logo_hd.png" type="image/x-icon" />
        <!-- include libraries(jQuery, bootstrap) -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!-- include summernote css/js -->
    <link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"></script>
    
    <link rel="stylesheet" href="../plugins/axicon/axicon.min.css" />
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="../css/sub.css">
    <script src="../js/edit_reg.js"></script>
    
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
        <div>
        	<button type="button" class="btn btn_blue" style="float: right;" onclick="save();">저장</button>
        	<h2 class="tit_join">글쓰기</h2>
        </div                                                                                                             >
        <div class="summernote_wrap">
        	<div id="summernote"></div>
        </div>
    </div>
    <!-- // Contents -->
</body>

</html>
