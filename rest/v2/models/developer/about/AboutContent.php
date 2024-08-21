<?php
class AboutContent
{
    public $about_id;
    public $about_title;
    public $about_subtitle;
    public $about_text;
    public $about_btn_text;
    public $about_btn_link;
    public $about_img;
    public $about_customfield_a;
    public $about_customfield_b;
    public $about_customfield_c;
    public $about_customfield_d;
    public $about_customfield_e;
    public $about_customfield_f;
    public $about_customfield_g;
 

    public $connection;

    public $tblAbout;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblAbout = "tbl_about";
    
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblAbout} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblAbout} set ";
            $sql .= "about_title = :about_title, ";
            $sql .= "about_subtitle = :about_subtitle, ";
            $sql .= "about_text = :about_text, ";
            $sql .= "about_btn_text = :about_btn_text, ";
            $sql .= "about_btn_link = :about_btn_link ";
            $sql .= "where about_id = :about_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "about_title" => $this->about_title,
                "about_subtitle" => $this->about_subtitle,
                "about_text" => $this->about_text,
                "about_btn_text" => $this->about_btn_text,
                "about_btn_link" => $this->about_btn_link,
                "about_id" => $this->about_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
