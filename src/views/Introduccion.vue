<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/banner-intro.svg", alt="Computación en la nube")
    
    p La industria del software y en general todo lo relacionado a TI ha tenido grandes avances respecto a metodologías de trabajo, herramientas tecnológicas y todo lo relacionado con la infraestructura necesaria para la construcción de productos y servicios. Sin embargo, una de las preocupaciones  al momento de construir y desplegar soluciones, radica en decidir qué tipo de arquitectura tecnológica es más conveniente adquirir teniendo presente  las grandes velocidades con las que este tipo de elementos se vuelven obsoletos. 
    p.mb-5 Este componente formativo  muestra las generalidades relacionadas con una forma de dar solución al problema del alistamiento tecnológico, el cual es muy usado actualmente en la industria: 
      strong.etiqueta la computación en la nube.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
