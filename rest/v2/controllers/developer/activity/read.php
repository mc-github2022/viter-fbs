<?php
$conn = null;
$conn = checkDbConnection();
$activityContent = new ActivityContent($conn);

if (array_key_exists("activityid", $_GET)) {
    $activityContent->activity_id = $_GET['activityid'];
    checkId($activityContent->activity_id);

    $query = checkReadById($activityContent);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($activityContent);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
