import autoprefixer from "autoprefixer";
import pxtorem from "postcss-pxtorem";

export default {
  plugins: [
    autoprefixer(),
    pxtorem({
      rootValue: 16,
      propList: ["*"],
      unitPrecision: 5,
      replace: true,
      minPixelValue: 0,
    }),
  ],
};
