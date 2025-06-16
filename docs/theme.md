# Theme Management

The application supports light and dark themes. A `ThemeProvider` component stores the current theme in `localStorage` and toggles a class on the `documentElement` to switch styles. The theme defaults to the user's system preference.

The header includes a `ThemeSwitch` component implemented with a custom `Switch` element from the `ui` library. Clicking the switch toggles between light and dark modes.
