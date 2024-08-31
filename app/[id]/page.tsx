'use client'
import React from 'react';
import { useParams } from 'next/navigation';

import CustomerInfo from '@/components/customer-info/CustomerInfo';
import {CUSTOMERS} from '@/data/mocks';

const CustomerPage = () => {
  const params = useParams();
  const customerId = parseInt(params.id, 10);
  const customer = CUSTOMERS.find((customer) => customer.id === customerId);

   if (!customer) {
    return <p>Customer not found</p>;
  }

  return (
    <CustomerInfo
      name={customer.name}
      streetAddress={customer.streetAddress}
      city={customer.city}
      zipCode={customer.zipCode}
    />
  )
}

export default CustomerPage;