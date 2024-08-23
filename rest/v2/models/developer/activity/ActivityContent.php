<?php
class ActivityContent
{
    public $activity_id;
    public $activity_title;
    public $activity_text;
    public $activity_btn_text;
    public $activity_btn_link;
    public $activity_img;
 

    public $connection;

    public $tblActivity;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblActivity = "tbl_activity";
    
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblActivity} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblActivity} set ";
            $sql .= "activity_title = :activity_title, ";
            $sql .= "activity_text = :activity_text, ";
            $sql .= "activity_btn_text = :activity_btn_text, ";
            $sql .= "activity_btn_link = :activity_btn_link ";
            $sql .= "where activity_id = :activity_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "activity_title" => $this->activity_title,
                "activity_text" => $this->activity_text,
                "activity_btn_text" => $this->activity_btn_text,
                "activity_btn_link" => $this->activity_btn_link, 
                "activity_id" => $this->activity_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
