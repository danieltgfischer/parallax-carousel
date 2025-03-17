import { View, ImageSourcePropType } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

type Props = {
  source?: ImageSourcePropType;
  index: number;
  imageWidth: number;
  scrollX: SharedValue<number>;
};

export default function Photo({ source, index, imageWidth, scrollX }: Props) {
  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [1.6, 1, 1.6]
          ),
        },
        {
          rotate: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [15, 0, -15]
          )}deg`,
        },
      ],
    };
  });

  return (
    <View
      className="overflow-hidden  h-[50vh] rounded-3xl"
      style={{ width: imageWidth }}
    >
      <Animated.Image
        source={source}
        resizeMode="cover"
        className="h-full w-full"
        style={imageStyle}
      />
    </View>
  );
}
