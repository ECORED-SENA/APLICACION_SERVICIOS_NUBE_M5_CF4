<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo
      h2 Actividad didáctica (Arrastrar y soltar)

    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center
          figure
            img.p-lg-5(src="@/assets/curso/actividad-didactica.svg", alt="Arrastrar y soltar")
      .col-12.col-md-8.col-lg-9
        .col-lg-6
          p.mb-4 Asociar cada uno de los modelos de servicio de computación en la nube con sistemas que son muy conocidos y usados en la actualidad.
        .tarjeta.tarjeta--azul2.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0.text-white Arrastrar y soltar
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
