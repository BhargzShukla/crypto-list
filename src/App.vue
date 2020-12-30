<template>
  <div id="app">
    <div class="w-11/12 mx-auto mb-8 md:max-w-prose">
      <h1 class="my-8 text-2xl font-semibold text-center md:my-16 md:text-4xl">
        Top 100 Cryptocurrencies
      </h1>
      <crypto-list />
    </div>
    <site-footer />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    SiteFooter: () => import('./components/SiteFooter'),
    CryptoList: () => import('./components/CryptoList')
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
