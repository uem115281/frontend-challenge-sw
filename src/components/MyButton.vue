<template>
  <button class="button">
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    label: {
      type: String, 
      default: ""
    }
  },
};
</script>

<style scoped>
.button {
  height: 42px;
  padding-left: 17px;
  padding-right: 17px;
  border: 2px solid var(--yellow);
  font-size: 15px;
  color: var(--white);
  background-color: transparent;
  font-family: var(--star-jedi);
  cursor: pointer;
}

.button:hover {
  background-color: var(--gray);
}
</style>
