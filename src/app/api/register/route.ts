// import { withZod } from "./middleware";

// export const dynamic = "force-dynamic";

// export const POST = withZod(async (request, data) => {
export const POST = (request) => {
  console.log("Successfully received data", request);
  return new Response(
    JSON.stringify({
      data: {
        message: "You've successfully registered!",
      },
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
