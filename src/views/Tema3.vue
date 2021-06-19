<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Modelos de servicios de la computación en la nube

    figure.mb-5
      img(src="@/assets/curso/banner-tema3.svg", alt="Modelos de servicios de la computación en la nube")  

    p Dependiendo de los proveedores seleccionados para servicios de computación en la nube, se pueden generar diferentes responsabilidades por parte del proveedor y el usuario (Peña, 2019). Lo anterior permite diferenciar modelos de servicio que se describen a continuación.
    
    Separador


    // 3.1
    #t_3_1.titulo-segundo
      .h2 3.1. Infraestructura como servicio (Iaas)

    .row.mb-4
      .col-lg-7.mb-2
        p Este modelo es conocido como servicios de infraestructura en la nube y permite que  el usuario se encargue de la administración de los sistemas operativos, las aplicaciones, los datos, el middleware y todos los elementos que en este se despliega , por otra parte el proveedor del servicio se encarga del soporte de la infraestructura que da soporte al  sistema operativo montado por el usuario.
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-tema3-1.svg', alt='Imagen decorativa')   

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Administración de componentes en IaaS
        figure.mb-5
          img.mb-2(src='@/assets/curso/figura-tema3-1.svg', alt='Administración de componentes en IaaS') 
          figcaption Fuente: SENA, 2021      


    Separador


    // 3.2
    #t_3_2.titulo-segundo
      .h2 3.2.	Plataforma como servicio (PaaS)

    .row.mb-4
      .col-lg-7.mb-2
        p En esta categoría  el proveedor de servicios ofrece una plataforma como una solución integrada o servicio a través de Internet según la lista para el consumo por parte del usuario. El proveedor se encarga de gestionar  toda la infraestructura referente al hardware y al sistema operativo sobre el que se despliega la plataforma mientras el usuario solo es responsable de la administración y consumo de esta, logrando el desarrollo, ejecución y gestión de sus  sus propias aplicaciones. Por lo anterior, es el modelo ideal para desarrolladores de software porque solo necesita un entorno para el desarrollo y ejecución del código sin necesidad de preocuparse de otros procesos. A continuación se relaciona un ejemplo de PaaS es Firebase:
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-tema3-2.svg', alt='Imagen decorativa')   

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Administración de componentes en PaaS
        figure.mb-5
          img.mb-2(src='@/assets/curso/figura-tema3-2.svg', alt='Administración de componentes en PaaS') 
          figcaption Fuente: SENA, 2021      


    Separador


    // 3.3
    #t_3_3.titulo-segundo
      .h2 3.3.	Software como servicio (SaaS)

    .row.mb-4
      .col-lg-7.mb-2
        p En este modelo el proveedor se encarga de la infraestructura, sistemas operativos y plataformas tecnológicas que dan soporte a servicios de software que son expuestos para el consumo por parte de los usuarios. Ejemplos de este tipo de modelo de servicios son: Facebook, Google docs, Microsoft Office 365.
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-tema3-3.svg', alt='Imagen decorativa')   

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.titulo-img
          h5 Administración de componentes en SaaS
        figure.mb-5
          img.mb-2(src='@/assets/curso/figura-tema3-3.svg', alt='Administración de componentes en SaaS') 
          figcaption Fuente: SENA, 2021 


    Separador


    // 3.4
    #t_3_4.titulo-segundo
      .h2 3.4.	Diferencias entre IaaS, PaaS y SaaS     

    .row.mb-4
      .col-lg-7.mb-2
        p La selección de los modelos de servicio depende finalmente de las necesidades de la empresa o de los profesionales encargados de la toma de decisiones respecto al proceso de aprovisionamiento de la infraestructura dentro de la organización. Sin embargo, se debe tener en cuenta que tanto los modelos PaaS y SaaS se montan sobre una IaaS.
        p Según lo compartido en los puntos anteriores, la principal diferencia entre un modelo y otro viene determinada por la responsabilidad de los usuarios y proveedores sobre el proceso de mantenimiento y soporte, en segundo lugar están los aspectos de seguridad. En un modelo IaaS el usuario es responsable de la seguridad de las aplicaciones instaladas mientras que en modelos SaaS y PaaS la seguridad recae sobre el proveedor del servicio.
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-tema3-4.svg', alt='Imagen decorativa') 

    p.mb-4 En la tabla 1 se comparte  un ejemplo de los posibles tipos de roles involucrados con cada una de las modelos y algunos ejemplos de aplicaciones. 

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1. Modelos de servicios de computación en la nube
        .tabla-b.color-naranja.mb-5
          table
            caption Fuente: SENA, 2021
            thead.tabla-b__header
              tr
                td 
                  h4.mb-0 Modelo de Servicio
                td 
                  h4.mb-0 Roles relacionados
                td 
                  h4.mb-0 Ejemplo de aplicaciones  
            tbody
              tr
                td SaaS
                td Usuarios finales
                td Office 365, Google WorkSpace (G-Suite), WordPress.
              tr
                td PaaS
                td Desarrolladores de Software
                td Firebase, SAP Cloud Platform, Google App Engine.
              tr
                td IaaS
                td Administradores de TI
                td Amazon Web Services (AWS), Microsoft Azure, Google Cloud.
              

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
