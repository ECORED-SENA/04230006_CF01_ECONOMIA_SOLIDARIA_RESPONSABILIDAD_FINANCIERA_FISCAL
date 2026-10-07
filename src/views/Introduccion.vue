<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 La economía solidaria comprende formas asociativas basadas en la cooperación, la autogestión, la participación democrática, la ayuda mutua y la primacía del ser humano y su trabajo sobre los medios de producción. En este modelo, los recursos financieros se administran considerando tanto la sostenibilidad de la organización como las necesidades colectivas y el bienestar de los asociados y de la comunidad. La Ley 454 de 1998 define la economía solidaria como un sistema socioeconómico, cultural y ambiental integrado por organizaciones asociativas con prácticas autogestionarias, solidarias, democráticas y humanistas, sin ánimo de lucro (Ley 454, 1998). 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La responsabilidad financiera en estas organizaciones requiere establecer criterios para administrar los recursos, los fondos y los excedentes, así como delimitar las responsabilidades de los órganos de administración, vigilancia y control. Estas decisiones deben guardar correspondencia con los estatutos, las necesidades organizacionales y los principios solidarios. En el ámbito cooperativo, la Ley 79 de 1988 regula aspectos relacionados con la administración, la vigilancia y el régimen económico de estas entidades (Ley 79, 1988). 
      .row.mb-0
        .col-xl
          .box___style_1(data-aos="flip-up")
            p.mb-0 La gestión financiera también requiere reconocer adecuadamente los hechos económicos, respaldar las operaciones mediante soportes y registros y preparar información financiera confiable. Para las organizaciones sometidas a supervisión, la Circular Básica Contable y Financiera establece disposiciones relacionadas, entre otros aspectos, con la presentación de estados financieros, el régimen prudencial, la administración de riesgos y los indicadores financieros (Superintendencia de la Economía Solidaria, 2020). De esta manera, el componente articula los principios solidarios con los procedimientos financieros y contables necesarios para administrar los recursos colectivos con transparencia y responsabilidad.
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img2.svg', alt='' style="width: 85px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
