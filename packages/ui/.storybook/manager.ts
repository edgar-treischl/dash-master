import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const theme = create({
  base: 'light',
  brandTitle:
    '<img src="./dash-logo.svg" alt="Dash" style="height:64px;width:auto;display:block;" />',
  brandImage: null,
})

addons.setConfig({
  theme,
})
