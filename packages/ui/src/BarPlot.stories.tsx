import type { Meta, StoryObj } from '@storybook/react'
import { BarPlot } from './BarPlot'

const meta: Meta<typeof BarPlot> = {
  title: 'Components/BarPlot',
  component: BarPlot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { type: 'public' as const, count: 120, percent: 75 },
  { type: 'private' as const, count: 40, percent: 25 },
]

export const Default: Story = {
  args: {
    data: sampleData,
    year: '2024/25',
  },
}

export const HighValues: Story = {
  args: {
    data: [
      { type: 'public' as const, count: 200, percent: 90 },
      { type: 'private' as const, count: 100, percent: 80 },
      { type: 'charter' as const, count: 50, percent: 60 },
    ],
    year: '2023/24',
  },
}

export const WithCustomMax: Story = {
  args: {
    data: sampleData,
    year: '2024/25',
    maxPercent: 100,
  },
}
