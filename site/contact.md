---
title: Contact
layout: doc
---

# Contact

Contact us at **bratt.bike.bus@gmail.com**

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    name: 'Devin Cowan',
    avatar: 'https://avatars.githubusercontent.com/u/17934193',
    title: 'Dad who bikes',
    org: 'Brattleboro Bike Bus',
    links: [
      { icon: 'github', link: 'https://github.com/devincowan' },
      { icon: 'google', link: 'mailto:bratt.bike.bus@gmail.com' },
    ]
  },
  {    
    name: 'Dave Cohen',
    avatar: '/vbike.png',
    title: 'Director',
    org: 'VBikeSolutions',
    links: [
      { icon: 'google', link: 'mailto:info@vbikesolutions.org' },
    ]
  },
  {    
    name: 'Local Motion',
    avatar: '/lm.png',
    title: '',
    org: '...',
    links: [
      { icon: 'google', link: 'mailto:info@localmotion.org' },
    ]
  },

]
</script>

# Our Team

<VPTeamMembers :members />