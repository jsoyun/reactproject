import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>홈</h1>

      <Link to="/login">로그인</Link>
      <Footer />
    </div>
  );
};
export default Home;
