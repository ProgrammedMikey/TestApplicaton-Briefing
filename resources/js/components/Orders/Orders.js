import React from 'react';
import {Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';    
import user from "../../auth/user";
 
const Orders = () => {
    const [orders, setOrders] = React.useState([]);
    React.useEffect(() => {
        window.axios.get('/api/orders', { headers: {"Authorization" : `Bearer ${user.token}`} } )
        .then(response => {
            setOrders(response.data)
        })
        .catch(error => console.error(error));
    }, []);

    const handleClick = (uid) => {
          var link = `https://zotterdev.developer.at/rest/shop_item/${uid}`      
    
          window.open(link, "_blank");
      }

    const orderList = orders.map((order) =>
            
            <TableRow
              key={order.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order.uid}
              </TableCell>
              <TableCell align="right">{order.order_number}</TableCell>
              <TableCell align="right">{order.order_status}</TableCell>
              <TableCell align="right">
                  {/* <Button onClick={handleOpen}><InfoIcon /></Button> */}
                  <Button onClick={() => handleClick(order.uid)} variant="contained" startIcon={<InfoIcon />}>
                    View
                  </Button>
              </TableCell>
            </TableRow>
          );
    return (
        <TableContainer>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Order UID</TableCell>
              <TableCell align="right">Order Number</TableCell>
              <TableCell align="right">Order Status</TableCell>
              <TableCell align="right">View Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {orderList}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
 
export default Orders;