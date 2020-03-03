<script>
export default {
  inject: ["sortableListHandleClass"],
  mounted: function() {
    this.$el.classList.add(this.sortableListHandleClass);
  },
  render: function() {
    return this.$slots.default[0];
  }
};
</script>