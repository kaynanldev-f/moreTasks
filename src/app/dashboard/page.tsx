import { getServerSession } from "next-auth";
import { authOptions } from "../../app/lib/auth";
import { redirect } from "next/navigation";
export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/");
  }
  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
}
