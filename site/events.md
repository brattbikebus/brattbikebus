---
title: Events
layout: doc
---

# Events

<div class="events-container">
    <v-card 
        v-for="(event, index) in events" 
        :key="index"
        class="event-card my-4"
        :color="event.color"
        variant="tonal"
    >
        <v-card-title class="text-h6 font-weight-bold">
            <v-icon class="mr-2">mdi-calendar</v-icon>
            {{ event.name }}
        </v-card-title>
        <v-card-text class="pb-0">
            <p class="text-body-1 mb-2">{{ event.description }}</p>
            <v-divider class="my-3"></v-divider>
            <div class="event-details">
                <div class="d-flex align-center mb-2">
                <v-icon small class="mr-2">mdi-clock-outline</v-icon>
                <span class="text-caption">
                    {{ new Date(event.start).toLocaleDateString() }}
                </span>
                </div>
                <div class="d-flex align-center">
                <v-icon small class="mr-2">mdi-timer</v-icon>
                <span class="text-caption">
                    {{ new Date(event.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}
                    <span v-if="event.end">
                    - {{ new Date(event.end).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) }}
                    </span>
                </span>
                </div>
            </div>
        </v-card-text>
    </v-card>
</div>

<script setup>
const events = [
  {
    name: 'Team Meeting',
    description: 'Let\'s meet and talk',
    start: '2025-09-15T12:00:00',
    end: '2025-09-15T13:30:00',
    color: 'secondary'
  },
  {
    name: 'First AM Bike Bus',
    description: 'Let\'s all ride to school together!',
    start: '2025-10-01T07:45:00',
    color: 'primary'
  },
]
</script>

<style scoped>

.event-card {
  transition: transform 0.2s ease-in-out;
  border-left: 4px solid !important;
  margin-bottom: 4px;
}

.event-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.event-card .v-card-title {
  background: rgba(0,0,0,0.03);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.event-details {
  background: rgba(0,0,0,0.02);
  padding: 12px;
  border-radius: 4px;
}
</style>

<Calendar :events="events" />
