export default {
  global: {
    componenteFormativo: 'Cloud Computing',
    descripcionCurso:
      'En este componente formativo se introducen las características, servicios, modelos y tipos de una de las formas más utilizadas para la construcción y despliegue de aplicaciones y servicios de software: la computación en la nube. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Computación en la nube',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de servicios de computación en la nube',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Modelos de servicios de la computación en la nube',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Infraestructura como servicio (Iaas)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Plataforma como servicio (PaaS)',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Software como servicio (SaaS)',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Diferencias entre IaaS, PaaS y SaaS',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Tipos de nube',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amazon Web Services, Inc. (s. f.). AWS | Elastic compute cloud (EC2) de capacidad modificable en la nube. Recuperado 4 de junio de 2021, de',
      link:
        'https://aws.amazon.com/es/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc',
    },
    {
      referencia:
        'Peña, X. (3 de Septiembre de 2019.). ¿Qué es y para qué sirve la computación en la nube? Academia Pragma. Recuperado 4 de junio de 2021, de',
      link:
        'https://www.pragma.com.co/blog/que-es-y-para-que-sirve-la-computacion-en-la-nube',
    },
    {
      referencia:
        'Red Hat. (s. f.). Tipos de cloud computing. Red Hat, Inc. Recuperado 4 de junio de 2021, de',
      link:
        'https://www.redhat.com/es/topics/cloud-computing/public-cloud-vs-private-cloud-and-hybrid-cloud',
    },
  ],
  glosario: [
    {
      termino: 'TI',
      significado: 'tecnologías de la información.',
    },
    {
      termino: 'Networking',
      significado:
        'trabajo en equipo, colaborativo y la integración entre los diferentes recursos tecnológicos que permiten potenciar y maximizar el potencial de las redes de datos.',
    },
    {
      termino: 'Middleware',
      significado:
        'tipo especial de software que permite la comunicación entre diferentes aplicaciones o de las aplicaciones con el sistema operativo.',
    },
    {
      termino: 'AWS',
      significado: ' Amazon Web Services.',
    },
  ],
  complementario: [
    {
      texto:
        'D. (2020, 31 enero). ¿Qué es la nube? ¿Qué tipos de nubes hay? ¿Qué ventajas y desventajas tiene el uso de la nube?',
      tipo: 'Video',
      link: 'https://youtu.be/g5jlcpLcakI',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura<br> Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Instructor',
        centro:
          'Centro de Teleinformática y Producción Industrial<br> Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología<br> Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica<br> Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura<br> Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura<br> Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios<br> Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura<br> Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura<br> Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura<br> Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura<br> Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios<br> Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
