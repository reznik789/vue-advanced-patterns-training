<script>
export default {
  model: {
    prop: "tags",
    event: "update"
  },
  props: ["tags"],
  data() {
    return {
      input: ""
    };
  },
  computed: {
    newTag() {
      return this.input.trim();
    }
  },
  methods: {
    removeTag(tag) {
      this.$emit(
        "update",
        this.tags.filter(t => t !== tag)
      );
    },
    addTag() {
      if (this.newTag.length === 0 || this.tags.includes(this.newTag)) {
        return;
      }
      this.$emit("update", [...this.tags, this.newTag]);
      this.clearInput();
    },
    clearInput() {
      this.input = "";
    },
    handleBackspace() {
      if (this.newTag.length === 0) {
        this.$emit("update", this.tags.slice(0, -1));
      }
    }
  },
  render() {
    return this.$scopedSlots.default({
      tags: this.tags,
      addTag: this.addTag,
      removeTagEvents: tag => ({
        click: () => {
          this.removeTag(tag);
        }
      }),
      inputProps: {
        value: this.input
      },
      inputEvents: {
        keydown: e => {
          if (e.key === "Enter") {
            e.preventDefault();
            this.addTag(this.newTag);
          } else if (e.key === "Backspace") {
            this.handleBackspace();
          }
        },
        input: e => (this.input = e.target.value)
      }
    });
  }
};
</script>
