import supabase from "@/supabase";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    //write query to select title
    const { error, data } = await supabase.from("kelmithessay").select("*");

    if (error) {
      return new Response("Not found", { status: 404 });
    } else {
      return new Response(JSON.stringify(data), { status: 201 });
    }
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
