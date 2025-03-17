import img1 from "@/assets/images/wallpapers/img1.jpg";
import img2 from "@/assets/images/wallpapers/img2.jpg";
import img3 from "@/assets/images/wallpapers/img3.jpg";
import img4 from "@/assets/images/wallpapers/img4.jpg";
import img5 from "@/assets/images/wallpapers/img5.jpg";
import img6 from "@/assets/images/wallpapers/img6.jpg";
import img7 from "@/assets/images/wallpapers/img7.jpg";
import img8 from "@/assets/images/wallpapers/img8.jpg";
import img9 from "@/assets/images/wallpapers/img9.jpg";
import img10 from "@/assets/images/wallpapers/img10.jpg";
import img11 from "@/assets/images/wallpapers/img11.jpg";
import img12 from "@/assets/images/wallpapers/img12.jpg";
import { ImageSourcePropType } from "react-native";

export type Wallpaper = {
  id: number;
  source?: ImageSourcePropType | string;
};

export const wallpapers: Wallpaper[] = [
  {
    id: 1,
    source: img1,
  },
  {
    id: 2,
    source: img2,
  },
  {
    id: 3,
    source: img3,
  },
  {
    id: 4,
    source: img4,
  },
  {
    id: 5,
    source: img5,
  },

  {
    id: 6,
    source: img6,
  },
  {
    id: 7,
    source: img7,
  },
  {
    id: 8,
    source: img8,
  },
  {
    id: 9,
    source: img9,
  },
  {
    id: 10,
    source: img10,
  },
  {
    id: 11,
    source: img11,
  },
  {
    id: 12,
    source: img12,
  },
];
