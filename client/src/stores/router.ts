import { writable } from 'svelte/store'

type SignedOutRoute = 'home' | 'log_in' | 'sign_up'

const signedOutRoute = writable<SignedOutRoute | null>(null)

export { signedOutRoute }
