<template>
  <div class="contained">
    <Data
      :today="today"
      :avarage="avarage"
      :increase="increase"
      :goingUp="goingUp"
      :compAvarage="compAvarage"
      :loaded="loaded"
    />
    <Chart v-if="loaded" :dates="dates" :numbers="numbers" />
    <div class="p-l flex ju-center al-center" v-else>
      <PulseLoader />
    </div>
    <Precautions />
  </div>
</template>

<script>
import Axios from 'axios'
import Chart from './body/Chart.vue'
import Data from './body/Data.vue'
import Precautions from './body/Precautions.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  name: 'Main',
  components:{
    Data,
    Chart,
    Precautions,
    PulseLoader
  },
  data() {
    return {
      dates: [],
      numbers: [],
      loaded: false,
      today: '-',
      avarage: '-',
      increase: 0,
      goingUp: false,
      compAvarage: ''
    };
  },
  async created(){
    let  data  = await Axios.get(
        'https://api.coronavirus.data.gov.uk/v1/data?' +
        'filters=areaType=nation;areaName=england&' +
        'structure={"date":"date","newCases":"newCasesByPublishDate"}'
    );
    this.loaded = true;
    let sum = 0;
    for(let i=6; i>=0; i--){
      this.dates.push(data.data.data[i].date.split('-')[2] + '/' + data.data.data[i].date.split('-')[1]);
      this.numbers.push(data.data.data[i].newCases);
      sum = sum + data.data.data[i].newCases;
    }
    this.today = this.numbers[6].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.increase = parseInt((this.numbers[6]-this.numbers[5])/this.numbers[6]*100);
    this.avarage = parseInt(sum/7).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.compAvarage = this.numbers[6] >= parseInt(sum/7) ? "Above avarage" : "Below Avarage"
  }
}
</script>
