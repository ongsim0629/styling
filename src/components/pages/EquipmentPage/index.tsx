import React, { useState } from 'react';
import Header from '@/components/organisms/Header/Header';
import SubNav from '@/components/organisms/SubNav/SubNav';
import Footer from '@/components/organisms/Footer/Footer';

const EquipmentPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header />
      헤더끝
      <h1>Equipment</h1>
      <p>장비 페이지 임미다</p>
      <SubNav />
      <Footer />
    </>
  );
};

export default EquipmentPage;
