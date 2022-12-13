<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data</title>
    <link rel="stylesheet" href="CSS\mystyle.css"> <!--CSS-->
</head>
<body>
    <?php
    include_once('header.php');
    ?>
    <?php
    $servename = "localhost";
    $username = "root";
    $password = "";
    $dbname = "hqs";

    $conn = new mysqli($servename, $username, $password, $dbname);

    if ($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT id, Nome, Editora, Ano FROM hqs";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){
        while($row = $result->fetch_assoc()){
            echo "id: " . $row["id"]. " - Nome: " . $row["Nome"]. " - Editora: " . $row["Editora"]. " - Ano: " . $row["Ano"]. "<br>";
        }
    } else {
        echo "0 results";
    }
    $conn->close();
    ?>
</body>
</html>