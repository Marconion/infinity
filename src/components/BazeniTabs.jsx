import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { MapaVelikiBazen2 } from "./MapaVelikiBazen2";
import { MapaMaliBazen } from "./MapaMaliBazen";
import { SelectedItemsContext } from "../contexts/SelectedItemsContext";
import { PriceContext } from "../contexts/PriceContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BazeniTabs() {
  const [value, setValue] = React.useState(0);

  const { setSelected } = React.useContext(SelectedItemsContext);
  const { setPrice } = React.useContext(PriceContext);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelected("");
    setPrice(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered>
          <Tab label="Veliki bazen" {...a11yProps(0)} />
          <Tab label="Mali bazen" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <MapaVelikiBazen2 />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <MapaMaliBazen />
      </CustomTabPanel>
    </Box>
  );
}

export default BazeniTabs;
