import { ThemeApp } from '@/enum/enum'
import { ref } from 'vue'

const theme = ref<ThemeApp>(ThemeApp.light)
const changeTheme = () =>
  (theme.value = theme.value === ThemeApp.dark ? ThemeApp.light : ThemeApp.dark)


export { theme, changeTheme }
