import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useNavigation, useOutlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { ColorRing } from "react-loader-spinner";
import { EASE } from "../../motion/variants";

const Root = () => {
  const navigation = useNavigation();
  const location = useLocation();
  // Grab the element up front so the outgoing page stays visible during its exit.
  const outlet = useOutlet();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>
      <div className="flex-1">
        {navigation.state === "loading" ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#3B82F6", "#3B82F6", "#3B82F6", "#3B82F6", "#3B82F6"]}
            />
          </div>
        ) : (
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: EASE }}
            >
              {outlet}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
