const Footer = () => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} Car Finder. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  