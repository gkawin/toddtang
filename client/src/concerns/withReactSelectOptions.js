export default (item) => !item ? [] : item.map(
  y => ({ label: y, value: y })
)
