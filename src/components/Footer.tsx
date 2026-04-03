export function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-400 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-lg font-bold text-white">
          <span className="text-brand-orange">Nosh</span> — בקרוב.
        </p>
        <p className="text-sm">כשר. אישי. בלי לחשוב.</p>

        <div className="flex items-center justify-center gap-6 text-sm">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            📸 אינסטגרם
          </a>
          <a
            href="mailto:hello@nosh.co.il"
            className="hover:text-white transition-colors"
          >
            ✉️ צור קשר
          </a>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2026 Nosh. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
