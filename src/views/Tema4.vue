<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 4
        h1 Soportes contables y normativa aplicable
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 Los soportes contables permiten demostrar la existencia, las características y el valor de las operaciones realizadas por una organización solidaria. Su adecuada gestión mantiene la relación entre el hecho económico, la autorización y el registro, y contribuye al cumplimiento de las responsabilidades comerciales, contables, tributarias y de supervisión que resulten aplicables.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img1.png', alt='').m-auto
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Soportes contables: concepto, clasificación y documentos
      p.mb-5 Un soporte contable acredita una operación y proporciona la información necesaria para identificarla, medirla y registrarla. El comprobante de contabilidad organiza estos datos antes del registro e incluye número, fecha, origen, descripción, cuantía y cuentas afectadas, junto con los documentos que respaldan la operación.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes externos recibidos
                  p.mb-0 Son expedidos por proveedores, entidades financieras, autoridades u otros terceros. Incluyen facturas de compra, extractos bancarios, contratos, cuentas de cobro y certificados que respaldan adquisiciones o servicios recibidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes externos expedidos
                  p.mb-0 Son emitidos por la organización para asociados, clientes o terceros. Comprenden facturas de venta, documentos equivalentes, recibos y certificaciones utilizados para acreditar servicios prestados, recaudos u otras operaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes internos
                  p.mb-0 Son preparados por la organización para respaldar operaciones o decisiones internas. Incluyen recibos de caja, comprobantes de egreso, notas contables, liquidaciones y formatos de solicitud.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes bancarios
                  p.mb-0 Evidencian movimientos de cuentas y productos financieros. Comprenden consignaciones, transferencias, extractos y notas débito o crédito utilizadas para verificar aportes, recaudos y pagos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes laborales
                  p.mb-0 Se relacionan con trabajadores, contratistas y obligaciones laborales. Entre ellos se encuentran nómina, planillas, contratos, liquidaciones y comprobantes de pago que respaldan salarios, prestaciones y aportes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes tributarios
                  p.mb-0 Respaldan obligaciones, impuestos, costos o deducciones. Incluyen factura electrónica, documento equivalente, documento soporte, declaraciones y recibos oficiales, según las responsabilidades fiscales de la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes administrativos
                  p.mb-0 Demuestran autorizaciones y decisiones organizacionales mediante actas, resoluciones, acuerdos, órdenes de compra o autorizaciones de pago relacionadas con operaciones y utilización de recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Soportes sociales o solidarios
                  p.mb-0 Documentan operaciones asociadas con fondos y beneficios sociales, como solicitudes de auxilio, estudios, actas de aprobación, listas de beneficiarios y constancias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img9.png', alt='' style="max-width: 500px").m-auto
      p En las adquisiciones efectuadas a proveedores no obligados a expedir factura o documento equivalente, el comprador debe generar el documento soporte cuando requiera acreditar la operación para efectos de costos, deducciones o impuestos descontables. La DIAN exige, entre otros requisitos, numeración autorizada.
      p.mb-5 La conformación de un expediente puede reconocerse mediante la siguiente situación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa concede un auxilio de #[b $900.000] a un asociado con cargo al fondo de solidaridad. Para respaldar la operación conserva la solicitud, los documentos que acreditan la necesidad, la verificación de requisitos, la aprobación correspondiente y el comprobante de pago.
            p.mb-0 El área contable verifica que el valor aprobado coincida con el pagado, identifica al beneficiario y relaciona los documentos mediante una referencia común. Así, la operación puede seguirse desde la solicitud hasta el movimiento bancario y el registro contable.
      p.mb-5 Para diferentes operaciones solidarias, el expediente debe relacionar el soporte principal, los documentos complementarios y la verificación correspondiente:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 13.
            span Documentos que respaldan operaciones solidarias frecuentes
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Operación
                  th.ajuste-border-tabla.texto-left Soporte que origina el hecho
                  th.ajuste-border-tabla.texto-left Documentos complementarios
                  th.texto-left Verificación principal
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Recepción de aporte social
                  td.ajuste-border-tabla.texto-left Recibo de caja o soporte bancario.
                  td.ajuste-border-tabla.texto-left Formulario de asociación y registro individual del asociado.
                  td.texto-left Identidad, valor, fecha y naturaleza del aporte.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Prestación de servicios
                  td.ajuste-border-tabla.texto-left Factura o documento equivalente.
                  td.ajuste-border-tabla.texto-left Contrato, orden de servicio y evidencia de cumplimiento.
                  td.texto-left Servicio realizado, valor y tercero.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Compra a proveedor
                  td.ajuste-border-tabla.texto-left Factura de venta.
                  td.ajuste-border-tabla.texto-left Orden de compra, cotización, recibido y contrato cuando aplique.
                  td.texto-left Bien recibido, precio, impuestos y autorización.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Compra a persona no obligada a facturar
                  td.ajuste-border-tabla.texto-left Documento soporte expedido por el comprador.
                  td.ajuste-border-tabla.texto-left Contrato, cuenta de cobro y evidencia de entrega.
                  td.texto-left Identificación del proveedor, concepto, valor y requisitos tributarios.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cartera
                  td.ajuste-border-tabla.texto-left Recibo de caja o comprobante bancario.
                  td.ajuste-border-tabla.texto-left Estado de cuenta y documento que originó el cobro.
                  td.texto-left Aplicación del recaudo al asociado o tercero correcto.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Pago a proveedor
                  td.ajuste-border-tabla.texto-left Comprobante de egreso y transferencia.
                  td.ajuste-border-tabla.texto-left Factura, autorización y certificado bancario.
                  td.texto-left Correspondencia entre obligación, beneficiario y pago.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Otorgamiento de auxilio
                  td.ajuste-border-tabla.texto-left Solicitud y acta de aprobación.
                  td.ajuste-border-tabla.texto-left Documentos del beneficiario, comprobante y constancia de entrega.
                  td.texto-left Cumplimiento del reglamento y disponibilidad del fondo.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Actividad educativa
                  td.ajuste-border-tabla.texto-left Contrato o factura del prestador.
                  td.ajuste-border-tabla.texto-left Acta de aprobación, lista de asistencia y evaluación.
                  td.texto-left Relación con la finalidad del fondo de educación.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Adquisición de un equipo
                  td.ajuste-border-tabla.texto-left Factura y acta de entrega.
                  td.ajuste-border-tabla.texto-left Cotizaciones, autorización, garantía e ingreso al inventario.
                  td.texto-left Existencia, valor, ubicación y responsable del bien.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Asignación de excedentes
                  td.ajuste-border-tabla.texto-left Acta de asamblea general.
                  td.ajuste-border-tabla.texto-left Estados financieros y propuesta de distribución.
                  td.texto-left Valores aprobados, porcentajes y destinaciones.
      p.mb-0 La clasificación de los soportes facilita demostrar las operaciones y conservar su trazabilidad desde la decisión que las origina hasta el registro correspondiente.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Elaboración y diligenciamiento de soportes contables
      p.mb-5 El diligenciamiento de los soportes permite identificar y relacionar cada operación con la organización solidaria. Según la naturaleza del documento, deben comprobarse datos como fecha, consecutivo, tercero, concepto, valor, autorizaciones y anexos, de manera que la información corresponda con el hecho económico y facilite su posterior registro.
      .box___style_4(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img10.png', alt='' style="width: 400px").m-auto
          .col-xl.fit___box_container
            p Antes de registrar el documento, se debe comprobar:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Tipo de documento: corresponde a la operación realizada. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Número o consecutivo: está completo y no se encuentra repetido. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Fecha: corresponde al periodo en que ocurrió la operación. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Organización: los datos identifican correctamente a la entidad. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Tercero: el asociado, proveedor, cliente o beneficiario está plenamente identificado. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Concepto: describe claramente el bien, servicio, pago, recaudo o beneficio. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Valor: coincide con la factura, contrato o autorización correspondiente. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Impuestos y retenciones: fueron determinados cuando resultan aplicables. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Forma de pago: coincide con el movimiento bancario o de caja. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Fondo o área relacionada: corresponde a la finalidad autorizada. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Autorización: fue otorgada por la instancia competente. 
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | Documentos anexos: el expediente contiene los soportes requeridos. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | Responsable: se identifica quién elaboró, revisó o aprobó el documento.
      p.mb-5 Estos criterios pueden aplicarse en el diligenciamiento de una operación financiada con recursos de un fondo:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa contrata una jornada de formación por #[b $2.500.000], financiada con el fondo de educación. Al recibir la factura, verifica proveedor, fecha, concepto, valor, impuestos y descripción del servicio, además de la disponibilidad y autorización correspondiente.
            p.mb-0 El expediente incorpora el contrato o propuesta aceptada, el acta de aprobación, la lista de asistencia, el informe de cumplimiento y el soporte bancario. El área contable prepara el comprobante, identifica las cuentas y relaciona los anexos mediante una referencia común.
      p.mb-5 Desde la recepción del documento hasta su conservación, el proceso puede organizarse así:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recepción
                    p.mb-0 Se recibe o elabora el documento que respalda la operación y se comprueban su origen, legibilidad y formato antes de iniciar la revisión.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img11.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img12.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Identificación
                    p.mb-0 Se determina qué operación representa el documento, diferenciando aportes, compras, servicios, pagos, recaudos, auxilios u otros hechos económicos.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Validación
                    p.mb-0 Se revisan fechas, terceros, conceptos, valores y requisitos, comparándolos con contratos, solicitudes, facturas y autorizaciones relacionadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img13.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img14.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Verificación presupuestal
                    p.mb-0 Cuando corresponda, se confirma la disponibilidad mediante el presupuesto, el saldo del fondo o la información del área responsable.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Aprobación
                    p.mb-0 Se comprueba que la operación cuente con la autorización de la instancia competente, según estatutos, reglamentos y niveles de aprobación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img15.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img16.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Clasificación
                    p.mb-0 Se identifican las cuentas que representan el efecto de la operación de acuerdo con su naturaleza y el marco contable aplicable.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Elaboración del comprobante
                    p.mb-0 Se registran número, fecha, origen, concepto, valor y cuentas afectadas, comprobando que los débitos y créditos se encuentren equilibrados.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img17.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img18.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Contabilización
                    p.mb-0 La operación se incorpora al sistema contable, verificando periodo, tercero, cuenta, valor y correspondencia con los documentos de respaldo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Pago o recaudo
                    p.mb-0 Cuando exista movimiento de dinero, se comprueban el beneficiario, el medio utilizado y su correspondencia con la operación registrada.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img19.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img20.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Archivo
                    p.mb-0 El comprobante y sus anexos se organizan con criterios de identificación, orden, acceso y conservación que permitan mantener el expediente consultable.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisión posterior
                    p.mb-0 El registro se compara con auxiliares, movimientos bancarios y soportes para detectar diferencias, duplicidades o documentos pendientes.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img21.svg', alt='' style="width: 150px").m-auto
      p.mb-5 Antes de registrar el comprobante, se deben confirmar los siguientes aspectos:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 14.
            span Lista de revisión del comprobante de contabilidad
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Aspecto
                  th.texto-left Verificación
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Consecutivo
                  td.texto-left El comprobante tiene un número único y ordenado.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fecha
                  td.texto-left La fecha corresponde al periodo contable de la operación.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Concepto
                  td.texto-left La descripción explica de manera suficiente lo ocurrido.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tercero
                  td.texto-left El asociado, proveedor, cliente o beneficiario está identificado.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Valor
                  td.texto-left La cuantía coincide con los documentos anexos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas
                  td.texto-left Los débitos y créditos representan la naturaleza de la operación.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Equilibrio
                  td.texto-left El total débito es igual al total crédito.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Autorización
                  td.texto-left La operación cuenta con la aprobación requerida.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Soportes
                  td.texto-left Se adjuntan los documentos internos y externos necesarios.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Trazabilidad
                  td.texto-left Es posible relacionar el comprobante con el pago, recaudo o movimiento correspondiente.
      p.mb-0 El diligenciamiento adecuado permite relacionar el hecho económico, la autorización, los soportes, el comprobante y el registro, reduciendo errores y operaciones sin respaldo.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Normativa comercial, contable y tributaria
      p Una misma operación puede estar sometida a disposiciones comerciales, contables, tributarias, solidarias y de supervisión. Identificar la norma aplicable exige considerar la naturaleza jurídica de la organización y las características del hecho económico, evitando confundir el tratamiento contable con las obligaciones fiscales o generalizar reglas sectoriales.
      p.mb-5 Los principales ámbitos que orientan las operaciones se sintetizan así:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 15.
        span Normativa aplicable a las operaciones solidarias
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Área normativa
              th.ajuste-border-tabla.texto-left Referente general
              th.ajuste-border-tabla.texto-left Aspectos que regula
              th.texto-left Aplicación en la organización
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Comercial
              td.ajuste-border-tabla.texto-left Código de Comercio
              td.ajuste-border-tabla.texto-left Libros, papeles, comprobantes, registros y prueba de las operaciones comerciales.
              td.texto-left Organizar los documentos y registros que permiten conocer la historia económica de la entidad.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Contable
              td.ajuste-border-tabla.texto-left Ley 1314 de 2009
              td.ajuste-border-tabla.texto-left Principios y normas de contabilidad, información financiera y aseguramiento.
              td.texto-left Reconocer los hechos económicos según su esencia y preparar información comprensible y comparable.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Técnica contable
              td.ajuste-border-tabla.texto-left Decreto 2420 de 2015 y sus modificaciones
              td.ajuste-border-tabla.texto-left Marcos técnicos aplicables a los grupos de preparadores de información financiera.
              td.texto-left Identificar el grupo contable de la organización y aplicar el marco técnico correspondiente.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Solidaria
              td.ajuste-border-tabla.texto-left Ley 454 de 1998 y normas especiales de cada tipo de organización
              td.ajuste-border-tabla.texto-left Organización, supervisión y funcionamiento del sector de la economía solidaria.
              td.texto-left Verificar las disposiciones aplicables a cooperativas, fondos de empleados, asociaciones mutuales u otras entidades.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Supervisión
              td.ajuste-border-tabla.texto-left Circular Básica Contable y Financiera
              td.ajuste-border-tabla.texto-left Instrucciones contables, financieras y prudenciales para las organizaciones vigiladas.
              td.texto-left Aplicar procedimientos, controles y reportes requeridos por la Superintendencia.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Tributaria
              td.ajuste-border-tabla.texto-left Estatuto Tributario y reglamentación fiscal
              td.ajuste-border-tabla.texto-left Impuestos, retenciones, facturación, documentos soporte, declaraciones y conservación de pruebas.
              td.texto-left Determinar las obligaciones fiscales de acuerdo con el RUT y las operaciones realizadas.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Facturación
              td.ajuste-border-tabla.texto-left Sistema de facturación electrónica de la DIAN
              td.ajuste-border-tabla.texto-left Factura electrónica, documentos equivalentes y documentos soporte.
              td.texto-left Expedir, recibir, validar y conservar los documentos electrónicos aplicables.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Interna
              td.ajuste-border-tabla.texto-left Estatutos, reglamentos y políticas de la organización
              td.ajuste-border-tabla.texto-left Competencias, autorizaciones, fondos, límites y procedimientos internos.
              td.texto-left Hay que confirmar que cada operación haya sido aprobada y ejecutada conforme a las reglas institucionales.
      p.mb-5 La Ley 1314 de 2009 diferencia expresamente los efectos contables de los fiscales: las disposiciones tributarias producen efectos fiscales y, cuando exista incompatibilidad para esos fines, prevalece la regulación tributaria, sin reemplazar el reconocimiento contable que corresponda. 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img22.png')})` }")
        .bloque-texto-g__texto.p-4
          p El Decreto 2420 de 2015 continúa siendo el decreto único reglamentario del marco contable y debe consultarse con sus modificaciones. En 2026, el Decreto 701 modificó parcialmente los marcos técnicos correspondientes al Grupo 1 y al Grupo 2. La Circular Básica Contable y Financiera expedida mediante la Circular Externa 22 de 2020 continúa aplicándose a las organizaciones sometidas a supervisión de la Superintendencia. 
      p.mb-5 La interacción entre diferentes ámbitos normativos puede reconocerse mediante una misma operación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa contrata un servicio de capacitación con cargo al fondo de educación. Desde el ámbito comercial conserva el contrato, la factura y los comprobantes; desde el contable reconoce la operación conforme al periodo y al marco aplicable.
            p.mb-0 En materia tributaria verifica el documento correspondiente y las retenciones, cuando procedan. Desde la regulación solidaria comprueba la finalidad del fondo, la disponibilidad y la autorización de la instancia competente.
      p.mb-5 Para identificar las fuentes aplicables sin convertir el análisis en una recopilación de normas, puede seguirse esta ruta general:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificar la entidad
                    p.mb-0 Se determina qué tipo de organización solidaria realiza la operación. Para ello, se revisan su naturaleza jurídica, los estatutos y el certificado de existencia, con el fin de establecer su clasificación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img23.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img24.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Establecer la operación
                    p.mb-0 Se identifica si corresponde a una compra, venta, aporte, crédito, servicio, auxilio o ejecución de fondo. La descripción debe permitir comprender claramente el hecho económico realizado.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisar la norma comercial
                    p.mb-0 Se identifican los documentos que prueban la operación, como contratos, facturas, recibos, actas o comprobantes. El resultado esperado es un expediente documental organizado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img25.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img26.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Determinar el marco contable
                    p.mb-0 Se establece a qué grupo de información financiera pertenece la organización y se consultan las condiciones del marco técnico correspondiente para definir el tratamiento contable.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Consultar la regulación solidaria
                    p.mb-0 Se verifica si existe una disposición particular para la operación mediante leyes especiales, circulares, estatutos y reglamentos. Esto permite establecer la autorización y el procedimiento aplicables.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img27.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img28.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Verificar las obligaciones tributarias
                    p.mb-0 Se determina si la operación genera impuestos, retenciones o deber de facturar. Para ello, se consulta el RUT, el Estatuto Tributario y la reglamentación vigente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Comparar los tratamientos
                    p.mb-0 Se analiza si el reconocimiento contable coincide con el tratamiento fiscal. Cuando existan diferencias, deben identificarse las conciliaciones o controles fiscales necesarios.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img29.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img30.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Validar la autorización
                    p.mb-0 Se comprueba que la operación haya sido aprobada por la instancia competente, considerando límites, presupuesto y niveles de autorización. La evidencia puede corresponder a un acta, autorización u orden.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Realizar el registro
                    p.mb-0 Se verifica que las cuentas, valores y terceros representen adecuadamente la operación. Posteriormente, se elabora y contabiliza el comprobante, manteniendo un registro completo y equilibrado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img31.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img32.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Conservar la evidencia
                    p.mb-0 Se archivan los soportes, comprobantes y consultas normativas relacionadas con la operación, de manera que la información permanezca trazable y disponible para futuras revisiones.
      p.mb-5 Para profundizar en las fuentes normativas, su ámbito de aplicación, actualización y consulta oficial, se invita a consultar posteriormente el documento complementario “#[b Anexo 2. Normativa comercial, contable y tributaria]”.
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img17.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Normativa comercial, contable y tributaria 
            p.mb-0 Consulte el documento “#[b Anexo 2. Normativa comercial, contable y tributaria]” y profundice sobre fuentes normativas, su ámbito de aplicación, actualización y consulta oficial.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Normativa_comercial_contable_tributaria.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Autoridades y entes de control
      p Las organizaciones solidarias pueden relacionarse con diferentes autoridades según su naturaleza, actividad y responsabilidades. La supervisión sectorial, el control tributario y la regulación contable cumplen funciones distintas, por lo que debe identificarse la competencia de cada entidad sin confundirla con las responsabilidades de los órganos internos de administración y control.
      p.mb-5 Las principales autoridades relacionadas con la información financiera y contable son:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Superintendencia de la Economía Solidaria
                  p.mb-0 Ejerce inspección, vigilancia y control sobre las organizaciones sometidas a su competencia. Verifica, entre otros aspectos, el cumplimiento legal y estatutario, la información financiera y la correcta aplicación de los recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Dirección de Impuestos y Aduanas Nacionales (DIAN)
                  p.mb-0 Administra y controla las obligaciones tributarias de su competencia. Para la organización resulta relevante en asuntos como RUT, declaraciones, facturación electrónica, retenciones, impuestos y documentos soporte.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ministerios de Hacienda y Crédito Público y de Comercio, Industria y Turismo
                  p.mb-0 Expiden conjuntamente las normas, interpretaciones y guías de contabilidad, información financiera y aseguramiento, con fundamento en las propuestas del Consejo Técnico de la Contaduría Pública.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Consejo Técnico de la Contaduría Pública (CTCP)
                  p.mb-0 Actúa como organismo de normalización técnica contable, de información financiera y de aseguramiento. Formula propuestas y orientaciones técnicas dentro de las competencias establecidas por la Ley 1314 de 2009.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Junta Central de Contadores
                  p.mb-0 Actúa como tribunal disciplinario y órgano de registro de la profesión contable. Su competencia comprende a los contadores públicos y a las entidades que prestan al público servicios propios de la ciencia contable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Órganos internos de administración y control
                  p.mb-0 La asamblea general, el consejo de administración o junta directiva, la gerencia, la junta de vigilancia o comité de control social, la revisoría fiscal y el área contable cumplen responsabilidades diferenciadas. Cada instancia debe actuar dentro de sus competencias sin sustituir las funciones de las demás.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img38.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 En las organizaciones vigiladas, el Sistema Integrado de Captura de la Superintendencia de la Economía Solidaria (SICSES) permite capturar y validar información básica, financiera, estadística y operativa para el Formulario Oficial de Rendición de Cuentas. La página institucional del sistema fue actualizada en abril de 2026.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Conservación documental y seguridad de la información
      p.mb-5 La conservación documental busca mantener soportes, libros, comprobantes y demás registros completos, organizados y disponibles durante el tiempo exigido. La Ley 962 de 2005 establece un término general de diez años para los libros y papeles de comercio, siempre que se garantice su reproducción.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img39.png')})` }")
        .bloque-texto-g__texto.p-4
          p La seguridad documental requiere proteger la información física y digital frente a pérdida, alteración, acceso no autorizado o destrucción mediante controles de acceso, respaldos, protección de equipos y procedimientos de recuperación. Asimismo, los documentos con datos personales deben gestionarse con criterios de seguridad y confidencialidad, conforme a la Ley 1581 de 2012.
      p.mb-5 Los controles pueden diferenciarse según se trate de documentación física o electrónica:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 16.
        span Medidas para la conservación y seguridad documental
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Aspecto
              th.ajuste-border-tabla.texto-left Documentos físicos
              th.ajuste-border-tabla.texto-left Documentos electrónicos
              th.texto-left Control esperado
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Clasificación
              td.ajuste-border-tabla.texto-left Organizar por series, periodos, fondos, terceros y tipos documentales.
              td.ajuste-border-tabla.texto-left Crear carpetas o expedientes digitales con una estructura definida.
              td.texto-left Documentos ubicados de manera uniforme.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Identificación
              td.ajuste-border-tabla.texto-left Utilizar rótulos, consecutivos, fechas y referencias.
              td.ajuste-border-tabla.texto-left Asignar nombres normalizados, fechas y metadatos.
              td.texto-left Recuperación rápida de la información.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Integridad
              td.ajuste-border-tabla.texto-left Evitar tachaduras, sustituciones o pérdida de hojas.
              td.ajuste-border-tabla.texto-left Restringir modificaciones y conservar versiones autorizadas.
              td.texto-left Documento completo y sin alteraciones indebidas.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Acceso
              td.ajuste-border-tabla.texto-left Mantener archivos en áreas restringidas.
              td.ajuste-border-tabla.texto-left Asignar permisos según las funciones de cada usuario.
              td.texto-left Consulta exclusiva por personas autorizadas.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Protección
              td.ajuste-border-tabla.texto-left Controlar humedad, temperatura, luz, plagas e incendios.
              td.ajuste-border-tabla.texto-left Utilizar antivirus, contraseñas, actualizaciones y protección de dispositivos.
              td.texto-left Reducción de riesgos físicos y tecnológicos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Copias de seguridad
              td.ajuste-border-tabla.texto-left Digitalizar documentos cuando resulte necesario y permitido.
              td.ajuste-border-tabla.texto-left Realizar respaldos periódicos en medios o ubicaciones diferentes.
              td.texto-left Recuperación ante pérdida o daño.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad
              td.ajuste-border-tabla.texto-left Mantener inventarios y responsables de préstamo.
              td.ajuste-border-tabla.texto-left Contar con buscadores, índices y rutas de consulta.
              td.texto-left Información disponible cuando sea requerida.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Confidencialidad
              td.ajuste-border-tabla.texto-left Custodiar documentos con datos personales o reservados.
              td.ajuste-border-tabla.texto-left Restringir descargas, copias, envío y divulgación.
              td.texto-left Protección de asociados, empleados y terceros.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Conservación
              td.ajuste-border-tabla.texto-left Mantener los documentos durante los términos aplicables.
              td.ajuste-border-tabla.texto-left Asegurar que los archivos puedan abrirse, consultarse y reproducirse durante el periodo requerido.
              td.texto-left Cumplimiento comercial, contable y tributario.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Disposición final
              td.ajuste-border-tabla.texto-left Autorizar y documentar la transferencia, selección o eliminación.
              td.ajuste-border-tabla.texto-left Eliminar copias y archivos solamente después de cumplir el procedimiento establecido.
              td.texto-left Destrucción controlada y verificable.
      p.mb-5 Estas medidas pueden aplicarse a un expediente que combine información física y electrónica:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa conserva facturas, comprobantes, solicitudes de auxilio y actas relacionadas con el fondo de solidaridad. Durante una revisión identifica que los documentos físicos están organizados por mes, pero los archivos digitales utilizan nombres diferentes y permanecen en equipos personales.
            p.mb-0 La organización conforma expedientes por periodo, utiliza un consecutivo común, traslada los archivos a un repositorio institucional con acceso restringido, normaliza los nombres y programa respaldos. Así puede reconstruir cada operación desde la solicitud hasta el pago y el registro contable.
      p.mb-5 Para conservar la trazabilidad durante el ciclo documental, la ruta puede sintetizarse así:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Recepción y validación
                    p.mb-0 Se recibe el soporte físico o electrónico y se comprueban origen, legibilidad, integridad, fecha, tercero, concepto, valor y autorización antes de incorporarlo al expediente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img40.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img41.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Registro y clasificación
                    p.mb-0 El soporte se relaciona con el comprobante y el registro contable mediante referencias o consecutivos, y se ubica en la serie o expediente correspondiente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Descripción y almacenamiento
                    p.mb-0 Se asignan nombres, fechas y datos que faciliten la consulta y se conserva la documentación en un archivo o repositorio institucional protegido.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img42.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img43.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Acceso y respaldo
                    p.mb-0 Se determinan usuarios y permisos de consulta o modificación y se generan respaldos periódicos de la información digital en una ubicación protegida diferente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Verificación y retención
                    p.mb-0 Se comprueban periódicamente integridad, apertura, disponibilidad y recuperación de los documentos, y se mantienen durante el término legal o institucional aplicable.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img44.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t4/img45.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Disposición final
                    p.mb-0 Cumplido el periodo correspondiente, la documentación se transfiere, conserva permanentemente o elimina según el procedimiento autorizado, dejando la evidencia respectiva.
      p.mb-0 Conservar y proteger la documentación permite mantener la relación entre los hechos económicos, sus autorizaciones, soportes y registros. La organización documental, el control de acceso, los respaldos y la protección de datos fortalecen la trazabilidad y facilitan el cumplimiento de las responsabilidades contables, tributarias, solidarias y de supervisión.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
