<template>
  <div id="app" class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tag Input Alternate layout</label>
      <renderless-tag-input v-model="tags">
        <div class="stacked-tag-inut" slot-scope="{tags, removeTagEvents, inputProps, inputEvents}">
          <div class="stacked-tag-input-form">
            <input
              v-bind="inputProps"
              v-on="inputEvents"
              placeholder="Add tag..."
              class="form-input"
            />
            <button v-on="{click: inputEvents}" class="btn btn-indigo">Add tag</button>
          </div>
          <ul class="stacked-tag-list">
            <li v-for="tag in tags" :key="tag">
              {{tag}}
              <button v-on="removeTagEvents(tag)" class="stacked-tag-link">Remove</button>
            </li>
          </ul>
        </div>
      </renderless-tag-input>
    </div>
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tag Input</label>
      <inline-tag-input v-model="tags"></inline-tag-input>
    </div>
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tag Input</label>
      <tag-input v-model="tags"></tag-input>
    </div>
  </div>
</template>

<script>
import TagInput from "@/components/TagInput.vue";
import RenderlessTagInput from "@/components/RenderlessTagInput.vue";
import InlineTagInput from "@/components/InlineTagInput";

export default {
  components: {
    TagInput,
    RenderlessTagInput,
    InlineTagInput
  },
  data() {
    return {
      tags: ["awesome", "excellent", "amazing"]
    };
  }
};
</script>
