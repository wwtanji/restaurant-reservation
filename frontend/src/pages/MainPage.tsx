import React from 'react';
import NavbarComponent from '../components/section/NavbarComponent';
import RegionsComponent from '../components/herosection/MainText';
import JoinComponent from '../components/herosection/JoinComponent';
import FooterComponent from '../components/section/FooterComponent';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <RegionsComponent />
        <JoinComponent />
      </main>
      <FooterComponent />
    </div>
  );
};

export default MainPage;