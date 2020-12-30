<template>
  <div>
    <span>View</span>
    <select
      name="list-item-count"
      id="coin-count"
      class="p-2 mx-2 bg-transparent border-2 rounded-lg"
      v-model.number="selectedLimit"
      @change="update"
    >
      <option value="10" selected>10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>
    <span>coins per page</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      selectedLimit: 10
    }
  },
  methods: {
    ...mapActions({
      updateLimit: 'coins/updateLimit',
      updateOffset: 'coins/updateOffset'
    }),
    update() {
      this.updateLimit(this.selectedLimit)
      this.updateOffset(0)
    }
  }
}
</script>

<style></style>
