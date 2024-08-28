<?php
$conn = null;
$conn = checkDbConnection();
$FooterContent = new FooterContent($conn);
$error = [];
$returnData = [];
if (array_key_exists("contactid", $_GET)) {
    checkPayload($data);
    $isUpdate = $data['isUpdate'];
    if($isUpdate=="updateCopy"){
        $FooterContent->contact_id = $_GET['contactid'];
        $FooterContent->contact_fb_link =$data["contact_fb_link"];
        $FooterContent->contact_twitter_link = $data["contact_twitter_link"];
        $FooterContent->contact_youtube_link = $data["contact_youtube_link"];
        $FooterContent->contact_tiktok_link = $data["contact_tiktok_link"];
        $FooterContent->contact_linkedin_link = $data["contact_linkedin_link"];
        $FooterContent->contact_privacy_link = $data["contact_privacy_link"];
        $FooterContent->contact_terms_link = $data["contact_terms_link"];
        $FooterContent->contact_eula_link = $data["contact_eula_link"];
        checkId($FooterContent->contact_id);
        $query = checkUpdateCopyright($FooterContent);
        returnSuccess($FooterContent, "footerContent", $query);
    }
    if($isUpdate=="updateContact"){
        $FooterContent->contact_id = $_GET['contactid'];
        $FooterContent->contact_tel_number = $data["contact_tel_number"];
        $FooterContent->contact_phone_number = $data["contact_phone_number"];
        $FooterContent->contact_office_hours = $data["contact_office_hours"];
        $FooterContent->contact_email = $data["contact_email"];
        $FooterContent->contact_address = $data["contact_address"];
        checkId($FooterContent->contact_id);
        $query = checkUpdateContact($FooterContent);
        returnSuccess($FooterContent, "footerContent", $query);
    }
    // $header_banner_title_old = checkIndex($data, "header_banner_title_old");
    // compareName($HeaderContent, $header_banner_title_old, $HeaderContent->header_banner_title);
    checkEndpoint();
}
checkEndpoint();
