
const Footer = () => {
    
    return (
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-2xl font-bold">Big Day Story</div>
            <p className="text-primary-foreground/80">
              Crafting your perfect wedding experience together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <span>© 2025 Big Day Story. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <a 
                href="tel:7047505858" 
                className="hover:text-gold transition-smooth"
              >
                (704) 750-5858
              </a>
              <span className="hidden sm:inline">•</span>
              <a 
                href="mailto:info@bigdaystory.com"
                className="hover:text-gold transition-smooth"
              >
                info@bigdaystory.com
              </a>
            </div>
          </div>
        </div>
      </footer>);
}

export default Footer;