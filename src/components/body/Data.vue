<template>
  <div class="flex ju-around al-center v-p-20 ">
    <div class="flex ju-around back-pink half-r height-110 single">
      <div class="m-l-15 flex column al-center ju-center w-40">
        <img src="./../../assets/icons/info.svg" alt="">
        <div class="text-center red size-5 roboto-condensed-bold mt-5">
          {{ compAvarage }}
        </div>
      </div>
      <div class="m-r-15 flex column al-center ju-center">
        <div class="red size-2 roboto-condensed-bold">
          {{ today }}
        </div>
        <div class="size-5 roboto-condensed-bold text-center m-t-5 grey">
          New Cases Yesterday
        </div>
      </div>
    </div>
    <div class="flex column ju-between half-r height-110 double row-tablet">
      <div class="flex al-center ju-around back-grey half-col numbers-tablet">
        <div class="m-l-15">
          <img v-if="increase > 0" src="./../../assets/icons/trending-up.svg" alt="">
          <img v-else src="./../../assets/icons/trending-down.svg" alt="">
        </div>
        <div class="flex column m-r-15">
          <div class="roboto-condensed-bold text-center size-3">
            {{ increase + '%'}}
          </div>
          <div class="roboto-condensed m-t-5 text-center size-6 dark-grey">
            Increase from previous day
          </div>

        </div>
      </div>
      <div class="flex al-center ju-around back-grey half-col numbers-tablet">
        <div class="m-l-15">
          <img src="./../../assets/icons/calendar.svg" alt="">
        </div>
        <div class="flex column m-r-15">
          <div class="roboto-condensed-bold text-center size-3">
            {{ avarage }}
          </div>
          <div class="roboto-condensed m-t-5 text-center size-6 dark-grey">
            Avarage of last 7 days
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Data',
  props: {
    today: String,
    avarage: String,
    increase: Number,
    goingUp: Boolean,
    compAvarage: String
  }
}
</script>
