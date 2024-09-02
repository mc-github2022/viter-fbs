<?php


function checkUpdateImage($object)
{
    $query = $object->updateImageContent();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

function checkUpdateText($object)
{
    $query = $object->updateTextContent();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}