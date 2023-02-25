import React from "react";
import { View } from "react-native";
import { Route,  Routes } from "react-router-native";
import { RepositoryList } from "./RepositoryList";
import { AppBar } from "./AppBar";
import Login from "../pages/Login";

export const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route exact path="/" element={<RepositoryList />} />
        <Route exact path="/signin" element={<Login/>} />
      </Routes>
    </View>
  );
};
