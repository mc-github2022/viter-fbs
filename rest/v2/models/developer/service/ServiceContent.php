<?php
class ServiceContent
{
    public $service_id;
    public $service_title;
    public $service_img;
    public $service_includes_a;
    public $service_includes_b;
    public $service_includes_c;
    public $service_includes_d;
    public $service_includes_e;
    public $service_includes_f;
    public $service_includes_g;
    public $service_includes_h;
 

    public $connection;

    public $tblService;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblService = "tbl_service";
    
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblService} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblService} set ";
            $sql .= "service_title = :service_title, ";
            $sql .= "service_includes_a = :service_includes_a, ";
            $sql .= "service_includes_b = :service_includes_b, ";
            $sql .= "service_includes_c = :service_includes_c, ";
            $sql .= "service_includes_d = :service_includes_d, ";
            $sql .= "service_includes_e = :service_includes_e, ";
            $sql .= "service_includes_f = :service_includes_f, ";
            $sql .= "service_includes_g = :service_includes_g, ";
            $sql .= "service_includes_h = :service_includes_h, ";
            $sql .= "service_img = :service_img ";
            $sql .= "where service_id = :service_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "service_title" => $this->service_title,
                "service_includes_a" => $this->service_includes_a,
                "service_includes_b" => $this->service_includes_b,
                "service_includes_c" => $this->service_includes_c,
                "service_includes_d" => $this->service_includes_d,
                "service_includes_e" => $this->service_includes_e,
                "service_includes_f" => $this->service_includes_f,
                "service_includes_g" => $this->service_includes_g,
                "service_includes_h" => $this->service_includes_h,
                "service_img" => $this->service_img,
                "service_id" => $this->service_id,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
