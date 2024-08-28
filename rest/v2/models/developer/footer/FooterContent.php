<?php
class FooterContent
{
    public $contact_id;
    public $contact_tel_number;
    public $contact_phone_number;
    public $contact_office_hours;
    public $contact_email;
    public $contact_address;
    public $contact_fb_link;
    public $contact_twitter_link;
    public $contact_youtube_link;
    public $contact_tiktok_link;
    public $contact_linkedin_link;
    public $contact_privacy_link;
    public $contact_terms_link;
    public $contact_eula_link;


    public $connection;

    public $tblContact;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblContact = "tbl_contact";
    
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblContact} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateContact()
    {
        try {
            $sql = "update {$this->tblContact} set ";
            $sql .= "contact_tel_number = :contact_tel_number, ";
            $sql .= "contact_phone_number = :contact_phone_number, ";
            $sql .= "contact_office_hours = :contact_office_hours, ";
            $sql .= "contact_email = :contact_email, ";
            $sql .= "contact_address = :contact_address ";
            $sql .= "where contact_id = :contact_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_tel_number" => $this->contact_tel_number,
                "contact_phone_number" => $this->contact_phone_number,
                "contact_office_hours" => $this->contact_office_hours,
                "contact_email" => $this->contact_email,
                "contact_address" => $this->contact_address,
                "contact_id" => $this->contact_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateCopyright()
    {
        try {
            $sql = "update {$this->tblContact} set ";
            $sql .= "contact_fb_link = :contact_fb_link, ";
            $sql .= "contact_twitter_link = :contact_twitter_link, ";
            $sql .= "contact_youtube_link = :contact_youtube_link, ";
            $sql .= "contact_tiktok_link = :contact_tiktok_link, ";
            $sql .= "contact_linkedin_link = :contact_linkedin_link, ";
            $sql .= "contact_privacy_link = :contact_privacy_link, ";
            $sql .= "contact_terms_link = :contact_terms_link, ";
            $sql .= "contact_eula_link = :contact_eula_link ";
            $sql .= "where contact_id = :contact_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_fb_link" => $this->contact_fb_link,
                "contact_twitter_link" => $this->contact_twitter_link,
                "contact_youtube_link" => $this->contact_youtube_link,
                "contact_tiktok_link" => $this->contact_tiktok_link,
                "contact_linkedin_link" => $this->contact_linkedin_link,
                "contact_privacy_link" => $this->contact_privacy_link,
                "contact_terms_link" => $this->contact_terms_link,
                "contact_eula_link" => $this->contact_eula_link,
                "contact_id" => $this->contact_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readById()
    {
        try {
            $sql = "select * from {$this->tblContact} ";
            $sql .= "where contact_id = :contact_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "contact_id" => $this->contact_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
