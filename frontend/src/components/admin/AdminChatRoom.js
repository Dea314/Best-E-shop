import { Toast, Button, Form } from "react-bootstrap";
import { Fragment, useState, useEffect } from "react";
import { setMessageReceived } from "../../redux/actions/chatActions";
import { useDispatch } from "react-redux";

const AdminChatRoom = ({ chatRoom, roomIndex, socket, socketUser }) => {
  const dispatch = useDispatch();

  [window["toast" + roomIndex], window["closeToast" + roomIndex]] =
    useState(true);
  const [rerender, setRerender] = useState(false);

  const close = (socketId) => {
    window["closeToast" + roomIndex](false);
    socket.emit("admin closes chat", socketId);
  };

  const adminSubmitChatMsg = (e, elem) => {
    e.preventDefault();
    if (e.keyCode && e.keyCode !== 13) {
      return;
    }
    const msg = document.getElementById(elem);
    let v = msg.value.trim();
    if (v === "" || v === null || v === false || !v) {
      return;
    }
    chatRoom[1].push({ admin: msg.value });
    socket.emit("admin sends message", {
      user: socketUser,
      message: v,
    });
    setRerender(!rerender);
    msg.focus();
    dispatch(setMessageReceived(false));
    setTimeout(() => {
      msg.value = "";
      const chatMessages = document.querySelector(`.cht-msg${socketUser}`);
      if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 200);
  };

  useEffect(() => {
    const chatMessages = document.querySelector(`.cht-msg${socketUser}`);
    if (chatMessages) chatMessages.scrollTop = chatMessages.scrollHeight;
  });

  return (
    <>
      <Toast
        show={"toast" + roomIndex}
        onClose={() => close(chatRoom[0])}
        className="ms-4"
      >
        <Toast.Header>
          <strong className="me-auto">Chat with User</strong>
        </Toast.Header>
        <Toast.Body>
          <div
            className={`cht-msg${socketUser}`}
            style={{ height: "400px", overflowY: "scroll" }}
          >
            {chatRoom[1].map((msg, index) => (
              <Fragment key={index}>
                {msg.client && (
                  <p key={index} className=" user-chat p-3 ms-4 me-2">
                    <b>User wrote:</b> {msg.client}
                  </p>
                )}
                {msg.admin && (
                  <p key={index}>
                    <b>Admin wrote:</b> {msg.admin}
                  </p>
                )}
              </Fragment>
            ))}
          </div>

          <Form>
            <Form.Group className="mb-3" controlId={`adminChatMsg${roomIndex}`}>
              <Form.Label>Write a message</Form.Label>
              <Form.Control
                onKeyUp={(e) =>
                  adminSubmitChatMsg(e, `adminChatMsg${roomIndex}`)
                }
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button
              onClick={(e) => adminSubmitChatMsg(e, `adminChatMsg${roomIndex}`)}
              // variant="success"
              type="submit"
              style={{ backgroundColor: "rgb(96, 170, 240)", color: "black" }}
            >
              Send
            </Button>
          </Form>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default AdminChatRoom;
