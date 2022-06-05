import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
// console.warn(width);

let iconsScaling = {
  tabIconSize: 18,
  otherIconSize: 18,
};

if (width <= 320) {
  iconsScaling.tabIconSize = 22;
  iconsScaling.otherIconSize = 20;
  } else if (width <= 360) {
  iconsScaling.tabIconSize = 22;
  iconsScaling.otherIconSize = 22;
  }else if (width <= 375) {
  iconsScaling.tabIconSize = 26;
  iconsScaling.otherIconSize = 24;
  } else if (width <= 414) {
  iconsScaling.tabIconSize = 34;
  iconsScaling.otherIconSize = 29;
  } else if(width<=513){
  iconsScaling.tabIconSize=36;
  iconsScaling.otherIconSize=32;
  } else if(width<=648){
  iconsScaling.tabIconSize =37;
  iconsScaling.otherIconSize=35;
  } else if(width<=680){
  iconsScaling.tabIconSize =39;
  iconsScaling.otherIconSize=39;
  } else if(width<=748){
  iconsScaling.tabIconSize =42;
  iconsScaling.otherIconSize=42;
  } else if(width<=848){
  iconsScaling.tabIconSize =44;
  iconsScaling.otherIconSize=45;
  }


module.exports = iconsScaling;