import { groq } from 'next-sanity';

// Fields

const adventureFields = groq`
	"id": _id,
	_updatedAt,
	title,
	"slug": slug.current,
	image,
	"color": color.hex,
	price,
	priceSingleSupplement,
	group,
	level,
	location,
	availability,
	duration,
	distance,
	summary,
	slogan,
	dates,
	"services": services[]{
		title,
		description,
		category,
		price,
		icon
	},
	"highlights": highlights[]{
		title,
		description,
		"gallery": gallery.images,
		icon,
 	},
	"itinerary": itinerary[]{
		locationFrom,
		locationTo,
		distance,
		dayTo,
		dayFrom,
		transportation,
		activity,
		stageNumber,
		description,
		"gallery": gallery.images,
	},
	"routeMap": routeMap[]{
		order,
		location,
		coordinates,
		description,
	}
`;

const faqFields = groq`
	"id": _id,
	_updatedAt,
	question,
	answer
`;

const storyFields = groq`
	"id": _id,
	_updatedAt,
	title,
	"slug": slug.current,
	category,
	image,
	summary,
	content
`;

const testimonialFields = groq`
	"id": _id,
	_updatedAt,
	name,
	location,
	quote,
	image
	,`;

const gearFields = groq`
	"id": _id,
	_updatedAt,
	name,
	description,
	image
`;

const aboutFields = groq`
	"id": _id,
	_updatedAt,
	camino,
	founder,
	features,
	image
`;

// Queries

export const homePageQuery = groq`
{
"adventures": *[_type == "adventure"] {
	${adventureFields}
	},
"testimonials": *[_type == "testimonial"] {
	${testimonialFields}
	},
"gear": *[_type == "gear"] {
	${gearFields}
	},
}`;

export const individualAdventureQuery = groq`
{
  "adventure": *[_type == "adventure" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${adventureFields}
  }
}`;

export const individualStoryQuery = groq`
{
  "story": *[_type == "story" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${storyFields}
  }
}`;

export const adventuresPathsQuery = groq`*[_type == "adventure" && defined(slug.current)][].slug.current
`;

export const storiesPathsQuery = groq`*[_type == "story" && defined(slug.current)][].slug.current
`;

export const faqPageQuery = groq`
{
"faq": *[_type == "faq"] {
	${faqFields}
	}
}`;

export const storiesPageQuery = groq`
{
"stories": *[_type == "story"] {
	${storyFields}
	}
}
`;

export const aboutPageQuery = groq`
{
"about": *[_type == "about"][0] {
	${aboutFields}
	}
}
`;
