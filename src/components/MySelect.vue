<template>
  <select class="select">
    <option
      v-for="opt in options"
      :key="opt.key || opt.value"
      :value="opt.value"
    >
      {{ opt.label }}
    </option>
  </select>
</template>
  
  <script>
export default {
  name: "MySelect",
  props: {
    data: {
      type: Array,
      default: function() {
        return []
      },
    },
    placeholder: {
        type: String,
        default: ""
    }
  },
  computed: {
    options() {
        if (this.placeholder && this.placeholder !== "") {
            return [
                { key: 'placeholder', value: null, label: this.placeholder },
                ...this.data
            ]
        }
        return this.data
    }
  }
};
</script>
  
<style scoped>
.select {
  height: 32px;
  padding-left: 8px;
  border: 1px solid var(--light-gray);
  font-size: 15px;
  color: var(--white);
  background-color: var(--light-gray-2);
  font-family: var(--roboto-light);
  cursor: pointer;
}
</style>
  