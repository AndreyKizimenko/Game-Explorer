import { FaWindows, FaXbox, FaPlaystation, FaAndroid, FaApple, FaLinux } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import React from "react";
import { ParentPlatforms } from "../../entities/Game";


interface PlatformIconMap {
  [key: number]: React.ReactElement;
}

// Initializing a platform > icon map
const platformIcons: PlatformIconMap = {
  1: <FaWindows size="20px" color="grey" />,
  2: <FaPlaystation size="20px" color="grey" />,
  3: <FaXbox size="20px" color="grey" />,
  4: <FaApple size="20px" color="grey" />,
  8: <FaAndroid size="20px" color="grey" />,
  6: <FaLinux size="20px" color="grey" />,
  7: <BsNintendoSwitch size="20px" color="grey" />,
};
// Rendering a list of icons
const renderPlatformIcons = (platforms: ParentPlatforms[]) => {
  if (platforms) {
    return platforms.map((platform) => {
      const icon = platformIcons[platform.platform.id];
      return icon ? React.cloneElement(icon, { key: platform.platform.id }) : null;
    });
  }
};

export default renderPlatformIcons;
