<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Tipos de nube

    figure.mb-5
      img(src="@/assets/curso/banner-tema4.svg", alt="Tipos de nube")  

    p.mb-4 Dependiendo de quién es el propietario y el método de implementación de la infraestructura a ser utilizada, existen tres grandes tipos de nube, las cuales se detallan a continuación:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Tipos de nube

    .row.justify-content-center
      .col-lg-11
        ImagenInfografica.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/imagen-tema4.svg', alt='Tipos de  nube')          

          .tarjeta.color-acento-botones.p-3(x="29%" y="81%")
            .h5.mb-2 Nube privada
            p Se conoce como nube privada al aprovisionamiento de capacidades de cómputo, almacenamiento y de networking de manera local para consumo individual. En general, las instalaciones de tipo on-premise se incluyen dentro de la categoría de nubes privadas.

          .tarjeta.color-acento-botones.p-3(x="71%" y="81%")
            .h5.mb-2 Nube pública
            p Una nube es pública cuando todo el conjunto de recursos de infraestructura de TI ajena al usuario final se despliega para el consumo como servicios a través de internet, independientemente de si los recursos son asignados o no a los usuarios de forma privada.  Algunos proveedores de este tipo de nubes son: 
            p Amazon Web Services (AWS), Google Cloud, IBM Cloud y Microsoft Azure.

          .tarjeta.color-acento-botones.p-3(x="50%" y="47%")
            .h5.mb-2 Nube híbrida
            p Una nube es híbrida cuando combina servicios de proveedores de nubes públicas con servicios de nubes privadas, las cuales  generalmente están conectadas mediantes redes de área local (LAN), de área amplia (WAN), redes privadas virtuales (VPN) o API.
        



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
