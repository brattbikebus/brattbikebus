<template>
  <div>
    <v-sheet class="d-flex" tile>
      <v-btn
        class="ma-2"
        variant="text"
        icon
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        class="ma-2"
        density="comfortable"
        label="View"
        variant="outlined"
        hide-details
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn
        class="ma-2"
        variant="text"
        icon
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-sheet>
    <v-sheet height="600">
      <v-calendar
        ref="calendar"
        v-model="value"
        event-overlap-mode="stack"
        :event-overlap-threshold="30"
        :events="props.events"
        :type="type"
        :weekdays="weekday"
      ></v-calendar>
    </v-sheet>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { VCalendar } from 'vuetify/labs/VCalendar'

  const props = defineProps(['events'])

  const type = ref('month')
  const types = ['month', 'week', 'day', '4day']
  const weekday = ref([0, 1, 2, 3, 4, 5, 6])
  const value = ref('')

</script>