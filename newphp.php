<?
if( $_POST )
{
  $con = mysql_connect("localhost","inmoti6_myuser","mypassword");

  if (!$con)
  {
    die('Could not connect: ' . mysql_error());
  }

  mysql_select_db("inmoti6_mysite", $con);

  $users_id = $_POST['id'];
  $users_name = $_POST['first_name'];
  $users_email = $_POST['last_name'];
  $users_website = $_POST['password'];

  $users_name = mysql_real_escape_string($users_name);
  $users_email = mysql_real_escape_string($users_email);
  $users_website = mysql_real_escape_string($users_website);
  $users_comment = mysql_real_escape_string($users_comment);

  $articleid = $_GET['id'];
  if( ! is_numeric($articleid) )
    die('invalid article id');

  $query = "
  INSERT INTO `members`.`comments` (`id`, `first_name`, `last_name`, `password`
        ) VALUES (NULL, '$users_name',
        '$users_email', '$users_website', '$users_comment',
        CURRENT_TIMESTAMP, '$articleid');";

  mysql_query($query);

  echo "<h2>Thank you for your Comment!</h2>";

  mysql_close($con);
}
?>