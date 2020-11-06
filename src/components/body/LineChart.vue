<script>
import { Line } from 'vue-chartjs';
import dataConfig from './../../js/dataConfig.js';

export default {
  extends: Line,
  props: {
    dates: Array,
    numbers: Array,
    options: Object
  },
  mounted(){
    const dates = this.dates;
    const numbers = this.numbers;
    this.renderChart(dataConfig(dates,numbers),this.options);
  }
}
</script>
