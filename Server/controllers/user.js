import userModel from "../models/userModel";

export const signup = async (req, res) => {
  const { email, password } = req.boy;

  try {
    const oldUser = await userModel.findOne({ email });
  } catch (error) {}
};
