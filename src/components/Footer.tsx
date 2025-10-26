const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-light tracking-wider">
          INFINITY
        </div>
        
        <div className="text-sm text-muted-foreground font-light">
          © {new Date().getFullYear()} Infinit. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
