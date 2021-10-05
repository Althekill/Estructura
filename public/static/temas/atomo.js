//1.- Definir los estilos para resaltar una entrada de la tabla
//2.- Obtener cada uno de los ID para cada orbital
//3. Crear la animacion
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function animar_configuracion(tiempo=1000){
let orbitales  = [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14,10,6,2];
let cuantico_n = [1,2,2,3,3,4,3 ,4,5,4 ,5,6,4 ,5 ,6,7,5 ,6 ,7,8];
let cuantico_l = [0,0,1,0,1,0,2 ,1,0,2 ,1,0,3 ,2 ,1,0,3 ,2 ,1,0]; //Error en el HTML: sumar +1 a cada uno de estos valores
while (true){
for (i in cuantico_n){
  n  = cuantico_n[i];
  l  = cuantico_l[i];
  let id = "n"+n+"l"+(l+1);
  document.getElementById(id).style.backgroundColor = "skyblue";
  await sleep(tiempo);
  document.getElementById(id).style.backgroundColor = "";
}
}
}

async function animar_conf(tiempo=1000,hasta=20){
let orbitales  = [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14,10,6,2];
let cuantico_n = [1,2,2,3,3,4,3 ,4,5,4 ,5,6,4 ,5 ,6,7,5 ,6 ,7,8];
let cuantico_l = [0,0,1,0,1,0,2 ,1,0,2 ,1,0,3 ,2 ,1,0,3 ,2 ,1,0]; //Error en el HTML: sumar +1 a cada uno de estos valores
let i = 0;
for (q in orbitales)
{
  n  = cuantico_n[q];
  l  = cuantico_l[q];
  let id = "1n"+n+"l"+(l+1);
  document.getElementById(id).style.backgroundColor = "";
}
for (i = 0; i<hasta; i++){
  n  = cuantico_n[i];
  l  = cuantico_l[i];
  let id = "1n"+n+"l"+(l+1);
  document.getElementById(id).style.backgroundColor = "skyblue";
  await sleep(tiempo);
  if (i!=hasta-1){
  document.getElementById(id).style.backgroundColor = "";}
}
}

function scroll(id){
window.scrollTo(0, document.getElementById(id).offsetTop)
}

var flecha_u = new Image();
var flecha_d = new Image();
var linea = new Image();
var m;
var s;
var flechas=0;
var lineas=0;
var clear = false;
var something=false;
function init() {
  flecha_u.src = '/static/Imagenes/flecha_a.png';
  flecha_d.src = '/static/Imagenes/flecha_d.png';
  linea.src = '/static/Imagenes/linea.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('m&s').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  if (clear){
    ctx.clearRect(0, 0, 300, 300); // clear canvas
    clear=false;
  }

  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.save();
  //ctx.translate(150, 150);

  //1.Dibujar las lineas horizontales (numero de electrones/2)
  //2.Seguir las reglas de ordenacion, comenzar con las flechas hacia arriba  y terminar hacia abajo
  // Se necesita entonces: del numero de electrones y de el numero de lineas

  //SEPARAR Adecuadamente las lineas, dependiendo de su cantidad y de la anchura del canvas, tomar en cuenta espacios
  //Separacion de 7 puntos
  //width=50, height=4
  for (i=0;i<lineas;i++){
    ctx.drawImage(linea, 10+(37)*i,130,30,4);

//Colocar las flechas
if (flechas>lineas){
  //Llenar todas las 1/2
    ctx.drawImage(flecha_u, 7.5+10+(37)*i,80,8,50);
  }
}
if (flechas>lineas){
  z=flechas-lineas
  s=-1/2 //Jamas deberias hacer esto, pero es un bodge rapido
  m=-z+Math.floor(lineas/2)+1 //Jamas deberias hacer esto, pero es un bodge rapido
  for (i=0;i<z;i++){
    ctx.drawImage(flecha_d, 22.5+10+(37)*(lineas-i-1),80,8,50);
  }
}
else{
  z=flechas
  m=flechas-Math.floor(lineas/2)-1 //Jamas deberias hacer esto, pero es un bodge rapido
  s=1/2 //Jamas deberias hacer esto, pero es un bodge rapido
  for (i=0;i<z;i++){
    ctx.drawImage(flecha_u, 7.5+10+(37)*(i),80,8,50);
}
}
if (something){
document.getElementById('ms').innerHTML= "Los numeros cuanticos m y s dependeran de donde caiga la ultima flecha, y si va hacia arriba o hacia abajo, para este elemento, los numeros m y s son: m="
if(s<0){
document.getElementById('ms').innerHTML+= + m + " y s=-1/2" }
else if(s>0){
document.getElementById('ms').innerHTML+= + m + " y s=1/2" }
}
  ctx.save();
  //Sigue al siguiente frame
  window.requestAnimationFrame(draw);

}

   init();
