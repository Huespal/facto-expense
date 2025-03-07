import { render } from '@/../testSetup';
import Section from '@/components/shared/Section';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

// Section test suite. Includes:
// - Basic render test.
describe('Section', () => {
  test('Renders component successfully given all properties', () => {
    render(<Section px="l">Test</Section>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  })
});