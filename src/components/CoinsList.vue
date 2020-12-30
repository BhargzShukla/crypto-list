<template>
  <div class="w-full">
    <div
      class="grid grid-cols-4 px-2 py-3 tracking-wider uppercase bg-gray-300 rounded-lg md:grid-cols-5"
    >
      <small>icon</small>
      <small class="md:col-span-2">name</small>
      <small class="justify-self-end">price</small>
      <small class="justify-self-end">change</small>
    </div>
    <ul class="row-start-2 divide-y divide-dashed">
      <li
        v-for="coin of coins"
        :key="coin.id"
        class="grid grid-cols-4 px-2 py-3 md:grid-cols-5"
      >
        <img
          :src="coin.iconUrl"
          :alt="coin.name"
          class="self-center w-8 h-8"
        />
        <div class="flex flex-col items-start justify-center md:col-span-2">
          <p class="text-sm font-semibold md:text-base">{{ coin.name }}</p>
          <small>{{ coin.symbol }}</small>
        </div>
        <p class="text-sm font-thin md:text-base justify-self-end">
          {{ coin.price | round | currency }}
        </p>
        <p
          class="text-sm justify-self-end md:text-base"
          :class="coin.change[0] === '-' ? 'text-red-500' : 'text-green-600'"
        >
          {{ coin.change | round | percent }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CoinList',
  props: {
    coins: {
      Type: Array,
      required: true,
      default: []
    }
  },
  filters: {
    round: (val) => {
      return Number(val).toFixed(2)
    },
    percent: (val) => {
      return `${val}%`
    },
    currency: (val) => {
      return `$${val}`
    }
  }
}
</script>

<style></style>
