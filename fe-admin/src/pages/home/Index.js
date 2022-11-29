import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const Index = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-12 bg-white">
      <Header />
      <aside className="h-screen hidden md:block col-span-2">
        <Sidebar />
      </aside>
      <main className="h-screen col-start-2 bg-yellow-600 md:col-span-10"></main>
    </div>
  );
};

export default Index;
