import { randomInt } from "node:crypto";
import type { WalnutSharedContext } from "@walnut/agent-sdk";

/**
 * @walnut_method
 * name: Generate Random Alphanumeric
 * description: Generate a random alphanumeric string of the requested length and store it in $[result].
 * actionType: custom_random_alphanumeric
 * context: shared
 * needsLocator: false
 * modules: node:crypto
 * category: Data
 */
export async function generateRandomAlphanumeric(ctx: WalnutSharedContext): Promise<void> {
  const rawLength = String(ctx.args[0] ?? "").trim();
  if (!/^\\d+$/.test(rawLength)) {
    throw new Error("Length must be a whole number from 0 to 100000.");
  }
  const length = Number(rawLength);

  if (!Number.isSafeInteger(length) || length > 100000) {
    throw new Error("Length must be a whole number from 0 to 100000.");
  }

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i += 1) {
    result += alphabet[randomInt(alphabet.length)];
  }

  ctx.setVariable("result", result);
}
