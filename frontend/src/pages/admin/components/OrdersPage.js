import { Row, Col, Table, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinks from "../../../components/admin/AdminLinks";
import { useEffect, useState } from "react";
import { logout } from "../../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const OrdersPage = ({ getOrders }) => {
  const [orders, setOrders] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    getOrders()
      .then((orders) => setOrders(orders))
      .catch(
        (er) => dispatch(logout())
        // console.log(
        //   er.response.data.message ? er.response.data.message : er.response.data
        // )
      );
  }, []);

  return (
    <Container>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinks />
        </Col>
        <Col md={10}>
          <h1>Order list</h1>
          <Table striped bordered hover responsive>
            <thead style={{ border: "1px lightgray" }}>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>Payment method</th>
                <th>Order details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>
                    {order.user !== null ? (
                      <>
                        {order.user.name} {order.user.lastName}
                      </>
                    ) : null}
                  </td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.orderTotal.cartSubtotal}</td>
                  <td>
                    {order.isDelivered ? (
                      <i className="bi bi-check-lg text-success"></i>
                    ) : (
                      <i className="bi bi-x-lg text-danger"></i>
                    )}
                  </td>
                  <td>{order.paymentMethod}</td>
                  <td>
                    <Link to={`/admin/order-details/${order._id}`}>
                      Go to order
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersPage;
