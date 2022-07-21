import { groq } from 'next-sanity';

// Fields

const adventureFields = groq`
	"id": _id,
	_updatedAt,
	title,
	"slug": slug.current,
	"image": image.asset->url,
	"color": color.hex,
	price,
	priceSingleSupplement,
	group,
	difficulty,
	location,
	availability,
	duration,
	distance,
	summary,
	tagline,
	"services": services[]{
		title,
		description,
		category,
		"icon": icon.asset->url
	},
	"features": features[]{
		title,
		description,
		"icon": icon.asset->url,
		"image": image.asset->url
	},
	"itinerary": itinerary[]{
		"id": itinerary._key,
		locationFrom,
		locationTo,
		distance,
		dayTo,
		dayFrom,
		transportation,
		activity,
		stageNumber,
		description,
		image
	},
	"routeMap": routeMap[]{
		"id": routeMap._key,
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
	"image": image.asset->url,
	content
`;

const testimonialFields = groq`
	"id": _id,
	_updatedAt,
	name,
	location,
	quote,
	"image": image.asset->url
`;

const gearFields = groq`
	"id": _id,
	_updatedAt,
	name,
	description,
	"image": image.asset->url
`;

const aboutFields = groq`
	"id": _id,
	_updatedAt,
	infoCamino,
	founder,
	"image": image.asset->url
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

export const adventuresPathsQuery = groq`*[_type == "adventure" && defined(slug.current)][].slug.current
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
