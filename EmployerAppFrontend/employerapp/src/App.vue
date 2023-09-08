<template>
<NavbarCompoment/>
<EmployeeCompoments/>
<DepartementCompoments/> 
<ProjetCompoments/>
<SpaceParkingCompoment/>
</template>

<script>
import NavbarCompoment from './components/NavbarCompoment.vue';
import DepartementCompoments from './components/DepartementCompoments.vue';
import EmployeeCompoments from './components/EmployeeCompoments.vue';
import ProjetCompoments from './components/ProjetCompoment.vue';
import SpaceParkingCompoment from './components/SpaceParkingCompoment.vue';
export default {
  name: 'App',
  components: {
    NavbarCompoment,
    DepartementCompoments,
    EmployeeCompoments,
    ProjetCompoments,
    SpaceParkingCompoment
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
