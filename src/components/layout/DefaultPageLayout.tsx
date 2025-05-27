import React from "react";
import Header from "../Header";
import Footer from "../Footer";
interface DefaultPageLayoutProps {
  children: React.ReactNode;
}

const DefaultPageLayout = ({ children }: DefaultPageLayoutProps) => {
  return (
    <div className="bg-[#f5f5f2]">
      {/* HEADER */}
      <Header />
      {children}
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default DefaultPageLayout;
