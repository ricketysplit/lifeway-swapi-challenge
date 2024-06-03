`npm run dev`

## NOTES for reviewers

- Currently, testing is much lighter than ideal. The lack of Jest support for Server Components makes it hard to test many of the components here without full End to End testing. The synchronous server components and client components have tests, but ideally there would be more. I started to try and implement playwright for E2E testing, but decided that was outside the scope of this.

- I've used DynamoDb with some simple read/write/scans, but I had to look into implementation. I wasn't sure exactly how to document the actual design, so hopefully /db/dynamodb-schema.ts is an acceptable representation

- The Appsync resolvers are more of a best guess. I'm aware of AppSync, but haven't had the chance to actually use it before. I put everything related to Data Modeling in /db, though some of it I implemented as a graphql endpoint in src/app/api/graphql.
