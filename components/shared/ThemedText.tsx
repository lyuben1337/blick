import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "small";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor("text", { light: lightColor, dark: darkColor });

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "small" ? styles.small : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontSize: 12,
    lineHeight: 18,
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "600",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});