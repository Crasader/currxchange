import { shallow } from "enzyme";
import * as React from "react";
import renderer from "react-test-renderer";

import App from "../pages/index";

const props = {rates: { EUR: 2, GBP: 3, USD: 1}};
describe("With Enzyme", () => {
  it("App shows the header", () => {
    const app = shallow(<App {...props} />);

    expect(app.find("h1").text()).toEqual("Exchange");
  });

  it("App updates the input text when changing the value", () => {
    const app = shallow(<App {...props} />);

    expect(app.find("input").props().value).toEqual(1);
    app.find("input") .simulate("change", {target: { value: 10 }});
    expect(app.find("input").props().value).toEqual(10);
  });
});

describe("With Snapshot Testing", () => {
  it("App shows the header", () => {
    const component = renderer.create(<App {...props} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
