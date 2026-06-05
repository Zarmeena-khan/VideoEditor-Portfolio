export default function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.16)] bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 px-6 py-8 text-center text-sm text-muted md:flex-row md:justify-between md:px-8">
        <p>© 2025 Zarmeena Khan. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-muted transition hover:text-accent"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
