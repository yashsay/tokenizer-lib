import React from 'react';
import * as Primitives from '../../dist/tokens/primitives.js';

export default {
  title: 'Design Tokens/Primitives'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
  borderRadius: 8,
  overflow: 'hidden'
};

const thtdBase = { padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' };

const Section = ({ title, children }) => (
  <section style={{ fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <h3 style={{ margin: '16px 0' }}>{title}</h3>
    {children}
  </section>
);

const TokenTable = ({ rows }) => (
  <div style={{ overflowX: 'auto' }}>
    <table style={tableStyle}>
      <thead style={{ background: '#f9fafb' }}>
        <tr>
          <th style={{ ...thtdBase, fontWeight: 600 }}>Name</th>
          <th style={{ ...thtdBase, fontWeight: 600 }}>Token</th>
          <th style={{ ...thtdBase, fontWeight: 600 }}>Value</th>
          <th style={{ ...thtdBase, fontWeight: 600 }}>Sample</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.name}>
            <td style={thtdBase}>{r.name}</td>
            <td style={thtdBase}><code>{r.token}</code></td>
            <td style={thtdBase}><code>{String(r.value)}</code></td>
            <td style={{ ...thtdBase, width: 260 }}>{r.sample}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const Colors = () => (
  <div style={{ display: 'grid', gap: 32, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <Section title="Primitives - Colors">
      <TokenTable
        rows={[
          { name: 'Black', token: 'PrimitivesColorBlack', value: Primitives.PrimitivesColorBlack, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorBlack, border: '1px solid #e5e7eb' }} /> },
          { name: 'White', token: 'PrimitivesColorWhite', value: Primitives.PrimitivesColorWhite, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorWhite, border: '1px solid #e5e7eb' }} /> },
          { name: 'Gray 50', token: 'PrimitivesColorGray50', value: Primitives.PrimitivesColorGray50, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorGray50, border: '1px solid #e5e7eb' }} /> },
          { name: 'Gray 100', token: 'PrimitivesColorGray100', value: Primitives.PrimitivesColorGray100, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorGray100, border: '1px solid #e5e7eb' }} /> },
          { name: 'Gray 500', token: 'PrimitivesColorGray500', value: Primitives.PrimitivesColorGray500, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorGray500, border: '1px solid #e5e7eb' }} /> },
          { name: 'Gray 900', token: 'PrimitivesColorGray900', value: Primitives.PrimitivesColorGray900, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorGray900, border: '1px solid #e5e7eb' }} /> },
          { name: 'Blue 500', token: 'PrimitivesColorBlue500', value: Primitives.PrimitivesColorBlue500, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorBlue500, border: '1px solid #e5e7eb' }} /> },
          { name: 'Blue 700', token: 'PrimitivesColorBlue700', value: Primitives.PrimitivesColorBlue700, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorBlue700, border: '1px solid #e5e7eb' }} /> },
          { name: 'Red 500', token: 'PrimitivesColorRed500', value: Primitives.PrimitivesColorRed500, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorRed500, border: '1px solid #e5e7eb' }} /> },
          { name: 'Green 500', token: 'PrimitivesColorGreen500', value: Primitives.PrimitivesColorGreen500, sample: <div style={{ width: 48, height: 24, background: Primitives.PrimitivesColorGreen500, border: '1px solid #e5e7eb' }} /> }
        ]}
      />
    </Section>
  </div>
);

export const Typography = () => (
  <div style={{ display: 'grid', gap: 32, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <Section title="Primitives - Typography">
      <TokenTable
        rows={[
          { name: 'Font Size 12', token: 'PrimitivesFontSize12', value: Primitives.PrimitivesFontSize12, sample: <div style={{ fontSize: Primitives.PrimitivesFontSize12 }}>The quick brown fox</div> },
          { name: 'Font Size 16', token: 'PrimitivesFontSize16', value: Primitives.PrimitivesFontSize16, sample: <div style={{ fontSize: Primitives.PrimitivesFontSize16 }}>The quick brown fox</div> },
          { name: 'Font Size 24', token: 'PrimitivesFontSize24', value: Primitives.PrimitivesFontSize24, sample: <div style={{ fontSize: Primitives.PrimitivesFontSize24 }}>The quick brown fox</div> },
          { name: 'Line Height Normal', token: 'PrimitivesLineHeightNormal', value: Primitives.PrimitivesLineHeightNormal, sample: <div style={{ lineHeight: Primitives.PrimitivesLineHeightNormal, maxWidth: 260 }}>Pack my box with five dozen liquor jugs.</div> },
          { name: 'Line Height Relaxed', token: 'PrimitivesLineHeightRelaxed', value: Primitives.PrimitivesLineHeightRelaxed, sample: <div style={{ lineHeight: Primitives.PrimitivesLineHeightRelaxed, maxWidth: 260 }}>Pack my box with five dozen liquor jugs.</div> },
          { name: 'Letter Spacing Tight', token: 'PrimitivesLetterSpacingTight', value: Primitives.PrimitivesLetterSpacingTight, sample: <div style={{ letterSpacing: Primitives.PrimitivesLetterSpacingTight }}>Sphinx of black quartz</div> },
          { name: 'Letter Spacing Wide', token: 'PrimitivesLetterSpacingWide', value: Primitives.PrimitivesLetterSpacingWide, sample: <div style={{ letterSpacing: Primitives.PrimitivesLetterSpacingWide }}>Sphinx of black quartz</div> },
          { name: 'Weight Regular', token: 'PrimitivesFontWeightRegular', value: Primitives.PrimitivesFontWeightRegular, sample: <div style={{ fontWeight: Primitives.PrimitivesFontWeightRegular }}>Font weight regular</div> },
          { name: 'Weight Semibold', token: 'PrimitivesFontWeightSemibold', value: Primitives.PrimitivesFontWeightSemibold, sample: <div style={{ fontWeight: Primitives.PrimitivesFontWeightSemibold }}>Font weight semibold</div> }
        ]}
      />
    </Section>
  </div>
);

export const SpacingAndLayout = () => (
  <div style={{ display: 'grid', gap: 32, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <Section title="Primitives - Spacing">
      <TokenTable
        rows={[
          { name: 'Spacing 4', token: 'PrimitivesSpacing4', value: Primitives.PrimitivesSpacing4, sample: <div style={{ height: 12 }}><div style={{ height: Primitives.PrimitivesSpacing4, width: 80, background: '#3b82f6' }} /></div> },
          { name: 'Spacing 8', token: 'PrimitivesSpacing8', value: Primitives.PrimitivesSpacing8, sample: <div style={{ height: 20 }}><div style={{ height: Primitives.PrimitivesSpacing8, width: 80, background: '#3b82f6' }} /></div> },
          { name: 'Spacing 12', token: 'PrimitivesSpacing12', value: Primitives.PrimitivesSpacing12, sample: <div style={{ height: 24 }}><div style={{ height: Primitives.PrimitivesSpacing12, width: 80, background: '#3b82f6' }} /></div> },
          { name: 'Spacing 16', token: 'PrimitivesSpacing16', value: Primitives.PrimitivesSpacing16, sample: <div style={{ height: 28 }}><div style={{ height: Primitives.PrimitivesSpacing16, width: 80, background: '#3b82f6' }} /></div> },
          { name: 'Spacing 24', token: 'PrimitivesSpacing24', value: Primitives.PrimitivesSpacing24, sample: <div style={{ height: 36 }}><div style={{ height: Primitives.PrimitivesSpacing24, width: 80, background: '#3b82f6' }} /></div> },
          { name: 'Spacing 32', token: 'PrimitivesSpacing32', value: Primitives.PrimitivesSpacing32, sample: <div style={{ height: 44 }}><div style={{ height: Primitives.PrimitivesSpacing32, width: 80, background: '#3b82f6' }} /></div> },
          { name: 'Spacing 40', token: 'PrimitivesSpacing40', value: Primitives.PrimitivesSpacing40, sample: <div style={{ height: 52 }}><div style={{ height: Primitives.PrimitivesSpacing40, width: 80, background: '#3b82f6' }} /></div> }
        ]}
      />
    </Section>

    <Section title="Primitives - Radius & Elevation & Container">
      <TokenTable
        rows={[
          { name: 'Radius sm', token: 'PrimitivesRadiusSm', value: Primitives.PrimitivesRadiusSm, sample: <div style={{ width: 120, height: 36, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: Primitives.PrimitivesRadiusSm }} /> },
          { name: 'Radius md', token: 'PrimitivesRadiusMd', value: Primitives.PrimitivesRadiusMd, sample: <div style={{ width: 120, height: 36, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: Primitives.PrimitivesRadiusMd }} /> },
          { name: 'Radius lg', token: 'PrimitivesRadiusLg', value: Primitives.PrimitivesRadiusLg, sample: <div style={{ width: 120, height: 36, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: Primitives.PrimitivesRadiusLg }} /> },
          { name: 'Elevation sm', token: 'PrimitivesElevationSm', value: Primitives.PrimitivesElevationSm, sample: <div style={{ width: 120, height: 36, background: '#ffffff', boxShadow: Primitives.PrimitivesElevationSm, borderRadius: 8 }} /> },
          { name: 'Elevation md', token: 'PrimitivesElevationMd', value: Primitives.PrimitivesElevationMd, sample: <div style={{ width: 120, height: 36, background: '#ffffff', boxShadow: Primitives.PrimitivesElevationMd, borderRadius: 8 }} /> },
          { name: 'Elevation lg', token: 'PrimitivesElevationLg', value: Primitives.PrimitivesElevationLg, sample: <div style={{ width: 120, height: 36, background: '#ffffff', boxShadow: Primitives.PrimitivesElevationLg, borderRadius: 8 }} /> },
          { name: 'Container lg', token: 'PrimitivesContainerLg', value: Primitives.PrimitivesContainerLg, sample: <div style={{ width: '100%', maxWidth: Primitives.PrimitivesContainerLg, height: 12, background: '#d1d5db' }} /> }
        ]}
      />
    </Section>
  </div>
);


