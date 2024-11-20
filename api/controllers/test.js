import mongoose from "mongoose";

const agentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      enum: ["Mr", "Mrs", "Miss"],
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    lga: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
      enum: [
        "15-20",
        "21-25",
        "26-30",
        "31-35",
        "36-40",
        "41-45",
        "46-50",
        "51-55",
        "56-60",
        "61-65",
        "66-70",
        "71-100",
      ],
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
    },
    relationship: {
      type: String,
      required: true,
      enum: ["Single", "Divorced", "Separated", "Widow", "Married"],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: /^(\+234|234|0)[789][01]\d{8}$/,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
      type: String,
      required: true,
    },

    idType: {
      type: String,
      required: true,
    },
    ninNumber: {
      type: String,
      required: true,
    },

    avatar: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/9131/9131529.png",
    },
  },
  {
    timestamps: true,
  }
);

const AgentUser = mongoose.model("AgentUser", agentSchema);

export default AgentUser;
