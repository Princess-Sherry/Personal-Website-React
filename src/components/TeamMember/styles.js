import styled from "styled-components";

const Member = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const MemberAvatar = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-image: url(${(props) => props.avatar});
`;

const MemberName = styled.h4`
  position: absolute;
  bottom: -60px;
`;

export { Member, MemberAvatar, MemberName };
