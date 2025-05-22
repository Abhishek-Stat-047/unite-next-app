import Link from "next/link";

interface LinkButtonProps {
  children: React.ReactNode;
  href: string;
}

function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Link
      className="text-gray-700 hover:text-black-900  font-[400] transition-colors"
      href={href}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
