import connectMongoDB from "@db/connection/db_connections";
import commentsModel from "@db/models/comments.models";
import { NextRequest, NextResponse } from "next/server";

// const SECRET_KEY: string | undefined = process.env.JWT_SECERT_KEY;

export async function GET() {
  try {
    await connectMongoDB();
    const comments = await commentsModel.find();
    return NextResponse.json({ comments, success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.toString(), code: error.code, success: false }, { status: 403 });
  }
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  try {
    await connectMongoDB();
    const existing_email = await commentsModel.findOne({ email: payload.email });
    if (existing_email) {
      return NextResponse.json({ message: "Email already exist.", success: false }, { status: 409 });
    } else {
      const data = await commentsModel.create(payload);
      return NextResponse.json({ message: "Comments successfully added", success: true, data }, { status: 200 });
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.toString(), code: error.code, success: false }, { status: 403 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const payload = await request.json();
    await connectMongoDB();
    await commentsModel.deleteOne(payload);
    return NextResponse.json({ message: "Comment Delete Successfully.", success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.toString(), code: error.code, success: false }, { status: 403 });
  }
}
