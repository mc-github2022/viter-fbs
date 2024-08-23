<?php
$conn = null;
$conn = checkDbConnection();
$ServiceContent = new ServiceContent($conn);

if (array_key_exists("serviceid", $_GET)) {
    $ServiceContent->service_id = $_GET['serviceid'];
    checkId($ServiceContent->service_id);

    $query = checkReadById($ServiceContent);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($ServiceContent);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
