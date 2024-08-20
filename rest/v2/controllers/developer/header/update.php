<?php
$conn = null;
$conn = checkDbConnection();
$HeaderContent = new HeaderContent($conn);
$error = [];
$returnData = [];
if (array_key_exists("headerid", $_GET)) {
    checkPayload($data);
    $HeaderContent->header_id = $_GET['headerid'];
    $HeaderContent->header_banner_title = checkIndex($data, "header_banner_title");
    $HeaderContent->header_banner_text = checkIndex($data, "header_banner_text");
    $HeaderContent->header_banner_btn_text = checkIndex($data, "header_banner_btn_text");
    $HeaderContent->header_banner_btn_link = checkIndex($data, "header_banner_btn_link");
    checkId($HeaderContent->header_id);
    $header_banner_title_old = checkIndex($data, "header_banner_title_old");
    compareName($HeaderContent, $header_banner_title_old, $HeaderContent->header_banner_title);
    $query = checkUpdate($HeaderContent);
    returnSuccess($HeaderContent, "headerContent", $query);
}

checkEndpoint();
