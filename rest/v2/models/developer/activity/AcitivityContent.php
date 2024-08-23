<?php
class HeaderContent
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
 

    public $header_banner_title_old;

    public $connection;

    public $tblHeader;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHeader = "tbl_header";
    
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblHeader} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_banner_title = :header_banner_title, ";
            $sql .= "header_banner_text = :header_banner_text, ";
            $sql .= "header_banner_btn_text = :header_banner_btn_text, ";
            $sql .= "header_banner_btn_link = :header_banner_btn_link ";
            $sql .= "where header_id = :header_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_banner_title" => $this->header_banner_title,
                "header_banner_text" => $this->header_banner_text,
                "header_banner_btn_text" => $this->header_banner_btn_text,
                "header_banner_btn_link" => $this->header_banner_btn_link,
                "header_id" => $this->header_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
