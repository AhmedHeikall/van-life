import { redirect } from "react-router-dom";

export async function requireAuth() {
  // fake authentication
  console.log("requireAuth");
  return redirect("/login?message=you must login first");
}
