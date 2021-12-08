var current_models=[];
var nombres=[];
var modelViewer = document.getElementById("pan-demo");
var models_slot = document.getElementById("glb");
var info = document.getElementById("info");
var path="/static/Modelos/"
var summary="";
var text="";
var link=""
document.onload=start();
function start(){
  seccion(1);
  setTimeout(() => { main()}, 2000);

}
function seccio(i){
  seccion(i);
  main();
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function deleteChild(e) {
        //e.firstElementChild can be used.
        var child = e.lastElementChild;
        while (child) {
            e.removeChild(child);
            child = e.lastElementChild;
        }
    }
function main(){
  console.log(nombres);
  console.log(current_models);

  if (models_slot == null || modelViewer == null){
  modelViewer = document.getElementById("pan-demo");
  models_slot = document.getElementById("glb");
  info = document.getElementById("info");
  models_slot.addEventListener('input', (event) => {
  modelViewer.src = event.target.value === 'default' ? null : event.target.value;
  });
  }
  deleteChild(models_slot) //Vaciar todo
  deleteChild(info);
  const s = document.createElement('summary');
  s.textContent=summary;
  const p = document.createElement('p');
  p.textContent=text;
  info.appendChild(s);
  info.appendChild(p);
  for (nombre in nombres) {
  const option = document.createElement('option');
  option.value = path + current_models[nombre];
  option.textContent = nombres[nombre];
  models_slot.appendChild(option);
}
modelViewer.src=path+current_models[0];
}

models_slot.addEventListener('input', (event) => {
modelViewer.src = event.target.value === 'default' ? null : event.target.value;
});
function seccion(nombre){
  switch (nombre){
    case 1:
    current_models = ["atomos/atomo_45_n.glb","orbital_s.glb","orbital_p.glb","orbital_d.glb","orbital_f.glb","spin_2.glb"];
    nombres=["Atomo", "Orbital s", "Orbital p","Orbital d","Orbital f","Spin del electron"];
    summary="El Atomo";
    text="Los átomos están compuestos por: electrones, protones y neutrones. Cada uno de estos tiene características importantes como son la carga y la masa. Los protones tienen cargas positivas y se encuentran en el núcleo del átomo, los electrones tienen cargas negativas y orbitan alrededor del núcleo, los neutrones no tienen carga y están al núcleo del átomo junto con los protones ..."
    break;
    case 2:
    current_models = ['tabla periodica.glb'];
    nombres= ['Tabla Periodica 3D'];
    break;
    case 3:
    current_models= ['enlace metalico.glb'];
    nombres=['Enlace metalico'];
    summary="Enlaces Quimicos";
    text="Los átomos se combinan entre sí para formar compuestos con propiedades diferentes de los átomos que contienen. La fuerza de atracción entre los átomos en un compuesto es un enlace químico ..."
    break;
    case 4:
    current_models = ['acido fluorhidrico.glb','ice.glb'];
    nombres = ["Acido Fluorhidrico","Hielo"];
    summary="Fuerzas intermoleculares";
    text="Las fuerzas intermoléculares se suelen clasificar conforme al tipo de moléculas que son atraídas, principalmente se encuentran las fuerzas de Van Der Waals, o enlaces de Van Der Waals, o enlaces secundarios, que son aquellos enlaces en los que no hay comparticion de electrones, a diferencia de los enlaces covalentes e iónicos ..."
    break;
    case 5:
    current_models=['na2o.glb', 'naoh.glb','co.glb','acido fluorhidrico.glb','hno3.glb','lif.glb','nano3.glb','bh3.glb','cah2.glb'];
    nombres=['Oxido sodico', 'Hidroxido de sodio','Monoxido de carbono', 'Ácido Fluorhidrico','Acido Trioxinitrico','Fluoruro de Litio','Nitrato Sodico','Borano',"Hidruro de Calcio"];
    summary="Compuestos Inorganicos"
    text="La nomenclatura es la manera en que se nombran a los compuestos. En la química inorgánica existen tres nomenclaturas importantes: Tradicional, IUPAC y Stock ..."
    break;
    case 6:
    current_models=['sp3.glb','sp2.glb','sp.glb','etileno_sp2.glb','acetileno_sp2.glb', 'metano.glb', 'etano.glb', 'eteno.glb','etino.glb'];
    nombres=["Hibridacion sp3","Hibridacion sp2",'Hibridacion sp','Etileno sp2','Acetileno sp2','Metano',"Etano","Eteno","Etino"];
    summary="Quimica Organica"
    text="La química orgánica se dedica al estudio de un único elemento: el Carbono. La razón por la que tiene toda una rama dedicada a su estudio se debe a que, por sus características químicas, puede formar una gran cantidad de nuevas moléculas con diferentes propiedades ..."
    break;
    case 7:
    current_models=['acetona.glb','formaldehido.glb','acido acetico.glb','acetato de etilo.glb','acetamida.glb','metanol.glb','metilamina.glb','etoxietano.glb','benceno2.glb'];
    nombres=['Acetona',"Formaldehido","Acido Acetico","Acetato de Etilo", "Acetamida","Metanol","Metilamina","Etoxietano","Benceno"];
    summary="Compuestos organicos"
    text="La química orgánica se dedica al estudio de un único elemento: el Carbono. La razón por la que tiene toda una rama dedicada a su estudio se debe a que, por sus características químicas, puede formar una gran cantidad de nuevas moléculas con diferentes propiedades ..."
    break;
    case 8:
    current_models=['cubica simple.glb','tetragonal.obj.glb','ortorrombica.obj.glb','romboedrica.obj.glb','monoclinica.obj.glb','triclinica.obj.glb','hexagonal.glb','empaquetamiento simple.glb','empaquetamiento centrado en el cuerpo.glb','empaquetamiento centrado en las caras.glb','estructura cubica compacta.glb','estructura hexagonal compacta ABA.obj.glb','estructura hexagonal compacta ABA 2.obj.glb','hexagonal centrada en el cuerpo.obj.glb']
    nombres=["Estructura Cubica Simple","Estructura Tetragonal","Estructura Ortorrombica","Estructura Romboedrica","Estructura Monoclinica","Estructura Triclinica","Estructura Hexagonal","Empaquetamiento Simple","Empaquetamiento Centrado en el Cuerpo","Empaquetamiento Centrado en las caras","Estructura Cubica Compacta","Estructura Hexagonal Compacta ABA", "Estructura Hexagonal Compacta","Estructura hexagonal centrada en el cuerpo"];
    summary="Sistemas Cristalinos"
    text="Una estructura cristalina determina el acomodamiento (ordenamiento) de las moléculas de un sólido.  A diferencia de los sólidos amorfos, los sólidos cristalinos tienen un ordenamiento molecular bien definido ..."
    break;
    case 9:
    current_models=['ferrita.glb','austenita.glb','martensita.glb'];
    nombres=["Ferrita","Austenita","Martensita"];
    summary="Aleaciones metalicas"
    text="En el caso de los metales, existen variaciones en las que se da que no toda la estructura esta formada por un solo compuesto, a este tipo de metales se les llama aleaciones y estan formadas por al menos un metal y otro elemento ..."
    break;
    case 10:
    current_models=['polietileno.glb','nylon.glb','PET.glb','PLA.glb','polipropileno.glb','PVC.glb','teflon.glb','poliestireno.glb','policarbonato.glb'];
    nombres=['Polietileno',"Nylon",'PET','PLA','Polipropileno','PVC','Teflon','Poliestireno','Policarbonato'];
    summary="Polimeros"
    text="Los polimeros son moleculas de cadena larga que se forman mediante el enlace de varias moleculas iguales, llamadas monómeros. Por lo general repetidos cientos o miles de veces en una estructura similar a una cadena ..."
    break;
    case 11:
    current_models=['alumina.glb','zirconia.glb','carburo de tungsteno.glb','carburo de titanio.glb','carburo de silicio.glb','nitruro de titanio.glb','nitruro de boro.glb','nitruro de silicio.glb','silice.glb','vidrio.glb','grafito 2.glb','diamante.glb'];
    nombres=['Alumina',"Zirconia","Carburo de Tungsteno",'Carburo de Titanio','Carburo de Silicio','Nitruro de Titanio','Nitruro de Boro','Nitruro de Silcio','Silice','Vidrio','Grafito','Diamante'];
    summary="Ceramicos"
    text="A difererencia de los metales, los cerámicos estan compuestos exclusivamte de enlaces covalentes e ionicos, dotandoles de mayor resistecia termica, electrica y dureza ..."
    break;
    }
}
