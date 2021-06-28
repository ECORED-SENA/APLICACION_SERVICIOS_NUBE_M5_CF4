<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipos de servicios de computación en la nube

    figure.mb-5
      img(src="@/assets/curso/banner-tema2.svg", alt="Tipos de servicios de computación en la Nube")  

    p.mb-4 Es importante tener claridad sobre los tipos de servicio que se pueden ofrecer por medio de la computación en la nube, porque puede ayudar a tomar la decisión de migrar o no a este tipo de servicios o seguir trabajando con los mecanismos de aprovisionamiento tradicionales (Peña, 2021).

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Tipos de servicios de computación en la nube

    .row.justify-content-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/imagen-tema2.svg', alt='Tipos de servicios de computación en la nube')          

          .tarjeta.color-acento-botones.p-3(x="47%" y="30%")
            .h5.mb-2 Servicios de cómputo
            p Este tipo de servicios da soporte a la capa de procesamiento de las aplicaciones, es decir, el usuario determinará entre características como: cantidades de núcleos de procesamiento y memoria requerida para el correcto funcionamiento de las aplicaciones y el proveedor del servicio se encarga de provisionar y mantenerlos disponibles para el usuario cuando se requiera.

          .tarjeta.color-acento-botones.p-3(x="15%" y="75%")
            .h5.mb-2 Servicios de almacenamiento
            p Este tipo de servicios buscan garantizar la disponibilidad de la información en cualquier momento, va más allá de brindar grandes cantidades de almacenamiento, sino que además se establecen mecanismo como por ejemplo la replicación en diferentes ubicaciones geográficas de forma que se pueda trabajar y acceder a los datos incluso en escenarios complejos dando gran tolerancia a fallos.

          .tarjeta.color-acento-botones.p-3(x="88%" y="45%")
            .h5.mb-2 Servicios de red
            p Estos están orientados a la selección de herramientas que permiten controlar la comunicación entre los diferentes servicios y la gestión de la seguridad de los recursos.
        



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
