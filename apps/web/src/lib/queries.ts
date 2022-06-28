import { groq } from 'next-sanity';

// Fields

const adventureFields = groq`
	"id": _id,
	_updatedAt,
	title,
	"slug": slug.current,
	"image": image.asset->url,
	"bgColor": bgColor.hex,
	"txtColor": txtColor.hex,
	startingPrice,
	"services": services[]{
		title,
		description,
		category,
		"icon": icon.asset->url
	}
`;

// Queries

export const homePageQuery = groq`
{
"adventures": *[_type == "adventure"] {
	${adventureFields}
	}
}`;

export const individualAdventureQuery = groq`
{
  "adventure": *[_type == "adventure" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${adventureFields}
  }
}`;

export const adventuresPathsQuery = groq`*[_type == "adventure" && defined(slug.current)][].slug.current
`;
