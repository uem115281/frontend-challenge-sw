<template>
  <div class="container">
    <div
      class="arrowButton left"
      @click="$emit('changePage', page > 0 ? page - 1 : 0)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        />
      </svg>
    </div>
    <div
      :class="`numberButton ${isSelected(p) ? 'selected' : ''}`"
      v-for="p in visiblePages"
      :key="p"
      @click="$emit('changePage', p)"
    >
      {{ p+1 }}
    </div>
    <div
      class="arrowButton right"
      @click="$emit('changePage', page === totalPages - 1 ? page : page + 1)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectPage",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  methods: {
    isSelected(p) {
      return p === this.page;
    },
  },
  computed: {
    visiblePages() {
      const todasPaginas = [
        ...new Array(this.totalPages).fill(0).map((_, i) => i),
      ];

      if (this.totalPages < 4) {
        return todasPaginas;
      }

      if (this.page === 0) {
        return todasPaginas.slice(0, 3);
      }

      if (this.page === this.totalPages - 1) {
        return todasPaginas.slice(-3);
      }

      return todasPaginas.slice(this.page - 1, this.page + 2);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
}

.arrowButton,
.numberButton {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 1px solid var(--light-gray);
  color: var(--white);
  font-family: var(--star-jedi);
  font-size: 15px;
  background-color: var(--gray);
  user-select: none;
  cursor: pointer;
}

.arrowButton {
  border-color: var(--yellow);
}

.arrowButton svg {
  fill: var(--white);
  height: 15px;
}

.right svg {
  transform: rotate(180deg);
}

.selected {
  color: var(--yellow);
  border-color: var(--yellow);
}
</style>