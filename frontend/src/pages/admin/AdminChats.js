import AdminLinks from "../../components/admin/AdminLinks";
import AdminChatRoom from "../../components/admin/AdminChatRoom";
import { Row, Col } from "react-bootstrap";

import { useSelector } from "react-redux";

const AdminChats = () => {
  const { chatRooms, socket } = useSelector((state) => state.adminChat);

  return (
    <Row className="ms-4 mb-5">
      <Col md={2}>
        <AdminLinks />
      </Col>
      <Col md={10}>
        <Row>
          {Object.entries(chatRooms).map((chatRoom, index) => (
            <AdminChatRoom
              key={index}
              chatRoom={chatRoom}
              roomIndex={index + 1}
              socket={socket}
              socketUser={chatRoom[0]}
            />
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default AdminChats;
