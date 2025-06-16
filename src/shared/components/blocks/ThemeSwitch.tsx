import { Switch } from '../ui/switch'
import { useTheme } from '../containers/theme-provider'

export default function ThemeSwitch() {
  const { theme, toggle } = useTheme()
  return (
    <Switch checked={theme === 'dark'} onCheckedChange={toggle} aria-label="Toggle theme" />
  )
}
