import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/shared/ThemedView";
import { useTranslation } from "react-i18next";
import { Stack } from "expo-router";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Options } from "@/components/settings/Options";
import { Locale, LocaleContext } from "@/context/LocaleContext";

export default function LocaleSettingsScreen() {
  const { t } = useTranslation();
  const { locale, toggleLocale } = useContext(LocaleContext);

  const locales: Array<{ key: Locale; title: string; subtitle: string }> = [
    { key: "uk-UA", title: t("settings.locale.uk-UA"), subtitle: "Українська" },
    { key: "en-US", title: t("settings.locale.en-US"), subtitle: "English" },
  ];

  return (
    <>
      <Stack.Screen
        options={{
          title: t("settings.title.language"),
          headerTitleStyle: { color: useThemeColor("text") },
          headerStyle: { backgroundColor: useThemeColor("background") },
          headerBackTitle: t("screens.settings"),
        }}
      />
      <ThemedView style={styles.container}>
        <Options<Locale>
          collection={locales}
          selected={(key) => key === locale}
          onSelect={(key) => toggleLocale(key)}
        />
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
