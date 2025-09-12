---
title: Contact
---

# Contact

Contact us at **bratt.bike.bus@gmail.com**


# Team
<v-row align="center">
    <v-col
        v-for="member in members"
        :key="member.name"
        cols="12"
        sm="6"
        md="4"
        class="d-flex justify-center"
    >
        <v-card 
            class="member-card my-4"
            variant="tonal"
            width="600"
            height="400"
        >
            <v-img
                :src="`${member.image}`"
                :width="400"
                cover
                :lazy-src="`${member.image}`"
            >
            </v-img>
            <v-card-title class="text-h6">
                {{ member.name }}
            </v-card-title>
            <v-card-subtitle>
                {{ member.position }}
                <v-divider></v-divider>
                {{ member.org }}
                <v-divider></v-divider>
                {{ member.email }}
            </v-card-subtitle>
        </v-card>
    </v-col>
</v-row>

<script setup>
const members = [
  {
    name: 'Devin Cowan',
    image: 'https://avatars.githubusercontent.com/u/17934193',
    position: 'Dad who bikes',
    org: 'Brattleboro Bike Bus',
    email: 'bratt.bike.bus@gmail.com'
  },
  {    
    name: 'Dave Cohen',
    image: 'https://www.vbikesolutions.org/uploads/4/8/6/7/48675765/published/logo-letter-trans-and-backdrop-3_1.png?1500249296',
    position: 'Director',
    org: 'VBikeSolutions',
    email: 'info@vbikesolutions.org'
  },
  {    
    name: 'Local Motion',
    image: 'https://assets.nationbuilder.com/localmotion/sites/2/meta_images/original/LocalMotionLogo_headerimg-01.png?1736263672',
    position: '',
    org: '...',
    email: 'info@localmotion.org'
  },

]
</script>

<style scoped>

.member-card {
  transition: transform 0.2s ease-in-out;
  border-left: 4px solid !important;
}

.member-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.member-card .v-card-title {
  background: rgba(0,0,0,0.03);
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
</style>
