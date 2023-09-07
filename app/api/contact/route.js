import connectDB from "@app/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import Contact from "@models/contact";

export async function POST(req) {
  const {email} = await req.json();

  try {

    await connectDB();
    await Contact.create({email});

    return NextResponse.json({
      msg: ["¡Correo registrado!"], 
      success: true
    });

  } catch (error) {

    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }

      return NextResponse.json({msg: errorList});
    } else {
      return NextResponse.json({msg: "Unable to send message."});
    }
  }

}