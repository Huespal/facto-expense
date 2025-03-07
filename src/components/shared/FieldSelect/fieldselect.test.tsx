import { render } from '@/../testSetup';
import FieldSelect from '@/components/shared/FieldSelect';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

// FieldSelect test suite. Includes:
// - Basic render test.
// - With inital text test.
describe('FieldSelect', () => {
  test('Renders component successfully given required properties', () => {
    render(
      <FieldSelect
        id="test"
        name="test"
        options={['Test', 'Test 2']}
      >
        {opt => (
          <option key={opt} value={opt}>{opt}</option>
        )}
      </FieldSelect>
    );

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('Test 2')).toBeInTheDocument();
  })
  test('Renders component successfully given initial text', () => {
    render(
      <FieldSelect
        id="test-initial"
        name="testInitial"
        initialText="Select..."
        options={[]}
      >
        {opt => (
          <option key={opt} value={opt}>{opt}</option>
        )}
      </FieldSelect>
    );

    expect(screen.getByText('Select...')).toBeInTheDocument();
  })
});
