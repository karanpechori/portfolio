export default function Footer() {
  return (
    <footer className="pt-8 mt-8 border-t border-[var(--color-border)] text-xs text-[var(--color-muted)] flex justify-between">
      <span>© {new Date().getFullYear()} Karan Pechori</span>
      <span>Built with React + Vite + Tailwind</span>
    </footer>
  );
}
