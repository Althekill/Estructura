var json = ""
fetch('/static/temas/periodic table.json')
.then(response => response.text())
.then((data) => {
  json = data
})
class elemento
{
  constructor(simbolo="",nombre="",bloque="",familia=0,grupo="",estado=0,masa=0.0,electronegatividad=0,valencias){
this.simbolo=simbolo;
this.nombre=nombre;
this.bloque=bloque;
this.familia=familia; //0->no metalico, 1 -> metal alcalino, 2->alcalinoterreo, 3->otros metales, 4->metales de transicion,5->lantanidos,6->metaloides o semimetales,7->halogenos,8->hases nobles, 9->actinidos
this.grupo=grupo;
this.estado=estado;//1->solido,2->liquido,3->gaseosos, 0->No Aplica
//Numericos
this.masa=masa;//0->No descubierto
this.numeroatm=0;//Inicializar externamente
this.electronegatividad=electronegatividad; //0->No descubierto o no aplica
this.gruponum=0;//Calcular proximamente

//Array
this.valencias=valencias;
this.nombre_familia="";
this.nombre_grupo="";
}
}
var e = new Array(119); //Nota : el indice del elemento+1 es su numero atomico
  e[0] = new elemento("H","Hidrógeno","s",0,"1A",3,1.00794,2.2);
  e[1] = new elemento("He","Helio","s",8,"8A",3,4.0026,0);
  e[2] = new elemento("Li","Litio","s",1,"1A",1,6.941,0.98);
  e[3] = new elemento("Be","Berilio","s",2,"2A",1,9.01218,1.57);
  e[4] = new elemento("B","Boro","p",6,"3A",1,10.811,2.04);
  e[5] = new elemento("C","Carbono","p",0,"4A",1,12.0107,2.55);
  e[6] = new elemento("N","Nitrógeno","p",0,"5A",3,14.0067,3.04);
  e[7] = new elemento("O","Oxigeno","p",0,"6A",3,15.994,3.44);
  e[8] = new elemento("F","Flúor","p",7,"7A",3,18.9984,3.98);
  e[9] = new elemento("Ne","Neón","p",8,"8A",3,20.1797,0);
  e[10] = new elemento("Na","Sodio","s",1,"1A",1,22.9898,0.93);
  e[11] = new elemento("Mg","Magnesio","s",2,"2A",1,24.305,1.31);
  e[12] = new elemento("Al","Aluminio","p",3,"3A",1,29.9815,1.61);
  e[13] = new elemento("Si","Silicio","p",6,"4A",1,28.0855,1.9);
  e[14] = new elemento("P","Fósforo","p",0,"5A",1,30.9738,2.19);
  e[15] = new elemento("S","Azufre","p",0,"6A",1,32.065,2.58);
  e[16] = new elemento("Cl","Cloro","p",7,"7A",3,35.453,3.16);
  e[17] = new elemento("Ar","Argón","p",8,"8A",3,39.948,0);
  e[18] = new elemento("K","Potasio","s",1,"1A",1,39.0983,0.82);
  e[19] = new elemento("Ca","Calcio","s",2,"2A",1,40.078,1);
  e[20] = new elemento("Sc","Escandio","d",4,"3B",1,44.9559,1.36);
  e[21] = new elemento("Ti","Titanio","d",4,"4B",1,47.867,1.54);
  e[22] = new elemento("V","Vanadio","d",4,"5B",1,50.9415,1.63);
  e[23] = new elemento("Cr","Cromo","d",4,"6B",1,51.9961,1.66);
  e[24] = new elemento("Mn","Manganeso","d",4,"7B",1,54.938,1.55);
  e[25] = new elemento("Fe","Hierro","d",4,"8B",1,55.845,1.83);
  e[26] = new elemento("Co","Cobalto","d",4,"8B",1,58.9332,1.88);
  e[27] = new elemento("Ni","Níquel","d",4,"8B",1,58.6934,1.91);
  e[28] = new elemento("Cu","Cobre","d",4,"1B",1,63.546,1.9);
  e[29] = new elemento("Zn","Zinc","d",4,"2B",1,65.38,1.65);
  e[30] = new elemento("Ga","Galio","p",3,"3A",1,69.723,1.81);
  e[31] = new elemento("Ge","Germanio","p",6,"4A",1,72.64,2.01);
  e[32] = new elemento("As","Arsénico","p",6,"5A",1,74.9216,2.18);
  e[33] = new elemento("Se","Selenio","p",0,"6A",1,78.96,2.55);
  e[34] = new elemento("Br","Bromo","p",7,"7A",2,79.904,2.96);
  e[35] = new elemento("Kr","Kriptón","p",8,"8A",3,83.798,3);
  e[36] = new elemento("Rb","Rubidio","s",1,"1A",1,85.4678,0.82);
  e[37] = new elemento("Sr","Estroncio","s",2,"2A",1,87.62,0.95);
  e[38] = new elemento("Y","Ytrio","d",4,"3B",1,88.9059,1.22);
  e[39] = new elemento("Zr","Circonio","d",4,"4B",1,91.224,1.33);
  e[40] = new elemento("Nb","Niobio","d",4,"5B",1,92.9064,1.6);
  e[41] = new elemento("Mo","Moibdeno","d",4,"6B",1,95.96,2.16);
  e[42] = new elemento("Tc","Tecnecio","d",4,"7B",1,98,1.9);
  e[43] = new elemento("Ru","Rutenio","d",4,"8B",1,101.07,2.2);
  e[44] = new elemento("Rh","Rodio","d",4,"8B",1,102.906,2.28);
  e[45] = new elemento("Pd","Paladio","d",4,"8B",1,106.42,2.2);
  e[46] = new elemento("Ag","Plata","d",4,"1B",1,107.868,1.93);
  e[47] = new elemento("Cd","Cadmio","d",4,"2B",1,112.411,1.69);
  e[48] = new elemento("In","Indio","p",3,"3A",1,114.818,1.78);
  e[49] = new elemento("Sn","Estaño","p",3,"4A",1,118.71,1.96);
  e[50] = new elemento("Sb","Antimonio","p",6,"5A",1,121.76,2.05);
  e[51] = new elemento("Te","Telurio","p",6,"6A",1,127.6,2.1);
  e[52] = new elemento("I","Yodo","p",7,"7A",1,126.904,2.66);
  e[53] = new elemento("Xe","Xenón","p",8,"8A",3,131.293,2.6);
  e[54] = new elemento("Cs","Cesio","s",1,"1A",1,132.905,0.79);
  e[55] = new elemento("Ba","Bario","s",2,"2A",1,137.327,0.89);
  e[56] = new elemento("La","Lántano","f",5,"",1,138.905,1.1);
  e[57] = new elemento("Ce","Cerio","f",5,"",1,140.116,1.12);
  e[58] = new elemento("Pr","Praseodimio","f",5,"",1,140.908,1.13);
  e[59] = new elemento("Nd","Neodimio","f",5,"",1,144.242,1.13);
  e[60] = new elemento("Pm","Prometio","f",5,"",1,145,0);
  e[61] = new elemento("Sm","Samario","f",5,"",1,150.36,1.17);
  e[62] = new elemento("Eu","Europio","f",5,"",1,151.964,0);
  e[63] = new elemento("Gd","Gadolinio","f",5,"",1,157.25,1.2);
  e[64] = new elemento("Tb","Terbio","f",5,"",1,158.925,0);
  e[65] = new elemento("Dy","Disprosio","f",5,"",1,162.5,1.22);
  e[66] = new elemento("Ho","Holmio","f",5,"",1,164.93,1.23);
  e[67] = new elemento("Er","Erbio","f",5,"",1,167.259,1.24);
  e[68] = new elemento("Tm","Tulio","f",5,"",1,168.934,1.25);
  e[69] = new elemento("Yb","Yterbio","f",5,"",1,173.054,0);
  e[70] = new elemento("Lu","Lutecio","f",5,"",1,174.967,1.27);
  e[71] = new elemento("Hf","Hafnio","d",4,"4B",1,178.49,1.3);
  e[72] = new elemento("Ta","Tántalo","d",4,"5B",1,180.948,1.5);
  e[73] = new elemento("W","Wolframio","d",4,"6B",1,183.84,2.36);
  e[74] = new elemento("Re","Renio","d",4,"7B",1,186.207,1.9);
  e[75] = new elemento("Os","Osmio","d",4,"8B",1,190.23,2.2);
  e[76] = new elemento("Ir","Iridio","d",4,"8B",1,192.217,2.2);
  e[77] = new elemento("Pt","Platino","d",4,"8B",1,195.084,2.28);
  e[78] = new elemento("Au","Oro","d",4,"1B",1,196.967,2.54);
  e[79] = new elemento("Hg","Mercurio","d",4,"2B",2,200.59,2);
  e[80] = new elemento("Tl","Talio","p",3,"3A",1,204.383,1.62);
  e[81] = new elemento("Pb","Plomo","p",3,"4A",1,207.2,2.33);
  e[82] = new elemento("Bi","Bimuto","p",3,"5A",1,208.98,2.02);
  e[83] = new elemento("Po","Polonio","p",6,"6A",1,209,2);
  e[84] = new elemento("At","Astato","p",7,"7A",1,210,2.2);
  e[85] = new elemento("Rn","Radón","p",8,"8A",3,222,0);
  e[86] = new elemento("Fr","Francio","s",1,"1A",1,223,0.7);
  e[87] = new elemento("Ra","Radio","s",2,"2A",1,226,0.9);
  e[88] = new elemento("Ac","Actinio","f",9,"",1,227,1.1);
  e[89] = new elemento("Th","Torio","f",9,"",1,232.038,1.3);
  e[90] = new elemento("Pa","Proactinio","f",9,"",1,231.036,1.5);
  e[91] = new elemento("U","Uranio","f",9,"",1,238.029,1.38);
  e[92] = new elemento("Np","Neptunio","f",9,"",1,237,1.36);
  e[93] = new elemento("Pu","Plutonio","f",9,"",1,244,1.28);
  e[94] = new elemento("Am","Americio","f",9,"",1,243,1.3);
  e[95] = new elemento("Cm","Curio","f",9,"",1,247,1.3);
  e[96] = new elemento("Bk","Berkelio","f",9,"",1,247,1.3);
  e[97] = new elemento("Cf","Californio","f",9,"",1,251,1.3);
  e[98] = new elemento("Es","Einstenio","f",9,"",1,252,1.3);
  e[99] = new elemento("Fm","Fermio","f",9,"",1,257,1.3);
  e[100] = new elemento("Md","Mendelevio","f",9,"",1,258,1.3);
  e[101] = new elemento("No","Nobelio","f",9,"",1,259,1.3);
  e[102] = new elemento("Lr","Lawrencio","f",9,"",1,262,0);
  e[103] = new elemento("Rf","Rutherfordio","d",4,"4B",0,265,0);
  e[104] = new elemento("Db","Dubnio","d",4,"5B",0,268,0);
  e[105] = new elemento("Sg","Seaborgio","d",4,"6B",0,271,0);
  e[106] = new elemento("Bh","Bohrio","d",4,"7B",0,272,0);
  e[107] = new elemento("Hs","Hassio","d",4,"8B",0,270,0);
  e[108] = new elemento("Mt","Meitnerio","d",4,"8B",0,276,0);
  e[109] = new elemento("Ds","Darmstadtio","d",4,"8B",0,281,0);
  e[110] = new elemento("Rg","Roentgenio","d",4,"1B",0,280,0);
  e[111] = new elemento("Cn","Copernicio","d",4,"2B",0,285,0);
  e[112] = new elemento("Nh","Nihonio","p",3,"3A",0,284,0);
  e[113] = new elemento("Fl","Flerovio","p",3,"4A",0,289,0);
  e[114] = new elemento("Mc","Moscovio","p",3,"5A",0,288,0);
  e[115] = new elemento("Lv","Livermorio","p",3,"6A",0,293,0);
  e[116] = new elemento("Ts","Téneso","p",7,"7A",0,294,0);
  e[117] = new elemento("Og","Organesón","p",8,"8A",0,294,0);
  //Caso especial: tungsteno
  e[118] = new elemento("W","Tungsteno","d",4,"6B",1,183.84,2.36);
//Inicializar y definir utilidades


for (i=56;i<70;i++)
{
  e[i].grupo="3B"
}
for (i=88;i<102;i++)
{
  e[i].grupo="3B"
}

for (i=0;i<118;i++)
{
  e[i].numeroatm=i+1;
  switch (e[i].grupo) {
    case "1A":
      e[i].gruponum=1;
      e[i].nombre_grupo="Metales alcalinos"
      break;
      case "2A":
        e[i].gruponum=2;
        e[i].nombre_grupo="Metales alcalinotérreos"
        break;
        case "3A":
          e[i].gruponum=13
          e[i].nombre_grupo="Térreos"
          break;
          case "4A":
            e[i].gruponum=14
            e[i].nombre_grupo="Carbonoideos"
            break;
            case "5A":
              e[i].gruponum=15
              e[i].nombre_grupo="Nitrogenoideos"
              break;
              case "6A":
                e[i].gruponum=16
                e[i].nombre_grupo="Calcógenos o Anfígenos"
                break;
                case "7A":
                  e[i].gruponum=17
                  e[i].nombre_grupo="Halógenos"
                  break;
                  case "8A":
                    e[i].gruponum=18
                    e[i].nombre_grupo="Gases Nobles"
                    break;
                    case "3B":
                      e[i].gruponum=3
                      e[i].nombre_grupo="Familia del escandio (tierras raras y actinidos)"
                      break;
                      case "4B":
                        e[i].gruponum=4
                        e[i].nombre_grupo="Familia del titanio"
                        break;
                        case "5B":
                          e[i].gruponum=5
                          e[i].nombre_grupo="Familia del Vanadio"
                          break;
                          case "6B":
                            e[i].gruponum=6
                            e[i].nombre_grupo="Familia del Cromo"
                            break;
                            case "7B":
                              e[i].gruponum=7
                              e[i].nombre_grupo="Familia del Manganeso"
                              break;
                              case "8B":
                                e[i].gruponum=8
                                e[i].nombre_grupo="Familia del Hierro"
                              case "1B":
                                e[i].gruponum=11
                                e[i].nombre_grupo="Familia del Cobre"
                                break;
                                case "2B":
                                  e[i].gruponum=12
                                  e[i].nombre_grupo="Familia del Zinc"

    default:

  }
}
//Casos especiales
e[26].gruponum=9;e[i].nombre_grupo="Familia del Cobalto";
e[44].gruponum=9;e[i].nombre_grupo="Familia del Cobalto";
e[76].gruponum=9;e[i].nombre_grupo="Familia del Cobalto";
e[108].gruponum=9;e[i].nombre_grupo="Familia del Cobalto";
e[27].gruponum=10;e[i].nombre_grupo="Familia del Níquel";
e[45].gruponum=10;e[i].nombre_grupo="Familia del Níquel";
e[77].gruponum=10;e[i].nombre_grupo="Familia del Níquel";
e[109].gruponum=10;e[i].nombre_grupo="Familia del Níquel";
e[118].numeroatm=74;

function configuracion_electronica(numero_atomico)
{
  something=true
  if (numero_atomico>118 || numero_atomico<=0){
    return
  }
   let div=document.getElementById("conf_larga")
  div.innerHTML=""
   let contador=numero_atomico
   let orbitales  = [2,2,6,2,6,2,10,6,2,10,6,2,14,10,6,2,14,10,6,2];
   let cuantico_n = [1,2,2,3,3,4,3 ,4,5,4 ,5,6,4 ,5 ,6,7,5 ,6 ,7,8];
   let cuantico_l = [0,0,1,0,1,0,2 ,1,0,2 ,1,0,3 ,2 ,1,0,3 ,2 ,1,0]; //Error en el HTML: sumar +1 a cada uno de estos valores
   let conf_larga = ['1s','2s','2p','3s','3p','4s','3d','4p','5s','4d','5p','6s','4f','5d','6p','7s','5f','6d','7p','8s']
   let configuracion=[]
  for (val in orbitales){
    contador-=orbitales[val]
    if (contador<=0){
        configuracion=orbitales.splice(0,parseInt(val,10)+1);
        break;
      }
  }
  if (contador<0){
  configuracion[configuracion.length-1]+=contador //porque contador es negativo
  contador=0
  }
  let estilo_superindice = 'color:red'
  //Excepcion en la configuracion electronica del cobre
  let nota_cobre=""
  if (numero_atomico==29){
    //En el cobre el electron de 4s2 se pasa a 3d9, por lo que la configuracion termina siendo 4s1 3d10
    configuracion[configuracion.length-1]=10;
    configuracion[configuracion.length-2]=1;
    nota_cobre="<b style=\""+ estilo_superindice + "\">En el cobre, pasa un caso especial, ya que el electron de 4s<sup>2</sup> pasa al otro orbital, ocasionando que la nueva configuracion sea 4s<sup>1</sup>, 3d<sup>10</sup> </b><br>" //NO DEBERIA PONER ESTILOS CSS EN CODIGO, jejejeje (ni texto)
  }
  for (i in configuracion){
    div.innerHTML+=conf_larga[i]+"<sup>"+configuracion[i]+"</sup> "
  }

  //n y l
   let n = cuantico_n[configuracion.length-1]
   let l = cuantico_l[configuracion.length-1]
   document.getElementById('ultimo_orbital').innerHTML=nota_cobre + "El numero cuantico n es " + n + ", el numero cuantico l es " + l
   document.getElementById('ultimo_orbital').innerHTML+=", ya que el ultimo orbital es " + conf_larga[configuracion.length-1]
   document.getElementById('mas_texto').innerHTML="Ya que el numero l y n estan obtenidos, hay que fijarse en los electrones que habitan ese orbital:"
   document.getElementById('ultimo_orbital_super').innerHTML=conf_larga[configuracion.length-1]+"<sup style=\" " + estilo_superindice + " \">"+configuracion[configuracion.length-1]+"</sup> "
   document.getElementById('z').innerHTML= "Como el tipo de orbital es " + conf_larga[configuracion.length-1][1]
   document.getElementById('z').innerHTML+= ", y el principio de exclusion de pauli dice que pueden haber dos electrones por orbital, el numero de electrones que caben en el orbital se divide entre dos, y se colocan en una ordenacion con lineas y flechas, ademas las flechas (que simbolizan electrones con diferente spin), se colocan siguiendo la regla de ordenacion de hund:"
   flechas = configuracion[configuracion.length-1]
   clear=true;
   switch (l) {
     case 0:
      lineas = 1
       break;
     case 1:
      lineas = 3
       break;
       case 2:
        lineas = 5
         break;
       case 3:
        lineas = 7
         break;
     default:
     lineas = 0;
     break;

   }
   animar_conf(300,configuracion.length)



  /*//2 Obtener la cantidad de electrones en cada nivel de
    electrones_nivel=[0,0,0,0,0,0,0,0]
    for (i in configuracion){
        n=cuantico_n[i]
        electrones_nivel[n-1]+=configuracion[i]
      }
      */
}
function eliminarDiacriticosEs(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
}

function traductinput(){
  x=document.getElementById("elemento").value
   //TODO: get input from a form
  //Es un numero????
  if (parseInt(x,10)<118 || parseInt(x,10)>0 ){
    configuracion_electronica(parseInt(x,10))
    return
  }
  w=''
  a=''
  for (i in e){
      //Es un nombre de elemento?????
    w=e[i].nombre;
    w = w.toLowerCase();
    w = eliminarDiacriticosEs(w);
    a = x.toLowerCase();
    a = eliminarDiacriticosEs(a);
    if (w==a){
      configuracion_electronica(e[i].numeroatm)
      return
    }
    //Es un simbolo??????
    s=e[i].simbolo;
    s = s.toLowerCase();
    s = eliminarDiacriticosEs(s);
    if (s==a){
      configuracion_electronica(e[i].numeroatm)
      return
    }
  }
}

//              No metales
var colores = ['rgba(0, 0, 156, 0.4)']

function dibujar_tabla() {
  let ctx = document.getElementById('tabla_periodica').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 900, 500); // clear canvas

  ctx.fillStyle = colores[0];
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.fillRect (0, 0, 50, 50);
  ctx.textAlign = 'center'
  ctx.translate(0, 0);
  /*var text = ctx.measureText('foo'); // TextMetrics object
    text.width; // 16;
  */


}





function dibujo() {
  let ctx = document.getElementById('elemento').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 150, 150); // clear canvas

  ctx.fillStyle = colores[0];
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  ctx.fillRect (0, 0, 150, 150);
  ctx.textAlign = 'center'
  ctx.translate(0, 0);
  ctx.fillStyle = "Red";
  ctx.font = '60px serif';
  ctx.fillText(e[0].simbolo, 75, 85);
  ctx.font = '15px serif';
  ctx.textAlign = 'left'
  ctx.fillText(e[0].numeroatm, 5, 20);
  ctx.translate(0, 0);
  ctx.textAlign = 'right'
  ctx.fillText(e[0].masa, 150, 20);
  ctx.font = '20px serif';
ctx.textAlign = 'center'
  ctx.fillText(e[0].nombre, 75, 140);
  ctx.save();

  //Useful
  /*
  var text = ctx.measureText('foo'); // TextMetrics object
    text.width; // 16;
  */
var el = document.getElementById("elemento");
el.addEventListener("touchstart", handleStart, false);
//window.requestAnimationFrame(dibujar_tabla);
llenar_tabla()
}

var r ="";
var n=0;

function act() {
  let ctx = document.getElementById('e').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, 150, 150); // clear canvas
    m = parseInt(n,10)-1
  ctx.fillStyle = "rgba(0,0,0,0.9)";
  ctx.textAlign = 'center'
  ctx.translate(0, 0);
  ctx.strokeStyle = "rgba(0,0,0,0.4)";
  ctx.font = '60px serif';
  ctx.fillText(e[m].simbolo, 75, 85);
  ctx.font = '15px serif';
  ctx.textAlign = 'left'
  ctx.fillText(e[m].numeroatm, 5, 20);
  ctx.translate(0, 0);
  ctx.textAlign = 'right'
  ctx.fillText(e[m].masa, 150, 20);
  ctx.font = '20px serif';
ctx.textAlign = 'center'
  ctx.fillText(e[m].nombre, 75, 140);
  ctx.save();
  ctx.fillStyle = r;
  ctx.strokeStyle = "rgba(0,0,0,0.4)";
  ctx.fillRect (0, 0, 150, 150);
  ctx.save();


  //DOM
  info = document.getElementById("elementinfo")
  info.innerHTML="Nombre: " + e[m].nombre + "<br>";
  info.innerHTML+="Pertenece al bloque: "+ e[m].bloque + "<br>";
  info.innerHTML+="Pertenece a la familia de los : " + e[m].nombre_familia + "<br>";
  info.innerHTML+="Pertenece al grupo : " + e[m].gruponum + ", tambien llamado:" + e[m].grupo +", tambien llamado:" + e[m].nombre_grupo  + "<br>";
  info.innerHTML+="Su numero atomico es: " + e[m].numeroatm + "<br>";
  if (e[m].masa!=0){
  info.innerHTML+="Tiene una masa atomica de: " + e[m].masa + "<br>";
  }
  if (e[m].electronegatividad!=0){
  info.innerHTML+="Tiene una electronegatividad de: " + e[m].electronegatividad + "<br>";

  }
  var div = document.getElementById("model")
  div.innerHTML='<model-viewer style="height:100%;width:100%" src="/static/Modelos/atomos/atomo_'+e[m].numeroatm+'.glb" autoplay ar ar-placement="wall" scale="0.5 0.5 0.5" ar-modes="webxr scene-viewer quick-look" auto-rotate camera-controls >' + "<br>";
  let img = document.getElementById("imagen_elemento");
  img.src="";
  img.src=imagen(e[m].numeroatm);
  let adsdas =  document.getElementById("descripcion");
  adsdas.innerHTML=DDD[m];
}
function imagen(num_atomico){
  if (json==""){
  fetch('/static/temas/periodic table.json')
  .then(response => response.text())
  .then((data) => {
    json = data
  })}
  let w =JSON.parse(json);
  let nombre = w.elements[num_atomico-1].name.toLowerCase();
  image_path="https://images-of-elements.com/s/"+nombre+".jpg"
  return image_path;
}

function llenar_tabla(gradiente="familia"){
for (i=0;i<118;i++){ //TODO: TOma en cuenta al tungsteno
    let id = "e" + (i+1)
    let casilla=document.getElementById(id)
    casilla.className="e"
    casilla.addEventListener("mouseenter",function(){
      casilla.style.borderWidth = "2px";
      casilla.style.borderColor="cyan";
    });
    casilla.addEventListener("mouseleave",function(){
      casilla.style.borderWidth = "";
      casilla.style.borderColor="";
    });
    casilla.addEventListener("click",function(){
      //Llenar una tarjeta con info del elemento
      n=casilla.id.substring(1);
      r=casilla.style.backgroundColor;
      window.requestAnimationFrame(act)

    });
    casilla.innerHTML=e[i].simbolo
    switch (gradiente) {
      case "familia":
      switch (e[i].familia) {
        //0->no metalico, 1 -> metal alcalino,
        //2->alcalinoterreo, 3->otros metales, 4->metales
        // de transicion,5->lantanidos,6->metaloides o semimetales
        //,7->halogenos,8->hases nobles, 9->actinidos
        case 0:
        casilla.style.backgroundColor="rebeccapurple"
        e[i].nombre_familia="No metálicos"
          break;
        case 1:
        casilla.style.backgroundColor="indianred"
        e[i].nombre_familia="Metales Alcalinos"
          break;
        case 2:
        casilla.style.backgroundColor="sandybrown"
        e[i].nombre_familia="Alcalinotérreos"
          break;
        case 3:
        casilla.style.backgroundColor="lightgoldenrodyellow"
        e[i].nombre_familia="Otros metales"
          break;
        case 4:
        casilla.style.backgroundColor="greenyellow"
        e[i].nombre_familia="Metales de trancisión"
          break;
        case 5:
        casilla.style.backgroundColor="cornflowerblue"
        e[i].nombre_familia="Lantánidos"
          break;
        case 6:
        casilla.style.backgroundColor="springgreen"
        e[i].nombre_familia="Metaloides"
          break;
        case 7:
        casilla.style.backgroundColor="plum"
        e[i].nombre_familia="Halógenos"
          break;
        case 8:
        casilla.style.backgroundColor="teal"
        e[i].nombre_familia="Gases nobles"
          break;
          case 9:
          casilla.style.backgroundColor="silver"
          e[i].nombre_familia="Actínidos"
            break;
        default:
        casilla.style.backgroundColor="linen"
        break;
      }

        break;
        case "grupo":
        switch (e[i].grupo) {
          case "1A":
          casilla.style.backgroundColor="rebeccapurple"
            break;
          case "2A":
          casilla.style.backgroundColor="indianred"
            break;
          case "3A":
          casilla.style.backgroundColor="sandybrown"
            break;
          case "4A":
          casilla.style.backgroundColor="lightgoldenrodyellow"
            break;
          case "5A":
          casilla.style.backgroundColor="greenyellow"
            break;
          case "6A":
          casilla.style.backgroundColor="cornflowerblue"
            break;
          case "7A":
          casilla.style.backgroundColor="springgreen"
            break;
          case "8A":
          casilla.style.backgroundColor="plum"
            break;
            case "1B":
            casilla.style.backgroundColor="yellow"
              break;
            case "2B":
            casilla.style.backgroundColor="turquoise"
              break;
            case "3B":
            casilla.style.backgroundColor="olive"
              break;
            case "4B":
            casilla.style.backgroundColor="darkolivegreen"
              break;
            case "5B":
            casilla.style.backgroundColor="cyan"
              break;
            case "6B":
            casilla.style.backgroundColor="palegoldenrod"
              break;
            case "7B":
            casilla.style.backgroundColor="lightsalmon"
              break;
            case "8B":
            casilla.style.backgroundColor="crimson"
              break;
          default:
          casilla.style.backgroundColor="linen"
          break;
        }

          break;
          case "bloque":
          switch (e[i].bloque) {
            case "s":
            casilla.style.backgroundColor="lemonchiffon"
              break;
            case "p":
            casilla.style.backgroundColor="tomato"
              break;
            case "d":
            casilla.style.backgroundColor="darkolivegreen"
              break;
            case "f":
            casilla.style.backgroundColor="cornflowerblue"
              break;
            default:
            casilla.style.backgroundColor="linen"
            break;
          }

            break;
            case "estado":
            switch (e[i].estado) {
              case 1:
              casilla.style.backgroundColor="darksalmon"
                break;
              case 2:
              casilla.style.backgroundColor="lightsteelblue"
                break;
              case 3:
              casilla.style.backgroundColor="lightgray"
                break;
              default:
              casilla.style.backgroundColor="linen"
              break;
            }

              break;
              case "masa":

              //Masa menor=1, mayor =184, color 0-255
              g = 312 - (90+e[i].masa)*250/394
              hexString = g.toString(16);
              hexString = hexString.substring(0,2)
              if (g<16){
                hexString = "0"+hexString.substring(0,1)
              }
              let color="#"+hexString+"0000"
              //console.log(color);
              if (e[i].masa==0){
                color="linen"
              }

              casilla.style.backgroundColor=color
              break;
              case "electronegatividad":

              //menor=0.9, mayor =3.98, color 0-255
              g = (1+e[i].electronegatividad)*254/4.98

              hexString = g.toString(16);
              hexString = hexString.substring(0,2)
              if (g<16){
                hexString = "0"+hexString.substring(0,1)
              }
              let c="#"+"00"+hexString+"00"
              if (e[i].electronegatividad==0){
                c="linen"
              }

              //console.log(color);
              casilla.style.backgroundColor=c
              break;
      default:

    }

}
}


function handleStart(evt) {
  evt.preventDefault();
  console.log("touchstart.");
  var el = document.getElementById("elemento");
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    console.log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    console.log("touchstart:" + i + ".");
  }
}

function load(){

  window.requestAnimationFrame(dibujo)

}
