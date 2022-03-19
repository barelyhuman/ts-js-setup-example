import { moduleTwo } from "./module-two.js";

export { moduleTwo };

/**
 *
 * @param {string} param
 * @returns {Promise<boolean>}
 */
export async function moduleOne(param) {
  try {
    console.log(param);
    moduleTwo(param);
    return true;
  } catch (err) {
    return false;
  }
}
