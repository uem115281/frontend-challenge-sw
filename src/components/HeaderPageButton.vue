<template>
  <button class="pageButton" :class="{ selected }" @click="onClick">
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "HeaderPageButton",
  props: {
    label: {
      type: String, 
      default: ""
    },
    path: {
      type: String, 
      default: ""
    }
  },
  methods: {
    onClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    selected() {
      return this.$router.currentRoute.value.path === this.path;
    }
  }
};
</script>

<style scoped>
.pageButton {
  min-width: 274px;
  height: 42px;
  border-radius: 21px;
  border: 0px;
  background-color: transparent;
  color: var(--white);
  letter-spacing: 0.64px;
  font-size: 16px;
  font-family: var(--star-jedi);
  transition: 0.2s;
  cursor: pointer;
}

.selected, .pageButton:hover {
  background-color: var(--gray);
}
</style>
