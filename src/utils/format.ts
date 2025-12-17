export const formatDateTime = (dateString: string) => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']
  const weekday = weekdays[date.getDay()]

  return {
    date: `${year}.${month}.${day} (${weekday})`,
    time: `${hours}:${minutes}`,
  }
}

export const formatPriceRange = (min: number, max: number) => {
  return `${min.toLocaleString()}원 ~ ${max.toLocaleString()}원`
}
