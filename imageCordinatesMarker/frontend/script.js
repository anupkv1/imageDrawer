function Draw(){

    var img  = document.getElementById("theImg");
    var cnvs = document.getElementById("myCanvas");

    cnvs.style.position = "absolute";
    cnvs.style.left     = img.offsetLeft + "px";
    cnvs.style.top      = img.offsetTop  + "px";

    var ctx = cnvs.getContext("2d");

    $.getJSON('http://localhost:3000/imageData').done(function(data) {
        $.each(data, function(index) {
            fillMe(ctx,data[index]);
        });
    })
}

function fillMe(ctx,data){

    if(data.shape === 'rectangle'){

        ctx.fillStyle = data.color; //red
        ctx.beginPath();
        ctx.rect(data.x, data.y, 100, 100);
        ctx.closePath();
        ctx.fill();
    }
    if(data.shape === 'circle'){
        var radius= 50;
        var startAngle = 0;
        var endAngle = 2*Math.PI;
        ctx.fillStyle = data.color; //red
        ctx.beginPath();
        ctx.arc(data.x, data.y, radius, startAngle,endAngle);
        ctx.closePath();
        ctx.fill();
    }
}
