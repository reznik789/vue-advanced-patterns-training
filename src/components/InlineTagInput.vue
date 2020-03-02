<template>
  <renderless-tag-input :tags="tags" v-on:update="(newTags) => $emit('update', newTags)">
    <div class="tag-input" slot-scope="{tags, removeTagEvents, inputProps, inputEvents}">
      <span v-for="tag in tags" :key="tag" class="tag-input-tag">
        <span>{{tag}}</span>
        <button type="button" class="tag-input-remove" v-on="removeTagEvents(tag)">&times;</button>
      </span>
      <input class="tag-input-text" placeholder="Add tag..." v-bind="inputProps" v-on="inputEvents" />
    </div>
  </renderless-tag-input>
</template>

<script>
import RenderlessTagInput from "@/components/RenderlessTagInput.vue";
export default {
  model: {
    prop: "tags",
    event: "update"
  },
  props: ["tags"],
  components: {
    RenderlessTagInput
  }
};
</script>
