<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Fundamentos financieros de la economía solidaria


      
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Economía solidaria: principios, organizaciones y finalidad social



        
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Recursos monetarios en organizaciones solidarias



      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Fondos solidarios: concepto, clases, fines y regulación




      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Órganos de administración y control: funciones y responsabilidades




      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Participación democrática y toma de decisiones sobre recursos





</template>

<script>
export default {
  name: 'Tema1',
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
