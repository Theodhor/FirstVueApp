<template>
  <div class=" flex ju-center">
    <div class="flex column al-center back-grey max-750">
      <div class="size-5 roboto-condensed-bold m-t-5 max-350 v-p-10">
        Cases per day (last 7 days)
      </div>
      <div class="max-350 v-p-10">
        <LineChart :dates="dates" :numbers="numbers" :options="options" :height="heightN" :key="reload"/>
        <div class="v-line"></div>
        <div class="h-line"></div>
      </div>
      <a class="button roboto-light size-6" href="https://www.gov.uk/coronavirus" target="blank">
        View in detail
      </a>
    </div>
  </div>
</template>

<script>
import LineChart from './LineChart.vue';
import propsConfig from './../../js/propsConfig.js';

let initialW = window.innerWidth;
let actualH = parseInt(initialW) < 750 ? 175 : 325;
console.log(actualH);

export default {
  name: 'Chart',
  components: {
    LineChart
  },
  props: {
    dates: Array,
    numbers: Array
  },
  data() {
    return {
      options: propsConfig(),
      heightN: actualH,
      reload: true
    };
  },
  created() {
    window.addEventListener("resize", this.resizeChart);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeChart);
  },
  methods: {
    resizeChart() {
      const newW = window.innerWidth;
      const middle = parseInt(newW) < 750 ? 175 : 325;
      if(this.heightN !== middle) this.reload = !this.reload;
      this.heightN = middle;
    }
  }
}
</script>
