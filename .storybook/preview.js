import React from 'react';
import '../dist/tokens/primitives.css';
import '../dist/tokens/semantic-light.css';
import '../dist/tokens/semantic-dark.css';
import '../dist/tokens/molecules-light.css';
import '../dist/tokens/molecules-dark.css';
import '../dist/tokens/shorthand-light.css';
import '../dist/tokens/shorthand-dark.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' }
      ],
      dynamicTitle: true
    }
  }
};

const applyThemeClass = (theme) => {
  const root = document.documentElement;
  const body = document.body;
  [root, body].forEach((el) => {
    if (!el) return;
    el.classList.remove('theme-light', 'theme-dark');
    el.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  });
};

export const decorators = [
  (Story, context) => {
    const { theme } = context.globals;
    React.useEffect(() => {
      applyThemeClass(theme);
    }, [theme]);
    // apply once on initial render, in case effect timing differs
    applyThemeClass(theme);
    return <Story />;
  }
];