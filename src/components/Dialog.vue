<template>
  <md-dialog :md-active.sync="isOpen">
    <md-dialog-title>{{phrase}}</md-dialog-title>
    <md-dialog-content>
      <div v-if="isSuccess">
        <md-table>
          <md-table-row>
            <md-table-cell>Max offer</md-table-cell>
            <md-table-cell md-numeric>{{getItem('employer-tab').price}}</md-table-cell>
          </md-table-row>
          <md-table-row>
            <md-table-cell>Min offer</md-table-cell>
            <md-table-cell md-numeric>{{getItem('employee-tab').price}}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <div v-else>Sorry bro, next time</div>
      <div v-if="weather.weather">
        There is a
        <img :src="weatherIcon" alt="Weather icon" />
        {{weather.weather[0].description}} in London now
      </div>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-primary" @click="isOpen = false">Close</md-button>
    </md-dialog-actions>
  </md-dialog>
</template>
<script>
export default {
  props: ["isSuccess", "phrase", "tabData"],
  data() {
    return {
      isOpen: false,
      weather: {}
    };
  },
  computed: {
    weatherIcon() {
      return `/img/w/${this.weather.weather[0].icon}.png`;
    }
  },
  methods: {
    async getWeather() {
      const response = await fetch(
        "/data/2.5/weather?q=London,uk&APPID=81f940e765f4afa2401cac4ad993137a",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      this.weather = await response.json();
    },
    getItem(id) {
      return this.tabData.find(element => element.id === id);
    }
  },
  created() {
    this.getWeather();
  }
};
</script>