const Footer = () => {
    return (
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          © {new Date().getFullYear()} MERN Blog
        </div>
      </footer>
    );
  };
  
  export default Footer;