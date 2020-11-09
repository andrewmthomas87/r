import { writable } from 'svelte/store'

type SignedOutRoute = 'home' | 'log_in' | 'sign_up'
type UserRoute = { type: 'plans' } | { type: 'select_plan'; id: string } | { type: 'log_out' }

const signedOutRoute = writable<SignedOutRoute | null>(null)
const userRoute = writable<UserRoute | null>(null)

export { signedOutRoute, userRoute }
