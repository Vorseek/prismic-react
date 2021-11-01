import test from "ava";
import * as React from "react";
import * as prismicH from "@prismicio/helpers";
import * as prismicM from "@prismicio/mock";

import { PrismicText } from "../src";

import { renderJSON } from "./__testutils__/renderJSON";

test("returns string when passed RichTextField", (t) => {
	const field = prismicM.value.richText({ seed: t.title });

	const actual = renderJSON(<PrismicText field={field} />);
	const expected = renderJSON(<>{prismicH.asText(field)}</>);

	t.deepEqual(actual, expected);
});
