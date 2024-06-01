import { NextResponse } from "next/server";
import swapiClient from "../swapiClient";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const searchStr = searchParams.get("search");
  const people = await swapiClient.findPerson(searchStr || "");

  return NextResponse.json(people?.results || []);
};
