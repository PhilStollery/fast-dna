/**
 * @jest-environment node
 */
import "jsdom-global/register";

import React from "react";
import ReactDOMServer from "react-dom/server";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount, ReactWrapper } from "enzyme";
import HorizontalOverflow, { HorizontalOverflowClassNameContract } from "./";

/*
 * Configure Enzyme
 */
configure({ adapter: new Adapter() });

const imageSet1: JSX.Element[] = [
    <img key="image1" src="https://placehold.it/200x200?text=1" />,
    <img key="image2" src="https://placehold.it/200x200?text=2" />,
    <img key="image3" src="https://placehold.it/200x200?text=3" />,
    <img key="image4" src="https://placehold.it/200x200?text=4" />,
    <img key="image5" src="https://placehold.it/200x200?text=5" />,
    <img key="image6" src="https://placehold.it/200x200?text=6" />,
];

const managedClasses: HorizontalOverflowClassNameContract = {
    horizontalOverflow: "horizontal-overflow-class",
    horizontalOverflow_contentRegion: "horizontal-overflow-items-class",
    horizontalOverflow_item: "horizontal-overflow-item-class",
    horizontalOverflow_next: "horizontal-overflow-next-class",
    horizontalOverflow_previous: "horizontal-overflow-previous-class",
};

describe("horizontal overflow server-side", (): void => {
    test("should render in a node environment without throwing an error", () => {
        const renderedWithImagesAndNextAndPrevious: ReactWrapper = mount(
            <HorizontalOverflow managedClasses={managedClasses}>
                <button id="testButtonNext" slot="next">
                    next
                </button>
                <button id="testButtonPrevious" slot="previous">
                    previous
                </button>
                {imageSet1}
            </HorizontalOverflow>
        );

        expect(renderedWithImagesAndNextAndPrevious).not.toBe(undefined);
    });
    test("should render to string for server side rendering", () => {
        const renderedWithImagesAndNextAndPrevious: string = ReactDOMServer.renderToString(
            <HorizontalOverflow managedClasses={managedClasses}>
                <button id="testButtonNext" slot="next">
                    next
                </button>
                <button id="testButtonPrevious" slot="previous">
                    previous
                </button>
                {imageSet1}
            </HorizontalOverflow>
        );

        expect(renderedWithImagesAndNextAndPrevious).toEqual(
            '<div class="horizontal-overflow-class" data-reactroot=""><div style="height:auto;position:relative;overflow:hidden"><ul class="horizontal-overflow-items-class" style="position:relative;white-space:nowrap;overflow-x:scroll;padding:0;margin:0"><li class="horizontal-overflow-item-class" style="display:inline-block"><img src="https://placehold.it/200x200?text=1"/></li><li class="horizontal-overflow-item-class" style="display:inline-block"><img src="https://placehold.it/200x200?text=2"/></li><li class="horizontal-overflow-item-class" style="display:inline-block"><img src="https://placehold.it/200x200?text=3"/></li><li class="horizontal-overflow-item-class" style="display:inline-block"><img src="https://placehold.it/200x200?text=4"/></li><li class="horizontal-overflow-item-class" style="display:inline-block"><img src="https://placehold.it/200x200?text=5"/></li><li class="horizontal-overflow-item-class" style="display:inline-block"><img src="https://placehold.it/200x200?text=6"/></li></ul></div><div class="horizontal-overflow-previous-class"><button id="testButtonPrevious" slot="previous">previous</button></div><div class="horizontal-overflow-next-class"><button id="testButtonNext" slot="next">next</button></div></div>'
        );
    });
});
