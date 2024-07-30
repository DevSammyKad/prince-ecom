import React from "react";

const StickyHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
      <div className="container mx-auto">
        <motion.p
          className="text-sm text-center font-medium"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Free Delivery on orders above 99₹ 🎉
        </motion.p>
      </div>
    </div>
  );
};

export default StickyHeader;
