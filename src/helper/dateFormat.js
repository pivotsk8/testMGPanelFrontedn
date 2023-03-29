import { ref } from 'vue'

export default function dateFormat(startDate) {
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)

  const updateTime = () => {
    const now = new Date()
    const diff = now - startDate

    days.value = Math.floor(diff / (24 * 60 * 60 * 1000))
    hours.value = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
    minutes.value = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000))
  }

  setInterval(updateTime, 1000 * 60)

  updateTime()

  return {
    days,
    hours,
    minutes
  }
}
