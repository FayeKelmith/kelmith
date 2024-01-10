import supabase from "@/supabase";
export const GET = async (req, { params }) => {
  try {
    //write query to select title
    const { error, data } = await supabase
      .from("kelmithessay")
      .select("*")
      .eq("title", params.title);

    if (error) {
      return new Response("Not found", { status: 404 });
    } else {
      return new Response(JSON.stringify(data), { status: 201 });
    }
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
