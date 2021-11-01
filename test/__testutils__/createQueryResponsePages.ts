import { ExecutionContext } from "ava";
import * as prismicT from "@prismicio/types";
import * as prismicM from "@prismicio/mock";

type CreateQueryResponsePagesArgs = {
	numPages?: number;
	numDocsPerPage?: number;
};

export const createQueryResponsePages = (
	t: ExecutionContext,
	{ numPages = 3, numDocsPerPage = 3 }: CreateQueryResponsePagesArgs = {},
): prismicT.Query[] => {
	const documents = Array(numDocsPerPage)
		.fill(undefined)
		.map(() => {
			return prismicM.value.document({ seed: t.title });
		});

	return Array(numPages)
		.fill(undefined)
		.map((_, i) => {
			return prismicM.api.query({
				seed: t.title,
				page: i,
				pageSize: numDocsPerPage,
				documents,
			});
		});
};
