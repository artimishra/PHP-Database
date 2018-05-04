
<!doctype html>

<html>

<!-- /tables.html by , Sat, 05 Aug 2017 13:58:48 GMT -->
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="A Components Mix Bootstarp 3 Admin Dashboard Template">
<meta name="author" content="Westilian">
<title>Admin</title>
<link rel="stylesheet" href="css/font-awesome.css" type="text/css">
<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
<link rel="stylesheet" href="css/animate.css" type="text/css">
<link rel="stylesheet" href="css/waves.css" type="text/css">
<link rel="stylesheet" href="css/layout.css" type="text/css">
<link rel="stylesheet" href="css/components.css" type="text/css">
<link rel="stylesheet" href="css/plugins.css" type="text/css">
<link rel="stylesheet" href="css/common-styles.css" type="text/css">
<link rel="stylesheet" href="css/pages.css" type="text/css">
<link rel="stylesheet" href="css/responsive.css" type="text/css">
<link rel="stylesheet" href="css/matmix-iconfont.css" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Roboto:400,300,400italic,500,500italic" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600" rel="stylesheet" type="text/css">
</head>
<body>

		
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="dataTables_length" id="DataTables_Table_0_length">
                                                <label>
                                                    <select class="td-select form-control">
                                                        <option value="10">10</option>
                                                        <option value="20">20</option>
                                                        <option value="30">30</option>
                                                        <option value="40">40</option>
                                                        <option value="50">50</option>
                                                        <option value="-1">All</option>
                                                    </select>
                                                    <span class="r-label">Entries</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <form class="form-horizontal">
                                                <div class="form-group">
                                                    <label class="col-md-6 control-label">Search:</label>
                                                    <div class=" col-md-6">
                                                        <input class="form-control" type="text" placeholder="Search">
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
									<div class="table-responsive">
<?php

$host = "localhost";
$username = "root";
$password = "";
$dbname = "student";
// Create connection
 $conn= mysqli_connect($host,$username)or die("Could'nt connect to database");
 if(isset($_POST['name']))
 {
  $name = $_POST['name'];
 }
 if(isset($_POST['years']))
 {
$years = $_POST['years'];
 }
 if(isset($_POST['location']))
 {
$location = $_POST['location'];
 }
 if(isset($_POST['date']))
 {
$date = $_POST['date'];
 }
 if(isset($_POST['skills']))
 {
$skills = $_POST['skills'];
 }
 if(isset($_POST['gender']))
 {
$gender = $_POST['gender'];
 }
 



// Check connection
 mysqli_select_db($conn,$dbname)or die("No database");
 
 
$result=mysqli_query($conn,"SELECT * from details");


echo "<table class='table table-hover table-bordered matmix-dt bg-hc-border' >
										<thead>
										<tr>
											<th colspan='8'>
												<div class='dt-col-header'>All new registered Students</div>
												<p>
													Manage all the students by single or bulk action
												</p>
    										</th>
    										<th colspan='4'>
    											<form class='form-horizontal'>
    												<div class='form-group td-bulk-action'>
                                                        <label class='col-md-6 control-label'>Bulk Action:</label>
                                                        <div class=' col-md-6'>
                                                            <select class='form-control input-sm status-select-all'>
                                                                <option>Select</option>
                                                                <option>Seen</option>
                                                                <option>In-touch</option>
                                                                <option>Hired</option>
                                                                <option>Not-selected</option>
                                                            </select>
                                                        </div>
    											</form>
    										</th>
									    </tr>";

    									echo "<tr>
    										
    										<th>
    											S.no
    										</th>
                                            <th>
                                                Name
                                            </th>
    										<th>
    											Experience
    										</th>
                                            <th>
                                                Job location
                                            </th>
                                            <th>
                                                Joining date
                                            </th>
    										<th>
    											Skills
											
    										</th>
											<th>
    											Gender
    										</th>
											
											<th>
    											Status
    										</th>
    										<th >
    											Change status
    										</th>
                                            <th class='tc-center'>
                                                Action
                                            </th>
    									</tr>";
								
					
									
									/*While($row=mysqli_fetch_array($result))
									{
									echo "<tr>";
                                    echo    "<td class='tc-center sorting_1'>";                                     
                                        echo    "<div class='icheckbox_minimal-aero'>";
                                             echo   "<input type='checkbox' class='tc-check' value='0'>";
                                             echo  "<ins class='iCheck-helper'>";
                                                    
                                             echo   "</ins>";
                                            echo "</div>";   
                                        echo "</td>";*/

 
	While($row=mysqli_fetch_array($result))
	{
			echo "<tr>";
			
			  
			echo "<td>".$row['id']."</td>";
			                            echo "<td>"
											.$row['name'].
										"</td>";
					
			  
										echo "<td>"
											.$row['years'].
										"</td>";
										echo "<td>"
											.$row['location'].
										"</td>";
										echo "<td>"
											
											.$row['date'].
										"</td>";
										echo "<td>"
											.$row['skills'].
										"</td>";
										echo "<td>"
											.$row['gender'].
										"</td>";
										
				                        echo    "<td>
                                            <label class='label label-info'>Approved</label>
                                                
                                       </td>";
	
									  echo	"<td >
											<select class='form-control input-sm status-select'>
                                                <option>Select</option>
                                                <option>Seen</option>
                                                <option>In-touch</option>
                                                <option>Hired</option>
                                                <option>Not-selected</option>
                                            </select>
										</td>";
                                    echo    "<td class='tc-center'>
                                            <div class='btn-toolbar' role='toolbar'>
                                                    <div class='btn-group' role='group'>
                                                        <a href='#' class='btn btn-default btn-sm m-user-edit'>Edit</a>
                                                        <a href='#' class='btn btn-default btn-sm m-user-delete'>Delete</a>
                                                    </div>
                                            </div>
                                        </td>";
								echo	"</tr>";
								}
									
	                            mysqli_close($conn);
									
									
?>
									<!--<tr>
                                        <td class="tc-center sorting_1">                                     
                                            <div class="icheckbox_minimal-aero">
                                                <input type="checkbox" class="tc-check" value="0">
                                                <ins class="iCheck-helper">
                                                    
                                                </ins>
                                            </div>   
                                        </td>
                                       </tr> -->
                                    

									</tbody>
									</table>
									
                                    
<script src="js/jquery-1.11.2.min.js"></script>
<script src="js/jquery-migrate-1.2.1.min.js"></script>
<!--Load Mask-->
<script src="js/jquery.loadmask.js"></script>
<script src="js/jRespond.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/nav-accordion.js"></script>
<script src="js/hoverintent.js"></script>
<!--Materialize Effect-->
<script src="js/waves.js"></script>
<!--iCheck-->
<script src="js/icheck.js"></script>
<!--Select2-->
<script src="js/select2.js"></script>
<!--jquery.mentionsInput-->
<script src="js/underscore.js"></script>
<script src="js/jquery.elastic.js"></script>
<script src="js/jquery.events.input.js"></script>
<script src="js/jquery.mentionsInput.js"></script>
<script src="js/bootstrap-filestyle.js"></script>
<!--Text Editor-->
<script src="js/summernote.min.js"></script>
<!--CHARTS-->
<script src="js/chart/sparkline/jquery.sparkline.js"></script>
<script src="js/chart/easypie/jquery.easypiechart.min.js"></script>
<!--Smart Resize-->
<script src="js/smart-resize.js"></script>
<!--Data Tables-->
<script src="js/jquery.dataTables.js"></script>
<script src="js/dataTables.responsive.js"></script>
<script src="js/dataTables.tableTools.js"></script>
<script src="js/dataTables.bootstrap.js"></script>
<script src="js/stacktable.js"></script>
<script src="js/bootbox.js"></script>
<script src="js/sweetalert.js"></script>
<!--Layout Initialize-->
<script src="js/layout.init.js"></script>
<!--Template Plugins Initialize-->
<script src="js/matmix.init.js"></script>
<!--High Resolution Ready-->
<script src="js/retina.min.js"></script>
</body>

<!-- /tables.html by , Sat, 05 Aug 2017 13:59:25 GMT -->
</html>