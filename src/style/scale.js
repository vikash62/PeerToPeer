import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;

let rem = 14;
if (width <= 240) {
rem = 10;
}else if (width >=540) {
rem = 15;
} else if (width <= 320) {
rem = 12;
} else if (width >= 360 && width <= 374) {
rem = 12.5;
} else if (width >= 375 && width <= 379) {
rem = 12;
}else if (width >= 380 && width <= 392) {
rem = 12;
}else if (width >= 393 && width <= 410) {
rem = 13;
} else if (width >= 411 && width <= 411) {
rem = 15;
} else if (width >= 412 && width <= 413) {
rem = 15;
} else if (width >= 414 && width <= 419) {
rem = 16;
} else if (width >= 420 && width <= 429) {
rem = 16;
} else if (width >= 430 && width <= 439) {
rem = 16;
} else if (width >= 400 && width <= 409) {
rem = 13;
} else if (width >= 440 && width <= 379) {
rem = 17;
}
  


module.exports = rem;