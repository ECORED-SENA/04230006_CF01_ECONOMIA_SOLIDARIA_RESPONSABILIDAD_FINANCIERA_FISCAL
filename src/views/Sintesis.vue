<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p La síntesis integra los conceptos principales desarrollados en el componente formativo:
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del componente formativo Gestión financiera solidaria y hechos económicos, el cual se estructura en cinco temas. El primero integra los fundamentos financieros de la economía solidaria, incluidos sus principios, recursos monetarios, fondos solidarios, órganos de administración y control, y participación democrática. El segundo comprende la administración de fondos y excedentes, mediante su identificación, reglamentación, destinación, seguimiento y rendición de cuentas. El tercero aborda los hechos económicos, la clasificación y dinámica de las cuentas, su reconocimiento, medición y registro. El cuarto incluye los soportes contables, su elaboración, la normativa aplicable, las autoridades de control y la conservación documental. El quinto considera los estados financieros, desde su concepto y preparación hasta su presentación, interpretación y seguimiento de los recursos.")
        .col-auto
          a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
