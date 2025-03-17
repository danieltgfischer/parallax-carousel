import {
  View,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from "react-native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { wallpapers } from "@/metadata/wallpapers";
import Photo from "./photo";
import BackgroundPhoto from "./background-photo";

const { width } = Dimensions.get("screen");
const _imageWidth = width * 0.7;
const spacing = 10;

export default function Wallpapers() {
  const scrollX = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      scrollX.value = contentOffset.x / (_imageWidth + spacing);
    },
  });
  return (
    <View className="flex-1 justify-center">
      <View style={StyleSheet.absoluteFillObject}>
        {wallpapers.map((wallpaper, index) => (
          <BackgroundPhoto
            key={index}
            wallpaper={wallpaper}
            index={index}
            scrollX={scrollX}
          />
        ))}
      </View>
      <Animated.FlatList
        className="flex-grow-0"
        data={wallpapers}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        snapToInterval={_imageWidth + spacing}
        snapToAlignment="start"
        pagingEnabled
        decelerationRate="fast"
        horizontal
        onScroll={onScroll}
        scrollEventThrottle={1000 / 60}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <Photo
            source={item.source as ImageSourcePropType}
            index={index}
            imageWidth={_imageWidth}
            scrollX={scrollX}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing,
    paddingHorizontal: (width - _imageWidth) / 2,
    alignItems: "center",
  },
});
