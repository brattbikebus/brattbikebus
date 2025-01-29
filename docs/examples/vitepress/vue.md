---
hello: world
title: Embeded Vue Test
date: 2025-01-29T09:29:00.000Z
---

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

# HERE WE TEST VUE FUNCTIONALITY WITHIN A .MD FILE

* List
* OF
* ITEMS

### Here we use a template tag:
The count is: {{ count }}

### And then a vue button:
<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
