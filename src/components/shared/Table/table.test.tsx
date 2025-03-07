import { render } from '@/../testSetup';
import Table from '@/components/shared/Table';
import Cell from '@/components/shared/Table/Cell';
import Header from '@/components/shared/Table/Header';
import Row from '@/components/shared/Table/Row';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

// Table test suite. Includes:
// - Basic render test within all Table related components.
describe('Table', () => {
  test('Renders Table within Rows Cells and Header'
    + ' successfully given required properties', () => {
      const grid = "1fr 1fr";
      const columns = [1, 2];
      render(
        <Table grid={grid}>
          <Header grid={grid}>
            {columns.map(index => <p key={index}>{`Column ${index}`}</p>)}
          </Header>
          {columns.map(index => (
            <Row key={index}>
              <Cell>{`Content ${index}-1`}</Cell>
              <Cell>{`Content ${index}-2`}</Cell>
            </Row>
          ))}
        </Table>
      );

      {
        columns.map(index => {
          expect(screen.getByText(`Column ${index}`)).toBeInTheDocument();
          expect(screen.getByText(`Content ${index}-1`)).toBeInTheDocument();
          expect(screen.getByText(`Content ${index}-2`)).toBeInTheDocument();
        })
      }
    })
});