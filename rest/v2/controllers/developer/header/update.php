<?php
$conn = null;
$conn = checkDbConnection();
$HeaderContent = new HeaderContent($conn);
$error = [];
$returnData = [];
if (array_key_exists("headerid", $_GET)) {
    checkPayload($data);
    $isUpdateHeader = $data['isUpdateHeader'];
    if($isUpdateHeader=="textContent"){
        $HeaderContent->header_id = $_GET['headerid'];
        $HeaderContent->header_banner_title = checkIndex($data, "header_banner_title");
        $HeaderContent->header_banner_text = checkIndex($data, "header_banner_text");
        $HeaderContent->header_banner_btn_text = checkIndex($data, "header_banner_btn_text");
        $HeaderContent->header_banner_btn_link = checkIndex($data, "header_banner_btn_link");
        checkId($HeaderContent->header_id);
        // $header_banner_title_old = checkIndex($data, "header_banner_title_old");
        // compareName($HeaderContent, $header_banner_title_old, $HeaderContent->header_banner_title);
        $query = checkUpdateText($HeaderContent);
        returnSuccess($HeaderContent, "headerContent", $query);
    }
    if($isUpdateHeader=="imageContent"){
        $HeaderContent->header_id = $_GET['headerid'];
        $HeaderContent->header_banner_img = $data["header_banner_img"];
        checkId($HeaderContent->header_id);
        $query = checkUpdateImage($HeaderContent);
        returnSuccess($HeaderContent, "headerContent", $query);
    }
    if($isUpdateHeader=="logoContent"){
        $HeaderContent->header_id = $_GET['headerid'];
        $HeaderContent->header_logo = $data["header_logo"];
        checkId($HeaderContent->header_id);
        $query = checkUpdateLogo($HeaderContent);
        returnSuccess($HeaderContent, "headerContent", $query);
    }
}

checkEndpoint();
