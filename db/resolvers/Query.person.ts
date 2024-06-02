import { Context, util } from "@aws-appsync/utils";

type PotentialTables = {
  person?: any[];
  films?: any[];
};

export function request(ctx: Context) {
  const { id } = ctx.args;

  const tables: PotentialTables = {
    person: [util.dynamodb.toMapValues({ personId: id })],
  };

  if (ctx.info.selectionSetList.includes("films")) {
    tables.films = [util.dynamodb.toMapValues({ personId: id })];
  }

  return {
    operation: "BatchGetItem",
    tables,
  };
}

export function response(ctx: Context) {
  if (ctx.error) {
    util.error(
      ctx.error.message,
      ctx.error.type,
      null,
      ctx.result.cancellationReasons,
    );
  }
  const {
    data: { person, films },
  } = ctx.result;

  if (ctx.info.selectionSetList.includes("films")) {
    person.films = films;
  }

  return person;
}
