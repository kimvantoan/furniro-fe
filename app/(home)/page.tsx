import BrowseRange from "./browseRange";
import Gallery from "./gallery";
import Hero from "./hero";
import OurProducts from "./ourProducts";

export default function Home() {
  return (
    <div className="space-y-16">
     <Hero />
     <BrowseRange />
     <OurProducts />
     <Gallery />
    </div>
  );
}
