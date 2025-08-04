import bcrypt from "bcrypt";
const saltRounds = 10;
const HashingPassword = async (plainPassword) => {
  const salt =  await bcrypt.genSalt(saltRounds);

  return await bcrypt.hash(plainPassword, salt);
};

const ComparePassword =async (plainPassword, SavedPassword) => {
    return bcrypt.compare(plainPassword,SavedPassword)
}
export {HashingPassword , ComparePassword }
