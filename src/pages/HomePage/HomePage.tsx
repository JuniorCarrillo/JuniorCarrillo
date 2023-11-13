import React from 'react';

import Technologies from "../../components/technologies";
import RecentPost from "../../components/recent-post";
import Header from "../../components/header";
import Author from "../../components/author";
import Player from "../../components/player";
import Footer from "../../components/footer";
import Donate from "../../components/donate";
import SEO from "../../components/seo";

export default function HomePage() {
  return (
   <div>
     <Header />
     <SEO />
     <div className="container mx-auto mt-5 grid grid-cols-12 gap-4">
       <main className="col-span-9">
         <Player />
         <Donate />
         <Technologies />
       </main>
       <div className="col-span-3">
         <Author />
         <RecentPost />
       </div>
     </div>
     <Footer />
   </div>
  );
}
