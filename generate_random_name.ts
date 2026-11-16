import { randomInt } from "node:crypto";
import type { WalnutSharedContext } from "@walnut/agent-sdk";

/**
 * @walnut_method
 * name: Generate Random Name
 * description: Generate a capitalized 8-letter random first name, fill the OrangeHRM First Name field, and store it in $[result].
 * actionType: custom_random_name
 * context: web
 * needsLocator: false
 * modules: node:crypto
 * category: Data
 */
export async function generateRandomName(ctx: WalnutWebContext): Promise<void> {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = uppercase[randomInt(uppercase.length)];
  for (let i = 1; i < 8; i += 1) {
    result += lowercase[randomInt(lowercase.length)];
  }
  await ctx.page.getByRole("textbox", { name: "First Name" }).fill(result);
  ctx.setVariable("result", result);
}
