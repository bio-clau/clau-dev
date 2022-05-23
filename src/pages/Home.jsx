import React from "react";
import Header from "../components/Header";
import Content from "../components/content/Content";

function Home() {
  const aux = localStorage.getItem('theme');
    if(aux==='dark'){
      localStorage.removeItem('theme')
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark')
    }
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default Home;
