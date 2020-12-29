<template>
  <ul>
    <li v-for="coin in coins" :key="coin.id">
      <img :src="coin.iconUrl" alt="coin.name" class="w-8 h-8" />
      <p>{{ coin.name }}</p>
      <small>{{ coin.symbol }}</small>
      <pre>{{ coin.price | round }}</pre>
      <code>{{ coin.change | round | percent }}</code>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CoinList',
  components: {
    // CoinItem: () => import('./CoinItem')
  },
  computed: mapState({
    coins: (state) => state.coins.all
  }),
  methods: mapActions({}),
  created() {
    this.$store.dispatch('coins/getAllCoins')
  },
  filters: {
    log: (val) => {
      console.log(val)
    },
    round: (val) => {
      return Math.round((val * 100) / 100).toFixed(2)
    },
    percent: (val) => {
      return `${val}%`
    }
  }
}
</script>

<style></style>
