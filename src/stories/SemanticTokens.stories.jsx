import React from 'react';
import * as Light from '../../dist/tokens/semantic-light.js';
import * as Dark from '../../dist/tokens/semantic-dark.js';

export default {
  title: 'Design Tokens/Semantic'
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

export const LightTokens = () => (
  <div className='theme-light' style={{ display: 'grid', gap: 32, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <Section title="Semantic (Light) - Colors">
      <TokenTable
        rows={[
          { name: 'Text Primary', token: 'SemanticsThemeLightColorTextPrimary', value: Light.SemanticsThemeLightColorTextPrimary, sample: <div style={{ color: Light.SemanticsThemeLightColorTextPrimary }}>Text sample</div> },
          { name: 'Text Secondary', token: 'SemanticsThemeLightColorTextSecondary', value: Light.SemanticsThemeLightColorTextSecondary, sample: <div style={{ color: Light.SemanticsThemeLightColorTextSecondary }}>Text sample</div> },
          { name: 'Background', token: 'SemanticsThemeLightColorBackground', value: Light.SemanticsThemeLightColorBackground, sample: <div style={{ width: 80, height: 24, background: Light.SemanticsThemeLightColorBackground, border: '1px solid #e5e7eb' }} /> },
          { name: 'Accent', token: 'SemanticsThemeLightColorAccent', value: Light.SemanticsThemeLightColorAccent, sample: <div style={{ width: 80, height: 24, background: Light.SemanticsThemeLightColorAccent }} /> },
          { name: 'Danger', token: 'SemanticsThemeLightColorDanger', value: Light.SemanticsThemeLightColorDanger, sample: <div style={{ width: 80, height: 24, background: Light.SemanticsThemeLightColorDanger }} /> }
        ]}
      />
    </Section>

    <Section title="Semantic (Light) - Typography & Spacing">
      <TokenTable
        rows={[
          { name: 'Font Family Title', token: 'SemanticsThemeLightFontFamilyTitle', value: Light.SemanticsThemeLightFontFamilyTitle, sample: <div style={{ fontFamily: Light.SemanticsThemeLightFontFamilyTitle }}>Title family</div> },
          { name: 'Font Family Body', token: 'SemanticsThemeLightFontFamilyBody', value: Light.SemanticsThemeLightFontFamilyBody, sample: <div style={{ fontFamily: Light.SemanticsThemeLightFontFamilyBody }}>Body family</div> },
          { name: 'Display Large', token: 'SemanticsThemeLightFontSizeDisplayLarge', value: Light.SemanticsThemeLightFontSizeDisplayLarge, sample: <div style={{ fontSize: Light.SemanticsThemeLightFontSizeDisplayLarge, lineHeight: Light.SemanticsThemeLightLineHeightDisplayLarge }}>Display</div> },
          { name: 'Headline Medium', token: 'SemanticsThemeLightFontSizeHeadlineMedium', value: Light.SemanticsThemeLightFontSizeHeadlineMedium, sample: <div style={{ fontSize: Light.SemanticsThemeLightFontSizeHeadlineMedium }}>Headline</div> },
          { name: 'Body Small', token: 'SemanticsThemeLightFontSizeBodySmall', value: Light.SemanticsThemeLightFontSizeBodySmall, sample: <div style={{ fontSize: Light.SemanticsThemeLightFontSizeBodySmall, lineHeight: Light.SemanticsThemeLightLineHeightBodyMedium }}>Body small text</div> },
          { name: 'Container Padding', token: 'SemanticsThemeLightSpacingContainerPadding', value: Light.SemanticsThemeLightSpacingContainerPadding, sample: <div style={{ padding: Light.SemanticsThemeLightSpacingContainerPadding, background: '#f9fafb', border: '1px dashed #e5e7eb' }}>Padding</div> },
          { name: 'Element Gap', token: 'SemanticsThemeLightSpacingElementGap', value: Light.SemanticsThemeLightSpacingElementGap, sample: <div style={{ display: 'flex', gap: Light.SemanticsThemeLightSpacingElementGap }}><div style={{ width: 24, height: 24, background: '#3b82f6' }} /><div style={{ width: 24, height: 24, background: '#10b981' }} /></div> }
        ]}
      />
    </Section>

    <Section title="Semantic (Light) - Radius & Elevation">
      <TokenTable
        rows={[
          { name: 'Radius Button', token: 'SemanticsThemeLightRadiusButton', value: Light.SemanticsThemeLightRadiusButton, sample: <div style={{ width: 120, height: 36, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: Light.SemanticsThemeLightRadiusButton }} /> },
          { name: 'Radius Card', token: 'SemanticsThemeLightRadiusCard', value: Light.SemanticsThemeLightRadiusCard, sample: <div style={{ width: 120, height: 36, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: Light.SemanticsThemeLightRadiusCard }} /> },
          { name: 'Elevation Card', token: 'SemanticsThemeLightElevationCard', value: Light.SemanticsThemeLightElevationCard, sample: <div style={{ width: 120, height: 36, background: '#ffffff', boxShadow: Light.SemanticsThemeLightElevationCard, borderRadius: 8 }} /> }
        ]}
      />
    </Section>
  </div>
);

export const DarkTokens = () => (
  <div className='theme-dark' style={{ display: 'grid', gap: 32, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <Section title="Semantic (Dark) - Colors">
      <TokenTable
        rows={[
          { name: 'Text Primary', token: 'SemanticsThemeDarkColorTextPrimary', value: Dark.SemanticsThemeDarkColorTextPrimary, sample: <div style={{ color: Dark.SemanticsThemeDarkColorTextPrimary }}>Text sample</div> },
          { name: 'Text Secondary', token: 'SemanticsThemeDarkColorTextSecondary', value: Dark.SemanticsThemeDarkColorTextSecondary, sample: <div style={{ color: Dark.SemanticsThemeDarkColorTextSecondary }}>Text sample</div> },
          { name: 'Background', token: 'SemanticsThemeDarkColorBackground', value: Dark.SemanticsThemeDarkColorBackground, sample: <div style={{ width: 80, height: 24, background: Dark.SemanticsThemeDarkColorBackground, border: '1px solid #111827' }} /> },
          { name: 'Accent', token: 'SemanticsThemeDarkColorAccent', value: Dark.SemanticsThemeDarkColorAccent, sample: <div style={{ width: 80, height: 24, background: Dark.SemanticsThemeDarkColorAccent }} /> },
          { name: 'Danger', token: 'SemanticsThemeDarkColorDanger', value: Dark.SemanticsThemeDarkColorDanger, sample: <div style={{ width: 80, height: 24, background: Dark.SemanticsThemeDarkColorDanger }} /> }
        ]}
      />
    </Section>

    <Section title="Semantic (Dark) - Typography & Spacing">
      <TokenTable
        rows={[
          { name: 'Font Family Title', token: 'SemanticsThemeDarkFontFamilyTitle', value: Dark.SemanticsThemeDarkFontFamilyTitle, sample: <div style={{ fontFamily: Dark.SemanticsThemeDarkFontFamilyTitle }}>Title family</div> },
          { name: 'Font Family Body', token: 'SemanticsThemeDarkFontFamilyBody', value: Dark.SemanticsThemeDarkFontFamilyBody, sample: <div style={{ fontFamily: Dark.SemanticsThemeDarkFontFamilyBody }}>Body family</div> },
          { name: 'Display Large', token: 'SemanticsThemeDarkFontSizeDisplayLarge', value: Dark.SemanticsThemeDarkFontSizeDisplayLarge, sample: <div style={{ fontSize: Dark.SemanticsThemeDarkFontSizeDisplayLarge, lineHeight: Dark.SemanticsThemeDarkLineHeightDisplayLarge }}>Display</div> },
          { name: 'Headline Medium', token: 'SemanticsThemeDarkFontSizeHeadlineMedium', value: Dark.SemanticsThemeDarkFontSizeHeadlineMedium, sample: <div style={{ fontSize: Dark.SemanticsThemeDarkFontSizeHeadlineMedium }}>Headline</div> },
          { name: 'Body Small', token: 'SemanticsThemeDarkFontSizeBodySmall', value: Dark.SemanticsThemeDarkFontSizeBodySmall, sample: <div style={{ fontSize: Dark.SemanticsThemeDarkFontSizeBodySmall, lineHeight: Dark.SemanticsThemeDarkLineHeightBodyMedium }}>Body small text</div> },
          { name: 'Container Padding', token: 'SemanticsThemeDarkSpacingContainerPadding', value: Dark.SemanticsThemeDarkSpacingContainerPadding, sample: <div style={{ padding: Dark.SemanticsThemeDarkSpacingContainerPadding, background: '#111827', border: '1px dashed #374151', color: '#f9fafb' }}>Padding</div> },
          { name: 'Element Gap', token: 'SemanticsThemeDarkSpacingElementGap', value: Dark.SemanticsThemeDarkSpacingElementGap, sample: <div style={{ display: 'flex', gap: Dark.SemanticsThemeDarkSpacingElementGap }}><div style={{ width: 24, height: 24, background: '#3b82f6' }} /><div style={{ width: 24, height: 24, background: '#ef4444' }} /></div> }
        ]}
      />
    </Section>

    <Section title="Semantic (Dark) - Radius & Elevation">
      <TokenTable
        rows={[
          { name: 'Radius Button', token: 'SemanticsThemeDarkRadiusButton', value: Dark.SemanticsThemeDarkRadiusButton, sample: <div style={{ width: 120, height: 36, background: '#111827', border: '1px solid #374151', borderRadius: Dark.SemanticsThemeDarkRadiusButton }} /> },
          { name: 'Radius Card', token: 'SemanticsThemeDarkRadiusCard', value: Dark.SemanticsThemeDarkRadiusCard, sample: <div style={{ width: 120, height: 36, background: '#111827', border: '1px solid #374151', borderRadius: Dark.SemanticsThemeDarkRadiusCard }} /> },
          { name: 'Elevation Card', token: 'SemanticsThemeDarkElevationCard', value: Dark.SemanticsThemeDarkElevationCard, sample: <div style={{ width: 120, height: 36, background: '#111827', boxShadow: Dark.SemanticsThemeDarkElevationCard, borderRadius: 8 }} /> }
        ]}
      />
    </Section>
  </div>
);


