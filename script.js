const color = document.querySelector("#color");
const transparencia = document.querySelector("#transparencia");
const blurr = document.querySelector("#blur");
const contraste = document.querySelector("#contraste");
const saturacion = document.querySelector("#saturacion");
const tamaño = document.querySelector("#tamaño");
const borderRadius = document.querySelector("#radius");
const cuadrado = document.querySelector(".display");
const valores = document.querySelector(".valores");

let output;
let clean;
let colorHex;
let colorRGB;

let stats = { blur: 0, sat:100, trans: 100, contrast: 100}
// let newBlurrr = 0;
// let newSat = 100;
// let newTrans = 100;
// let newContrast = 0;

color.addEventListener("input", (e) => {
  let color = e.target.value;
  cambiarColor(color);

})
function cambiaArgb(a) {
  return `rgba(${a >> 16},  ${a >> 8 & 255},  ${a & 255}, 100)`;

}

const cambiarColor = (color) => {
  let output;
  let clean;
  let colorHex;
  let colorRGB

  output = color;
  clean = output.slice(1);
  colorHex = `0x${clean}`;

  colorRGB = cambiaArgb(colorHex);


  cuadrado.style.background = colorRGB;
}
borderRadius.addEventListener("input", (e) => {
  let radius = e.target.value;
  cambiarRadius(radius);
})

const cambiarRadius = (radio) => {
  cuadrado.style.borderRadius = `${radio}px`;
}

tamaño.addEventListener("input", (e) => {
  let tamaño = e.target.value;
  tamaño *= 5;
  cambiarSize(tamaño);

})

const cambiarSize = (px) => {
  cuadrado.style.width = `${px}px`;
  cuadrado.style.height = `${px}px`;
}

transparencia.addEventListener("input", (e) => {
  let trans = e.target.value;
  stats.trans = trans;
  cambiarBackDrop();
  console.log(stats.trans);
  // cambiarAlfa(trans);
})

const cambiarAlfa = (a) => {
  cuadrado.style.filter = `opacity(${a}%)`;
}

blurr.addEventListener("input", (e) => {
  let blur = e.target.value;
  stats.blur = blur;
  cambiarBackDrop();
  // cambiarBlur(blur);
})

const cambiarBlur = (blur) => {
  cuadrado.style.filter = `blur(${blur}px)`;
}

saturacion.addEventListener("click", (e) => {
  let sat = e.target.value;
  stats.sat = sat;
  cambiarBackDrop();

  //  cambiarSaturacion(sat);
})

const cambiarSaturacion = (sat) => {
  cuadrado.style.filter = `saturate(${sat}%)`
}
contraste.addEventListener("input", (e) => {
  let cont = e.target.value;
  stats.contrast = cont;

  // cambiarContraste(cont);
  cambiarBackDrop();
})

const cambiarContraste = (c) => {
  cuadrado.style.filter = `contrast(${c}%)`;
}




function cambiarBackDrop() {
  //cuadrado.style.backdropFilter = `blur(${stats.blur}px) opacity(${stats.trans}%) saturate(${stats.sat}%) contrast(${stats.contrast}%)`
  cuadrado.style.filter = `blur(${stats.blur}px) opacity(${stats.trans}%) saturate(${stats.sat}%) contrast(${stats.contrast}%)`
  //cuadrado.style.filter = `opacity(${stats.trans}%)`;
  // cuadrado.style.filter = `blur(${stats.blur}%)`;
  // cuadrado.style.filter = `saturate(${stats.sat}%)`;
  // cuadrado.style.filter = `contrast(${stats.contrast}%)`;
  valores.innerHTML=`backdrop-Filter: blur(${stats.blur}px) opacity(${stats.trans}%) saturate(${stats.sat}%) contrast(${stats.contrast}%)`;
}










