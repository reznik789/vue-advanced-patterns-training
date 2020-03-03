<template>
  <div class="accordion-list">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide: function() {
    return {
      accordionListState: this.sharedState
    };
  },
  data: function() {
    return {
      sharedState: {
        activeItem: 2
      }
    };
  }
};
</script>

<style>
</style>