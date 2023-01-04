import { Tab, Tabs } from "@mui/material";
import { BodyPartType } from "../../util/enums";

type TabListItem = {
  label: string;
  value: string;
};

type TabMenuProps = {
  value: BodyPartType;
  handleChange: (value: any) => void;
  TabList: TabListItem[];
};

const TabMenu: React.FC<TabMenuProps> = ({ value, TabList, handleChange }) => (
  <Tabs value={value} onChange={handleChange}>
    {TabList.map(({ label, value }) => (
      <Tab
        TouchRippleProps={{ style: { color: "red" } }}
        value={value}
        label={label}
      />
    ))}
  </Tabs>
);

export default TabMenu;
