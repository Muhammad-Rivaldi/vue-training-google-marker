<template>
  <div class="home">
    <img alt="Vue logo" style="width: 5%;" src="../assets/logo.png">
    <Maps />
  </div>
</template>

<script>
// @ is an alias to /src
import Maps from '@/components/Maps.vue'

export default {
  name: 'Home',
  components: {
    Maps
  }
}
</script>
