import { User } from "../model/user.model";

export default async () => {
  await User.sync();
};
