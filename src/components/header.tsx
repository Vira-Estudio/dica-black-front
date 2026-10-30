import logo from '@/assets/logo.webp'

export function Header() {
  return (
    <header className="bg-white py-6">
      <div className="mx-auto flex max-w-6xl justify-center px-4 md:px-8">
        <img
          alt="Dica Black"
          className="w-full max-w-58"
          height={48}
          src={logo}
          width={200}
        />
      </div>
    </header>
  )
}
