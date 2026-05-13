import { NavBar } from "@/components/Navbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#d4af37] selection:text-black">
            <NavBar />
            <main>
                {children}
            </main>
        </section>
    )}