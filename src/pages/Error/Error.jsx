import { motion } from "framer-motion";
import errorImg from "../../assets/App-Error.png";
import PageMeta from "../../components/PageMeta/PageMeta";
import { Link } from "react-router";
import { fadeUp, staggerContainer } from "../../motion/variants";

const Error = () => {
  return (
    <>
      <PageMeta
        title="Page Not Found | A S M Saim"
        description="The page you're looking for could not be found. Return to the portfolio homepage of A S M Saim."
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex justify-center items-center min-h-screen"
      >
        <div className="text-center space-y-4">
          <motion.img variants={fadeUp} className="mx-auto w-90" src={errorImg} alt="" />
          <motion.h1 variants={fadeUp} className="text-5xl font-bold">
            Oops! Page Not Found.
          </motion.h1>
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="mt-4 btn btn-md border-none rounded-lg bg-gradient-to-br from-[#0B2F5B] to-[#3B82F6] transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] "
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Error;
