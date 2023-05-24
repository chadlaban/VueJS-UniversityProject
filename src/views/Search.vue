<template>
  <div id="search page">
    <!-- Navbar -->
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to="/">Eventuality</b-nav-item>
        <b-nav-item to=""></b-nav-item>
        
        <b-nav-form>
          <b-form-input id="searchField" type="text" v-model="search"
          placeholder="Type here to search for an event...">
          </b-form-input>
        </b-nav-form>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/category">Categories</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <!-- End of Navbar -->

<br> <!-- space between navbar and API results -->

    <!-- Container for API -->
    <div v-for="(events, index) in filteredEvents" :key="index"> <!-- for-loop in Vue -->
      <b-row>
        <b-col> <!-- left spacing --> </b-col>
        <b-col cols="9"> <!-- column space for events to display -->
          <a v-bind:href= "events.url"> <!-- redirects to eventbrite details of the event -->
          <ul>
            <b-media>
              <b-img class="img-fluid sm-2" 
              :src=" events.logo !== null ? events.logo.url 
              : 'https://media.sweetwater.com/api/i/ha-84d4247e8664ac7f__hmac-7354964eeaec98f56ef1eb5365271d5054a6c911/images/store/image_not_available.gif'" 
              slot="aside"
              > <!-- events.logo and events.logo.url checks if there are no values in object,
                      then if there are no values, it will return another image via url. -->
              </b-img>
              <h4>{{ events.name.text }}</h4> <!-- gets the title of the event -->
              <p>{{ events.start.timezone }} | date posted: {{ events.published.slice(0, 10) }}</p> <!-- .slice() gets specific characters -->
              <p>{{ events.summary }}</p> <!-- short description of event -->
            </b-media>
          </ul>
          </a>
        </b-col>
        <b-col> <!-- right spacing --> </b-col>
      </b-row>
    </div>
    <!-- End for Container of API -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search-page',
  // data() is where objects/instance will be stored for the template to use //
  data () {
      return {
        search: '',
        eventData: [],
      }
  },
  mounted() {
    // API endpoint //
    axios.get('https://www.eventbriteapi.com/v3/events/?token=BI4EZ4WPLG53F6RLTG7B')
    .then(response => {
      // get array of events //
      this.eventData = response.data.events;
    })
  },
  computed: {
    filteredEvents: function() { // filters events based on what is searched //
      return this.eventData.filter((events) => {
        // returns matching text from search bar
        // and converts both events.name.text and text.search
        // to lower case to match them completely
        return events.name.text.toLowerCase()
        .match(this.search.toLowerCase());
      })  
    },
  }
}
</script>