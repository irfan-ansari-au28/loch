import "./App.css";
import Layout from "./component/Layout/Layout";
import Testimonial from "./component/Testimonial/Testimonial";
import Form from "./component/Form/Form";
import FeatureSection from "./component/FeatureSection/FeatureSection";
import NotifySection from "./component/NotifySection/NotifySection";

function App() {
  return (
    <Layout>
      <div className="container">
        <div className="hero-section">
          <div className="hero-left-side-wrap">
            <NotifySection></NotifySection>
            <FeatureSection></FeatureSection>
            <Testimonial></Testimonial>
          </div>
          <div className="hero-right-side-wrap">
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
