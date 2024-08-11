declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"docs": {
"course-ntw2029/index.md": {
	id: "course-ntw2029/index.md";
  slug: "course-ntw2029";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/1.1.md": {
	id: "course-ntw2029/meetings/1.1.md";
  slug: "course-ntw2029/meetings/11";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/1.2.md": {
	id: "course-ntw2029/meetings/1.2.md";
  slug: "course-ntw2029/meetings/12";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/10.1.md": {
	id: "course-ntw2029/meetings/10.1.md";
  slug: "course-ntw2029/meetings/101";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/10.2.md": {
	id: "course-ntw2029/meetings/10.2.md";
  slug: "course-ntw2029/meetings/102";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/11.1 and 11.2 — no class, Paper 2 proposal conferences.md": {
	id: "course-ntw2029/meetings/11.1 and 11.2 — no class, Paper 2 proposal conferences.md";
  slug: "course-ntw2029/meetings/111-and-112--no-class-paper-2-proposal-conferences";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/12.1.md": {
	id: "course-ntw2029/meetings/12.1.md";
  slug: "course-ntw2029/meetings/121";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/12.2.md": {
	id: "course-ntw2029/meetings/12.2.md";
  slug: "course-ntw2029/meetings/122";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/2.1.md": {
	id: "course-ntw2029/meetings/2.1.md";
  slug: "course-ntw2029/meetings/21";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/2.2.md": {
	id: "course-ntw2029/meetings/2.2.md";
  slug: "course-ntw2029/meetings/22";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/3.1.md": {
	id: "course-ntw2029/meetings/3.1.md";
  slug: "course-ntw2029/meetings/31";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/3.2.md": {
	id: "course-ntw2029/meetings/3.2.md";
  slug: "course-ntw2029/meetings/32";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/4.1.md": {
	id: "course-ntw2029/meetings/4.1.md";
  slug: "course-ntw2029/meetings/41";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/4.2.md": {
	id: "course-ntw2029/meetings/4.2.md";
  slug: "course-ntw2029/meetings/42";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/5.1.md": {
	id: "course-ntw2029/meetings/5.1.md";
  slug: "course-ntw2029/meetings/51";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/5.2.md": {
	id: "course-ntw2029/meetings/5.2.md";
  slug: "course-ntw2029/meetings/52";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/6.1 and 6.2 (week of 18 Sep) - no class, P1 draft conferences.md": {
	id: "course-ntw2029/meetings/6.1 and 6.2 (week of 18 Sep) - no class, P1 draft conferences.md";
  slug: "course-ntw2029/meetings/61-and-62-week-of-18-sep---no-class-p1-draft-conferences";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/7.1.md": {
	id: "course-ntw2029/meetings/7.1.md";
  slug: "course-ntw2029/meetings/71";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/7.2.md": {
	id: "course-ntw2029/meetings/7.2.md";
  slug: "course-ntw2029/meetings/72";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/8.1.md": {
	id: "course-ntw2029/meetings/8.1.md";
  slug: "course-ntw2029/meetings/81";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/8.2.md": {
	id: "course-ntw2029/meetings/8.2.md";
  slug: "course-ntw2029/meetings/82";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/9.1.md": {
	id: "course-ntw2029/meetings/9.1.md";
  slug: "course-ntw2029/meetings/91";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/9.2.md": {
	id: "course-ntw2029/meetings/9.2.md";
  slug: "course-ntw2029/meetings/92";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/meetings/Page 13.1 and 13.2 (13 and 15 Nov 2023) - no class, conferences for Paper 2 full draft and outline.md": {
	id: "course-ntw2029/meetings/Page 13.1 and 13.2 (13 and 15 Nov 2023) - no class, conferences for Paper 2 full draft and outline.md";
  slug: "course-ntw2029/meetings/page-131-and-132-13-and-15-nov-2023---no-class-conferences-for-paper-2-full-draft-and-outline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p1-1.md": {
	id: "course-ntw2029/papers/p1-1.md";
  slug: "course-ntw2029/papers/p1-1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p1-2 reverseoutline.md": {
	id: "course-ntw2029/papers/p1-2 reverseoutline.md";
  slug: "course-ntw2029/papers/p1-2-reverseoutline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p1-3 draft.md": {
	id: "course-ntw2029/papers/p1-3 draft.md";
  slug: "course-ntw2029/papers/p1-3-draft";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p1-4 final.md": {
	id: "course-ntw2029/papers/p1-4 final.md";
  slug: "course-ntw2029/papers/p1-4-final";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p1.md": {
	id: "course-ntw2029/papers/p1.md";
  slug: "course-ntw2029/papers/p1";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-1 overview.md": {
	id: "course-ntw2029/papers/p2-1 overview.md";
  slug: "course-ntw2029/papers/p2-1-overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-2 general topic proposal.md": {
	id: "course-ntw2029/papers/p2-2 general topic proposal.md";
  slug: "course-ntw2029/papers/p2-2-general-topic-proposal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-3 academicconversation.md": {
	id: "course-ntw2029/papers/p2-3 academicconversation.md";
  slug: "course-ntw2029/papers/p2-3-academicconversation";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-3 general proposal.md": {
	id: "course-ntw2029/papers/p2-3 general proposal.md";
  slug: "course-ntw2029/papers/p2-3-general-proposal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-4 brief source summary.md": {
	id: "course-ntw2029/papers/p2-4 brief source summary.md";
  slug: "course-ntw2029/papers/p2-4-brief-source-summary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-5 source outline.md": {
	id: "course-ntw2029/papers/p2-5 source outline.md";
  slug: "course-ntw2029/papers/p2-5-source-outline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-6 proposal.md": {
	id: "course-ntw2029/papers/p2-6 proposal.md";
  slug: "course-ntw2029/papers/p2-6-proposal";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-7 intro draft and outline.md": {
	id: "course-ntw2029/papers/p2-7 intro draft and outline.md";
  slug: "course-ntw2029/papers/p2-7-intro-draft-and-outline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-8 full draft and outline.md": {
	id: "course-ntw2029/papers/p2-8 full draft and outline.md";
  slug: "course-ntw2029/papers/p2-8-full-draft-and-outline";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-9 final.md": {
	id: "course-ntw2029/papers/p2-9 final.md";
  slug: "course-ntw2029/papers/p2-9-final";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/p2-sourcesummary.md": {
	id: "course-ntw2029/papers/p2-sourcesummary.md";
  slug: "course-ntw2029/papers/p2-sourcesummary";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/papers/papers.md": {
	id: "course-ntw2029/papers/papers.md";
  slug: "course-ntw2029/papers/papers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/resources/classFAQ.md": {
	id: "course-ntw2029/resources/classFAQ.md";
  slug: "course-ntw2029/resources/classfaq";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/resources/ev religion.md": {
	id: "course-ntw2029/resources/ev religion.md";
  slug: "course-ntw2029/resources/ev-religion";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"course-ntw2029/resources/ev resources.md": {
	id: "course-ntw2029/resources/ev resources.md";
  slug: "course-ntw2029/resources/ev-resources";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"courses/Policies/formatting.md": {
	id: "courses/Policies/formatting.md";
  slug: "courses/policies/formatting";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"courses/Policies/genAIpolicy.md": {
	id: "courses/Policies/genAIpolicy.md";
  slug: "courses/policies/genaipolicy";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"courses/Policies/grading.md": {
	id: "courses/Policies/grading.md";
  slug: "courses/policies/grading";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"courses/Policies/tech-guidelines.md": {
	id: "courses/Policies/tech-guidelines.md";
  slug: "courses/policies/tech-guidelines";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"courses/Policies/test.md": {
	id: "courses/Policies/test.md";
  slug: "courses/policies/test";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"hidden/hidden-titles.md": {
	id: "hidden/hidden-titles.md";
  slug: "hidden/hidden-titles";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"writing/citations.md": {
	id: "writing/citations.md";
  slug: "writing/citations";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"writing/writing resources.md": {
	id: "writing/writing resources.md";
  slug: "writing/writing-resources";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
