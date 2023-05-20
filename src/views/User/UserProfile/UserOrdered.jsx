import React from 'react'
import { useGetOrdersPaidQuery } from '../../../services/orderAPIs';
import ListOrder from './ListOrder';

export default function UserOrdered() {
  const { data } = useGetOrdersPaidQuery()
  return (
    <>
      <>
        <ListOrder data={data} />
      </>
    </>
  )
}
