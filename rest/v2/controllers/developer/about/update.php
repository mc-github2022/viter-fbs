<?php
$conn = null;
$conn = checkDbConnection();
$aboutContent = new AboutContent($conn);
$error = [];
$returnData = [];
if (array_key_exists("aboutid", $_GET)) {
    checkPayload($data);
    $aboutContent->about_id = $_GET['aboutid'];
    $aboutContent->about_title = checkIndex($data, "about_title");
    $aboutContent->about_subtitle = checkIndex($data, "about_subtitle");
    $aboutContent->about_text = checkIndex($data, "about_text");
    $aboutContent->about_btn_text = checkIndex($data, "about_btn_text");
    $aboutContent->about_btn_link = checkIndex($data, "about_btn_link");
    checkId($aboutContent->about_id);
    // $header_banner_title_old = checkIndex($data, "header_banner_title_old");
    // compareName($HeaderContent, $header_banner_title_old, $HeaderContent->header_banner_title);
    $query = checkUpdate($aboutContent);
    returnSuccess($aboutContent, "aboutContent", $query);
}

checkEndpoint();
