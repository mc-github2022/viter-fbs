<?php


function checkUpdateCopyright($object)
{
    $query = $object->updateTextContent();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

function checkUpdateContact($object)
{
    $query = $object->updateImageContent();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}