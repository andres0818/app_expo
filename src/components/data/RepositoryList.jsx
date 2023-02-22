import React from "react";
import { View, Text } from "react-native";
import repositories from "./repositories";

export const RepositoryList = () => {
  return (
    <View>
      {repositories.map((repo) => {
        return (
          <View key={repo.id}>
            <Text>{repo.id}</Text>
          </View>
        );
      })}
    </View>
  );
};
