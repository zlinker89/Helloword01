<!DOCTYPE html>
<html lang="es" ng-app="miApp">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Modulo Empleados</title>

        <!-- Bootstrap CSS -->
        <link href="../css/bootstrap.min.css" rel="stylesheet">
        <link href="../css/font-awesome.css" rel="stylesheet">
        <link href="../css/side-wraper.css" rel="stylesheet">
        <!--Mis estilos-->
        <link href="../css/estilos.css" rel="stylesheet">
        <link href="../css/menu.css" rel="stylesheet">
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
      
       
    </head>
<body>

      <div class="container">
        <div class="col-md-12">
          <div class="col-md-4"></div>
          <div class="col-md-4 " id="login">
            <form action="" method="POST" class="form-horizontal" role="form">
                <div class="form-group">
                  <legend>Form title</legend>
                </div>
            
                
            
                <div class="form-group">
                  <div class="col-sm-10 col-sm-offset-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
 
        <!-- jQuery -->
        <script src="../js/jquery.js"></script>
        <!-- Bootstrap JavaScript -->
        <script src="../js/bootstrap.min.js"></script>
        <script src="../js/angular1.min.js"></script>
        <script src="../js/xlsx/lodash.min.js"></script>
        <script src="../js/xlsx/jszip.js"></script>
        <script src="../js/xlsx/xlsx.js"></script>
        <script src="../js/xlsx/xlsx-reader.js"></script>
        <!--mis scripts-->
        <script src="../js/UploadFileController.js"></script>
        <script src="../js/listaperiodo.js" type="text/javascript"></script>
        <script type="text/javascript" >
        // accion del boton mostrar del navbar
            $("#mostrar").click(function(){
                $("#wrapper").toggleClass("toggled");
            });
            $("#menu-toggle").click(function(e) {
                e.preventDefault();
                $("#wrapper").toggleClass("toggled");
            });
        </script>
</body>
</html>