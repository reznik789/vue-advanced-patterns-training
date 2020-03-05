<template>
  <on-click-outside :handler="close">
    <div class="search-select" :class="{'is-active': isOpen}">
      <button ref="valueRef" @click="open" class="search-select-input">
        <span v-if="value !== null">{{value}}</span>
        <span v-else class="search-select-placeholder">Select a band...</span>
      </button>
      <div ref="dropdownRef" v-show="isOpen" class="search-select-dropdown">
        <input
          @keydown.esc="close"
          @keydown.up="highlightPrev"
          @keydown.down="highlightNext"
          @keydown.enter.prevent="selectHighlighted"
          ref="searchInputRef"
          class="search-select-search"
          v-model="searchValue"
        />
        <ul ref="optionsListRef" v-show="filteredOptions.length > 0" class="search-select-options">
          <li
            v-for="(option, ind) in filteredOptions"
            class="search-select-option"
            :class="{'is-active': ind === highlightedIndex}"
            :key="option"
            @click="select(option)"
          >{{option}}</li>
        </ul>
        <div v-show="filteredOptions.length === 0" class="search-select-empty">No results found</div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "@/components/OnClickOutside.vue";
import { createPopper } from "@popperjs/core";
export default {
  name: "SearchSelect",
  components: {
    OnClickOutside
  },
  props: ["value", "options", "filterCallback"],
  data: function() {
    return {
      isOpen: false,
      searchValue: "",
      highlightedIndex: 0
    };
  },
  methods: {
    open: function() {
      this.isOpen = true;
    },
    close: function() {
      this.isOpen = false;
    },
    select: function(option) {
      this.$emit("input", option);
      this.searchValue = "";
      this.highlightedIndex = 0;
      this.close();
    },
    selectHighlighted: function() {
      this.select(this.filteredOptions[this.highlightedIndex]);
    },
    highlight: function(index) {
      this.highlightedIndex = index;
      if (this.highlightedIndex >= this.filteredOptions.length) {
        this.highlightedIndex = 0;
      }
      if (this.highlightedIndex < 0) {
        this.highlightedIndex = this.filteredOptions.length - 1;
      }
      this.scrollToHighlighted();
    },
    highlightNext: function() {
      this.highlight(this.highlightedIndex + 1);
    },
    highlightPrev: function() {
      this.highlight(this.highlightedIndex - 1);
    },
    scrollToHighlighted: function() {
      this.$refs.optionsListRef.children[this.highlightedIndex].scrollIntoView({
        block: "nearest"
      });
    },
    setUpPopper: function() {
      if (this.popper === undefined) {
        this.popper = createPopper(
          this.$refs.valueRef,
          this.$refs.dropdownRef,
          {
            placement: "bottom"
          }
        );
        console.log(this.popper);
      } else {
        this.popper.update();
      }
    }
  },
  computed: {
    filteredOptions: function() {
      return this.filterCallback(this.searchValue, this.options);
    }
  },
  watch: {
    isOpen: function(newVal) {
      if (newVal === true) {
        this.$nextTick(() => {
          this.$refs.searchInputRef.focus();
          this.scrollToHighlighted();
          this.setUpPopper();
        });
      } else {
        this.$refs.valueRef.focus();
      }
    }
  }
};
</script>
