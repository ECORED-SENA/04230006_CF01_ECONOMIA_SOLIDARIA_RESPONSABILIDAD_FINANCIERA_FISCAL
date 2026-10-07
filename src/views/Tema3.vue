<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Hechos económicos en organizaciones solidarias
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 Las actividades de una organización solidaria generan hechos económicos que pueden modificar sus recursos, obligaciones y resultados. Su adecuada identificación permite establecer qué ocurrió, cuál es su efecto financiero y qué información debe incorporarse en los registros, manteniendo relación con la naturaleza y la finalidad de las operaciones realizadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de hecho económico y transacción
      p Un hecho económico es un acontecimiento que produce un efecto financiero susceptible de representación monetaria. Una transacción corresponde a una operación que genera derechos, obligaciones, ingresos, gastos u otros cambios financieros. No toda decisión administrativa produce inmediatamente un registro contable; su reconocimiento depende de las condiciones del marco aplicable.
      p.mb-5 Algunas operaciones frecuentes y los aspectos que deben verificarse se presentan a continuación:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recepción de un aporte social
                  p.mb-0 Aumenta el efectivo o banco y se reconoce el aporte según el tratamiento aplicable. Se respalda con recibo, consignación y registro del asociado. Deben verificarse identidad, valor y naturaleza del aporte.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cobro por prestación de servicios
                  p.mb-0 Aumenta el efectivo o una cuenta por cobrar y se reconoce un ingreso cuando corresponda. Requiere factura, documento equivalente o recibo. Deben comprobarse el servicio prestado, el valor, la fecha y el tercero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compra de materiales
                  p.mb-0 Puede aumentar inventarios, activos o gastos y generar una obligación. Se respalda con factura, orden de compra y comprobante. Deben revisarse la destinación, el valor, los impuestos y la cuenta afectada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pago a un proveedor
                  p.mb-0 Disminuye el efectivo o bancos y se cancela total o parcialmente una obligación. La operación requiere comprobante de egreso y soporte bancario. Deben verificarse la factura relacionada y la autorización del pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Otorgamiento de un auxilio solidario
                  p.mb-0 Disminuye el saldo disponible del fondo correspondiente. Se respalda mediante solicitud, acta de aprobación y comprobante de pago. Deben verificarse el reglamento, el beneficiario y la disponibilidad de recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Obtención de un crédito
                  p.mb-0 Aumenta el efectivo y se reconoce una obligación financiera. La operación se soporta con contrato, pagaré y extracto bancario. Deben comprobarse la tasa, el plazo, el valor recibido y la autorización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Adquisición de un equipo
                  p.mb-0 Aumenta un activo y disminuye el efectivo o se genera una cuenta por pagar. Se respalda con factura, contrato y acta de entrega. Deben revisarse el uso, la vida útil, el valor y la política contable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pago de una actividad educativa
                  p.mb-0 Se aplican recursos destinados a educación y disminuye el efectivo disponible. Se soporta con contrato, factura, comprobante y lista de asistencia. Deben verificarse la finalidad del fondo y la población beneficiada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Recaudo de cartera
                  p.mb-0 Aumenta bancos o caja y disminuye la cuenta por cobrar. Se respalda mediante recibo de caja y extracto bancario. Deben comprobarse el asociado o cliente, el saldo, el valor recibido y el documento relacionado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicación de excedentes
                  p.mb-0 Se reconocen las destinaciones aprobadas a reservas, fondos u otras partidas. La operación se respalda con estados financieros y acta de asamblea. Deben verificarse el régimen aplicable, los porcentajes y la aprobación competente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La diferencia entre una decisión administrativa y un hecho que puede generar efectos contables se reconoce en la siguiente situación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa aprueba un auxilio de #[b $800.000] con cargo al fondo de solidaridad. La decisión debe quedar documentada y analizarse para establecer si genera una obligación reconocible según el marco aplicable. Al efectuarse el pago, se produce la salida de recursos y la aplicación correspondiente del fondo.
            p.mb-0 Para registrar la operación deben relacionarse el beneficiario, la autorización, los documentos de respaldo, el valor y el periodo correspondiente.
      p.mb-5 La identificación puede organizarse mediante la siguiente ruta:
      .bg___color_3
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Identificación y relación con la organización
                    p.mb-0 Se determina qué ocurrió y si el hecho corresponde al objeto social, las actividades o el funcionamiento de la organización.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img12.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img13.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Efecto financiero y clasificación
                    p.mb-0 Se establece qué recursos, obligaciones o resultados se modifican y cuáles elementos contables podrían resultar afectados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Medición y periodo
                    p.mb-0 Se determina el valor que corresponde reconocer y el periodo en el que debe incorporarse la operación.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img14.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img15.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Soporte y autorización
                    p.mb-0 Se comprueba la documentación disponible y, cuando sea necesario, la competencia de la instancia que autorizó la operación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Registro
                    p.mb-0 La operación se incorpora mediante las cuentas y el comprobante que representen su naturaleza y efectos financieros.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img16.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t3/img17.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Verificación
                    p.mb-0 Se comprueba que el registro coincida con los soportes, el tercero, la finalidad del recurso y demás información relacionada.
      p.mb-0 Distinguir entre decisiones y hechos con efectos financieros permite avanzar hacia la correcta clasificación de las cuentas.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Clasificación de cuentas según la naturaleza de la operación
      p Clasificar las cuentas implica identificar los elementos afectados por una operación de acuerdo con su naturaleza económica. Una entrada o salida de dinero no determina por sí sola su clasificación: también deben analizarse el origen, la finalidad, las obligaciones generadas y el marco contable aplicable.
      p.mb-5 Los principales grupos utilizados en el contenido se relacionan así:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activos
                  p.mb-0 Representan recursos controlados por la organización, como caja, bancos, cartera de asociados, inventarios, equipos y propiedades. Aumentan al recibir dinero, adquirir bienes o generar derechos de cobro y disminuyen al pagar, consumir o disponer de recursos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pasivos
                  p.mb-0 Representan obligaciones presentes con terceros o asociados, como proveedores, créditos, impuestos por pagar y depósitos o ahorros cuando corresponda. Aumentan al adquirir obligaciones y disminuyen cuando estas se pagan o cancelan.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Patrimonio
                  p.mb-0 Representa los recursos propios y la participación económica de los asociados. Puede incluir aportes sociales, reservas, fondos patrimoniales y excedentes acumulados. Aumenta con aportes y resultados positivos y disminuye por pérdidas o aplicaciones autorizadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingresos
                  p.mb-0 Corresponden a recursos generados por servicios y actividades desarrolladas por la organización, como servicios a asociados, actividades comerciales o rendimientos. Se reconocen cuando se cumplen las condiciones aplicables, aunque el dinero pueda recibirse posteriormente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costos
                  p.mb-0 Representan recursos directamente relacionados con la prestación de servicios o producción de bienes, como insumos, mercancías o costos asociados a una actividad productiva. Se reconocen según el consumo o entrega de los bienes y servicios relacionados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gastos
                  p.mb-0 Corresponden a recursos consumidos para administrar, financiar y operar la organización, como honorarios, servicios públicos, nómina, mantenimiento y gastos financieros. Se reconocen en el periodo en que se incurren, según su naturaleza.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fondos sociales
                  p.mb-0 Corresponden a recursos destinados a una finalidad social o institucional determinada, como educación, solidaridad, bienestar o desarrollo empresarial solidario. Su incremento, disminución y clasificación dependen de su naturaleza, fuente y tratamiento contable aplicable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cuentas de control
                  p.mb-0 Registran información complementaria utilizada para seguimiento y supervisión, como garantías, compromisos o bienes recibidos. Permiten controlar situaciones específicas sin modificar directamente los elementos de los estados financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img25.png', alt='' style="max-width: 500px").m-auto
      p El Marco Conceptual vigente define activos, pasivos, patrimonio, ingresos y gastos y orienta su reconocimiento y medición; la selección de cuentas debe responder al efecto económico real y al marco técnico que corresponda.
      p.mb-5 La diferencia entre el origen de los recursos puede aplicarse mediante este caso:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa recibe un aporte social de un nuevo asociado mediante transferencia bancaria. El dinero incrementa bancos y el aporte se reconoce conforme al tratamiento establecido para el capital social; no corresponde a un ingreso por servicios.
            p Posteriormente, la cooperativa paga una actividad autorizada con cargo al fondo de educación. En este caso debe relacionar la salida de dinero con la naturaleza contable del fondo, su reglamento, la autorización y los soportes correspondientes.
            p La siguiente tabla presenta las preguntas que ayudan a seleccionar las cuentas afectadas antes de realizar el registro contable:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Aspectos y preguntas orientadoras para clasificar las cuentas de una operación solidaria
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Aspecto
                    th.ajuste-border-tabla.texto-left Pregunta orientadora
                    th.texto-left Ejemplo
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Identificar la operación
                    td.ajuste-border-tabla.texto-left ¿Qué ocurrió realmente?
                    td.texto-left Se recibió un aporte de un asociado.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Determinar su finalidad
                    td.ajuste-border-tabla.texto-left ¿El recurso corresponde a un aporte, servicio, préstamo, fondo o gasto?
                    td.texto-left Corresponde a un aporte social.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Identificar los elementos
                    td.ajuste-border-tabla.texto-left ¿Afecta activos, pasivos, patrimonio, ingresos, costos o gastos?
                    td.texto-left Afecta bancos y patrimonio.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Analizar el movimiento
                    td.ajuste-border-tabla.texto-left ¿Qué cuenta aumenta y cuál disminuye?
                    td.texto-left Aumentan bancos y aportes sociales.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Revisar la fuente
                    td.ajuste-border-tabla.texto-left ¿El recurso tiene destinación específica?
                    td.texto-left El aporte integra el patrimonio social.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Verificar el soporte
                    td.ajuste-border-tabla.texto-left ¿Qué documento respalda la operación?
                    td.texto-left Recibo, consignación y registro del asociado.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Consultar políticas
                    td.ajuste-border-tabla.texto-left ¿Qué tratamiento ha definido la organización?
                    td.texto-left Política para reconocimiento de aportes.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Seleccionar las cuentas
                    td.ajuste-border-tabla.texto-left ¿Qué cuentas representan fielmente la operación?
                    td.texto-left Bancos y aportes sociales.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Verificar el registro
                    td.ajuste-border-tabla.texto-left ¿El asiento coincide con el soporte y la naturaleza del hecho?
                    td.texto-left El valor recibido coincide con el comprobante y el auxiliar.
      p.mb-0 La correcta clasificación permite representar cada hecho económico según su efecto financiero y finalidad, evitando confundir aportes, ingresos, obligaciones, gastos y recursos con destinación específica. Esta base facilita comprender posteriormente la dinámica contable de las operaciones.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Dinámica contable aplicada a organizaciones solidarias
      p La dinámica contable explica cómo aumentan y disminuyen las cuentas y cómo sus efectos se relacionan mediante la partida doble. Cada operación debe mantener igualdad entre los valores débito y crédito. Esta lógica debe aplicarse según la naturaleza de cada cuenta, sin perder de vista el origen y la destinación de los recursos.
      p.mb-5 La dinámica contable permite identificar cómo aumentan y disminuyen las cuentas utilizadas para registrar operaciones en una organización solidaria:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Activo
                  p.mb-0 Representa los recursos y derechos controlados por la organización. Aumenta con débito y disminuye con crédito. Un ejemplo solidario es el ingreso de dinero a bancos por aportes sociales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Pasivo
                  p.mb-0 Representa obligaciones con asociados, proveedores, entidades financieras o autoridades. Aumenta con crédito y disminuye con débito. Un ejemplo es un crédito bancario recibido o una cuenta pendiente con un proveedor.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img27.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Patrimonio
                  p.mb-0 Representa los recursos propios, aportes sociales, reservas y resultados acumulados. Aumenta con crédito y disminuye con débito. Un ejemplo es el reconocimiento de aportes realizados por los asociados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img28.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ingreso
                  p.mb-0 Representa recursos generados por la prestación de servicios o actividades autorizadas. Aumenta con crédito y disminuye con débito. Un ejemplo es el ingreso por servicios prestados a los asociados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costo
                  p.mb-0 Representa recursos directamente relacionados con bienes o servicios ofrecidos. Aumenta con débito y disminuye con crédito. Un ejemplo es el costo de materiales utilizados en una actividad productiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Gasto
                  p.mb-0 Representa recursos consumidos para administrar y operar la organización. Aumenta con débito y disminuye con crédito. Un ejemplo es el pago de servicios públicos, honorarios o mantenimiento.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fondos sociales o mutuales
                  p.mb-0 Representan recursos destinados a finalidades específicas de educación, solidaridad, bienestar u otras aprobadas. Su aumento y disminución dependen de su naturaleza contable, fuente de financiación y ejecución autorizada. Un ejemplo es el pago de una actividad con cargo al fondo de educación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img32.png', alt='' style="max-width: 500px").m-auto
      p La dinámica general no sustituye las políticas ni el plan de cuentas interno. Las organizaciones sometidas a supervisión deben considerar además el Catálogo Único de Información Financiera con Fines de Supervisión para los reportes requeridos por la Superintendencia.
      p.mb-5 La aplicación de estas reglas puede reconocerse mediante dos operaciones:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa recibe un aporte social de #[b $1.500.000] mediante transferencia bancaria. Aumenta bancos y se reconoce el aporte social conforme al tratamiento aplicable. Los débitos y créditos deben quedar por el mismo valor.
            p.mb-0 Posteriormente, paga #[b $800.000] por una jornada de capacitación autorizada con cargo al fondo de educación. Disminuye bancos y se reconoce la aplicación del recurso según la naturaleza contable del fondo y los soportes de la actividad.
      p.mb-5 Las siguientes operaciones permiten analizar la dinámica contable de hechos frecuentes en organizaciones solidarias:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img33.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Recepción de aporte social").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumentan bancos o caja y el patrimonio social. No se presenta una disminución simultánea, porque la operación reconoce el origen patrimonial del aporte. Deben verificarse el asociado, el valor, el recibo y la naturaleza del aporte.
            .row(titulo="Prestación de servicio a crédito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se genera una cuenta por cobrar y se reconoce el ingreso. No hay entrada inmediata de efectivo. Deben confirmarse el servicio prestado, la factura y el derecho de cobro.
            .row(titulo="Recaudo de una cuenta por cobrar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumentan bancos o caja y disminuye la cuenta por cobrar. Debe relacionarse el pago con el asociado, la factura o el documento pendiente.
            .row(titulo="Compra de materiales a crédito").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumenta el inventario, activo, costo o gasto, según la finalidad, y se genera una cuenta por pagar. Deben revisarse la naturaleza de la compra, la factura y la cuenta utilizada.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Obtención de crédito financiero").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumentan bancos y se genera una obligación financiera. Deben verificarse el contrato, la tasa, el plazo y la autorización correspondiente.
            .row(titulo="Pago a proveedor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye la cuenta por pagar y también disminuyen bancos o caja. Deben compararse la factura, el comprobante y el movimiento bancario.
            .row(titulo="Asignación de excedentes a un fondo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se reconoce el fondo, la reserva o la destinación aprobada y disminuye el resultado pendiente de aplicación. Deben revisarse la normativa, los estatutos y el acta de asamblea.
            .row(titulo="Ejecución de un fondo social").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se reconoce la aplicación autorizada del recurso y disminuyen bancos y la disponibilidad del fondo. Deben verificarse el reglamento, el beneficiario, la aprobación y el soporte correspondiente.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img2.png", alt="" style="width: 300px").m-auto
      p.mb-0 De esta forma, la dinámica contable permite representar cada operación mediante cuentas que muestran el origen, la aplicación y la finalidad de los recursos. Su correcta utilización evita confundir aportes con ingresos, créditos con recursos propios o fondos sociales con dinero de libre destinación, y facilita que los registros reflejen de manera coherente la realidad financiera y solidaria de la organización.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Reconocimiento y medición de hechos económicos
      p El reconocimiento incorpora en la información financiera los efectos de un hecho económico cuando cumple las condiciones del marco aplicable, mientras que la medición determina el valor con el que se representa. Ambos procesos pueden ocurrir antes del movimiento de efectivo y deben generar información relevante y una representación fiel.
      p.mb-5 A continuación, se presentan ejemplos de hechos económicos y los aspectos que deben revisarse para reconocerlos y medirlos adecuadamente:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aporte social recibido
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando la organización recibe el recurso y se identifica al asociado aportante.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] valor efectivamente recibido y respaldado.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] conciliar saldos individuales, devoluciones o modificaciones autorizadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Servicio prestado a crédito
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando se presta el servicio y surge el derecho de cobro.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] valor acordado, facturado o establecido en el soporte.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] revisar recaudos, saldos vencidos y posible deterioro de cartera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Compra de materiales
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando se reciben los bienes y surge el pago o la obligación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] precio de adquisición y demás valores atribuibles, según corresponda.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] verificar consumo, existencia, deterioro o baja.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img36.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Crédito recibido
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando se reciben los recursos y nace la obligación financiera.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] valor recibido y costos aplicables según el marco contable.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] actualizar saldo, intereses, pagos y condiciones contractuales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img37.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Adquisición de equipo
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando la organización controla el bien y puede utilizarlo.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] costo de adquisición y valores necesarios para ponerlo en funcionamiento.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] reconocer depreciación, deterioro o retiro del activo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img38.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Auxilio aprobado y pagado
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando se cumplen las condiciones para reconocer la aplicación y se ejecuta el recurso.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] valor autorizado y respaldado por el reglamento y los soportes.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] comparar con el saldo y la ejecución del fondo correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img39.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aplicación de excedentes
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando la asamblea aprueba su destinación conforme a la normativa.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] valores aprobados para reservas, fondos y demás aplicaciones.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] verificar registro, ejecución y utilización según la finalidad autorizada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img40.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Obligación con proveedor
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Reconocimiento:] cuando se recibe el bien o servicio y surge el deber de pago.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Medición inicial:] valor facturado, impuestos y descuentos aplicables.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-check-circle
                      | #[b Revisión posterior:] actualizar pagos, notas, saldos pendientes y diferencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img41.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 El reconocimiento y la medición pueden aplicarse en la adquisición de un activo:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa adquiere un equipo para desarrollar actividades de capacitación. La operación se reconoce cuando la organización obtiene el control del bien y surge el pago o la obligación correspondiente. Antes del registro se revisan la factura, la autorización, la entrega y la política contable aplicable.
            p La medición inicial comprende el costo de adquisición y los valores directamente atribuibles según el marco aplicable. Posteriormente se reconoce la depreciación y se evalúan otras situaciones que puedan afectar su valor.
            p A continuación, se presenta una secuencia práctica para analizar una operación antes de incorporarla en la información financiera:
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 10.
              span Secuencia para reconocer y medir un hecho económico
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Secuencia
                    th.ajuste-border-tabla.texto-left Pregunta de análisis
                    th.texto-left Aplicación práctica
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold 1. Identificar el hecho
                    td.ajuste-border-tabla.texto-left ¿Qué ocurrió realmente?
                    td.texto-left Se adquirió un equipo para actividades educativas.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold 2. Verificar la relación
                    td.ajuste-border-tabla.texto-left ¿La operación pertenece a la organización?
                    td.texto-left La compra fue aprobada y corresponde a su objeto social.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold 3. Revisar el soporte
                    td.ajuste-border-tabla.texto-left ¿Existe evidencia suficiente?
                    td.texto-left Factura, contrato, acta de entrega y autorización.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold 4. Determinar el elemento
                    td.ajuste-border-tabla.texto-left ¿Afecta activo, pasivo, patrimonio, ingreso o gasto?
                    td.texto-left Aumenta un activo y disminuye bancos o aumenta una obligación.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold 5. Definir el momento
                    td.ajuste-border-tabla.texto-left ¿En qué periodo debe reconocerse?
                    td.texto-left Cuando se recibe y controla el equipo.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold 6. Establecer el valor
                    td.ajuste-border-tabla.texto-left ¿Cuál es la medición inicial adecuada?
                    td.texto-left Precio de compra y valores directamente relacionados.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold 7. Consultar políticas
                    td.ajuste-border-tabla.texto-left ¿Qué criterios internos deben aplicarse?
                    td.texto-left Política de propiedad, planta y equipo.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold 8. Registrar la operación
                    td.ajuste-border-tabla.texto-left ¿Qué cuentas representan su naturaleza?
                    td.texto-left Equipo, bancos o cuentas por pagar.
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold 9. Medir posteriormente
                    td.ajuste-border-tabla.texto-left ¿Qué cambios deben reconocerse después?
                    td.texto-left Depreciación, deterioro, mejoras o retiro.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold 10. Verificar la información
                    td.ajuste-border-tabla.texto-left ¿El registro coincide con soportes y estados financieros?
                    td.texto-left Comparación entre auxiliar, factura y saldo presentado.
      p.mb-0 Reconocer y medir adecuadamente los hechos económicos permite representar su naturaleza y la destinación de los recursos, evitando registros basados únicamente en movimientos de dinero y favoreciendo información financiera coherente sobre recursos, obligaciones, aportes, fondos y resultados.
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Descripción y registro de operaciones solidarias frecuentes
      p Describir una operación exige identificar qué ocurrió, quién intervino, su valor, fecha, finalidad y soporte. Para registrarla se determina su naturaleza, las cuentas afectadas y el periodo correspondiente. Una entrada de dinero no basta para clasificar el hecho: puede representar un aporte, ingreso, recaudo, crédito o depósito.
      p.mb-5 La síntesis de las operaciones frecuentes se presenta a continuación:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 11.
            span Registro de operaciones frecuentes en organizaciones solidarias
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Operación
                  th.ajuste-border-tabla.texto-left Descripción del hecho económico
                  th.ajuste-border-tabla.texto-left Cuenta débito o elemento que aumenta
                  th.ajuste-border-tabla.texto-left Cuenta crédito o elemento que disminuye o se genera
                  th.texto-left Soporte principal
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Recepción de un aporte social
                  td.ajuste-border-tabla.texto-left Un asociado entrega recursos para integrar o incrementar su participación económica.
                  td.ajuste-border-tabla.texto-left Caja o bancos.
                  td.ajuste-border-tabla.texto-left Aportes sociales.
                  td.texto-left Recibo de caja, consignación y registro del asociado.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Prestación de un servicio de contado
                  td.ajuste-border-tabla.texto-left La organización presta un servicio y recibe el pago inmediatamente.
                  td.ajuste-border-tabla.texto-left Caja o bancos.
                  td.ajuste-border-tabla.texto-left Ingresos por servicios.
                  td.texto-left Factura, documento equivalente o recibo.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Prestación de un servicio a crédito
                  td.ajuste-border-tabla.texto-left Se presta el servicio y nace un derecho de cobro.
                  td.ajuste-border-tabla.texto-left Cuentas por cobrar.
                  td.ajuste-border-tabla.texto-left Ingresos por servicios.
                  td.texto-left Factura, contrato o documento de cobro.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cartera
                  td.ajuste-border-tabla.texto-left Un asociado o cliente paga una obligación pendiente.
                  td.ajuste-border-tabla.texto-left Caja o bancos.
                  td.ajuste-border-tabla.texto-left Cuentas por cobrar.
                  td.texto-left Recibo de caja y soporte bancario.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Compra de materiales de contado
                  td.ajuste-border-tabla.texto-left Se adquieren elementos para la operación y se pagan inmediatamente.
                  td.ajuste-border-tabla.texto-left Inventarios, activos, costos o gastos, según corresponda.
                  td.ajuste-border-tabla.texto-left Caja o bancos.
                  td.texto-left Factura y comprobante de egreso.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Compra a crédito
                  td.ajuste-border-tabla.texto-left Se reciben bienes o servicios y queda pendiente el pago.
                  td.ajuste-border-tabla.texto-left Inventarios, activos, costos o gastos.
                  td.ajuste-border-tabla.texto-left Proveedores o cuentas por pagar.
                  td.texto-left Factura, orden de compra y recibido.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Pago a un proveedor
                  td.ajuste-border-tabla.texto-left Se cancela total o parcialmente una obligación.
                  td.ajuste-border-tabla.texto-left Proveedores o cuentas por pagar.
                  td.ajuste-border-tabla.texto-left Caja o bancos.
                  td.texto-left Comprobante de egreso y soporte bancario.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Obtención de un crédito
                  td.ajuste-border-tabla.texto-left Una entidad financiera entrega recursos que deben ser restituidos.
                  td.ajuste-border-tabla.texto-left Bancos.
                  td.ajuste-border-tabla.texto-left Obligaciones financieras.
                  td.texto-left Contrato, pagaré y extracto bancario.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Pago de una cuota de crédito
                  td.ajuste-border-tabla.texto-left Se cancela capital y, cuando corresponda, intereses.
                  td.ajuste-border-tabla.texto-left Obligación financiera e intereses.
                  td.ajuste-border-tabla.texto-left Bancos.
                  td.texto-left Extracto, comprobante y tabla de amortización.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Adquisición de un equipo
                  td.ajuste-border-tabla.texto-left Se compra un bien para utilizarlo durante varios periodos.
                  td.ajuste-border-tabla.texto-left Propiedad, planta y equipo.
                  td.ajuste-border-tabla.texto-left Bancos o cuentas por pagar.
                  td.texto-left Factura, autorización y acta de entrega.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ejecución de un fondo social
                  td.ajuste-border-tabla.texto-left Se utilizan recursos para una actividad o beneficio autorizado.
                  td.ajuste-border-tabla.texto-left Aplicación o ejecución del fondo, según su tratamiento contable.
                  td.ajuste-border-tabla.texto-left Bancos y saldo disponible del fondo.
                  td.texto-left Solicitud, acta, factura y comprobante.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Aplicación de excedentes
                  td.ajuste-border-tabla.texto-left Se asigna el resultado del ejercicio a reservas, fondos u otras destinaciones aprobadas.
                  td.ajuste-border-tabla.texto-left Excedente pendiente de aplicación.
                  td.ajuste-border-tabla.texto-left Reservas, fondos o partidas aprobadas.
                  td.texto-left Estados financieros y acta de asamblea.
      p Las cuentas y denominaciones específicas deben verificarse en el plan contable, las políticas internas y el marco aplicable a cada organización. La Circular Básica Contable y Financiera de Supersolidaria contiene instrucciones particulares para las entidades sometidas a su vigilancia. 
      p.mb-5 Una operación a crédito permite diferenciar el reconocimiento del ingreso y el recaudo posterior:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa presta un servicio de capacitación por #[b $1.200.000] el 20 de agosto y acuerda recibir el pago el 5 de septiembre. Si en agosto se cumplen las condiciones de reconocimiento del ingreso, surge una cuenta por cobrar por el mismo valor.
            p.mb-0 Cuando se recibe el pago en septiembre, aumenta bancos y disminuye la cuenta por cobrar. El recaudo no se registra como un nuevo ingreso.
      p.mb-5 Antes de incorporar una operación en la contabilidad se deben revisar los siguientes aspectos:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 12.
            span Lista de verificación para registrar una operación
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Aspecto
                  th.texto-left Pregunta de verificación
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ocurrencia
                  td.texto-left ¿La operación se realizó realmente?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Pertenencia
                  td.texto-left ¿Corresponde a la organización solidaria?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Naturaleza
                  td.texto-left ¿Es un aporte, ingreso, obligación, compra, gasto, fondo o recaudo?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Soporte
                  td.texto-left ¿Existe un documento suficiente y válido?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Autorización
                  td.texto-left ¿Fue aprobada por la instancia competente cuando era necesario?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Medición
                  td.texto-left ¿El valor coincide con los documentos disponibles?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Periodo
                  td.texto-left ¿Se registra en la fecha en que ocurrió el hecho económico?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cuentas
                  td.texto-left ¿Las cuentas seleccionadas representan su efecto financiero?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Tercero
                  td.texto-left ¿El asociado, proveedor, cliente o beneficiario está correctamente identificado?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Finalidad
                  td.texto-left ¿El uso del recurso corresponde a su destinación?
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Impuestos
                  td.texto-left ¿Se analizaron los impuestos y retenciones aplicables?
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Trazabilidad
                  td.texto-left ¿El comprobante permite relacionar el hecho, el soporte y el registro?
      p.mb-5 Para profundizar en la descripción, análisis, aplicación de la partida doble y registro secuencial de una operación, consulte el siguiente video:
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Del hecho al registro: análisis de una operación a crédito

</template>

<script>
export default {
  name: 'Tema3',
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
