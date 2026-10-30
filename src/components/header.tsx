import logo from '@/assets/logo.webp'

export function Header() {
  return (
    <header className="bg-white py-6">
      <div className="mx-auto flex max-w-6xl justify-center px-4 md:px-8">
        <img
          alt="Dica Black"
          className="aspect-[250/28] h-auto w-full max-w-58"
          decoding="async"
          fetchPriority="high"
          height={28}
          src={logo}
          width={250}
        />
      </div>
    </header>
  )
}
