import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  const newUSer = req.body;
  // console.log(newUSer);
  const result = UserServices.createUserIntoDB(newUSer);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "User created successfully",
    data: result,
  });
};

export const UserController = { createUser };
