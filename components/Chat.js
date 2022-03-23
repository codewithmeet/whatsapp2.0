import { Avatar } from "@mui/material";
import styled from "styled-components";
import { auth, db } from "../config/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import getRecipientEmail from "../utils/getRecipientEmial";
import { useRouter } from "next/router";

const Chat = ({ id, users }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);

  const recipientEmail = getRecipientEmail(users, user);
  const usersdb = db.collection("users").where("email", "==", recipientEmail);

  const [recipientSnapshot] = useCollection(usersdb);

  const recipient = recipientSnapshot?.docs?.[0]?.data;

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };

  return (
    <Container onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoUrl} />
      ) : (
        <UserAvatar>{recipientEmail[0]}</UserAvatar>
      )}
      <p>{recipientEmail}</p>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  :hover {
    background-color: #e9eaeb;
  }
`;

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
