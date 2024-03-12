"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string({
    invalid_type_error: "Invalid Email",
  }),
});

export default async function createUser() {
  const validatedFields = schema.safeParse({
    email: "xxzxxxzxxzxxxz",
  });

  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      resp: "deu certo",
    };
  }

  // Mutate data
}
