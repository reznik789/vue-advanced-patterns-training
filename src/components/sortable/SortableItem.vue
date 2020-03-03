<script>
export default {
  inject: ["sortableListItemClass"],
  mounted: function() {
    this.$el.classList.add(this.sortableListItemClass);
  },
  render: function() {
    return this.$slots.default[0];
  }
};
</script>
