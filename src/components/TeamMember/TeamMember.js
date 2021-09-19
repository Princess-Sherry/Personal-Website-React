const { Member, MemberAvatar, MemberName } = require("./styles");

const TeamMember = ({ avatar, name }) => (
  <Member>
    <MemberAvatar avatar={avatar} />
    <MemberName>{name}</MemberName>
  </Member>
);

export default TeamMember;
