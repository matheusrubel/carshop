import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { useState } from 'react';

export function RootLayout() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Outlet context={{ searchTerm }} />
    </>
  );
} 