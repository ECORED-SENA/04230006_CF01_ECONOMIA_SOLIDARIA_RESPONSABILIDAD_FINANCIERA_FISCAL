<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de verificación sobre gestión financiera solidaria y hechos económicos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los principios financieros de la economía solidaria y la capacidad para identificar fondos, analizar la destinación de excedentes, reconocer hechos económicos, clasificar cuentas, revisar soportes contables e interpretar información básica de los estados financieros de una organización solidaria.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la finalidad principal de la gestión financiera en una organización de economía solidaria?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Priorizar la rentabilidad de los aportes sobre los programas de beneficio colectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Administrar los recursos con sostenibilidad, transparencia y orientación al beneficio colectivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Asignar los recursos según las decisiones operativas adoptadas por cada dependencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Concentrar la gestión financiera en el cumplimiento de las metas de corto plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una cooperativa desea identificar los fondos establecidos formalmente en su organización. ¿Qué documentos debe revisar principalmente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El presupuesto anual, los extractos bancarios, las órdenes de compra y las facturas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los contratos laborales, los comprobantes de nómina, las declaraciones y las conciliaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los informes de gestión, las solicitudes de afiliación, las cotizaciones y los contratos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los estatutos, las actas de asamblea, los reglamentos y los registros contables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes elementos debe incluirse en el reglamento de un fondo monetario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La finalidad, los beneficiarios, los usos autorizados, los límites y el procedimiento de aprobación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La fuente de financiación, el saldo bancario, el número de cuenta y el responsable operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El cronograma anual, la relación de asociados, las metas institucionales y la proyección de ingresos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El tipo de organización, la estructura administrativa, el inventario de bienes y el plan de compras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Antes de aprobar la destinación de los excedentes de una cooperativa, ¿qué debe verificarse?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El saldo bancario disponible, la cartera recaudada y los pagos efectuados durante el periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El presupuesto aprobado, la ejecución de fondos y los compromisos pendientes de pago.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Las pérdidas anteriores, las reservas por restablecer y las destinaciones legales y estatutarias.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los aportes sociales, las obligaciones financieras y las compras realizadas durante el periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué permite verificar un plan de seguimiento a la ejecución de fondos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los saldos de las cuentas, las conciliaciones bancarias, los pagos y los documentos archivados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los recursos aprobados, los valores ejecutados, las actividades, los beneficiarios y los resultados alcanzados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El presupuesto general, los contratos celebrados, los proveedores y las obligaciones tributarias del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Las reuniones realizadas, las decisiones administrativas, las solicitudes recibidas y las comunicaciones emitidas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál actuación corresponde al control social dentro de una organización solidaria?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar principios, estatutos, reglamentos y derechos de los asociados dentro de sus competencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Autorizar pagos y contratos que correspondan a la administración ordinaria de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Elaborar comprobantes y registros contables asociados con las operaciones financieras realizadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Dirigir la ejecución cotidiana de recursos y coordinar las actividades presupuestadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál situación constituye un hecho económico que debe analizarse para su reconocimiento contable?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Preparar una propuesta de compra para evaluar posteriormente su conveniencia económica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar la posibilidad de solicitar financiación para el siguiente periodo contable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Recibir una cotización de un proveedor sin haber aceptado todavía la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recibir una factura por un servicio efectivamente prestado a la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Una cooperativa recibe un aporte social mediante transferencia bancaria. ¿Cómo se clasifican sus efectos generales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumenta el activo y se reconoce un ingreso por los servicios prestados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumenta el activo y se reconoce una obligación financiera con el asociado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Aumenta el activo y aumenta el patrimonio de la organización.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Disminuye el activo y aumenta el patrimonio de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué efecto contable general produce la recepción de un crédito bancario?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el patrimonio y disminuyen los pasivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentan los bancos y las obligaciones financieras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentan los ingresos y las cuentas por cobrar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Disminuyen los gastos y aumenta el efectivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué significa reconocer contablemente una operación?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Clasificar el soporte de la operación antes de efectuar su registro definitivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Autorizar el pago de la operación antes de incorporarla al sistema contable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprobar los documentos de la operación antes de realizar su contabilización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incorporar el hecho económico en los registros al cumplir los criterios contables.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál situación corresponde a una medición posterior?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Calcular la depreciación del equipo después de efectuar su reconocimiento inicial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Determinar el valor de compra del equipo al momento de reconocerlo inicialmente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Estimar el costo del equipo antes de autorizar formalmente su adquisición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar el presupuesto disponible antes de aprobar la adquisición del equipo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál es la diferencia entre un soporte contable y un comprobante de contabilidad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El soporte identifica las cuentas afectadas y el comprobante acredita el hecho económico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El soporte autoriza la operación y el comprobante conserva los documentos que la respaldan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El soporte acredita el hecho económico y el comprobante organiza los datos para registrarlo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El soporte resume el registro contable y el comprobante certifica la ejecución presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Una organización compra un servicio a una persona que no está obligada a expedir factura. ¿Qué documento debe generar el comprador cuando resulte aplicable?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El documento soporte en adquisiciones efectuadas a sujetos no obligados a facturar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una nota de contabilidad sin identificación del proveedor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una factura electrónica expedida a nombre del comprador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Un recibo de caja emitido por la organización adquirente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Por qué una misma operación debe revisarse desde la normativa comercial, contable, tributaria y solidaria?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El comprobante de egreso que relaciona el pago realizado con los soportes de la operación, efectuado por la empresa en el desarrollo de su objeto social y actividades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La nota de contabilidad que describe la operación y las cuentas afectadas en el registro, en las actividades concernientes y directamente afectadas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El recibo de caja que documenta el movimiento y la identificación del tercero involucrado en las operaciones de la empresa, en sus respecticas transacciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque cada ámbito regula aspectos diferentes como soportes, reconocimiento, obligaciones fiscales, autorizaciones y finalidad de los recursos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué órgano aprueba o imprueba los estados financieros de cierre de una cooperativa?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El área contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La junta de vigilancia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La asamblea general.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El comité de educación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué conjunto de medidas permite proteger los documentos contables electrónicos frente a accesos no autorizados y pérdida de información?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer permisos de acceso, realizar copias de seguridad y definir procedimientos de recuperación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Organizar los archivos por periodo, asignar nombres estandarizados y mantener un índice documental.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Clasificar los soportes por tipo, conservar una copia local y registrar la fecha de archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ordenar los documentos por consecutivo, restringir su edición y depurar versiones duplicadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué estado financiero presenta los activos, pasivos y patrimonio de la organización en una fecha determinada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado de flujos de efectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estado de situación financiera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estado de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Informe de ejecución presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la función de las políticas contables durante la preparación de los estados financieros?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer los procedimientos para autorizar pagos y registrar operaciones financieras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Definir los criterios para archivar soportes y conservar documentos contables del periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Determinar las obligaciones tributarias que deben aplicarse a las operaciones registradas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Orientar el reconocimiento, medición, presentación y revelación de los hechos económicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una cooperativa presenta un excedente positivo, pero su efectivo disponible es inferior a las obligaciones de corto plazo. ¿Cuál es la interpretación más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El excedente positivo garantiza capacidad suficiente para atender las obligaciones de corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El excedente debe convertirse en efectivo antes de presentar los estados financieros del periodo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Puede existir excedente positivo y, al mismo tiempo, un riesgo de liquidez que requiere gestión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La disponibilidad de efectivo determina por sí sola el resultado financiero obtenido en el periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál opción reúne de manera más completa la información que debe incluir un informe de asignación y seguimiento de recursos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fuente, presupuesto, ejecución, responsables, soportes, saldos y beneficiarios del periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fuente, finalidad, asignación, ejecución, saldo, beneficiarios, resultados y acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Presupuesto, recaudos, pagos, contratos, proveedores, impuestos y conciliaciones del periodo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Finalidad, soportes, comprobantes, actas, responsables, beneficiarios y documentos del periodo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
