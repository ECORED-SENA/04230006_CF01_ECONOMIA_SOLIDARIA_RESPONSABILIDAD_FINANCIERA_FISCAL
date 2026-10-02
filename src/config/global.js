export default {
  global: {
    Name: 'Gestión financiera solidaria y hechos económicos',
    Description:
      'La administración de recursos en organizaciones de economía solidaria exige comprender los fondos monetarios, la destinación de excedentes, las responsabilidades de los órganos de administración y control, y el registro de los hechos económicos. Este componente desarrolla criterios para reglamentar, ejecutar y hacer seguimiento a fondos solidarios, elaborar soportes contables y presentar estados financieros, promoviendo transparencia, participación democrática, sostenibilidad y cumplimiento normativo en la gestión financiera colectiva.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos financieros de la economía solidaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Economía solidaria: principios, organizaciones y finalidad social',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Recursos monetarios en organizaciones solidarias',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fondos solidarios: concepto, clases, fines y regulación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Órganos de administración y control: funciones y responsabilidades',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Participación democrática y toma de decisiones sobre recursos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Administración de fondos y excedentes solidarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Identificación de fondos estatutarios',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Reglamentación y creación de fondos monetarios',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Destinación de excedentes en economía solidaria',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Plan de seguimiento a la ejecución de fondos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Transparencia, control social y rendición de cuentas',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Hechos económicos en organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de hecho económico y transacción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Clasificación de cuentas según la naturaleza de la operación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Dinámica contable aplicada a organizaciones solidarias',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Reconocimiento y medición de hechos económicos',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo:
              'Descripción y registro de operaciones solidarias frecuentes',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Soportes contables y normativa aplicable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Soportes contables: concepto, clasificación y documentos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elaboración y diligenciamiento de soportes contables',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Normativa comercial, contable y tributaria',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Autoridades y entes de control',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Conservación documental y seguridad de la información',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estados financieros para organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Concepto, clasificación y elementos de los estados financieros',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Preparación de estados financieros según políticas contables',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Presentación de estados financieros a los órganos de administración y control',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Interpretación básica de resultados, fondos y excedentes',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Informe de asignación y seguimiento de recursos',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Activo',
      significado:
        'recurso económico presente controlado por la organización como resultado de hechos anteriores y con potencial para producir beneficios económicos.',
    },
    {
      termino: 'Aporte social',
      significado:
        'recurso entregado por un asociado para integrar o incrementar su participación económica en una organización solidaria.',
    },
    {
      termino: 'Control social',
      significado:
        'vigilancia ejercida por los asociados y sus órganos internos sobre el cumplimiento de los principios, estatutos, reglamentos y finalidades de la organización.',
    },
    {
      termino: 'Estado financiero',
      significado:
        'informe estructurado que presenta la situación financiera, los resultados, los cambios patrimoniales o los flujos de efectivo de una entidad.',
    },
    {
      termino: 'Excedente',
      significado:
        'resultado positivo obtenido al comparar los ingresos con los costos y gastos de un periodo, cuya destinación se realiza conforme a la normativa y los estatutos.',
    },
    {
      termino: 'Fondo solidario',
      significado:
        'conjunto de recursos destinados a una finalidad social, educativa, mutual, institucional o de bienestar previamente autorizada.',
    },
    {
      termino: 'Gasto',
      significado:
        'disminución de los activos o aumento de los pasivos que produce una disminución del patrimonio, distinta de las distribuciones realizadas a los asociados.',
    },
    {
      termino: 'Hecho económico',
      significado:
        'acontecimiento u operación que modifica los recursos, las obligaciones, el patrimonio, los ingresos, los costos o los gastos de una entidad.',
    },
    {
      termino: 'Ingreso',
      significado:
        'incremento de los activos o disminución de los pasivos que produce un aumento del patrimonio, distinto de los aportes realizados por los asociados.',
    },
    {
      termino: 'Medición contable',
      significado:
        'proceso mediante el cual se determina el valor monetario por el que un hecho económico se reconoce y presenta en la información financiera.',
    },
    {
      termino: 'Pasivo',
      significado:
        'obligación presente de la organización, surgida de hechos anteriores, que requiere la entrega de recursos para su cumplimiento.',
    },
    {
      termino: 'Patrimonio',
      significado:
        'participación residual en los activos de la organización después de descontar sus pasivos; puede incluir aportes, reservas y resultados acumulados.',
    },
    {
      termino: 'Política contable',
      significado:
        'principio, criterio o procedimiento adoptado por la organización para reconocer, medir, presentar y revelar sus operaciones.',
    },
    {
      termino: 'Reconocimiento contable',
      significado:
        'proceso de incorporar un hecho económico en los registros y estados financieros cuando cumple las condiciones para ser medido y presentado.',
    },
    {
      termino: 'Soporte contable',
      significado:
        'documento físico o electrónico que demuestra la existencia, características y valor de una operación registrada en la contabilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (1988, 23 de diciembre). Ley 79 de 1988. Por la cual se actualiza la legislación cooperativa. Diario Oficial No. 38.648. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9211',
    },
    {
      referencia:
        'Congreso de Colombia. (1998, 4 de agosto). Ley 454 de 1998. Por la cual se determina el marco conceptual que regula la economía solidaria, se transforma el Departamento Administrativo Nacional de Cooperativas en el Departamento Nacional de la Economía Solidaria, se crea la Superintendencia de la Economía Solidaria, se crea el Fondo de Garantías para las Cooperativas Financieras y de Ahorro y Crédito, se dictan normas sobre la actividad financiera de las entidades de naturaleza cooperativa y se expiden otras disposiciones. Diario Oficial No. 43.357. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=3433',
    },
    {
      referencia:
        'Congreso de Colombia. (2005, 8 de julio). Ley 962 de 2005. Por la cual se dictan disposiciones sobre racionalización de trámites y procedimientos administrativos de los organismos y entidades del Estado y de los particulares que ejercen funciones públicas o prestan servicios públicos',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=1671809',
    },
    {
      referencia:
        'Congreso de Colombia. (2009, 13 de julio). Ley 1314 de 2009. Por la cual se regulan los principios y normas de contabilidad e información financiera y de aseguramiento de información aceptados en Colombia, se señalan las autoridades competentes, el procedimiento para su expedición y se determinan las entidades responsables de vigilar su cumplimiento. Diario Oficial No. 47.409. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36833',
    },
    {
      referencia:
        'Congreso de Colombia. (2012, 17 de octubre). Ley 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Diario Oficial No. 48.587. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Conozca el RUT. ',
      link: 'https://www.dian.gov.co/impuestos/RUT/Paginas/Conozca-el-RUT.aspx',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Sistema de Facturación Electrónica. ',
      link: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/',
    },
    {
      referencia:
        'Dirección de Impuestos y Aduanas Nacionales. (s. f.). Documento soporte en adquisiciones efectuadas a sujetos no obligados a expedir factura de venta o documento equivalente. ',
      link: 'https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/soporte-adquisiciones-no-obligados/',
    },
    {
      referencia:
        'IFRS Foundation. (2018, marzo). Conceptual Framework for Financial Reporting. ',
      link: 'https://www.ifrs.org/issued-standards/list-of-standards/conceptual-framework/',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1971, 27 de marzo). Decreto 410 de 1971. Por el cual se expide el Código de Comercio. Diario Oficial No. 33.339. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41102',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (1989, 30 de marzo). Decreto 624 de 1989. Por el cual se expide el Estatuto Tributario de los Impuestos Administrados por la Dirección General de Impuestos Nacionales. Diario Oficial No. 38.756. ',
      link: 'https://normograma.dian.gov.co/dian/compilacion/docs/estatuto_tributario.htm',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2015, 14 de diciembre). Decreto 2420 de 2015. Por medio del cual se expide el Decreto Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información y se dictan otras disposiciones. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=76745',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2026, 7 de julio). Decreto 701 de 2026. Por el cual se modifican parcialmente los marcos técnicos de las Normas de Información Financiera para el Grupo 1 y de Información Financiera para las PYMES, Grupo 2, del Decreto 2420 de 2015, Único Reglamentario de las Normas de Contabilidad, de Información Financiera y de Aseguramiento de la Información, y se dictan otras disposiciones. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30056712',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2020, 28 de diciembre). Circular Externa No. 22 de 2020. Expedición de la Circular Básica Contable y Financiera. ',
      link: 'https://www.supersolidaria.gov.co/es/content/actualizacion-circular-basica-contable-y-financiera',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2023, 3 de noviembre). Catálogo único de información financiera con fines de supervisión. ',
      link: 'https://www.supersolidaria.gov.co/es/content/catalogo-unico-de-informacion-financiera-con-fines-de-supervision',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2025, 29 de julio). Circular Externa 87 de 2025. Instrucciones reporte formato de Balance Social y el Beneficio Solidario para fondos de empleados. ',
      link: 'https://www.suin-juriscol.gov.co/viewDocument.asp?id=30055404',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2026, 10 de abril). Capturador de información financiera: Sistema Integrado de Captura de la Superintendencia de la Economía Solidaria (SICSES). ',
      link: 'https://supersolidaria.gov.co/es/content/capturador-de-informacion-financiera',
    },
    {
      referencia:
        'Superintendencia de la Economía Solidaria. (2026, 5 de mayo). Preguntas frecuentes: Balance Social y Beneficio Solidario. ',
      link: 'https://www.supersolidaria.gov.co/es/content/preguntas-frecuentes',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Andrea Tello Zambrano',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
