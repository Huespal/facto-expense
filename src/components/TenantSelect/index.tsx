'use client'

import { setTenantId } from '@/app/actions';
import FieldSelect from '@/components/shared/FieldSelect';
import { tenants } from '@/core/constants';
import { ChangeEvent, useEffect } from 'react';

interface HeaderProps {
  initialValue?: string;
}

// The component to display the tenant selector.
const TenantSelect = ({ initialValue }: HeaderProps) => {
  const setTenant = (evt: ChangeEvent<HTMLSelectElement>) => {
    const tenantId = evt.target.value;
    setTenantId(tenantId);
  }

  useEffect(() => {
    if (!initialValue) {
      setTenantId(tenants[0].id);
    }
  }, [initialValue]);

  return (
    <FieldSelect
      id="tenant-selector"
      name="tenant"
      value={initialValue}
      options={tenants}
      onChange={setTenant}
    >
      {({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      )}
    </FieldSelect>
  );
}

export default TenantSelect;