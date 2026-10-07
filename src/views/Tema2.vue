<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Administración de fondos y excedentes solidarios
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 La administración de fondos y excedentes permite orientar recursos hacia el fortalecimiento patrimonial, la educación, la solidaridad, el bienestar de los asociados y el objeto social. Para ello, la organización debe identificar los fondos existentes, reglamentar su funcionamiento, aplicar los excedentes según el régimen correspondiente y realizar seguimiento y rendición de cuentas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img1.png', alt='').m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Identificación de fondos estatutarios
      p Los fondos estatutarios están establecidos o reconocidos en los estatutos para atender finalidades económicas, sociales, educativas, mutuales o institucionales. Su identificación requiere revisar la naturaleza jurídica de la organización, la normativa aplicable y los documentos que permitan establecer su origen, finalidad, financiación, beneficiarios y condiciones de utilización.
      p.mb-5 La identificación debe sustentarse en diferentes fuentes documentales y contables:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img2.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Rapidez").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de enviar información, conviene comprobar que el contenido esté completo, el destinatario sea correcto, el tono corresponda al propósito y los archivos mencionados estén incorporados. La inmediatez no debe impedir una revisión básica.
            .row(titulo="Estatutos vigentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten reconocer el nombre, la finalidad, la fuente de recursos y las reglas generales de cada fondo, conformando un listado inicial de fondos estatutarios.
            .row(titulo="Actas de asamblea general").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registran la creación de fondos voluntarios, la aplicación de excedentes y las modificaciones aprobadas. Permiten confirmar la autorización y la fecha de creación.
            .row(titulo="Reglamentos internos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establecen beneficiarios, requisitos, usos permitidos, montos y procedimientos de aprobación, precisando las condiciones prácticas para utilizar los recursos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Estados financieros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten revisar los saldos, movimientos y la clasificación contable de los fondos, así como confirmar los recursos registrados.
            .row(titulo="Auxiliares contables").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Detallan incrementos, aplicaciones, pagos y saldos, facilitando la trazabilidad de los movimientos realizados en cada fondo.
            .row(titulo="Presupuesto anual").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite identificar los recursos programados y las actividades previstas, relacionando la disponibilidad de los fondos con la ejecución esperada.
            .row(titulo="Informes de gestión").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registran actividades realizadas, beneficiarios y resultados obtenidos, aportando evidencia sobre el cumplimiento de la finalidad de cada fondo.
            .row(titulo="Informes de control").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Recogen observaciones de la junta de vigilancia, el control social o la revisoría fiscal y permiten identificar incumplimientos o aspectos que requieren mejora.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img3.png", alt="" style="width: 350px").m-auto
      p En las organizaciones vigiladas, la Circular Básica Contable y Financiera establece que los fondos sociales pasivos agotables y los fondos mutuales tienen destinación específica, deben estar previamente creados por la asamblea general y reglamentados por el órgano de administración respectivo. Además, estos recursos no pueden utilizarse para gastos propios del desarrollo operacional.
      p.mb-5 La revisión documental puede aplicarse mediante la siguiente situación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa identifica en sus estatutos los fondos de educación y solidaridad y un fondo voluntario de bienestar. Las actas confirman que este último financia actividades de salud preventiva, recreación y apoyo familiar, pero su reglamento no se encuentra actualizado.
            p.mb-0 La organización verifica los saldos y documentos disponibles y registra el estado de cada fondo para determinar las acciones requeridas.
      p.mb-5 La siguiente tabla presenta una herramienta práctica para registrar las características y el estado de los fondos identificados:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 6.
        span Matriz para identificar fondos estatutarios
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Fondo identificado
              th.ajuste-border-tabla.texto-left Origen
              th.ajuste-border-tabla.texto-left Finalidad
              th.ajuste-border-tabla.texto-left Fuente de recursos
              th.ajuste-border-tabla.texto-left Documento que lo respalda
              th.texto-left Estado de revisión
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Fondo de educación
              td.ajuste-border-tabla.texto-left Legal y estatutario
              td.ajuste-border-tabla.texto-left Desarrollar formación y educación solidaria.
              td.ajuste-border-tabla.texto-left Aplicación de excedentes y otras fuentes permitidas.
              td.ajuste-border-tabla.texto-left Ley, estatutos y reglamento.
              td.texto-left Vigente y reglamentado.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Fondo de solidaridad
              td.ajuste-border-tabla.texto-left Legal y estatutario
              td.ajuste-border-tabla.texto-left Atender calamidades y necesidades sociales.
              td.ajuste-border-tabla.texto-left Aplicación de excedentes y recursos autorizados.
              td.ajuste-border-tabla.texto-left Ley, estatutos y reglamento.
              td.texto-left Vigente; requiere revisar requisitos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Fondo de bienestar
              td.ajuste-border-tabla.texto-left Voluntario y estatutario
              td.ajuste-border-tabla.texto-left Financiar actividades de bienestar de los asociados.
              td.ajuste-border-tabla.texto-left Remanente de excedentes o presupuesto aprobado.
              td.ajuste-border-tabla.texto-left Estatutos y acta de asamblea.
              td.texto-left Pendiente de actualización del reglamento.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Fondo para proyecto productivo
              td.ajuste-border-tabla.texto-left Voluntario y específico
              td.ajuste-border-tabla.texto-left Apoyar iniciativas económicas de los asociados.
              td.ajuste-border-tabla.texto-left Convenios, presupuesto o excedentes aprobados.
              td.ajuste-border-tabla.texto-left Acta, convenio y reglamento.
              td.texto-left Pendiente de verificar saldo.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Fondo de amortización de aportes
              td.ajuste-border-tabla.texto-left Eventual, según decisión autorizada
              td.ajuste-border-tabla.texto-left Amortizar aportes bajo las condiciones aplicables.
              td.ajuste-border-tabla.texto-left Remanente de excedentes.
              td.ajuste-border-tabla.texto-left Estatutos y acta de asamblea.
              td.texto-left No constituido en el periodo.
      p.mb-0 La existencia y obligatoriedad de cada fondo dependen de la naturaleza jurídica y del régimen aplicable. El inventario resultante permite establecer qué recursos requieren reglamentación, actualización o control adicional.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Reglamentación y creación de fondos monetarios
      p La creación de un fondo monetario establece recursos separados para una finalidad económica, social, educativa o institucional, mientras que su reglamentación define fuentes de financiación, beneficiarios, usos, responsables, autorizaciones y seguimiento. Estas condiciones dependen de la normativa, los estatutos y el tipo de organización, y deben asegurar que los recursos se utilicen únicamente para los fines aprobados, con disponibilidad, soporte y control adecuados. 
      p.mb-5 La creación y reglamentación de un fondo monetario puede organizarse mediante las siguientes etapas:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificación de la necesidad
                    p.mb-0 La administración, los asociados, las áreas o los comités determinan la situación social, económica o institucional que requiere financiación. La necesidad se sustenta mediante un diagnóstico, una solicitud o una propuesta.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img4.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img5.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Revisión normativa
                    p.mb-0 La administración y la asesoría contable o jurídica verifican si el fondo es obligatorio, voluntario o permitido para el tipo de organización. Como soporte, se identifican las disposiciones normativas aplicables.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Análisis de viabilidad
                    p.mb-0 La gerencia, contabilidad y tesorería estiman los recursos requeridos, los beneficiarios, la duración y el efecto financiero. El análisis debe establecer la disponibilidad y viabilidad del fondo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img6.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img7.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Definición de la fuente
                    p.mb-0 El órgano competente establece si el fondo se financiará con excedentes, presupuesto, cuotas, convenios u otros recursos autorizados. Esta decisión se concreta en una propuesta de financiación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Aprobación de la creación
                    p.mb-0 La asamblea general u órgano facultado adopta formalmente la decisión de crear el fondo. La aprobación queda respaldada mediante el acta o acuerdo correspondiente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img8.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img9.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Incorporación estatutaria
                    p.mb-0 La asamblea general incorpora el fondo en los estatutos cuando su naturaleza o la normativa aplicable lo requiera. La decisión se formaliza mediante la reforma estatutaria correspondiente.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Elaboración del reglamento
                    p.mb-0 El consejo de administración o junta directiva define la finalidad, beneficiarios, requisitos, usos, límites y controles del fondo. El resultado es un reglamento aprobado.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img10.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Registro contable
                    p.mb-0 El área contable crea las cuentas o auxiliares necesarios para identificar y controlar los movimientos del fondo. Como evidencia se conservan la cuenta, el auxiliar y el saldo inicial.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Ejecución
                    p.mb-0 El comité, la gerencia y tesorería reciben solicitudes, autorizan las asignaciones correspondientes y realizan los pagos. El proceso se respalda con solicitudes, actas, comprobantes y demás soportes.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img12.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img13.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Seguimiento y evaluación
                    p.mb-0 La administración y los órganos de control comparan los recursos asignados y ejecutados, los beneficiarios y los resultados obtenidos. El seguimiento se registra mediante informes periódicos y acciones de mejora.
      p La Circular Básica Contable y Financiera precisa que el reglamento de los fondos sujetos a estas disposiciones debe establecer, como mínimo, la destinación de los recursos y los periodos en que deben ejecutarse.
      p.mb-5 A continuación, se presenta un ejemplo aplicado:
      .row.justify-content-center.mb-0
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa identifica que varios asociados tienen dificultades para mantener sus actividades productivas durante periodos de baja comercialización. La administración propone crear un fondo para apoyar proyectos productivos mediante recursos destinados a capacitación, asistencia técnica y adquisición de insumos. Antes de aprobarlo, revisa que la finalidad corresponda al objeto social, estima los recursos necesarios y analiza si la organización puede mantener el fondo sin afectar sus obligaciones.
            p La asamblea aprueba la creación y define su fuente de financiación. Posteriormente, el consejo de administración expide el reglamento, en el que establece quiénes pueden solicitar el apoyo, los documentos requeridos, los conceptos financiables, los montos máximos, los criterios de selección y los mecanismos de seguimiento. Contabilidad crea un auxiliar independiente y el comité responsable presenta informes periódicos sobre recursos ejecutados, beneficiarios y resultados.
            p La siguiente tabla presenta los elementos que deben definirse para administrar el fondo con transparencia y trazabilidad:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 7.
              span Contenido del reglamento de un fondo monetario
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Elemento del reglamento
                    th.ajuste-border-tabla.texto-left Definición requerida
                    th.texto-left Ejemplo de aplicación
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Denominación
                    td.ajuste-border-tabla.texto-left Nombre con el que se identificará el fondo.
                    td.texto-left Fondo de Fortalecimiento Productivo Solidario.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Objetivo
                    td.ajuste-border-tabla.texto-left Resultado social, económico o institucional que se busca alcanzar.
                    td.texto-left Apoyar la sostenibilidad de iniciativas productivas de los asociados.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Fuente de financiación
                    td.ajuste-border-tabla.texto-left Recursos que conformarán e incrementarán el fondo.
                    td.texto-left Excedentes aprobados, presupuesto y convenios.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Beneficiarios
                    td.ajuste-border-tabla.texto-left Personas que pueden solicitar o recibir los recursos.
                    td.texto-left Asociados hábiles que desarrollen actividades productivas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Usos autorizados
                    td.ajuste-border-tabla.texto-left Conceptos que pueden financiarse.
                    td.texto-left Capacitación, asistencia técnica e insumos.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Exclusiones
                    td.ajuste-border-tabla.texto-left Gastos o situaciones que no pueden financiarse.
                    td.texto-left Deudas personales o actividades ajenas al objeto del fondo.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Requisitos
                    td.ajuste-border-tabla.texto-left Documentos y condiciones para presentar una solicitud.
                    td.texto-left Formulario, proyecto, cotizaciones y certificación de asociado hábil.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Criterios de selección
                    td.ajuste-border-tabla.texto-left Parámetros para evaluar las solicitudes.
                    td.texto-left Viabilidad, impacto colectivo, necesidad y disponibilidad.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Límites de asignación
                    td.ajuste-border-tabla.texto-left Valor, frecuencia y condiciones máximas del beneficio.
                    td.texto-left Monto máximo por asociado según disponibilidad anual.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Instancia de aprobación
                    td.ajuste-border-tabla.texto-left Órgano, comité o responsable que autoriza el recurso.
                    td.texto-left Comité técnico con ratificación del consejo de administración.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Desembolso y registro
                    td.ajuste-border-tabla.texto-left Procedimiento para efectuar y reconocer el pago.
                    td.texto-left Comprobante de egreso, transferencia y registro contable.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Seguimiento
                    td.ajuste-border-tabla.texto-left Forma de verificar el uso y los resultados del recurso.
                    td.texto-left Informe del beneficiario y visita de seguimiento.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Rendición de cuentas
                    td.ajuste-border-tabla.texto-left Periodicidad y destinatarios de los informes.
                    td.texto-left Informe trimestral al consejo y anual a la asamblea.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Destinación de excedentes en economía solidaria
      p Los excedentes corresponden al resultado positivo del ejercicio después de reconocer las partidas aplicables. Su destinación no es libre: debe responder al régimen jurídico, los estatutos y las decisiones competentes. Las reglas varían según el tipo de organización, por lo que deben diferenciarse las aplicaciones obligatorias de las posibles destinaciones del remanente. La Ley 454 de 1998 establece como principio económico la destinación de excedentes a servicios sociales, reservas y fondos, además de las aplicaciones permitidas a favor de los asociados.
      p.mb-5 La destinación de los excedentes depende del tipo de organización y del régimen que le resulte aplicable. Estas son las principales disposiciones:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cooperativa
                  p.mb-0 Antes de distribuir los excedentes se compensan pérdidas anteriores y se restablece la reserva utilizada, cuando corresponda. Luego se destina mínimo 20 % a la reserva de protección de aportes, 20 % a educación y 10 % a solidaridad. El remanente puede aplicarse según la ley y los estatutos. La decisión corresponde a la asamblea general.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fondo de empleados
                  p.mb-0 Se compensan pérdidas anteriores y se restablece la reserva utilizada, cuando corresponda. Después se destina mínimo 20 % a la reserva de protección de aportes y 10 % al fondo de desarrollo empresarial solidario. El remanente puede aplicarse a fondos y otras destinaciones permitidas. La decisión corresponde a la asamblea general de asociados o delegados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Otra organización solidaria
                  p.mb-0 La destinación de excedentes depende de la normativa especial, los estatutos y el régimen contable aplicable. Los recursos pueden orientarse a fondos, reservas, programas sociales o fortalecimiento institucional cuando estén autorizados. La decisión corresponde al órgano competente según la naturaleza jurídica y los estatutos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 500px").m-auto
      p El excedente contable no equivale al saldo disponible de efectivo ni al resultado presupuestal. Antes de definir su destinación, deben revisarse los resultados del periodo, las pérdidas pendientes, las reservas y las disposiciones aplicables.
      p.mb-5 La aplicación de estas reglas puede reconocerse mediante la siguiente situación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa cierra el periodo con excedentes. Antes de calcular las destinaciones, verifica si existen pérdidas acumuladas y si debe restablecer alguna reserva. Después determina los valores obligatorios y establece el remanente disponible para otras aplicaciones autorizadas.
            p.mb-0 La administración presenta la propuesta a la asamblea general, que analiza su correspondencia con la normativa y los estatutos antes de aprobarla.
      p La destinación de excedentes comprende determinar el resultado, revisar pérdidas y reservas, identificar las disposiciones aplicables, elaborar la propuesta, obtener su aprobación y registrar las aplicaciones autorizadas.
      p.mb-5 Para profundizar en las condiciones, porcentajes, excepciones y procedimiento para la destinación de excedentes, se invita a consultar el documento complementario “#[b Destinación de excedentes en economía solidaria]”:
      .call___to_action.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img17.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Destinación de excedentes en economía solidaria
            p.mb-0 Consulte el documento “#[b Anexo 1. Destinación de excedentes en economía solidaria]” y profundice sobre las destinaciones, el tratamiento del remanente y la secuencia necesaria para formalizar y registrar la decisión.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Destinacion_excedentes_en_economia_solidaria.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Plan de seguimiento a la ejecución de fondos
      p El plan de seguimiento permite comparar los recursos aprobados con los valores ejecutados, las actividades realizadas y los resultados alcanzados. Debe considerar indicadores, responsables, periodicidad y evidencias que permitan identificar saldos, compromisos, desviaciones y acciones de mejora sin alterar informalmente la destinación establecida para cada fondo.
      p.mb-5 Los elementos necesarios para estructurar el seguimiento son los siguientes:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img18.png", alt="" style="width: 380px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Fondo objeto de seguimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica el fondo que será revisado durante el periodo. En el ejemplo, corresponde al #[b Fondo de Educación].
            .row(titulo="Objetivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define el resultado que se espera alcanzar con los recursos. Para el Fondo de Educación, se busca fortalecer los conocimientos cooperativos y financieros de los asociados.
            .row(titulo="Presupuesto aprobado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece el valor disponible para ejecutar las actividades programadas. En este caso, se dispone de #[b $ 12.000.000 para el periodo anual].
            .row(titulo="Actividades programadas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Precisa las acciones que serán financiadas con los recursos del fondo, como talleres, materiales educativos y jornadas de formación.
            .row(titulo="Indicadores").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permiten medir la ejecución y los resultados mediante variables como porcentaje ejecutado, número de participantes y cantidad de actividades realizadas.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Responsable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica la persona, comité o área encargada de ejecutar las actividades y presentar la información de seguimiento. En el ejemplo participan el Comité de Educación y la gerencia.
            .row(titulo="Periodicidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece la frecuencia con la que se revisará la información. Para este caso, el seguimiento se realiza trimestralmente.
            .row(titulo="Fuentes de verificación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Corresponden a los documentos que respaldan los valores y actividades ejecutadas, como actas, facturas, listas de asistencia y comprobantes de pago.
            .row(titulo="Desviaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifican diferencias entre lo programado y lo ejecutado, como actividades aplazadas o gastos superiores a los valores presupuestados.
            .row(titulo="Acciones de mejora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Definen las medidas necesarias para corregir las diferencias detectadas, como reprogramar actividades, solicitar soportes o ajustar los controles.
            .row(titulo="Informe de seguimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consolida los avances, los recursos ejecutados, los saldos y los resultados obtenidos. En el ejemplo, se presenta trimestralmente al consejo de administración.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img19.png", alt="" style="width: 400px").m-auto
      p.mb-5 La aplicación del plan puede reconocerse en un fondo de educación:
      .box___style_3(data-aos="zoom-in").mb-5
        h5 Ejemplo aplicado
        p Una cooperativa aprueba $12.000.000 para su fondo de educación y programa cuatro jornadas de formación durante el año. Al finalizar el segundo trimestre, el comité responsable informa que se ejecutaron $7.500.000 y se realizaron dos actividades. Sin embargo, uno de los pagos no tiene la lista de asistencia correspondiente y una actividad presentó un costo mayor al presupuestado.
        p El órgano de administración revisa las facturas, comprobantes, contratos y evidencias de participación. Después de la revisión, solicita completar el soporte faltante, explicar la diferencia presupuestal y actualizar la programación de las dos actividades pendientes. El informe registra el valor aprobado, el valor ejecutado, el saldo disponible, las desviaciones encontradas y las acciones acordadas.
        p La siguiente tabla presenta una comparación entre las actividades programadas y su ejecución.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 8.
          span Matriz de seguimiento a la ejecución de un fondo solidario
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Actividad
                th.ajuste-border-tabla.texto-left Presupuesto aprobado
                th.ajuste-border-tabla.texto-left Valor ejecutado
                th.ajuste-border-tabla.texto-left Avance
                th.ajuste-border-tabla.texto-left Evidencia disponible
                th.texto-left Observación y acción
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Taller de principios solidarios
                td.ajuste-border-tabla.texto-left $2.500.000
                td.ajuste-border-tabla.texto-left $2.400.000
                td.ajuste-border-tabla.texto-left 100 %
                td.ajuste-border-tabla.texto-left Factura, contrato y lista de asistencia.
                td.texto-left Actividad cumplida con saldo de $100.000.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Jornada de educación financiera
                td.ajuste-border-tabla.texto-left $3.000.000
                td.ajuste-border-tabla.texto-left $3.200.000
                td.ajuste-border-tabla.texto-left 100 %
                td.ajuste-border-tabla.texto-left Factura y comprobante de pago.
                td.texto-left Solicitar justificación del mayor valor y lista de asistencia.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Curso de responsabilidades tributarias
                td.ajuste-border-tabla.texto-left $3.500.000
                td.ajuste-border-tabla.texto-left $1.900.000
                td.ajuste-border-tabla.texto-left 50 %
                td.ajuste-border-tabla.texto-left Contrato y registro del primer módulo.
                td.texto-left Verificar cronograma y recursos pendientes.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Material educativo
                td.ajuste-border-tabla.texto-left $1.500.000
                td.ajuste-border-tabla.texto-left $0
                td.ajuste-border-tabla.texto-left 0 %
                td.ajuste-border-tabla.texto-left No se presentan soportes.
                td.texto-left Gestionar cotizaciones y definir fecha de compra.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Evaluación del programa
                td.ajuste-border-tabla.texto-left $1.500.000
                td.ajuste-border-tabla.texto-left $0
                td.ajuste-border-tabla.texto-left 0 %
                td.ajuste-border-tabla.texto-left Actividad programada para el cierre.
                td.texto-left Mantener seguimiento hasta finalizar el periodo.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Total
                td.ajuste-border-tabla.texto-left $12.000.000
                td.ajuste-border-tabla.texto-left $7.500.000
                td.ajuste-border-tabla.texto-left 62,5 % financiero
                td.ajuste-border-tabla.texto-left Soportes parciales.
                td.texto-left Completar evidencias y revisar desviaciones.
        p.mb-0 El porcentaje de ejecución financiera puede calcularse de la siguiente manera:
        p Porcentaje de ejecución = valor ejecutado / presupuesto aprobado × 100
        p.mb-0 En el ejemplo:
        .titles___box_cuarto_nivel.mb-3(data-aos="fade-right")   
          h4.mb-0  $7.500.000 / $12.000.000 × 100 = 62,5 %
        p.mb-0 Este porcentaje muestra cuánto dinero se ha utilizado, pero no demuestra por sí solo el cumplimiento del objetivo. También es necesario revisar la calidad de las actividades, el número de beneficiarios, los soportes presentados y los resultados obtenidos.
      p.mb-0 El plan de seguimiento permite controlar la ejecución de los fondos, detectar desviaciones y disponer de información para la rendición de cuentas y la toma de decisiones.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Transparencia, control social y rendición de cuentas
      p La administración de fondos requiere información clara, suficiente y oportuna sobre el origen, aprobación, utilización, saldo y resultados de los recursos. La transparencia facilita el control social y la rendición de cuentas, mientras que estos mecanismos permiten comprobar el cumplimiento de estatutos, reglamentos y finalidades sin sustituir las responsabilidades administrativas o contables.
      p.mb-5 Los tres conceptos cumplen funciones relacionadas, pero diferentes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img20.png', alt="" ).m-auto
              h4.text-center Transparencia
              .box___card_sinbordes_p
                p.mb-0 Implica mantener disponible información verificable sobre los recursos y sus decisiones. Requiere conservar actas, presupuestos, comprobantes, registros contables, informes de ejecución y evidencias que permitan establecer cómo se utilizaron los fondos.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img21.png', alt="" ).m-auto
              h4.text-center Control social
              .box___card_sinbordes_p
                p.mb-0 Permite a los asociados, mediante las instancias correspondientes, verificar el cumplimiento de principios, estatutos, reglamentos y derechos. Este control no debe sustituir las funciones propias de la administración, la contabilidad o la revisoría fiscal.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img22.png', alt="" ).m-auto
              h4.text-center Rendición de cuentas
              .box___card_sinbordes_p
                p.mb-0 Comunica qué recursos fueron recibidos, cómo se utilizaron, quiénes se beneficiaron, qué resultados se obtuvieron y qué aspectos requieren mejora. Puede apoyarse en estados financieros, informes de ejecución, indicadores y balance social.
      p Para las organizaciones vigiladas, la Superintendencia mantiene el Balance Social y Beneficio Solidario como herramienta de rendición de cuentas sobre la gestión socioeconómica y el cumplimiento de los principios del sector.
      p.mb-5 A continuación, se presentan los elementos que deben comunicarse para facilitar el seguimiento y el control social de los recursos monetarios:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img23.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Origen de los recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe informarse la fuente y el valor de los recursos incorporados al fondo. La información puede respaldarse con actas, presupuesto, comprobantes contables o convenios y dirigirse a asociados, administración y órganos de control.
            .row(titulo="Finalidad del fondo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Debe precisarse la necesidad y el objetivo para los cuales fue creado. Los estatutos, el acuerdo de creación y el reglamento respaldan esta información, que resulta relevante para asociados y posibles beneficiarios.
            .row(titulo="Presupuesto aprobado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende las actividades, conceptos y valores autorizados para el fondo. Se respalda mediante el presupuesto y el acta de aprobación y sirve de referencia para la administración y los órganos de control.
            .row(titulo="Ejecución financiera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Informa los recursos utilizados durante el periodo. Su respaldo corresponde a auxiliares, comprobantes, facturas y extractos, y permite a las instancias de administración y control verificar la utilización de los recursos.
            .row(titulo="Beneficiarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Identifica las personas o grupos atendidos por el fondo. La información se respalda mediante solicitudes, aprobaciones y registros de entrega y facilita el control sobre la asignación de los beneficios.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Resultados alcanzados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presenta las actividades realizadas y los beneficios obtenidos. Puede sustentarse con informes, listas de asistencia, registros fotográficos o evaluaciones y comunicarse a los asociados y demás instancias correspondientes.
            .row(titulo="Saldo disponible").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica los recursos pendientes de ejecución. Se verifica mediante los estados financieros, auxiliares contables y conciliaciones, y permite conocer la disponibilidad restante del fondo.
            .row(titulo="Desviaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Registra las diferencias entre lo aprobado y lo ejecutado. Estas situaciones deben sustentarse mediante matrices de seguimiento o informes explicativos y ser revisadas por las instancias responsables.
            .row(titulo="Acciones de mejora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprenden las medidas adoptadas para corregir incumplimientos, debilidades o desviaciones. Deben quedar documentadas en planes de mejora con responsables y fechas de cumplimiento.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img2.png", alt="" style="width: 300px").m-auto
      p.mb-5 La utilidad de esta información puede reconocerse mediante una situación aplicada:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una asociación solidaria dispone de un fondo de bienestar con un presupuesto anual de $15.000.000. Al finalizar el periodo, la administración informa que ejecutó $11.800.000 en actividades de salud preventiva, recreación y apoyo familiar. El reporte incluye el número de asociados beneficiados, los valores utilizados por actividad, los soportes disponibles y un saldo sin ejecutar de $3.200.000.
            p.mb-0 Durante la presentación, el comité de control social identifica que una actividad superó el valor aprobado y que dos pagos no tienen evidencia suficiente de participación. La administración explica la variación, completa los documentos pendientes y propone fortalecer la lista de chequeo para futuras actividades. La rendición de cuentas permite así aclarar la ejecución y convertir las observaciones en acciones de mejora.
      p.mb-5 La rendición de cuentas sobre los fondos puede organizarse mediante la siguiente ruta:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Consolidar la información financiera
                    p.mb-0 Se reúnen el presupuesto, los movimientos y el saldo del fondo para contar con información financiera completa del periodo.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img24.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img25.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Verificar los soportes
                    p.mb-0 Se revisan facturas, comprobantes, actas y demás documentos que respalden las operaciones y permitan asegurar su trazabilidad.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Comparar lo aprobado con lo ejecutado
                    p.mb-0 Se contrastan los valores autorizados y utilizados para identificar diferencias y recursos pendientes de ejecución.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img26.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img27.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Determinar beneficiarios y resultados
                    p.mb-0 Se identifican las personas atendidas y los resultados alcanzados con los recursos del fondo.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Documentar desviaciones y explicaciones
                    p.mb-0 Se registran las diferencias encontradas, sus causas y los asuntos que requieren corrección o aclaración.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img28.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img29.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Preparar tablas e indicadores
                    p.mb-0 La información se organiza mediante datos e indicadores comprensibles que faciliten la presentación de los resultados a los asociados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Presentar el informe
                    p.mb-0 El informe se entrega al órgano correspondiente como parte del proceso formal de rendición de cuentas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img30.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img31.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Recibir preguntas y observaciones
                    p.mb-0 Se atienden las inquietudes y recomendaciones formuladas por asociados y órganos de control.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definir acciones de mejora
                    p.mb-0 Se establecen responsables, compromisos, fechas y mecanismos de seguimiento para atender las situaciones identificadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img32.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t2/img33.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Conservar el informe y sus evidencias
                    p.mb-0 El informe y sus soportes se archivan para facilitar futuras revisiones y conservar la trazabilidad del proceso.
      p.mb-0 La transparencia, el control social y la rendición de cuentas permiten evaluar la administración de los fondos, corregir desviaciones y proteger los recursos colectivos. Su adecuada gestión exige identificar, reglamentar, ejecutar y hacer seguimiento a los recursos conforme a los estatutos, la normativa y las responsabilidades definidas.

</template>

<script>
export default {
  name: 'Tema2',
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
