'use client'
import React from 'react';
import { useParams } from 'next/navigation';

import {customers} from '@/data/mocks';

const CustomerPage = () => {
  const params = useParams();
  const customerId = parseInt(params.id, 10);
  const customer = customers.find((customer) => customer.id === customerId);

   if (!customer) {
    return <p>Customer not found</p>;
  }

  return (
    <>
      <div>{customer.name}</div>
      <div>{customer.streetAddress}</div>
      <div>{customer.city}, GA {customer.zipCode}</div>
    </>
  )
}

export default CustomerPage;