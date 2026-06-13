import type { Meta, StoryObj } from '@storybook/react'
import { BarPlot } from './BarPlot'
import type { SchoolType } from '../retention'

const meta: Meta<typeof BarPlot> = {
  title: 'BarPlot/BarPlot',
  component: BarPlot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const sampleData: Array<{ type: SchoolType; count: number; percent: number }> = [
  { type: 'GS', count: 120, percent: 75 },
  { type: 'MS', count: 40, percent: 25 },
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
      { type: 'GS', count: 200, percent: 90 },
      { type: 'MS', count: 100, percent: 80 },
      { type: 'RS', count: 50, percent: 60 },
    ],
    year: '2023/24',
  },
}

export const AllSchoolTypes: Story = {
  args: {
    data: [
      { type: 'GS', count: 180, percent: 85 },
      { type: 'MS', count: 120, percent: 70 },
      { type: 'RS', count: 95, percent: 65 },
      { type: 'GY', count: 110, percent: 75 },
      { type: 'IGS', count: 60, percent: 55 },
    ],
    year: '2024/25',
  },
}
