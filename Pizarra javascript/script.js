//Guardar el elemento y el contexto
const divCanvas = document.getElementById("div-canvas");
const contexto = divCanvas.getContext("2d");

let inicialX;
let inicialY;

const dibujar = (cursorX, cursorY) => {
  contexto.beginPath();
  contexto.moveTo(inicialX,inicialY);
  contexto.lineWidth = 9;
  contexto.strokeStyle = "#000";
  contexto.lineCap = "round";
  contexto.lineJoin = "round";
  contexto.lineTo(cursorX,cursorY);
  contexto.stroke();

  inicialX = cursorX;
  inicialY = cursorY;
}

const mouseDown = (evt) => {
  inicialX = evt.offsetX;
  inicialY = evt.offsetY;
  dibujar(inicialX,inicialY);
  divCanvas.addEventListener('mousemove', mouseMoving);
}

const mouseMoving = (evt) => {
  dibujar(evt.offsetX, evt.offsetY);
}

const mouseUp = () =>{
divCanvas.removeEventListener("mousemove", mouseMoving);
}

divCanvas.addEventListener('mousedown', mouseDown);
divCanvas.addEventListener("mouseup", mouseUp);