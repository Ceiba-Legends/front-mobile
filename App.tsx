import { SafeAreaView, ScrollView, Text } from "react-native";
import { RecoilRoot } from "recoil";
import React from "react";
import CharacterSelectPage from "./src/features/Character/pages/CharacterSelect/CharacterSelect.page";

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView>
        <ScrollView>
          <React.Suspense fallback={<Text>Chargement...</Text>}>
            <CharacterSelectPage />
          </React.Suspense>
        </ScrollView>
      </SafeAreaView>
    </RecoilRoot>
  );
}
