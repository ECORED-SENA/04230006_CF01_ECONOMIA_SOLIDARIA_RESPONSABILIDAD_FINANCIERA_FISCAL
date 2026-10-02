<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Hechos económicos en organizaciones solidarias


      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de hecho económico y transacción



        
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Clasificación de cuentas según la naturaleza de la operación



      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Dinámica contable aplicada a organizaciones solidarias




      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Reconocimiento y medición de hechos económicos




      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Descripción y registro de operaciones solidarias frecuentes





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
