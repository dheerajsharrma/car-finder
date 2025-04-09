import Link from 'next/link';
import DarkModeToggle from '../ui/DarkModeToggle';

const Header = () => {
  return (
    <header className=" bg-white dark:bg-gray-800 shadow p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-100">
          Car Finder
        </Link>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
