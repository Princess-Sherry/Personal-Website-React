import { SkillItemName, SkillItemScore } from "./styles";

function SkillItem({ name, score }) {
  return (
    <div className="SkillItem">
      <SkillItemName>{name}</SkillItemName>
      <SkillItemScore score={score}></SkillItemScore>
    </div>
  );
}

export default SkillItem;
