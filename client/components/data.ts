import type { IMeal, IPlan, IRestaurant } from 'models'

const RESTAURANTS: IRestaurant[] = [
	{
		id: '0',
		name: 'Prairie Moon',
		logoURL: 'https://www.prairiemoonrestaurant.com/wp-content/uploads/2016/08/Prairie-Moon-Logo.png',
	},
	{
		id: '1',
		name: 'Tomate Fresh Kitchen',
		logoURL: 'https://images.getbento.com/MX4lNA2ySSS4bDwbWOk4_logo-new-tomate.png',
	},
	{
		id: '2',
		name: "Hecky's Barbecue",
		logoURL:
			'https://www.heckys.com/uploads/b/ebe1bbeb0e479fd7252f17155094ce0bde855b8539ff5771004d2d412b2de6a2/HeckysLogo_1597076352.png?width=6280',
	},
]
const MEALS: IMeal[] = [
	{
		id: '0',
		name: 'Meal name 1',
		restaurant: RESTAURANTS[0],
		tags: ['American', 'Meat'],
	},
	{
		id: '1',
		name: 'Meal name 2',
		restaurant: RESTAURANTS[1],
		tags: ['Mexican', 'Meat'],
	},
	{
		id: '2',
		name: 'Meal name 3',
		restaurant: RESTAURANTS[2],
		tags: ['Barbecue', 'Meat'],
	},
]
const PLANS: IPlan[] = [
	{
		id: '0',
		title: 'Snazzy plan',
		subtitle: 'Catch phrase that sells this bad boy',
		meals: [MEALS[0], MEALS[1], MEALS[2]],
	},
	{
		id: '1',
		title: 'Jazzy plan',
		subtitle: 'Catch phrase that sells this bad boy',
		meals: [MEALS[1], MEALS[2], MEALS[0]],
	},
	{
		id: '2',
		title: 'Third plan',
		subtitle: 'Catch phrase that sells this bad boy',
		meals: [MEALS[2], MEALS[0], MEALS[1]],
	},
]

export { RESTAURANTS, MEALS, PLANS }
