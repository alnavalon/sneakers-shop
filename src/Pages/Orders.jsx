import React, {useEffect, useState} from 'react';
import Card from '../components/Card/Card';
import {ordersAPI} from '../components/Api/Api';

export function Orders() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        (async () => {
            const orders = await ordersAPI.getOrders();
            setOrders(orders);
        })();
    }, []);

    console.log(orders);

    return (
        <section className="content p-40">

            <div className="d-flex justify-between mb-40">
                {
                    orders.data?.length !== 0 ?
                        <h1>{`Your orders`}</h1>
                        :
                        <h1>Your order's list is empty</h1>
                }
            </div>
            <div>
                {
                    orders.data?.map(obj => (
                        <div>
                            <h4 className="mt-20">Order #{obj.id}</h4>
                            <div className="d-flex flex-wrap">
                                {
                                    obj.items.map(item => (
                                        <Card key={item.id} {...item} />
                                    ))
                                }
                            </div>
                            <h4>Total: <b>{obj.price} zł</b></h4>
                            <hr className="opacity-3 mb-50"/>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}