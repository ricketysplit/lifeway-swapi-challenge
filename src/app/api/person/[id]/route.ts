import { NextResponse } from "next/server";
import swapiClient from "../../swapiClient";

type GetPersonRequest = {
  params: {
    id: string;
  };
};

export const GET = async (
  request: Request,
  { params }: GetPersonRequest,
): Promise<Response | undefined> => {
  const person = await swapiClient.getPerson(Number(params.id));

  return NextResponse.json(person);
};
