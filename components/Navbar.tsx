import Link from "next/link";

export const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-10 h-20 border-b border-[#d4af37]/30 bg-[#0a0a0a]">
            <div className="font-serif text-2xl tracking-widest text-[#b21a1a] uppercase">
                Shadow Index
            </div>

            <div className="flex gap-8 text-sm font-medium text-white/70 uppercase tracking-tighter">
                <Link href="/" className="hover:text-[#b21a1a] transition-colors">
                    Home
                </Link>
                <Link href="/targets" className="hover:text-[#b21a1a] transition-colors">
                    Targets
                </Link>
                <Link href="/about" className="hover:text-[#b21a1a] transition-colors">
                    About
                </Link>
            </div>
        </nav>
    )
}