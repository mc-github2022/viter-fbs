<?php
$conn = null;
$conn = checkDbConnection();
$ServiceContent = new ServiceContent($conn);
$error = [];
$returnData = [];
if (array_key_exists("serviceid", $_GET)) {
    checkPayload($data);
    $ServiceContent->service_id = $_GET['serviceid'];
    $ServiceContent->service_title = checkIndex($data, "service_title");
    $ServiceContent->service_includes_a = checkIndex($data, "service_includes_a");
    $ServiceContent->service_includes_b = checkIndex($data, "service_includes_b");
    $ServiceContent->service_includes_c = checkIndex($data, "service_includes_c");
    $ServiceContent->service_includes_d = checkIndex($data, "service_includes_d");
    $ServiceContent->service_includes_e = checkIndex($data, "service_includes_e");
    $ServiceContent->service_includes_f = checkIndex($data, "service_includes_f");
    $ServiceContent->service_includes_g = checkIndex($data, "service_includes_g");
    $ServiceContent->service_includes_h = checkIndex($data, "service_includes_h");
    checkId($ServiceContent->service_id);
    // $header_banner_title_old = checkIndex($data, "header_banner_title_old");
    // compareName($HeaderContent, $header_banner_title_old, $HeaderContent->header_banner_title);
    $query = checkUpdate($ServiceContent);
    returnSuccess($ServiceContent, "serviceContent", $query);
}

checkEndpoint();
