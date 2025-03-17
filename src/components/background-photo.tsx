import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";
import { Wallpaper } from "@/metadata/wallpapers";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

type Props = {
  wallpaper: Wallpaper;
  index: number;
  scrollX: SharedValue<number>;
};

export default function BackgroundPhoto({ wallpaper, index, scrollX }: Props) {
  const style = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollX.value,
        [index - 1, index, index + 1],
        [0, 1, 0]
      ),
    };
  });

  return (
    <Animated.Image
      style={[StyleSheet.absoluteFillObject, style]}
      source={wallpaper.source as ImageSourcePropType}
      className="h-full w-full"
      blurRadius={50}
    />
  );
}
