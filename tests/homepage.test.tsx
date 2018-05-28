import * as React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import Homepage from "../src/components/homepage";

it("Homepage is rendered", () => {
    // Render Homepage in the document
    const homepageElement = TestUtils.renderIntoDocument(
        <Homepage/>
    );

    const homepageNode = ReactDOM.findDOMNode(homepageElement);
    expect(homepageNode).not.toEqual(null);
});
