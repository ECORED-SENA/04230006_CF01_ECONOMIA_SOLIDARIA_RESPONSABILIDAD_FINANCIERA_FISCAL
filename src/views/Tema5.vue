<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Estados financieros para organizaciones solidarias


      
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Concepto, clasificación y elementos de los estados financieros



        
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Preparación de estados financieros según políticas contables



      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Presentación de estados financieros a los órganos de administración y control




      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Interpretación básica de resultados, fondos y excedentes




      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Informe de asignación y seguimiento de recursos





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
