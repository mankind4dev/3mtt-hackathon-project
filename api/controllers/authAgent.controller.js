// import AgentUser from "../models/userAgent.model.js";
import bcryptjs from "bcryptjs";
import UserAgents from "../models/userAgent.model.js";

const generateUserId = (state, firstName, lastName) => {
  const stateCode = state.slice(0,2).toUpperCase();
  const randomTwoDigit = Math.floor(Math.random() * 99) + 1;
  const firstLetterFirstName = firstName.charAt(0).toUpperCase();
  const firstLetterLastName = lastName.charAt(0).toUpperCase();
  const part1 = `${randomTwoDigit}${firstLetterFirstName}${firstLetterLastName}`;
  const randomSixDigit = Math.floor(Math.random() * (899999 - 800000) + 800000);
  const userId = `${stateCode}/${part1}-${randomSixDigit}/NG`;
  return userId;
};

export const agentSignUp = async (req, res, next) => { 
  const {
    title,
    firstName,
    middleName,
    lastName,
    nationality,
    state,
    lga,
    age,
    gender,
    relationship,
    phoneNumber,
    email,
    password,
    idType,
    ninNumber, 
  } = req.body;

  try {
    const userId = generateUserId(state, firstName, lastName);

    const existingUser = await UserAgents.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    } 

    const existingNIN = await UserAgents.findOne({ninNumber})
    if(existingNIN) {
      return res.status(400).json({
        message: "NIN alredy exists"
      })
    }

    const existingPhone = await UserAgents.findOne({ phoneNumber})
    if(existingPhone){
      return res.status(400).json({
        message: "Phone number alredy exists"
      })
    }
 
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new UserAgents({
      userId,
      title,
      firstName,
      middleName,
      lastName,
      nationality,
      state,
      lga,
      age,
      gender,
      relationship,
      phoneNumber,
      email,
      password: hashPassword,
      idType, 
      ninNumber, 
    });

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
