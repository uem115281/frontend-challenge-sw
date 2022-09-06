<template>
  <button class="pageButton" :class="{ selected }">
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "HeaderPageButton",
  props: {
    label: "",
    path: "",
    selected: Boolean,
  },
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
  background-color: var(--light-gray);
}
</style>
