var w, width, h, height;
var canvas;

function createCanvas(canvas_name) {
   canvas = document.createElement('canvas');
   var body = document.querySelector('body');
   canvas.setAttribute("id", canvas_name);
   canvas.style.position = "absolute";
   canvas.style.left = "0px";
   canvas.style.right = "0px";
   body.appendChild(canvas);
   var ctx = getContext('2d');
   resize();
   window.addEventListener("resize", resize, false);
   return ctx;
}

function createHiddenCanvas(canvas_name) {
   var ctx = createCanvas(canvas_name)
   canvas.style = -w+"px";
   return ctx;
}

function resize(){
   var c = document.getElementsByTagName('canvas');
   width = w = window.innerWidth;
   height = h = window.innerHeight;

}
