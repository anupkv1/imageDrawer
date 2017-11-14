## ShapeDrawer
###### This is a small demo app that invokes a RESTAPI to fetch the mock data and draws shapes dynamically on the the image at given co-ordinates.

- ###### Server is built using node-express
  -----------------------------------------

  ```
  var express = require('express');
  
  //Express App..
  var app = express();
  
  //Fetch the Mock data from data.js file..
  var mockData = require('../mockdata/data');
  
  //Enable Cors for applications to access the content from the server...
  app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
  });

  //Rest API to fetch the shape data...
  app.get('/imageData', function (req, res) {
    return res.status(200).send(mockData['200']);
  });

  //server runs on localhost:3000
  app.listen(3000); 
  ```
  
- ###### Sample Mock data with x and y attributes and shape
  ---------------------------------------------------------
   ```
    var mockData =
    {
      200: [
          {
              x: '100',
              y: '200',
              shape: 'rectangle',
              color: 'blue'
          },
          {
              x: '300',
              y: '400',
              shape: 'circle',
              color: 'red'
          }
        ],
      401: {
          error: 'unauthorized'
      }
  };

  module.exports = mockData;
   ```
- ###### In front end display image and canvas element in index.html
  -----------------------------------------------------------------
  
  ```
  <!DOCTYPE html>
  <html>
  <head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
  </head>

  <body>
  //draw button
  <div>
      <input id='draw-btn' type='button' value='Draw' onclick='Draw()' />
  </div>
  //image
  <img id='theImg' src='https://s-i.huffpost.com/gen/1324194/images/o-DRIVERS-TRAFFIC-facebook.jpg'>
  <canvas id='myCanvas' width='536px' height='536px'></canvas>

  </body>

  </html>
  ```

- ###### jquery function `getJSON` invokes rest api call to fetch data and for each record in the json object drawShape function is called to draw different shapes with x and y axis.
  --------------------------------------------------------------------
  ```
   $.getJSON('http://localhost:3000/imageData').done(function(data) {
        $.each(data, function(index) {
            drawShape(ctx,data[index]);
        });
    })
  ``` 
 - ###### draw shape function checks for the incoming shape object in each record and draws shapes accordingly
   ----------------------------------------------------------------------------------------------------------
   ```
   function fillMe(ctx,data)
   {

    if(data.shape === 'rectangle'){

        ctx.fillStyle = data.color; //blue
        ctx.beginPath();
        //get the x and y co-ordinates from data object
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
        //get the x and y co-ordinates from data object
        ctx.arc(data.x, data.y, radius, startAngle,endAngle);
        ctx.closePath();
        ctx.fill();
    }
   }
  
   ```
   - ###### Screenshot - 1: click on draw button 
    ----------------------------------------------

   ![alt text](https://github.com/anupkv1/imageDrawer/blob/master/imageCordinatesMarker/image1.PNG)

     - ###### Screenshot -2: on click of draw button shapes are drawn on images
    ---------------------------------------------------------------------------
    
    ![alt text](https://github.com/anupkv1/imageDrawer/blob/master/imageCordinatesMarker/image2.PNG)
   

 
