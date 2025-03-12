import { Power, Moon, Home, FileText, BarChart2, BookOpen, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/9bf1/e463/abd1efa99cc3dccd730059e05abc478e"
          alt="logo"
          className="h-8"
        />
        <span className="text-xl font-semibold text-[#5A5AEB]">tmachine.ai</span>
      </div>
      <div className="flex gap-4">
        <Moon />
        <Home />
        <FileText />
        <BarChart2 />
        <User />
        <Power />
      </div>
    </nav>
  );
}
export default Navbar;