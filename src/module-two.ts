export async function moduleTwo(param: string): Promise<boolean> {
  try {
    console.log(param);
    return true;
  } catch (err) {
    return false;
  }
}
