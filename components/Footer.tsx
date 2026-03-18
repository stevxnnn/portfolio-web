import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6 py-10 pb-28 md:pb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="font-mono text-sm text-accent-blue font-bold tracking-wider"
            >
              SL<span className="text-slate-500">.</span>
            </a>
            <p className="text-xs text-slate-600 mt-1 font-sans">
              On-Chain Data Analyst
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:stevenliew929@gmail.com"
              className="text-slate-500 hover:text-accent-blue transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={16} />
            </a>
            <a
              href="https://linkedin.com/in/liewsteven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent-blue transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="https://github.com/stevxnnn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-200 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </a>
          </div>

          <p className="text-xs text-slate-600 font-sans">
            © {new Date().getFullYear()} Steven Liew
          </p>
        </div>
      </div>
    </footer>
  )
}
