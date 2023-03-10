import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

type Props = {
  tabLabels: string[];
  renderTabContent: JSX.Element[];
};

export const TabArea = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handelChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: any
  ) => {
    setSelectedTab(value);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handelChange}
        aria-label="basic tabs example"
      >
        {props.tabLabels.map((label) => (
          <Tab label={label} />
        ))}
      </Tabs>
      {props.renderTabContent.map((TabPanelContent, i) => {
        return (
          <TabPanel index={i} value={selectedTab}>
            {TabPanelContent}
          </TabPanel>
        );
      })}
    </>
  );
};
