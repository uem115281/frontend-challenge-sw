<template>
  <textarea class="textarea" :placeholder="placeholder"></textarea>
</template>

<script>
export default {
  name: "MyTextarea",
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
.textarea {
  height: 129px;
  width: 100%;
  border: 1px solid var(--light-gray);
  background-color: var(--light-gray-2);
  padding: 8px;
  box-sizing: border-box;
  outline: none;
  color: var(--white);
  font-family: var(--roboto-light);
  font-size: 14px;
  resize: none;
}
</style>