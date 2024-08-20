<?php
class Profile
{
    public $header_id;
    public $header_banner_title;
    public $header_banner_text;
    public $header_banner_btn_text;
    public $header_banner_btn_link;
    public $header_banner_img;
    public $header_banner_customfield_a;
    public $header_banner_customfield_b;
    public $header_banner_customfield_c;
    public $header_banner_customfield_d;
    public $header_banner_customfield_e;
    public $header_banner_customfield_f;
    public $header_banner_customfield_g;

    public $connection;
    public $lastInsertedId;
    public $user_other_start;
    public $user_other_total;
    public $user_other_search;

    public $tblHeader;
    public $tblRole;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHeader = "tbl_header";
    }

    // read account
    public function readAccount()
    {
        try {
            $sql = "select user_other_aid, ";
            $sql .= "user_other_is_active, ";
            $sql .= "user_other_password ";
            $sql .= "from {$this->tblUserOther} ";
            $sql .= "where user_other_aid = :user_other_aid ";
            $sql .= "and user_other_is_active = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // set password
    public function updatePassword()
    {
        try {
            $sql = "update {$this->tblUserOther} set ";
            $sql .= "user_other_password = :user_other_password, ";
            $sql .= "user_other_datetime = :user_other_datetime ";
            $sql .= "where user_other_aid  = :user_other_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_other_password" => $this->user_other_password,
                "user_other_datetime" => $this->user_other_datetime,
                "user_other_aid" => $this->user_other_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
