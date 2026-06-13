import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Documentation/Colors',
  parameters: {
    layout: 'centered',
  },
}

export default meta

export const ColorScheme = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Color Scheme</h1>
    <p>The BarPlot component uses the following color scheme for school types:</p>
    <table style={{ borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #ccc' }}>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>School Type</th>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Color</th>
          <th style={{ padding: '0.5rem 1rem', textAlign: 'left' }}>Hex</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem 1rem' }}><strong>GS</strong> (Grundschule)</td>
          <td style={{ padding: '0.5rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '30px', height: '30px', backgroundColor: '#4285F4', borderRadius: '4px' }} />
              Blue
            </div>
          </td>
          <td style={{ padding: '0.5rem 1rem' }}><code>#4285F4</code></td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem 1rem' }}><strong>MS</strong> (Mittelschule)</td>
          <td style={{ padding: '0.5rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '30px', height: '30px', backgroundColor: '#34A853', borderRadius: '4px' }} />
              Green
            </div>
          </td>
          <td style={{ padding: '0.5rem 1rem' }}><code>#34A853</code></td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem 1rem' }}><strong>RS</strong> (Realschule)</td>
          <td style={{ padding: '0.5rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '30px', height: '30px', backgroundColor: '#EA4335', borderRadius: '4px' }} />
              Orange
            </div>
          </td>
          <td style={{ padding: '0.5rem 1rem' }}><code>#EA4335</code></td>
        </tr>
        <tr style={{ borderBottom: '1px solid #eee' }}>
          <td style={{ padding: '0.5rem 1rem' }}><strong>GY</strong> (Gymnasium)</td>
          <td style={{ padding: '0.5rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '30px', height: '30px', backgroundColor: '#FBBC04', borderRadius: '4px' }} />
              Red
            </div>
          </td>
          <td style={{ padding: '0.5rem 1rem' }}><code>#FBBC04</code></td>
        </tr>
        <tr>
          <td style={{ padding: '0.5rem 1rem' }}><strong>IGS</strong> (Integrierte Gesamtschule)</td>
          <td style={{ padding: '0.5rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '30px', height: '30px', backgroundColor: '#9C27B0', borderRadius: '4px' }} />
              Purple
            </div>
          </td>
          <td style={{ padding: '0.5rem 1rem' }}><code>#9C27B0</code></td>
        </tr>
      </tbody>
    </table>
    <p style={{ marginTop: '1rem', color: '#666' }}>These colors are defined in the <code>retention.tsx</code> file and used consistently across all components.</p>
  </div>
)
