<?php
$conn = null;
$conn = checkDbConnection();
$ActivityContent = new ActivityContent($conn);
$error = [];
$returnData = [];
if (array_key_exists("activityid", $_GET)) {
    checkPayload($data);
    $ActivityContent->activity_id = $_GET['activityid'];
    $ActivityContent->activity_title = checkIndex($data, "activity_title");
    $ActivityContent->activity_text = checkIndex($data, "activity_text");
    $ActivityContent->activity_btn_text = checkIndex($data, "activity_btn_text");
    $ActivityContent->activity_btn_link = checkIndex($data, "activity_btn_link");
    checkId($ActivityContent->activity_id);
    // $header_banner_title_old = checkIndex($data, "header_banner_title_old");
    // compareName($ActivityContent, $header_banner_title_old, $ActivityContent->header_banner_title);
    $query = checkUpdate($ActivityContent);
    returnSuccess($ActivityContent, "activityContent", $query);
}

checkEndpoint();
