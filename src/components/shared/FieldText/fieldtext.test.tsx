import { render } from '@/../testSetup';
import FieldText from '@/components/shared/FieldText';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

// FieldText test suite. Includes:
// - Basic render test including onChange trigger test.
describe('FieldText', () => {
  test('Renders component successfully given required properties' +
    ' and triggers onChange handler after input value changes', async () => {
      const onChange = vi.fn();
      render(
        <FieldText
          id="test"
          name="test"
          onChange={onChange}
        />
      );
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
      fireEvent.change(input, { target: { value: 'foo' } })
      expect(onChange).toHaveBeenCalled();
    })
});