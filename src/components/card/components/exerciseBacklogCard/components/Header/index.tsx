import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BodyPartEnum, BodyPartType } from "../../../../../../util/enums";
import TabMenu from "../../../../../TabMenu";

const BacklogHeader = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<BodyPartType>(
    BodyPartEnum.BACK
  );

  const tabArr = [
    { label: "Back", value: BodyPartEnum.BACK },
    { label: "Chest", value: BodyPartEnum.CHEST },
    { label: "Legs", value: BodyPartEnum.LEGS },
    { label: "Arms", value: BodyPartEnum.ARMS },
    { label: "Shoulders", value: BodyPartEnum.SHOULDERS },
  ];

  const handleChange = (event: SyntheticEvent) => {
    const val = (
      event.target as HTMLButtonElement
    ).innerText.toLocaleLowerCase();
    console.log({ val });
    setSelectedTab(val as BodyPartType);
    navigate(`/exercises-backlog/${val}`);
  };
  return (
    <>
      <TabMenu
        value={selectedTab}
        handleChange={handleChange}
        TabList={tabArr}
      />
    </>
  );
};
export default BacklogHeader;
