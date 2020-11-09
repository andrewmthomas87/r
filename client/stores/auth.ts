import GoTrue, { User } from 'gotrue-js'
import { writable } from 'svelte/store'

const auth = new (GoTrue as any).default({
	APIUrl: 'https://r-andrewmthomas87.netlify.app/.netlify/identity',
	audience: '',
	setCookie: false,
}) as GoTrue

const user = writable(auth.currentUser())

export { auth, user }
