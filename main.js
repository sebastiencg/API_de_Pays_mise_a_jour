<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>blabla</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div class="background--custom">
        <canvas id="canvas"></canvas>
    </div>
    <input class="pays" type="text">
    <input class="recherche" type="button" value="afficher un pays">
    <input class="rechercheTous" type="button" value="afficher tous les pays ">
    <div class="afficher"></div>
    <script src="https://cdn.jsdelivr.net/gh/greentfrapp/pocoloco@minigl/minigl.js"></script>
    <script>
        var gradient = new Gradient();
        gradient.initGradient("#canvas");
    </script>
    <script src="main.js"></script>
</body>
</html>
