export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 relative flex items-center justify-center overflow-hidden rounded-lg">
        <img
          src="/logo.webp"
          alt="RN Digital Midia Logo"
          width={40}
          height={40}
          decoding="async"
          fetchPriority="high"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
