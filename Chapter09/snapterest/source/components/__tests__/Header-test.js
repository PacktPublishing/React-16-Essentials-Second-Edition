import React from 'react';
import renderer from 'react-test-renderer';
import Header, { DEFAULT_HEADER_TEXT } from '../Header';

describe('Header', () => {
  test('renders default header text', () => {
    const component = renderer.create(
      <Header/>
    );

    const tree = component.toJSON();
    const firstChild = tree.children[0];

    expect(firstChild).toBe(DEFAULT_HEADER_TEXT);
  });

  test('renders provided header text', () => {
    const headerText = 'Testing';

    const component = renderer.create(
      <Header text={headerText} />
    );

    const tree = component.toJSON();
    const firstChild = tree.children[0];

    expect(firstChild).toBe(headerText);
  });
});
