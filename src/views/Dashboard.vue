<script>
import Calender from '@/components/service-cards/Calender'
import Timetable from '@/components/service-cards/Timetable'
import Ingang from '@/components/service-cards/Ingang'

export default {
  name: 'Dashboard',
  components: {
    Ingang,
    Timetable,
    Calender
  }
}
</script>

<template>
  <div class="dash">
    <h1>대시보드</h1>
    <div class="service-wrapper">
      <calender class="service" />
      <timetable class="service" />
      <ingang class="service" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/colors.scss';

.dash {
  padding: 20px;
  background-color: $white;
  border-radius: 6px;
  height: 100%;
}

.service-wrapper {
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>
