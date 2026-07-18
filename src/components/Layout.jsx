import Nav from './Nav';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12 flex flex-col gap-20">
        {children}
      </main>
    </div>
  );
}
