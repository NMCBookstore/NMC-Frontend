import React from 'react'
import ListOrder from './ListOrder';
import { useGetAllOrderQuery } from '../../../services/orderAPIs';

export default function UserAllOrder() {
    const { data } = useGetAllOrderQuery()
    return (
        <>
            <ListOrder data={data} />
        </>
    )
}
