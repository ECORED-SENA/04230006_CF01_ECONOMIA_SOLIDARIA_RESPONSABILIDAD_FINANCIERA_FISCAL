<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 5
        h1 Estados financieros para organizaciones solidarias
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 Los estados financieros organizan y presentan los efectos de los hechos económicos registrados durante un periodo. A partir de esta información es posible analizar los recursos, obligaciones, patrimonio y resultados de la organización, así como disponer de una base para evaluar la gestión financiera y la utilización de los recursos colectivos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img1.png', alt='').m-auto
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Concepto, clasificación y elementos de los estados financieros
      p Los estados financieros son informes estructurados sobre la situación financiera, el rendimiento y los flujos de efectivo de una entidad. Su alcance depende del grupo de información financiera, las características de la organización y el marco técnico aplicable; por tanto, no todas las organizaciones solidarias preparan necesariamente el mismo conjunto de estados.
      p.mb-5 Los estados financieros pueden diferenciarse según su finalidad, alcance y periodo:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Propósito general
                  p.mb-0 Atienden las necesidades comunes de usuarios que requieren información sobre la situación financiera, el rendimiento y los flujos de efectivo, sin solicitar informes diseñados específicamente para ellos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img2.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Individuales
                  p.mb-0 Presentan la información financiera correspondiente a una entidad considerada de manera individual, conforme a las condiciones y requerimientos establecidos en el marco técnico aplicable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Separados, consolidados o combinados
                  p.mb-0 Se preparan cuando existen determinadas relaciones entre entidades. Su elaboración y denominación dependen de la estructura organizacional y de las disposiciones establecidas en el marco de información financiera correspondiente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Anuales o de cierre
                  p.mb-0 Corresponden al periodo definido para el cierre del ejercicio y permiten presentar la situación financiera y los resultados obtenidos al finalizar dicho periodo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Intermedios
                  p.mb-0 Presentan información correspondiente a un periodo inferior al cierre anual y permiten realizar seguimiento a la evolución financiera de la organización durante el ejercicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comparativos
                  p.mb-0 Relacionan cifras del periodo actual con las de uno o más periodos anteriores para facilitar el análisis de cambios en recursos, obligaciones, resultados y otras partidas relevantes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img6.png', alt='' style="max-width: 500px").m-auto
      p Para las organizaciones vigiladas por la Superintendencia de la Economía Solidaria, la Circular Básica Contable y Financiera contiene en su Título II las instrucciones sobre presentación de estados financieros. La Circular fue expedida mediante la Circular Externa 22 de 2020 y su versión institucional se mantiene actualizada.
      p.mb-5 Los principales estados financieros permiten responder preguntas diferentes sobre la organización:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 17.
        span Principales estados financieros y su finalidad
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Estado financiero
              th.ajuste-border-tabla.texto-left Información que presenta
              th.ajuste-border-tabla.texto-left Pregunta que permite responder
              th.texto-left Aplicación en una organización solidaria
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Estado de situación financiera
              td.ajuste-border-tabla.texto-left Activos, pasivos y patrimonio en una fecha determinada.
              td.ajuste-border-tabla.texto-left ¿Qué recursos posee la organización y cuáles son sus obligaciones?
              td.texto-left Permite conocer efectivo, cartera, bienes, créditos, aportes y reservas.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Estado de resultados o del resultado integral
              td.ajuste-border-tabla.texto-left Ingresos, costos, gastos y resultado obtenido durante un periodo.
              td.ajuste-border-tabla.texto-left ¿La operación produjo excedente o pérdida?
              td.texto-left Muestra los resultados de los servicios y actividades desarrolladas.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Estado de cambios en el patrimonio
              td.ajuste-border-tabla.texto-left Movimientos de aportes, reservas, resultados y otras partidas patrimoniales.
              td.ajuste-border-tabla.texto-left ¿Por qué aumentó o disminuyó el patrimonio?
              td.texto-left Permite observar aportes recibidos, retiros, reservas y aplicación de resultados.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Estado de flujos de efectivo
              td.ajuste-border-tabla.texto-left Entradas y salidas de efectivo clasificadas por actividades.
              td.ajuste-border-tabla.texto-left ¿Cómo se generó y utilizó el dinero?
              td.texto-left Facilita evaluar recaudos, pagos, inversiones y financiación.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Notas a los estados financieros
              td.ajuste-border-tabla.texto-left Políticas, desagregaciones y explicaciones necesarias para comprender las cifras.
              td.ajuste-border-tabla.texto-left ¿Qué criterios y situaciones explican los valores presentados?
              td.texto-left Detalla cartera, fondos, aportes, obligaciones, riesgos y hechos relevantes.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Estado financiero intermedio
              td.ajuste-border-tabla.texto-left Información correspondiente a un periodo inferior al cierre anual.
              td.ajuste-border-tabla.texto-left ¿Cómo evoluciona la organización durante el ejercicio?
              td.texto-left Permite realizar seguimientos mensuales, trimestrales o semestrales.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Estado financiero comparativo
              td.ajuste-border-tabla.texto-left Valores del periodo actual junto con los de uno o más periodos anteriores.
              td.ajuste-border-tabla.texto-left ¿Qué variaciones se presentaron entre periodos?
              td.texto-left Facilita identificar cambios en liquidez, cartera, obligaciones y resultados.
      p En sentido técnico, el Marco Conceptual define como elementos de los estados financieros los activos, pasivos, patrimonio, ingresos y gastos. Los aportes de los asociados, los movimientos de efectivo y las notas son información relevante para los estados, pero no constituyen elementos adicionales en esa clasificación conceptual.
      p.mb-5 La relación entre estos elementos y la información financiera puede sintetizarse así:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 18.
        span Elementos de los estados financieros
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Elemento
              th.ajuste-border-tabla.texto-left Descripción general
              th.ajuste-border-tabla.texto-left Ejemplos en una organización solidaria
              th.texto-left Estado financiero relacionado
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Activo
              td.ajuste-border-tabla.texto-left Recurso económico controlado por la organización como resultado de hechos pasados.
              td.ajuste-border-tabla.texto-left Caja, bancos, cartera, inversiones, inventarios, terrenos y equipos.
              td.texto-left Estado de situación financiera.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Pasivo
              td.ajuste-border-tabla.texto-left Obligación presente de transferir recursos económicos.
              td.ajuste-border-tabla.texto-left Proveedores, créditos, impuestos, cuentas por pagar y depósitos, cuando corresponda.
              td.texto-left Estado de situación financiera.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Patrimonio
              td.ajuste-border-tabla.texto-left Participación residual después de descontar los pasivos de los activos.
              td.ajuste-border-tabla.texto-left Aportes sociales, reservas y resultados acumulados.
              td.texto-left Estado de situación financiera y estado de cambios en el patrimonio.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Ingreso
              td.ajuste-border-tabla.texto-left Aumento de activos o disminución de pasivos que incrementa el patrimonio, distinto de los aportes.
              td.ajuste-border-tabla.texto-left Servicios prestados, rendimientos y actividades comerciales autorizadas.
              td.texto-left Estado de resultados.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Gasto
              td.ajuste-border-tabla.texto-left Disminución de activos o aumento de pasivos que reduce el patrimonio, distinto de las distribuciones a asociados.
              td.ajuste-border-tabla.texto-left Nómina, honorarios, servicios, mantenimiento, depreciación e intereses.
              td.texto-left Estado de resultados.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Aportes de los asociados
              td.ajuste-border-tabla.texto-left Recursos entregados por los miembros de acuerdo con la naturaleza y condiciones establecidas.
              td.ajuste-border-tabla.texto-left Aportes ordinarios, extraordinarios o amortizados, según corresponda.
              td.texto-left Estado de situación financiera y estado de cambios en el patrimonio.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Flujos de efectivo
              td.ajuste-border-tabla.texto-left Movimientos de entrada y salida de efectivo y equivalentes.
              td.ajuste-border-tabla.texto-left Recaudo de cartera, pago a proveedores, adquisición de equipos y créditos recibidos.
              td.texto-left Estado de flujos de efectivo.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Notas y revelaciones
              td.ajuste-border-tabla.texto-left Información explicativa que complementa las cifras presentadas.
              td.ajuste-border-tabla.texto-left Políticas contables, composición de cartera, fondos, contingencias y compromisos.
              td.texto-left Notas a los estados financieros.
      p Un ingreso, por tanto, no corresponde automáticamente a toda entrada de dinero. La recepción de un crédito, el recaudo de una cuenta por cobrar o determinados aportes pueden aumentar el efectivo sin constituir un ingreso del periodo.
      p.mb-5 La relación entre los diferentes estados puede reconocerse mediante un caso de cierre:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa prepara sus estados financieros al finalizar el periodo. El estado de situación financiera reúne el efectivo, la cartera, los equipos, las obligaciones y las partidas patrimoniales. El estado de resultados presenta los ingresos y gastos relacionados con sus actividades.
            p.mb-0 El estado de cambios en el patrimonio explica los movimientos patrimoniales; el estado de flujos de efectivo relaciona los principales recaudos y pagos, y las notas complementan las cifras mediante políticas, desagregaciones y explicaciones relevantes.
      p.mb-5 Una operación puede afectar varios estados financieros y requerir información complementaria:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 19.
        span Relación entre operaciones y estados financieros
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Operación
              th.ajuste-border-tabla.texto-left Efecto principal
              th.ajuste-border-tabla.texto-left Estado financiero en el que se observa
              th.texto-left Información complementaria
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Recepción de aportes sociales
              td.ajuste-border-tabla.texto-left Aumentan el efectivo y el patrimonio.
              td.ajuste-border-tabla.texto-left Estado de situación financiera.
              td.texto-left Movimiento explicado en el estado de cambios en el patrimonio.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Prestación de servicios
              td.ajuste-border-tabla.texto-left Aumentan los ingresos y el efectivo o la cartera.
              td.ajuste-border-tabla.texto-left Estado de resultados y estado de situación financiera.
              td.texto-left Política de reconocimiento explicada en las notas.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Obtención de un crédito
              td.ajuste-border-tabla.texto-left Aumentan el efectivo y las obligaciones.
              td.ajuste-border-tabla.texto-left Estado de situación financiera.
              td.texto-left Entrada presentada como financiación en el estado de flujos de efectivo.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Compra de un equipo
              td.ajuste-border-tabla.texto-left Aumentan los activos y disminuye el efectivo o aumenta una obligación.
              td.ajuste-border-tabla.texto-left Estado de situación financiera.
              td.texto-left Salida de inversión presentada en el estado de flujos de efectivo.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Reconocimiento de un gasto
              td.ajuste-border-tabla.texto-left Disminuye el resultado del periodo y puede reducir el efectivo o generar una cuenta por pagar.
              td.ajuste-border-tabla.texto-left Estado de resultados y estado de situación financiera.
              td.texto-left Naturaleza y política detalladas en las notas cuando sea relevante.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Aplicación de excedentes
              td.ajuste-border-tabla.texto-left Modifica reservas, fondos o partidas patrimoniales según la decisión aprobada.
              td.ajuste-border-tabla.texto-left Estado de situación financiera y estado de cambios en el patrimonio.
              td.texto-left Destinación explicada mediante notas y acta de asamblea.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Recaudo de cartera
              td.ajuste-border-tabla.texto-left Aumenta el efectivo y disminuyen las cuentas por cobrar.
              td.ajuste-border-tabla.texto-left Estado de situación financiera.
              td.texto-left Entrada operativa en el estado de flujos de efectivo.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Pago de obligaciones
              td.ajuste-border-tabla.texto-left Disminuyen el efectivo y los pasivos.
              td.ajuste-border-tabla.texto-left Estado de situación financiera.
              td.texto-left Salida clasificada según la naturaleza del pago.
      p.mb-0 De esta manera, los estados financieros integran los efectos de las operaciones y permiten establecer cómo se relacionan los recursos, obligaciones, resultados y movimientos financieros de la organización.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Preparación de estados financieros según políticas contables
      p Las políticas contables establecen los principios, bases, reglas y procedimientos utilizados para reconocer, medir, presentar y revelar los hechos económicos. Su aplicación uniforme favorece la comparabilidad y debe ajustarse al marco técnico correspondiente, de manera que la información resultante sea relevante y proporcione una representación fiel de las operaciones.
      p.mb-5 Las principales políticas relacionadas con la preparación de los estados pueden organizarse así:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img7.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Efectivo y equivalentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define qué recursos cumplen las condiciones para presentarse como efectivo o equivalentes y orienta la conciliación de caja, bancos y partidas pendientes al cierre.
            .row(titulo="Cartera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece criterios de reconocimiento, medición, clasificación y deterioro de las cuentas por cobrar. Permite diferenciar saldos vigentes, vencidos y aquellos que requieren evaluación de recuperabilidad.
            .row(titulo="Inventarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determina la forma de reconocer y medir bienes destinados al consumo, producción o comercialización, así como el tratamiento de diferencias, deterioros y demás situaciones aplicables.
            .row(titulo="Propiedad, planta y equipo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define criterios para reconocer, medir, depreciar, mejorar o retirar los activos utilizados por la organización y permite actualizar su información al cierre del periodo.
            .row(titulo="Obligaciones financieras").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Orienta el reconocimiento y medición de créditos, intereses y demás costos relacionados. Su aplicación requiere conciliar los saldos con extractos, contratos y tablas de amortización.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Ingresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece el momento y las condiciones para reconocer servicios y otras actividades. El ingreso debe corresponder al periodo y cumplir los criterios del marco aplicable, aunque su recaudo pueda ocurrir posteriormente.
            .row(titulo="Costos y gastos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define cuándo se reconocen los recursos consumidos durante el periodo y permite clasificarlos de acuerdo con su naturaleza y relación con las actividades desarrolladas.
            .row(titulo="Aportes sociales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece el tratamiento contable de los recursos entregados por los asociados. Los saldos individuales deben conciliarse y su clasificación debe corresponder a las condiciones y al marco aplicable.
            .row(titulo="Fondos sociales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Orienta su reconocimiento, ejecución, saldo y presentación según su naturaleza y finalidad, relacionando las asignaciones y aplicaciones con los reglamentos y decisiones correspondientes.
            .row(titulo="Excedentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Define la determinación y presentación del resultado del periodo y su posterior tratamiento conforme a las decisiones aprobadas y al régimen aplicable.
            .row(titulo="Presentación y revelación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Establece cómo organizar los estados y qué información adicional debe explicarse mediante notas, comparativos y desagregaciones de partidas relevantes.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img8.png", alt="" style="width: 400px").m-auto
      p.mb-5 Estas políticas se aplican durante una secuencia de cierre y preparación financiera:
      .bg___color_2
        .px-5
          .row.justify-content-center.mb-5
            .col-lg-10
              PasosA.color-acento-contenido(tipo="n")
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Definición del marco y revisión de políticas
                    p.mb-0 Se identifica el grupo de información financiera y las disposiciones sectoriales aplicables. Luego se comprueba que las políticas de reconocimiento, medición, presentación y revelación estén vigentes y se apliquen uniformemente.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img9.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img10.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Cierre documental y generación de auxiliares
                    p.mb-0 Se confirma que las operaciones del periodo estén incorporadas en los registros y se generan auxiliares por cuentas, terceros, fondos y conceptos para disponer de saldos suficientemente desagregados.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Conciliaciones
                    p.mb-0 Se comparan bancos, cartera, proveedores, impuestos, aportes y demás saldos relevantes con las fuentes internas y externas correspondientes, investigando y corrigiendo las diferencias identificadas.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img11.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img12.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Ajustes de cierre
                    p.mb-0 Se reconocen las causaciones, depreciaciones, deterioros, reclasificaciones y demás ajustes que correspondan según las políticas contables, manteniendo los cálculos y evidencias que respaldan su determinación.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Revisión del balance y agrupación de cuentas
                    p.mb-0 Se analizan movimientos, naturaleza de los saldos y partidas inusuales. Una vez depurado el balance de prueba, las cuentas se agrupan según la estructura requerida para cada estado financiero.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img13.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img14.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Elaboración de estados y notas
                    p.mb-0 Se preparan los estados requeridos por el marco aplicable y las notas que explican políticas, saldos, variaciones, riesgos y hechos relevantes, manteniendo correspondencia entre cifras y revelaciones.
                .row.align-items-center
                  .col-lg.mb-4.mb-lg-0
                    h3 Comparación, revisión y aprobación interna
                    p.mb-0 Se incorporan los valores comparativos requeridos, se revisa la uniformidad de la información y se atienden las observaciones formuladas por los responsables de administración, contabilidad y control.
                  .col-auto(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img15.svg', alt='' style="width: 150px").m-auto
                .row.align-items-center
                  .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                    figure
                      img(src='@/assets/curso/temas/t5/img16.svg', alt='' style="width: 150px").m-auto
                  .col-lg.fit___pasosA-left
                    h3 Certificación y presentación
                    p.mb-0 Una vez finalizada la revisión, los estados se certifican cuando corresponda y se presentan ante los órganos, asociados o autoridades competentes, verificando firmas, fechas, anexos y medios establecidos.
      p El Decreto 2420 de 2015 continúa siendo el decreto único reglamentario de los marcos de información financiera y ha recibido modificaciones posteriores. En julio de 2026, el Decreto 701 modificó parcialmente los marcos técnicos correspondientes a los grupos 1 y 2.
      p.mb-5 La aplicación de esta ruta puede reconocerse en un proceso de cierre:
      .row.justify-content-center.mb-0
        .col-xl-10
          .box___style_3(data-aos="zoom-in")
            h5 Ejemplo aplicado
            p Una cooperativa genera su balance de prueba al 31 de diciembre e identifica diferencias entre bancos y extractos, cartera vencida, equipos pendientes de depreciación y servicios recibidos durante el periodo que aún no habían sido reconocidos.
            p.mb-0 La organización concilia los bancos, evalúa la cartera, calcula la depreciación, registra las causaciones y revisa los auxiliares de aportes, fondos, proveedores e impuestos. Después de los ajustes genera un nuevo balance de prueba y agrupa las cuentas para preparar los estados requeridos, sus comparativos y las notas correspondientes.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Presentación de estados financieros a los órganos de administración y control
      p.mb-5 La presentación de los estados financieros permite comunicar ordenadamente la situación y los resultados de la organización. En este proceso deben diferenciarse preparación, revisión, certificación, dictamen cuando corresponda, presentación y aprobación, sin confundir estas actuaciones con las funciones generales de administración y control desarrolladas por cada órgano.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img17.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los estados puestos a disposición de asociados o terceros deben ser certificados por el representante legal y el contador público bajo cuya responsabilidad fueron preparados. Son dictaminados cuando los estados certificados se acompañan de la opinión profesional correspondiente del revisor fiscal o, a falta de este en los casos legalmente procedentes, del contador público independiente que los haya examinado.
      p.mb-5 Las responsabilidades específicas frente a la información financiera pueden sintetizarse así:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 20.
        span Responsabilidades en la presentación de estados financieros
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Órgano o responsable
              th.ajuste-border-tabla.texto-left Función principal
              th.ajuste-border-tabla.texto-left Información que debe revisar o presentar
              th.texto-left Resultado esperado
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Área contable
              td.ajuste-border-tabla.texto-left Preparar los estados financieros y sus notas.
              td.ajuste-border-tabla.texto-left Balance de prueba, auxiliares, conciliaciones, ajustes y políticas contables.
              td.texto-left Información completa, coherente y respaldada.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Contador público
              td.ajuste-border-tabla.texto-left Verificar la preparación técnica y certificar los estados financieros.
              td.ajuste-border-tabla.texto-left Registros, libros, soportes, cálculos y revelaciones.
              td.texto-left Certificación sobre la correspondencia de la información con los libros.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Representante legal
              td.ajuste-border-tabla.texto-left Validar la información y certificarla junto con el contador.
              td.ajuste-border-tabla.texto-left Estados financieros, notas, informe de gestión y explicaciones administrativas.
              td.texto-left Información formalmente presentada a los órganos correspondientes.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Gerencia
              td.ajuste-border-tabla.texto-left Explicar los resultados y la gestión realizada durante el periodo.
              td.ajuste-border-tabla.texto-left Ingresos, gastos, cartera, liquidez, fondos, presupuesto y cumplimiento de metas.
              td.texto-left Análisis administrativo de los resultados.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Consejo de administración o junta directiva
              td.ajuste-border-tabla.texto-left Revisar la información antes de someterla a la asamblea.
              td.ajuste-border-tabla.texto-left Estados financieros, variaciones, riesgos, fondos y propuesta de excedentes.
              td.texto-left Recomendaciones y aprobación para su presentación.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Revisoría fiscal
              td.ajuste-border-tabla.texto-left Examinar los estados financieros y emitir el dictamen cuando corresponda.
              td.ajuste-border-tabla.texto-left Registros, soportes, controles, cumplimiento normativo y estimaciones.
              td.texto-left Opinión profesional sobre la información examinada.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Junta de vigilancia o comité de control social
              td.ajuste-border-tabla.texto-left Analizar asuntos relacionados con los asociados y el cumplimiento de la finalidad solidaria.
              td.ajuste-border-tabla.texto-left Informes de fondos, beneficios, participación y cumplimiento estatutario.
              td.texto-left Observaciones desde el ámbito del control social.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Asamblea general
              td.ajuste-border-tabla.texto-left Examinar informes y aprobar o improbar los estados financieros de cierre.
              td.ajuste-border-tabla.texto-left Estados financieros certificados, dictamen, notas e informes de gestión y control.
              td.texto-left Decisión formal registrada en el acta.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Asociados o delegados
              td.ajuste-border-tabla.texto-left Analizar la información y formular preguntas.
              td.ajuste-border-tabla.texto-left Resultados, aportes, fondos, cartera, obligaciones y excedentes.
              td.texto-left Participación informada en las decisiones.
      p.mb-0 En las cooperativas, la Ley 79 de 1988 asigna a la asamblea general la función de aprobar o improbar los estados financieros de fin de ejercicio y decidir sobre la destinación de los excedentes.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Interpretación básica de resultados, fondos y excedentes
      p Interpretar los estados financieros implica relacionar sus cifras para comprender resultados, disponibilidad de recursos, cartera, obligaciones y ejecución de fondos. El análisis debe apoyarse en comparaciones con periodos anteriores, presupuesto y notas, evitando concluir que un excedente positivo representa automáticamente efectivo disponible o cumplimiento de los objetivos sociales.
      p.mb-5 Los principales aspectos pueden analizarse de manera progresiva:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img8.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Ingresos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se comparan los valores del periodo con el presupuesto y periodos anteriores. Las variaciones pueden relacionarse con cambios en servicios, número de asociados, actividades desarrolladas u otras condiciones que deben explicarse.
            .row(titulo="Costos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se analiza su relación con los bienes o servicios ofrecidos y su comportamiento frente a los ingresos. Un crecimiento de los costos superior al de los ingresos puede reducir el resultado del periodo.
            .row(titulo="Gastos administrativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se revisan nómina, honorarios, servicios, mantenimiento y demás gastos de funcionamiento. Las variaciones significativas deben relacionarse con las actividades realizadas, el presupuesto y las causas que las originaron.
            .row(titulo="Resultado del periodo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se determina si la organización obtuvo excedente o pérdida al relacionar ingresos, costos y gastos. Un resultado positivo debe analizarse conjuntamente con efectivo, cartera y obligaciones.
            .row(titulo="Efectivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se revisan los recursos disponibles en caja, bancos y equivalentes frente a las obligaciones próximas. Un excedente positivo puede coexistir con un nivel de efectivo insuficiente para atender compromisos inmediatos.
            .row(titulo="Cartera").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se analizan cuentas por cobrar, vencimientos y deterioro. Una proporción elevada de cartera vencida puede reducir los recaudos esperados y afectar la capacidad para atender obligaciones.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Obligaciones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se revisan proveedores, créditos, impuestos y demás pasivos, considerando sus fechas de vencimiento. Su comportamiento debe compararse con el efectivo disponible y los recaudos previstos.
            .row(titulo="Aportes sociales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se analizan saldos, movimientos, retiros y conciliaciones individuales. Las variaciones relevantes requieren identificar sus causas y aplicar el tratamiento correspondiente según la naturaleza y condiciones de los aportes.
            .row(titulo="Fondos solidarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relacionan saldo inicial, recursos recibidos, ejecución y saldo final. El porcentaje ejecutado debe complementarse con la finalidad, las actividades desarrolladas, los beneficiarios y los resultados alcanzados.
            .row(titulo="Excedentes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se analiza el resultado del ejercicio y, cuando corresponda, su posterior aplicación. Debe diferenciarse el excedente contable del efectivo disponible y de los recursos con destinación específica.
            .row(titulo="Notas financieras").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las políticas, desagregaciones, riesgos y explicaciones permiten interpretar cifras y variaciones significativas que no pueden comprenderse únicamente a partir de los valores presentados en los estados.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img18.png", alt="" style="width: 400px").m-auto
      p.mb-5 La aplicación conjunta de estos criterios puede reconocerse mediante las cifras de una cooperativa:
      .box___style_3(data-aos="zoom-in").mb-5
        h5 Ejemplo aplicado
        p Al cierre del periodo, una cooperativa presenta:
        ul.fa-ul.estilo___ul.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Ingresos por servicios: #[b $240.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Costos relacionados con los servicios: #[b $150.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Gastos administrativos: #[b $60.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Gastos financieros: #[b $10.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Excedente del periodo: #[b $20.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Cartera total: #[b $70.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Cartera vencida: #[b $25.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Efectivo disponible: #[b $18.000.000]. 
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Obligaciones de corto plazo: #[b $55.000.000]. 
        p Además, el fondo de educación tenía un saldo inicial de #[b $12.000.000], recibió #[b $6.000.000] y ejecutó #[b $10.000.000] durante el periodo.
        p Los cálculos permiten relacionar estas cifras sin convertir un único resultado en una conclusión definitiva:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 21.
          span Cálculos básicos para interpretar la información financiera
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Cálculo
                th.ajuste-border-tabla.texto-left Operación
                th.ajuste-border-tabla.texto-left Resultado
                th.texto-left Interpretación básica
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Resultado antes de gastos financieros
                td.ajuste-border-tabla.texto-left $240.000.000 − $150.000.000 − $60.000.000
                td.ajuste-border-tabla.texto-left $30.000.000
                td.texto-left Resultado positivo antes de gastos financieros
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Excedente del periodo
                td.ajuste-border-tabla.texto-left $30.000.000 − $10.000.000
                td.ajuste-border-tabla.texto-left $20.000.000
                td.texto-left Resultado positivo después de gastos financieros
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Margen de excedente
                td.ajuste-border-tabla.texto-left $20.000.000 ÷ $240.000.000 × 100
                td.ajuste-border-tabla.texto-left 8,33 %
                td.texto-left Aproximadamente $8,33 de excedente por cada $100 de ingreso
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Proporción de cartera vencida
                td.ajuste-border-tabla.texto-left $25.000.000 ÷ $70.000.000 × 100
                td.ajuste-border-tabla.texto-left 35,71 %
                td.texto-left Más de una tercera parte de la cartera está vencida
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Relación didáctica entre efectivo y obligaciones de corto plazo
                td.ajuste-border-tabla.texto-left $18.000.000 ÷ $55.000.000
                td.ajuste-border-tabla.texto-left 0,327
                td.texto-left El efectivo equivale aproximadamente al 32,7 % de estas obligaciones
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Recursos disponibles del fondo
                td.ajuste-border-tabla.texto-left $12.000.000 + $6.000.000
                td.ajuste-border-tabla.texto-left $18.000.000
                td.texto-left Recursos disponibles antes de la ejecución
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Porcentaje de ejecución del fondo
                td.ajuste-border-tabla.texto-left $10.000.000 ÷ $18.000.000 × 100
                td.ajuste-border-tabla.texto-left 55,56 %
                td.texto-left Se utilizó algo más de la mitad de los recursos
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Saldo final del fondo
                td.ajuste-border-tabla.texto-left $18.000.000 − $10.000.000
                td.ajuste-border-tabla.texto-left $8.000.000
                td.texto-left Recursos pendientes de ejecución según su finalidad
        p #[b Nota.] La relación de #[b $18.000.000 ÷ $55.000.000] se utiliza únicamente como cálculo didáctico para contrastar el efectivo disponible con las obligaciones de corto plazo del caso. No se presenta como una razón financiera estandarizada de aplicación universal.
        p Aunque existe un excedente de $20.000.000, la cartera vencida es significativa y el efectivo disponible es inferior a las obligaciones de corto plazo. Por tanto, el resultado positivo debe analizarse junto con la capacidad de recaudo y la programación de pagos.
        p.mb-0 Asimismo, el fondo de educación conserva $8.000.000. Este saldo no permite concluir por sí mismo si la gestión fue favorable o desfavorable: deben considerarse las actividades realizadas, beneficiarios, finalidad y razones de los recursos pendientes.
      p.mb-0 En consecuencia, un excedente positivo no garantiza por sí solo disponibilidad suficiente de efectivo ni cumplimiento de la finalidad social. La interpretación requiere relacionar los resultados con cartera, obligaciones, fondos, notas y demás información pertinente.
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Informe de asignación y seguimiento de recursos
      p El informe de asignación y seguimiento organiza la información sobre los recursos aprobados y utilizados, relacionando las cifras con su finalidad, actividades, beneficiarios y resultados. Complementa los estados financieros al explicar cómo se ejecutaron las asignaciones y qué situaciones, desviaciones o acciones requieren atención al cierre del periodo.
      p.mb-5 Para facilitar su consulta, cada elemento debe relacionarse con información concreta y una fuente que permita verificarla:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 22.
            span Contenido del informe de asignación y seguimiento de recursos
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Elemento del informe
                  th.ajuste-border-tabla.texto-left Información que debe presentarse
                  th.texto-left Fuente de verificación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Periodo informado
                  td.ajuste-border-tabla.texto-left Fecha inicial y final de la ejecución analizada.
                  td.texto-left Cronograma y periodo contable.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fondo o recurso
                  td.ajuste-border-tabla.texto-left Nombre de la partida, fondo, programa o proyecto.
                  td.texto-left Estatutos, reglamento o presupuesto.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Finalidad
                  td.ajuste-border-tabla.texto-left Objetivo para el cual fueron autorizados los recursos.
                  td.texto-left Acuerdo de creación, plan de trabajo o acta.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fuente de financiación
                  td.ajuste-border-tabla.texto-left Origen de los valores asignados.
                  td.texto-left Excedentes, presupuesto, cuotas, convenios u otras fuentes autorizadas.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Valor asignado
                  td.ajuste-border-tabla.texto-left Monto aprobado para el periodo.
                  td.texto-left Presupuesto y acta del órgano competente.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Valor ejecutado
                  td.ajuste-border-tabla.texto-left Recursos utilizados y registrados hasta la fecha.
                  td.texto-left Auxiliares, comprobantes y extractos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Saldo disponible
                  td.ajuste-border-tabla.texto-left Diferencia entre el valor asignado y el ejecutado.
                  td.texto-left Conciliación contable y presupuestal.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Porcentaje de ejecución
                  td.ajuste-border-tabla.texto-left Proporción de los recursos utilizados.
                  td.texto-left Cálculo sobre los valores conciliados.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Actividades realizadas
                  td.ajuste-border-tabla.texto-left Acciones financiadas con los recursos.
                  td.texto-left Contratos, informes, facturas y cronogramas.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Beneficiarios
                  td.ajuste-border-tabla.texto-left Asociados, familias o grupos atendidos.
                  td.texto-left Solicitudes, listados y constancias de participación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Resultados
                  td.ajuste-border-tabla.texto-left Productos, servicios o beneficios obtenidos.
                  td.texto-left Informes de cumplimiento y evaluaciones.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Desviaciones
                  td.ajuste-border-tabla.texto-left Diferencias frente al presupuesto, cronograma o finalidad.
                  td.texto-left Matriz de seguimiento y explicaciones del responsable.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Acciones de mejora
                  td.ajuste-border-tabla.texto-left Medidas definidas para corregir o fortalecer la ejecución.
                  td.texto-left Plan de acción, responsables y fechas.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Responsable
                  td.ajuste-border-tabla.texto-left Persona, comité o dependencia encargada de la administración.
                  td.texto-left Reglamento, manual de funciones o decisión administrativa.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Aprobación y presentación
                  td.ajuste-border-tabla.texto-left Órgano que revisa, recibe o aprueba el informe.
                  td.texto-left Acta del consejo, junta o asamblea.
      p.mb-5 La relación entre ejecución financiera y resultados sociales puede integrarse mediante el siguiente caso:
      .box___style_3(data-aos="zoom-in").mb-5
        h5 Ejemplo aplicado
        p Una cooperativa asignó #[b $40.000.000] a los fondos de educación, solidaridad y bienestar. Al cierre se han ejecutado #[b $32.400.000]. El informe relaciona esos valores con las actividades realizadas, las personas beneficiadas y las causas de los saldos pendientes.
        p El fondo de educación desarrolló jornadas formativas; el de solidaridad otorgó auxilios conforme a su reglamento; y el de bienestar realizó actividades de salud y recreación. Algunas actividades de bienestar fueron aplazadas, por lo que los recursos restantes conservan su destinación.
        p La siguiente tabla presenta un ejemplo de seguimiento financiero y social de los fondos administrados por una cooperativa:
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 23.
          span Informe resumido de asignación y ejecución de recursos
        .tabla-a(data-aos="zoom-in").mb-3
          table
            thead
              tr
                th.ajuste-border-tabla.texto-left Fondo
                th.ajuste-border-tabla.texto-left Valor asignado
                th.ajuste-border-tabla.texto-left Valor ejecutado
                th.ajuste-border-tabla.texto-left Saldo disponible
                th.ajuste-border-tabla.texto-left Ejecución
                th.ajuste-border-tabla.texto-left Actividades o beneficios alcanzados
                th.texto-left Acción de seguimiento
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Educación
                td.ajuste-border-tabla.texto-left $18.000.000
                td.ajuste-border-tabla.texto-left $15.300.000
                td.ajuste-border-tabla.texto-left $2.700.000
                td.ajuste-border-tabla.texto-left 85 %
                td.ajuste-border-tabla.texto-left Cuatro jornadas de formación con participación de 120 asociados.
                td.texto-left Programar una actividad pendiente y completar las evaluaciones.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Solidaridad
                td.ajuste-border-tabla.texto-left $12.000.000
                td.ajuste-border-tabla.texto-left $9.600.000
                td.ajuste-border-tabla.texto-left $2.400.000
                td.ajuste-border-tabla.texto-left 80 %
                td.ajuste-border-tabla.texto-left Veinticuatro auxilios otorgados conforme al reglamento.
                td.texto-left Conciliar los expedientes de beneficiarios con el auxiliar contable.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Bienestar
                td.ajuste-border-tabla.texto-left $10.000.000
                td.ajuste-border-tabla.texto-left $7.500.000
                td.ajuste-border-tabla.texto-left $2.500.000
                td.ajuste-border-tabla.texto-left 75 %
                td.ajuste-border-tabla.texto-left Jornadas de salud y recreación con 85 participantes.
                td.texto-left Reprogramar las actividades aplazadas y actualizar el cronograma.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Total
                td.ajuste-border-tabla.texto-left $40.000.000
                td.ajuste-border-tabla.texto-left $32.400.000
                td.ajuste-border-tabla.texto-left $7.600.000
                td.ajuste-border-tabla.texto-left 81 %
                td.ajuste-border-tabla.texto-left Ejecución financiera acompañada de resultados educativos, solidarios y de bienestar.
                td.texto-left Presentar el informe consolidado al órgano de administración y control.
        p El porcentaje consolidado se calcula así:
        h5 Porcentaje de ejecución = valor ejecutado ÷ valor asignado × 100
        h5 $32.400.000 ÷ $40.000.000 × 100 = 81 %
        p.mb-0 El 81 % indica la proporción de recursos utilizada, pero no determina por sí sola la calidad de la gestión. Una ejecución inferior al 100 % #[b no constituye automáticamente una irregularidad]: debe explicarse el saldo, comprobarse su destinación y establecerse cómo será administrado. 
      p.mb-5 Como instrumento adicional, el #[b Balance Social y Beneficio Solidario] permite relacionar resultados cuantitativos y cualitativos de la gestión social. Sin embargo, su reporte ante la Superintendencia #[b no es una obligación general aplicable a todas las organizaciones solidarias vigiladas]. Actualmente comprende las cooperativas de ahorro y crédito y se extendió a los fondos de empleados mediante la Circular Externa 87 de 2025, con implementación diferenciada según su categoría. 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img19.png')})` }")
        .bloque-texto-g__texto.p-4
          p De esta manera, el informe de asignación y seguimiento vincula las cifras contables con la utilización de los recursos y los resultados obtenidos. Los estados financieros, su interpretación y la información de ejecución proporcionan conjuntamente elementos para fortalecer la transparencia, la rendición de cuentas y la toma de decisiones sobre los recursos colectivos.

</template>

<script>
export default {
  name: 'Tema5',
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
