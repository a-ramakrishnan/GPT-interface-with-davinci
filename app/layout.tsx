import "../styles/globals.css";
import SideBar from "../components/SideBar";
import { SessionProvider } from "../components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {session ? (
            <div className="flex">
              {/* Sidebar */}
              <div className="bg-black/95 max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              {/* Client provider - For Notifications */}
              <ClientProvider />

              <div className="bg-black/90 flex-1">{children}</div>
            </div>
          ) : (
            <Login />
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
