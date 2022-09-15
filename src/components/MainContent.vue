<template>
    <main>
        <JumboContent></JumboContent>
        <OurSpecialties></OurSpecialties>
        <EventsMain></EventsMain>
        <CreativeLeadermain></CreativeLeadermain>
        <TestimonialsMain></TestimonialsMain>
        <ContactUsMain></ContactUsMain>
    </main>
    
  </template>
  
  <script>
import JumboContent from './JumboContent.vue';
import OurSpecialties from './OurSpecialties.vue';
import EventsMain from './EventsMain.vue';
import CreativeLeadermain from './CreativeLeadermain.vue';
import TestimonialsMain from './TestimonialsMain.vue';
import ContactUsMain from './contactUsMain.vue';
  
  export default {
    components: { JumboContent, OurSpecialties, EventsMain, CreativeLeadermain, TestimonialsMain, ContactUsMain }
}
  </script>
  
  
  <style scoped lang="scss">
  
  </style>
  