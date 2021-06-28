<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Computación en la nube

    figure.mb-5
      img(src="@/assets/curso/banner-tema1.svg", alt="Computación en la nube")  

    p Es un servicio que se puede consumir por Internet y por medio del cual se pueden rentar  recursos computacionales como son:  servidores, almacenamiento, procesadores o cualquier cosa que una computadora puede hacer.
    p En el campo de la TI el concepto de nube ya existía desde los años 90, sin embargo, solo  hasta el año 2006 fue cuando se popularizó el término con la aparición del servicio EC2 de Amazon (Elastic Compute Cloud), el cual es un servicio web que se puede alquilar, pero con la característica que es escalable de acuerdo con las necesidades del usuario (AWS, 2021), es decir, un servidor que se puede modificar en almacenamiento, poder de procesamiento, red, sistema operativo entre otras cosas.
    p.mb-54 Entre las ventajas que se pueden destacar del cloud computing encontramos las siguientes:

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Computación en la nube

    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/imagen-tema1.svg', alt='Computación en la nube')          

      .tarjeta.color-acento-botones.p-3(x="50%" y="0%")
        .h5.mb-2 Costos más favorables
        p No es necesario invertir en una gran infraestructura ni licencias que serán obsoletas con el paso del tiempo. Hay gran variedad de servicios que se pagan de forma mensual de acuerdo con el uso y que son acompañados muchas veces de otros servicios totalmente gratuitos.

      .tarjeta.color-acento-botones.p-3(x="75%" y="48%")
        .h5.mb-2 Mayor velocidad
        p Debido a que son plataformas basadas y pensadas para la web.

      .tarjeta.color-acento-botones.p-3(x="50%" y="96%")
        .h5.mb-2 Flexibilidad
        p Permite reasignar recursos sin dejar de prestar los servicios existentes y facilita los procesos largos de compra. El proceso de aprovisionamiento de recursos, dependiendo de su complejidad, puede realizarse en pocos minutos.
    
      .tarjeta.color-acento-botones.p-3(x="25%" y="48%")
        .h5.mb-2 Acceso a la información
        p En cualquier momento y desde cualquier lugar en que se cuente con una conexión a internet.
    
    p Algunos de los servicios de computación en la nube más conocidos mundialmente son: Amazon Web Services, Azure y Google Cloud Platform.




</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
