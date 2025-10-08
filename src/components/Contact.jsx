import { motion } from "framer-motion";

const Contact = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      borderColor: "rgba(59, 130, 246, 0.5)",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.995
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.6,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 10px 25px rgba(255, 255, 255, 0.1)",
      transition: {
        duration: 0.3
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.section
      style={{ position: "relative", minHeight: "100vh" }}
      className="flex mt-25"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id="contact"
    >
      {/* Content Container - Centered */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Header Section - Centered */}
        <motion.div 
          className="text-center mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          <motion.h4 
            className="text-gray-400 text-lg font-medium mb-4"
            variants={titleVariants}
          >
            Get In Touch
          </motion.h4>
          <motion.h1 
            className="text-white text-5xl font-extrabold mb-8"
            variants={titleVariants}
          >
            CONTACT.
          </motion.h1>
        </motion.div>

        {/* Form Container - Centered with consistent spacing */}
        <motion.form 
          className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl mx-auto"
          variants={formVariants}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Name Field */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.label
              className="block mb-4 font-medium text-white text-lg text-center"
              htmlFor="name"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Your Name
            </motion.label>
            <motion.input
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
              type="text"
              name="Name"
              id="name"
              placeholder="Enter your full name"
              required
              variants={inputVariants}
              whileFocus="focus"
              whileTap="tap"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <motion.label
              className="block mb-4 font-medium text-white text-lg text-center"
              htmlFor="email"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Your Email
            </motion.label>
            <motion.input
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
              type="email"
              name="Email"
              id="email"
              placeholder="your.email@example.com"
              required
              variants={inputVariants}
              whileFocus="focus"
              whileTap="tap"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div 
            className="mb-10"
            variants={itemVariants}
          >
            <motion.label
              className="block mb-4 font-medium text-white text-lg text-center"
              htmlFor="message"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Your Message
            </motion.label>
            <motion.textarea
              className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 rounded-lg py-4 px-6 h-52 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-lg"
              name="Message"
              id="message"
              placeholder="Tell me about your project, timeline, and any specific requirements..."
              required
              variants={inputVariants}
              whileFocus="focus"
              whileTap="tap"
            ></motion.textarea>
          </motion.div>

          {/* Submit Button - Centered */}
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.button
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white py-4 px-12 rounded-lg font-semibold text-lg transition-all duration-300"
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;