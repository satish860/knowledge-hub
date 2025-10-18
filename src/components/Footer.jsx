const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-text-dark mb-4">Product</h4>
            <ul className="space-y-2 text-text-gray">
              <li><a href="#" className="hover:text-primary-orange transition-colors">GitHub (coming soon)</a></li>
              <li><a href="#" className="hover:text-primary-orange transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-orange transition-colors">Roadmap</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-4">Community</h4>
            <ul className="space-y-2 text-text-gray">
              <li><a href="#" className="hover:text-primary-orange transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-primary-orange transition-colors">Twitter / X</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-text-dark mb-4">Company</h4>
            <ul className="space-y-2 text-text-gray">
              <li><a href="#" className="hover:text-primary-orange transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-text-gray pt-8 border-t border-gray-200">
          <p>2025 Knowledge Hub. Open source under MIT License.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
