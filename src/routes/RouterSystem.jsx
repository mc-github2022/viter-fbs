import { devNavUrl } from "@/components/helpers/functions-general";
import About from "@/components/pages/developer/about/About";
import Activities from "@/components/pages/developer/activities/Activities";
import Footer from "@/components/pages/developer/footer/Footer";
import Header from "@/components/pages/developer/header/Header";
import HeaderFullPage from "@/components/pages/developer/headerFullpage/HeaderFullPage";
import Services from "@/components/pages/developer/services/Services";
import Home from "@/components/pages/website/Home";

export const routesSystem = [
  {
    path: `${devNavUrl}/system/header`,
    element: <Header />,
  },
  {
    path: `${devNavUrl}/system/services`,
    element: <Services />,
  },
  {
    path: `${devNavUrl}/system/about`,
    element: <About />,
  },
  {
    path: `${devNavUrl}/system/footer`,
    element: <Footer />,
  },
  {
    path: `${devNavUrl}/system/activities`,
    element: <Activities />,
  },
  {
    path: `${devNavUrl}/`,
    element: <Home />,
  },
  {
    path: `${devNavUrl}/system/headerfull`,
    element: <HeaderFullPage />,
  },
];
