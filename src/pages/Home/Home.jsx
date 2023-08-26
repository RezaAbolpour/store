import Header from "./Header";
import BodyHome from "./BodyHome";
function Home() {
  return (
    <div>
      <div className="z-50 fixed w-screen">
        <Header />
      </div>
      <div className="h-28"></div>
      <div className="sticky top-0">
        <BodyHome />
      </div>
    </div>
  );
}

export default Home;
