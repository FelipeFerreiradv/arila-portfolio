import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute top-44 left-1/2 z-50 w-full -translate-x-1/2 transform">
      <header className="flex items-center justify-center gap-20">
        <Link href="/" className="text-secondary-foreground-light text-sm">
          Home
        </Link>
        <Link href="/" className="text-secondary-foreground-light text-sm">
          About
        </Link>
        <Link href="/" className="text-secondary-foreground-light text-sm">
          Contact
        </Link>
      </header>
    </nav>
  );
};

export default Navbar;
