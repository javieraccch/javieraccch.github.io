document.getElementById('photo1').addEventListener("mouseenter", ()=> {
  document.getElementById('photo1').src = "imagenes/poblacion.png";
  document.getElementById('photo-caption1').innerHTML = "Analisis y emplazamiento";
})

document.getElementById('photo1').addEventListener("mouseleave", ()=> {
    document.getElementById('photo1').src = "imagenes/conectividad.png";
    document.getElementById('photo-caption1').innerHTML = "Analisis y emplazamiento";
  })


  document.getElementById('photo2').addEventListener("mouseenter", ()=> {
    document.getElementById('photo2').src = "imagenes/jovenes.png";
    document.getElementById('photo-caption2').innerHTML = "Propuesta programatica y fundamentacion";
  })

  document.getElementById('photo2').addEventListener("mouseleave", ()=> {
      document.getElementById('photo2').src = "imagenes/propuesta.jpg";
      document.getElementById('photo-caption2').innerHTML = "Propuesta programatica y fundamentacion";
    })


    document.getElementById('photo3').addEventListener("mouseenter", ()=> {
      document.getElementById('photo3').src = "imagenes/corte1.png";
      document.getElementById('photo-caption3').innerHTML = "Planimetrias e imagen de proyecto";
    })

    document.getElementById('photo3').addEventListener("mouseleave", ()=> {
        document.getElementById('photo3').src = "imagenes/emplazamiento2.png";
        document.getElementById('photo-caption3').innerHTML = "Planimetrias e imagen de proyecto";
      })
