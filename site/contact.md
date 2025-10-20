---
title: Contact
layout: doc
---

# Contact

Contact us at **bratt.bike.bus@gmail.com**

<!-- MailerLite Universal -->
<script>
    (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
    .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
    n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
    (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
    ml('account', '1867567');
</script>
<!-- End MailerLite Universal -->

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