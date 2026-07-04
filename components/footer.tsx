import { Globe, Rss, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#0b0b0b] py-14">
      <div className="mx-auto flex max-w-360 flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-16">
        <div className="font-heading text-3xl font-black tracking-tighter text-[#e50914]">CineStream</div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#e9bcb6]">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Help Center</a>
          <a href="#">Contact Us</a>
          <a href="#">Press</a>
          <a href="#">API</a>
        </div>
        <div className="flex gap-8 mt-8 text-[#e9bcb6]">
          <Globe />
          <Share2 />
          <Rss />
        </div>
      </div>
      <div className="py-6 text-center text-sm text-[#e9bcb6]">
        &copy; {new Date().getFullYear()} CineStream. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
