import React, { ReactNode, useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

interface LabTabsProps {
  ComponetNew: ReactNode;
  ComponetEdit: ReactNode;
}

function LabTabs({ ComponetNew, ComponetEdit }: LabTabsProps) {
  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Editar" value="1" />
            <Tab label="Novo" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">{ComponetNew}</TabPanel>
        <TabPanel value="2">{ComponetEdit}</TabPanel>
      </TabContext>
    </Box>
  );
}

export default LabTabs;

