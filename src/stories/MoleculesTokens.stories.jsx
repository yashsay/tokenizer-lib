import React from 'react';
import * as MoleculesLight from '../../dist/tokens/molecules-light.js';
import * as MoleculesDark from '../../dist/tokens/molecules-dark.js';
import * as ShorthandLight from '../../dist/tokens/shorthand-light.js';
import * as ShorthandDark from '../../dist/tokens/shorthand-dark.js';

export default {
  title: 'Design Tokens/Molecules'
};

const Section = ({ title, children }) => (
  <section style={{ fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
    <h3 style={{ margin: '16px 0' }}>{title}</h3>
    {children}
  </section>
);

export const Light = () => (
  <div className='theme-light' style={{ display: 'grid', gap: 16, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
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
  </div>
);

export const Dark = () => (
  <div className='theme-dark' style={{ display: 'grid', gap: 16, fontFamily: 'Inter, system-ui, Segoe UI, Roboto, Arial, sans-serif' }}>
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
  </div>
);


