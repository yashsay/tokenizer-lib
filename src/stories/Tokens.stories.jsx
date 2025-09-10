import React from 'react';
import * as Light from '../../dist/tokens/semantic-light.js';
import * as Dark from '../../dist/tokens/semantic-dark.js';
import * as Primitives from '../../dist/tokens/primitives.js';
import * as MoleculesLight from '../../dist/tokens/molecules-light.js';
import * as MoleculesDark from '../../dist/tokens/molecules-dark.js';
import * as ShorthandLight from '../../dist/tokens/shorthand-light.js';
import * as ShorthandDark from '../../dist/tokens/shorthand-dark.js';

export default {
  title: 'Design Tokens/Showcase'
};

const Section = ({ title, children }) => (
  <section style={{ fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <h3 style={{ margin: '16px 0' }}>{title}</h3>
    {children}
  </section>
);

const tableStyle = {
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
  boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
  borderRadius: 8,
  overflow: 'hidden'
};

const thtdBase = { padding: 12, borderBottom: '1px solid #e5e7eb', textAlign: 'left' };

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

const Swatch = ({ label, value }) => (
  <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
    <div style={{ height: 64, background: String(value) }} />
    <div style={{ padding: 12 }}>
      <div style={{ fontWeight: 600 }}>{label}</div>
      <code>{String(value)}</code>
    </div>
  </div>
);

export const AllTokens = ({ theme = 'light' }) => {
  const themeClass = theme === 'dark' ? 'theme-dark' : 'theme-light';

  return (
    <div className={themeClass} style={{ display: 'grid', gap: 32, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
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

      <Section title="Semantic - Radius & Elevation">
        <TokenTable
          rows={[
            { name: 'Radius Button (Light)', token: 'SemanticsThemeLightRadiusButton', value: Light.SemanticsThemeLightRadiusButton, sample: <div style={{ width: 120, height: 36, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: Light.SemanticsThemeLightRadiusButton }} /> },
            { name: 'Radius Card (Light)', token: 'SemanticsThemeLightRadiusCard', value: Light.SemanticsThemeLightRadiusCard, sample: <div style={{ width: 120, height: 36, background: '#f3f4f6', border: '1px solid #e5e7eb', borderRadius: Light.SemanticsThemeLightRadiusCard }} /> },
            { name: 'Elevation Card (Light)', token: 'SemanticsThemeLightElevationCard', value: Light.SemanticsThemeLightElevationCard, sample: <div style={{ width: 120, height: 36, background: '#ffffff', boxShadow: Light.SemanticsThemeLightElevationCard, borderRadius: 8 }} /> },
            { name: 'Radius Button (Dark)', token: 'SemanticsThemeDarkRadiusButton', value: Dark.SemanticsThemeDarkRadiusButton, sample: <div style={{ width: 120, height: 36, background: '#111827', border: '1px solid #374151', borderRadius: Dark.SemanticsThemeDarkRadiusButton }} /> },
            { name: 'Radius Card (Dark)', token: 'SemanticsThemeDarkRadiusCard', value: Dark.SemanticsThemeDarkRadiusCard, sample: <div style={{ width: 120, height: 36, background: '#111827', border: '1px solid #374151', borderRadius: Dark.SemanticsThemeDarkRadiusCard }} /> },
            { name: 'Elevation Card (Dark)', token: 'SemanticsThemeDarkElevationCard', value: Dark.SemanticsThemeDarkElevationCard, sample: <div style={{ width: 120, height: 36, background: '#111827', boxShadow: Dark.SemanticsThemeDarkElevationCard, borderRadius: 8 }} /> }
          ]}
        />
      </Section>

      <Section title="Molecules - Light (Button/Card/Text)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <div style={{ padding: MoleculesLight.MoleculesThemeLightCardPadding, borderRadius: MoleculesLight.MoleculesThemeLightCardRadius, background: MoleculesLight.MoleculesThemeLightCardBackground, boxShadow: MoleculesLight.MoleculesThemeLightCardShadow }}>
            <div style={{ font: ShorthandLight.ShorthandThemeLightTextBody }}>Light Card with shorthand body text</div>
          </div>
          <button style={{
            background: MoleculesLight.MoleculesThemeLightButtonPrimaryBackground,
            color: MoleculesLight.MoleculesThemeLightButtonPrimaryText,
            borderRadius: MoleculesLight.MoleculesThemeLightButtonPrimaryRadius,
            padding: ShorthandLight.ShorthandThemeLightButtonPadding,
            border: 'none'
          }}>Primary Button</button>
          <button style={{
            background: MoleculesLight.MoleculesThemeLightButtonSecondaryBackground,
            color: MoleculesLight.MoleculesThemeLightButtonSecondaryText,
            borderRadius: MoleculesLight.MoleculesThemeLightButtonSecondaryRadius,
            padding: `${MoleculesLight.MoleculesThemeLightButtonSecondaryPaddingY} ${MoleculesLight.MoleculesThemeLightButtonSecondaryPaddingX}`,
            border: MoleculesLight.MoleculesThemeLightButtonSecondaryBorder
          }}>Secondary Button</button>
        </div>
      </Section>

      <Section title="Molecules - Dark (Button/Card/Text)">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <div style={{ padding: MoleculesDark.MoleculesThemeDarkCardPadding, borderRadius: MoleculesDark.MoleculesThemeDarkCardRadius, background: MoleculesDark.MoleculesThemeDarkCardBackground, boxShadow: MoleculesDark.MoleculesThemeDarkCardShadow }}>
            <div style={{ font: ShorthandDark.ShorthandThemeDarkTextBody }}>Dark Card with shorthand body text</div>
          </div>
          <button style={{
            background: MoleculesDark.MoleculesThemeDarkButtonPrimaryBackground,
            color: MoleculesDark.MoleculesThemeDarkButtonPrimaryText,
            borderRadius: MoleculesDark.MoleculesThemeDarkButtonPrimaryRadius,
            padding: ShorthandDark.ShorthandThemeDarkButtonPadding,
            border: 'none'
          }}>Primary Button</button>
          <button style={{
            background: MoleculesDark.MoleculesThemeDarkButtonSecondaryBackground,
            color: MoleculesDark.MoleculesThemeDarkButtonSecondaryText,
            borderRadius: MoleculesDark.MoleculesThemeDarkButtonSecondaryRadius,
            padding: `${MoleculesDark.MoleculesThemeDarkButtonSecondaryPaddingY} ${MoleculesDark.MoleculesThemeDarkButtonSecondaryPaddingX}`,
            border: MoleculesDark.MoleculesThemeDarkButtonSecondaryBorder
          }}>Secondary Button</button>
        </div>
      </Section>

      <Section title="Usage - CSS and JS">
        <ul>
          <li>Toggle theme via toolbar or story control to apply <code>.theme-light</code>/<code>.theme-dark</code> classes.</li>
          <li>CSS variables: import token CSS and use <code>var(--...)</code>. Theme-scoped variables come from the nearest theme class.</li>
          <li>JS tokens: import from <code>dist/tokens/*.js</code> and use constants.</li>
        </ul>
      </Section>
    </div>
  );
};

// Split views

AllTokens.argTypes = {
  theme: {
    control: { type: 'inline-radio' },
    options: ['light', 'dark']
  }
};

AllTokens.parameters = {
  controls: { expanded: true }
};
