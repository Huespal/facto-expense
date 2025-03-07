import { render } from '@/../testSetup';
import Button from '@/components/shared/Button';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

// Button test suite. Includes:
// - Basic render test.
// - onClick trigger test.
describe('Button', () => {
  test('Renders component successfully given required properties', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  })
  test('Triggers onClick handler given component click', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Test</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled();
  })
});
