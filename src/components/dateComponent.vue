<script>
import dataformat from '../helper/dateFormat'
export default {
  name: "dateComponent",
  data() {
    const startDate = new Date('2023-01-27T00:00:00');
    const elapsedTime = dataformat(startDate);
    return {
      startDate,
      elapsedTime
    }
  },
}
</script>
<template>
  <div class="date-format">
    <div class="contain-date">
      <h2>{{ elapsedTime.days }}</h2>
      <p>Días</p>
    </div>
    <div class="contain-date">
      <h2>{{ elapsedTime.hours }}</h2>
      <p>Horas</p>
    </div>
    <div class="contain-date">
      <h2>{{ elapsedTime.minutes }}</h2>
      <p>Minutos</p>
    </div>
  </div>
</template>

<style scoped>
.date-format {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
}

.contain-date {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

h2 {
  font-weight: bold;
  font-size: 56px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

p {
  width: 83px;
  font-style: normal;
  font-size: 30px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  flex-direction: column;
}
</style>
