<template>
  <div id="category page">
    <!-- Navbar -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Eventuality</b-nav-item>
        <b-nav-item to="/search">Search for events?</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <!-- End of Navbar -->

<br> <!-- space between navbar and API results -->

  {{eventCategory}}

  <!-- category page not integrated in Vue
       check category page folder -->  
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'category-page',
  // data() is where objects/instance will be stored for the template to use //
  data () {
      return {
        eventCategory: [],
      }
  },
  mounted() {
    // API endpoint //
    axios.get('https://www.eventbriteapi.com/v3/categories/?token=BI4EZ4WPLG53F6RLTG7B')
    .then(response => {
      // get array of events //
      this.eventCategory = response.data.categories;
    })
  }
}
</script>

