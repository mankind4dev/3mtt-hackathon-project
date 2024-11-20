import { Box, Typography } from "@mui/material";
import React from "react";

const HeadSelect = () => {
  return (
    <>
      <Box
        mt={3}
        m={4}
        display={"flex"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>
            State:
          </Typography>
          <select name="">
            <option value="" disabled selected>
              Select your state
            </option>
            <option value="abia">Abia</option>
            <option value="adamawa">Adamawa</option>
            <option value="akwa-ibom">Akwa Ibom</option>
            <option value="anambra">Anambra</option>
            <option value="bauchi">Bauchi</option>
            <option value="bayelsa">Bayelsa</option>
            <option value="benue">Benue</option>
            <option value="borno">Borno</option>
            <option value="cross-river">Cross River</option>
            <option value="delta">Delta</option>
            <option value="ebonyi">Ebonyi</option>
            <option value="edo">Edo</option>
            <option value="ekiti">Ekiti</option>
            <option value="enugu">Enugu</option>
            <option value="gombe">Gombe</option>
            <option value="imo">Imo</option>
            <option value="jigawa">Jigawa</option>
            <option value="kaduna">Kaduna</option>
            <option value="kano">Kano</option>
            <option value="katsina">Katsina</option>
            <option value="kebbi">Kebbi</option>
            <option value="kogi">Kogi</option>
            <option value="kwara">Kwara</option>
            <option value="lagos">Lagos</option>
            <option value="nasarawa">Nasarawa</option>
            <option value="niger">Niger</option>
            <option value="ogun">Ogun</option>
            <option value="ondo">Ondo</option>
            <option value="osun">Osun</option>
            <option value="oyo">Oyo</option>
            <option value="plateau">Plateau</option>
            <option value="rivers">Rivers</option>
            <option value="sokoto">Sokoto</option>
            <option value="taraba">Taraba</option>
            <option value="yobe">Yobe</option>
            <option value="zamfara">Zamfara</option>
            <option value="fct">Federal Capital Territory</option>
          </select>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>
            LGA:
          </Typography>
          <select id="osun-lgas" name="osun-lgas">
            <option value="" disabled selected>
              Select an LGA
            </option>
            <option value="ataakunosa-east">Atakunmosa East</option>
            <option value="ataakunosa-west">Atakunmosa West</option>
            <option value="ayedaade">Ayedaade</option>
            <option value="ayedire">Ayedire</option>
            <option value="boluwaduro">Boluwaduro</option>
            <option value="boripe">Boripe</option>
            <option value="ede-north">Ede North</option>
            <option value="ede-south">Ede South</option>
            <option value="egbedore">Egbedore</option>
            <option value="ejigbo">Ejigbo</option>
            <option value="ife-central">Ife Central</option>
            <option value="ife-east">Ife East</option>
            <option value="ife-north">Ife North</option>
            <option value="ife-south">Ife South</option>
            <option value="ifelodun">Ifelodun</option>
            <option value="ila">Ila</option>
            <option value="ilesha-east">Ilesha East</option>
            <option value="ilesha-west">Ilesha West</option>
            <option value="irepodun">Irepodun</option>
            <option value="irewole">Irewole</option>
            <option value="isokan">Isokan</option>
            <option value="iwo">Iwo</option>
            <option value="obokun">Obokun</option>
            <option value="odo-otin">Odo Otin</option>
            <option value="ola-oluwa">Ola Oluwa</option>
            <option value="olorunda">Olorunda</option>
            <option value="oriade">Oriade</option>
            <option value="orolu">Orolu</option>
            <option value="osogbo">Osogbo</option>
          </select>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"365px"}
          height={"50px"}
          background={"rgba(255, 255, 255, 1)"}
          border={"1px solid rgba(239, 240, 246, 1)"}
          borderRadius={3}
          pl={1}
          pr={1}
        >
          <Typography fontSize={16} fontWeight={500}>
            Streets:
          </Typography>
          <select name="" id="">
            <option value="names">Select Streets</option>
          </select>
        </Box>
      </Box>
    </>
  );
};

export default HeadSelect;
