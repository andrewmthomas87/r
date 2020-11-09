export interface IRestaurant {
	id: string
	name: string
	logoURL: string
}

export interface IMeal {
	id: string
	name: string
	restaurant: IRestaurant
	tags: string[]
}

export interface IPlan {
	id: string
	title: string
	subtitle: string
	meals: IMeal[]
}
