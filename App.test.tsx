import React from 'react';
import renderer, { act, create } from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('Le composant doit fournir un rendu', () => {
    let tree
    act(() => {
        tree = create(<App />).toJSON();
    })
    expect(tree).toBeTruthy;
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});