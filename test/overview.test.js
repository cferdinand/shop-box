import React from "react";
import StyleBubble from "../src/components/MainOverview/Selectors/StyleBubble.jsx";

import store from "../src/store/store.js";
import { Provider } from "react-redux";

describe("test that style bubble is connected to store", () => {
  test("Displays", () => {
    const styleMockup = {
      photos: [
        {
          thumbnail_url: ""
        }
      ]
    };
    const wrapper = (
      <Provider store={store}>
        <StyleBubble style={styleMockup} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
