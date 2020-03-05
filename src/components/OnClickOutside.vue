<script>
export default {
  props: ["handler"],
  name: "OnClickOutside",
  mounted: function() {
    const listener = e => {
      if (this.$el === e.target || this.$el.contains(e.target)) return;
      this.handler();
    };
    document.addEventListener("click", listener);
    this.$once("hook:beforeDestroy", () =>
      document.removeEventListener("click", listener)
    );
  },
  render: function() {
    return this.$slots.default[0];
  }
};
</script>