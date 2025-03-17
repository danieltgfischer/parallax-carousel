import { View, Text } from "react-native";
import { Wallpapers } from "@/components";

export default function Home() {
  return (
    <View
      className="flex-1 items-center justify-center bg-white"
      style={{ flex: 1, flexGrow: 1 }}
    >
      <Wallpapers />
    </View>
  );
}
