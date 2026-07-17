import { Outlet } from 'react-router-dom';
import Nav from './Nav';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1 max-w-3xl w-full mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}
