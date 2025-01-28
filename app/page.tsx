import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main className="flex flex-col h-full justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">🔑 Next Auth</h1>
        <p className="text-lg text-white">An Authentication service for next js application</p>
        <LoginButton>Sign in</LoginButton>
      </div>
    </main>
  );
}
