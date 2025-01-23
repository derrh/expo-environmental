import { ExpoConfig } from "expo/config";

export default (): ExpoConfig => ({
  name: "cool-app",
  slug: "cool-app",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.bill-test-org.cool-app",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: [
    "expo-router",
    [
      "expo-splash-screen",
      {
        image: "./assets/images/splash-icon.png",
        imageWidth: 200,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
    ],
    [
      "@config-plugins/react-native-branch",
      {
        apiKey: process.env.BRANCH_KEY,
        iosUniversalLinkDomains: [
          "sc7ts.test-app.link",
          "sc7ts.app.link",
          "sc7ts-alternate.test-app.link",
          "sc7ts-alternate.app.link",
        ],
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
});
