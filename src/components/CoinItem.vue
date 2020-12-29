<template>
  <div>
    <!-- <img :src="coin.iconUrl" alt="coin.name" /> -->
  </div>
</template>

<script>
export default {
  name: 'CoinItem',
  props: {
    coin: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
