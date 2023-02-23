import React from "react";
import { Text, View } from "react-native";
import { Route, Router, Routes } from "react-router-native";

import { RepositoryList } from "./RepositoryList";
import { AppBar } from "./AppBar";

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<RepositoryList />} />
        <Route exact path="/singin" element={<Text>Working in it</Text>} />
      </Routes>
    </View>
  );
};
