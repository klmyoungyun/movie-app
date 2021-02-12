import React, { useState } from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, RefreshControl, ScrollView } from "react-native";

const ScollContainer = ({ refreshFn, loading, children }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await refreshFn();
    setRefreshing(false);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={"white"}
        />
      }
      style={{ backgroundColor: "black" }}
      contentContainerStyle={{
        flex: loading ? 1 : 0,
        justifyContent: loading ? "center" : "flex-start",
      }}
    >
      {loading ? <ActivityIndicator color="white" size="large" /> : children}
    </ScrollView>
  );
};

ScollContainer.propTypes = {
  refreshFn: PropTypes.func,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScollContainer;
