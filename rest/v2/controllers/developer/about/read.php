<?php
$conn = null;
$conn = checkDbConnection();
$aboutContent = new AboutContent($conn);

if (array_key_exists("aboutid", $_GET)) {
    $aboutContent->about_id = $_GET['aboutid'];
    checkId($aboutContent->about_id);

    $query = checkReadById($aboutContent);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($aboutContent);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
