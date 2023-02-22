import React from "react";
import { View, Text, FlatList } from "react-native";
import { RepositoryItem } from "./RepositoryItem";
import repositories from "../data/repositories";

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
    />
  );
};
