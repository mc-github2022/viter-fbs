<?php
$conn = null;
$conn = checkDbConnection();
$FooterContent = new FooterContent($conn);

if (array_key_exists("contactid", $_GET)) {
    $FooterContent->contact_id = $_GET['contactid'];
    checkId($FooterContent->contact_id);

    $query = checkReadById($FooterContent);
    http_response_code(200);
    getQueriedData($query);
}

if (empty($_GET)) {
    $query = checkReadAll($FooterContent);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();
