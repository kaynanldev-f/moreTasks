import { getServerSession } from "next-auth";
import { authOptions } from "../../app/lib/auth";
import { redirect } from "next/navigation";
import TaskForm from "../components/TaskForm";
import DashboardContent from "../components/DashboardContent";

export default async function Dashboard() {
  
  const session = await getServerSession(authOptions);
  
  if (!session?.user) {
    redirect("/");
  }
  const email = session?.user.email
  if(!email){
    return
  }
  return (
    <div className="w-full flex flex-col items-center justify-between p-6 ">
      <main className="max-w-5xl w-full flex flex-col p-6">
        
        <DashboardContent email={email} />
        
      </main>
    </div>
  );
}
