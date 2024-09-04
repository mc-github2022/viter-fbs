<?php


function checkUpdateCopyright($object)
{
    $query = $object->updateCopyright();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}

function checkUpdateContact($object)
{
    $query = $object->updateContact();
    checkQuery($query, "There's a problem processing your request. (update)");
    return $query;
}