export default function Footer() {
  return (
    <footer className="bg-dark py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Lumina</h3>
            <p className="text-gray-300">
              Empowering visually impaired individuals through innovative AI
              technology.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-white">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-white">
                  Demo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Lumina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
