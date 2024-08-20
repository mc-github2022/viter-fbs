<?php
$conn = null;
$conn = checkDbConnection();
$headerContent = new HeaderContent($conn);

if (array_key_exists("headerid", $_GET)) {
    $headerContent->header_id = $_GET['headerid'];
    checkId($headerContent->header_id);

    $query = checkReadById($headerContent);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($headerContent);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
