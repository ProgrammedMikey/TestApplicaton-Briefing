import React from 'react';
 
const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    React.useEffect(() => {
        window.axios.get('/api/orders')
        .then(response => {
            setOrders(response.data)
        })
        .catch(error => console.error(error));
    }, []);
    const orderList = orders.map((order) =>
        <li key={order.uid}>{order.order_number}</li>
    );
    return (
        <ul>{orderList}</ul>
    );
}
 
export default Orders;