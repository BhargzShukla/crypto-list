<template>
  <div>
    <coins-list :coins="coins" />
    <div
      class="flex flex-col items-center justify-center md:flex-row md:justify-between"
    >
      <prev-next :limit="limit" :offset="offset" class="my-4 md:my-0" />
      <item-count />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {
    CoinsList: () => import('./CoinsList'),
    PrevNext: () => import('./PrevNext'),
    ItemCount: () => import('./ItemCount')
  },
  computed: {
    ...mapGetters({
      coins: 'coins/coins',
      limit: 'coins/limit',
      offset: 'coins/offset'
    })
  },
  data() {
    return {
      pollCoinsRef: null,
      pollCoinsDuration: 1000 * 60 * 2
    }
  },
  methods: {
    pollCoins() {
      this.pollCoinsRef = setInterval(() => {
        this.$store.dispatch('coins/getAllCoins')
      }, this.pollCoinsDuration)
    }
  },
  created() {
    this.$store.dispatch('coins/getAllCoins', null)
    this.pollCoins()

    // eslint-disable-next-line no-unused-vars
    const unsubscribe = this.$store.subscribeAction({
      after: (action) => {
        if (
          action.type === 'coins/updateLimit' ||
          action.type === 'coins/updateOffset'
        ) {
          this.$store.dispatch('coins/getAllCoins', null)
        }
      }
    })
  },
  beforeDestroy() {
    this.unsubscribe
    clearInterval(this.pollCoinsRef)
  }
}
</script>

<style></style>
