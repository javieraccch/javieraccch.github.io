document.getElementById ("titulo1").innerHTML = "";
document.getElementById ("info1").innerHTML = "";

document.getElementById ("titulo2").innerHTML = "";

// enumera los div ya que son de la misma clase
console.log(document.getElementsByClassName("box"));

function miFuncion(){
  console.log("hola de nuevo");
  console.log(document);
  console.log(document.getElementById("titulo1").style.color = "magenta");
  console.log(document.getElementById("titulo1").style.backgroundColor = "yellow");

// aqui le puedo cambiar el color y cosas a las diferentes cajas div que tengo
  document.getElementsByClassName('box')[0].style.backgroundColor = "yellow";
  document.getElementsByClassName('box')[1].style.backgroundColor = "magenta";
}

// se debe cerrar las funciones con los corchetes{}

function cambiaContenido(){

  document.getElementById('photo').src = "imagenes/imagenprueba2.jpg"
  document.getElementById('photo-caption').innerHTML = "frida broche bordado con mostacillas";
  }

  function cambiaContenido2(){
    document.getElementById('photo').src = "imagenes/imagenprueba.jpg"
    document.getElementById('photo-caption').innerHTML = "vangogh broche bordado con mostacillas";
    }



// Funciones imagenes
// 1
document.getElementById('photo1').addEventListener("mouseenter", ()=> {
  document.getElementById('photo1').src = "dibujos/2.jpg";
  document.getElementById('photo-caption1').innerHTML = "Zzz...";
})

document.getElementById('photo1').addEventListener("mouseleave", ()=> {
    document.getElementById('photo1').src = "dibujos/1.jpg";
    document.getElementById('photo-caption1').innerHTML = "Una fria mañana de un dia lunes";
  })
  // 2
  document.getElementById('photo2').addEventListener("mouseenter", ()=> {
    document.getElementById('photo2').src = "dibujos/4.jpg";
    document.getElementById('photo-caption2').innerHTML = "Sonó la alarma";
  })

  document.getElementById('photo2').addEventListener("mouseleave", ()=> {
      document.getElementById('photo2').src = "dibujos/3.jpg";
      document.getElementById('photo-caption2').innerHTML = "Drrriiing";
 })
// 3
document.getElementById('photo3').addEventListener("mouseenter", ()=> {
  document.getElementById('photo3').src = "dibujos/6.jpg";
  document.getElementById('photo-caption3').innerHTML = "Oh, tengo mensajes sobre la entrega";
})

document.getElementById('photo3').addEventListener("mouseleave", ()=> {
    document.getElementById('photo3').src = "dibujos/5.jpg";
    document.getElementById('photo-caption3').innerHTML = "A ver...";
})
// 4
document.getElementById('photo4').addEventListener("mouseenter", ()=> {
  document.getElementById('photo4').src = "dibujos/8.jpg";
  document.getElementById('photo-caption4').innerHTML = "Se canceló la entrega<br>*emocionada*";
})

document.getElementById('photo4').addEventListener("mouseleave", ()=> {
    document.getElementById('photo4').src = "dibujos/7.jpg";
    document.getElementById('photo-caption4').innerHTML = "Q-qué";
})
// 5
document.getElementById('photo5').addEventListener("mouseenter", ()=> {
  document.getElementById('photo5').src = "dibujos/10.jpg";
  document.getElementById('photo-caption5').innerHTML = "Zzz...";
})

document.getElementById('photo5').addEventListener("mouseleave", ()=> {
    document.getElementById('photo5').src = "dibujos/9.jpg";
    document.getElementById('photo-caption5').innerHTML = "A dormir otra vez";
})
// 6
document.getElementById('photo6').addEventListener("mouseenter", ()=> {
  document.getElementById('photo6').src = "dibujos/12.jpg";
  document.getElementById('photo-caption6').innerHTML = "¡Ring! ¡Riiing! ¡Riiinng!";
})

document.getElementById('photo6').addEventListener("mouseleave", ()=> {
    document.getElementById('photo6').src = "dibujos/11.jpg";
    document.getElementById('photo-caption6').innerHTML = "¿Quién es ahora?";
})
// 7
document.getElementById('photo7').addEventListener("mouseenter", ()=> {
  document.getElementById('photo7').src = "dibujos/14.jpg";
  document.getElementById('photo-caption7').innerHTML = "*Rechaza la llamada*";
})

document.getElementById('photo7').addEventListener("mouseleave", ()=> {
    document.getElementById('photo7').src = "dibujos/13.jpg";
    document.getElementById('photo-caption7').innerHTML = "Voy a cortar";
})
// 8
document.getElementById('photo8').addEventListener("mouseenter", ()=> {
  document.getElementById('photo8').src = "dibujos/16.jpg";
  document.getElementById('photo-caption8').innerHTML = "No se canceló la entrega y- <br>y son las 12 de la tarde";
})

document.getElementById('photo8').addEventListener("mouseleave", ()=> {
    document.getElementById('photo8').src = "dibujos/15.jpg";
    document.getElementById('photo-caption8').innerHTML = "¿¡¡¡QUÉ!!!?";
})
// 9
document.getElementById('photo9').addEventListener("mouseenter", ()=> {
  document.getElementById('photo9').src = "dibujos/18.jpg";
  document.getElementById('photo-caption9').innerHTML = "Buá";
})

document.getElementById('photo9').addEventListener("mouseleave", ()=> {
    document.getElementById('photo9').src = "dibujos/17.jpg";
    document.getElementById('photo-caption9').innerHTML = "Morí";
})
