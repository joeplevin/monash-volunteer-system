import { NextResponse } from "next/server";
import User from "@/models/user";
import bcrypt from "bcrypt";

export async function post(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    if (!userData?.username || !userData?.password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const duplicate = await User.findOne({ username: userData.username })
      .lean()
      .exec();
    if (duplicate) {
      return NextResponse.json(
        { message: "Username already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    await User.create(userData);
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
  const { username, password, role } = req.body;
  const user = await User.findOne({ username });
}
