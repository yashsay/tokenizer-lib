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
  const lightColors = [
    ['Text Primary', Light.SemanticsThemeLightColorTextPrimary],
    ['Text Secondary', Light.SemanticsThemeLightColorTextSecondary],
    ['Background', Light.SemanticsThemeLightColorBackground],
    ['Accent', Light.SemanticsThemeLightColorAccent],
    ['Danger', Light.SemanticsThemeLightColorDanger]
  ];

  const darkColors = [
    ['Text Primary', Dark.SemanticsThemeDarkColorTextPrimary],
    ['Text Secondary', Dark.SemanticsThemeDarkColorTextSecondary],
    ['Background', Dark.SemanticsThemeDarkColorBackground],
    ['Accent', Dark.SemanticsThemeDarkColorAccent],
    ['Danger', Dark.SemanticsThemeDarkColorDanger]
  ];

  const spacings = [
    Primitives.PrimitivesSpacing4,
    Primitives.PrimitivesSpacing8,
    Primitives.PrimitivesSpacing12,
    Primitives.PrimitivesSpacing16,
    Primitives.PrimitivesSpacing24,
    Primitives.PrimitivesSpacing32,
    Primitives.PrimitivesSpacing40
  ];

  const themeClass = theme === 'dark' ? 'theme-dark' : 'theme-light';

  return (
    <div className={themeClass} style={{ display: 'grid', gap: 32, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
      <Section title="Semantic Colors - Light">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 180px)', gap: 16 }}>
          {lightColors.map(([label, value]) => (
            <Swatch key={label} label={label} value={value} />
          ))}
        </div>
      </Section>

      <Section title="Semantic Colors - Dark">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 180px)', gap: 16 }}>
          {darkColors.map(([label, value]) => (
            <Swatch key={label} label={label} value={value} />
          ))}
        </div>
      </Section>

      <Section title="Primitive Spacing">
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
          {spacings.map((val) => (
            <div key={val} style={{ width: 64 }}>
              <div style={{ height: 8, width: 64, background: 'var(--semantics-theme-light-color-accent, #3b82f6)', marginBottom: 8 }} />
              <code>{String(val)}</code>
            </div>
          ))}
        </div>
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

AllTokens.argTypes = {
  theme: {
    control: { type: 'inline-radio' },
    options: ['light', 'dark']
  }
};

AllTokens.parameters = {
  controls: { expanded: true }
};
