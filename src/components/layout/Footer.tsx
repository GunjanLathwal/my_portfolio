import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/50 bg-background/50 backdrop-blur-sm py-12 mt-auto">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="font-heading text-xl font-bold tracking-tighter">
            GL<span className="text-primary">.</span>
          </Link>
          <p className="text-sm text-muted">
            Designed & Developed by Gunjan Lathwal
          </p>
        </div>
        
        <p className="text-sm text-muted">
          Copyright {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
