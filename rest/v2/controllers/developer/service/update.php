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
    $ServiceContent->service_includes_a = $data["service_includes_a"];
    $ServiceContent->service_includes_b = $data["service_includes_b"];
    $ServiceContent->service_includes_c = $data["service_includes_c"];
    $ServiceContent->service_includes_d = $data["service_includes_d"];
    $ServiceContent->service_includes_e = $data["service_includes_e"];
    $ServiceContent->service_includes_f = $data["service_includes_f"];
    $ServiceContent->service_includes_g = $data["service_includes_g"];
    $ServiceContent->service_includes_h = $data["service_includes_h"];
    $ServiceContent->service_img = $data["service_img"];
    checkId($ServiceContent->service_id);
    // $header_banner_title_old = checkIndex($data, "header_banner_title_old");
    // compareName($HeaderContent, $header_banner_title_old, $HeaderContent->header_banner_title);
    $query = checkUpdate($ServiceContent);
    returnSuccess($ServiceContent, "serviceContent", $query);
}

checkEndpoint();
