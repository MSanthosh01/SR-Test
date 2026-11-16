import { randomInt } from "node:crypto";
import type { WalnutSharedContext } from "@walnut/agent-sdk";

/**
 * @walnut_method
 * name: Generate Random Name
 * description: Generate a capitalized 8-letter random name and store it in $[result].
 * actionType: custom_random_name
 * context: shared
 * needsLocator: false
 * modules: node:crypto
 * category: Data
 */
export async function generateRandomName(ctx: WalnutSharedContext): Promise<void> {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = uppercase[randomInt(uppercase.length)];
  for (let i = 1; i < 8; i += 1) {
    result += lowercase[randomInt(lowercase.length)];
  }
  ctx.setVariable("result", result);
}
