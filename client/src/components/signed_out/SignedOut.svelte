<script lang="ts">
	import navaid from 'navaid'
	import { signedOutRoute } from 'stores/router'
	import { onDestroy } from 'svelte'
	import Home from './Home.svelte'
	import Nav from './Nav.svelte'
	import NotFound from './NotFound.svelte'
	import LogIn from './LogIn.svelte'
	import SignUp from './SignUp.svelte'
	import { auth } from 'stores/auth'

	let isConfirming = false
	if (window.location.hash) {
		const hash: Map<string, string> = new Map()
		window.location.hash
			.slice(1)
			.split('&')
			.forEach((s) => {
				const [n, v] = s.split('=')
				hash.set(n, v)
			})
		const confirmationToken = hash.get('confirmation_token')
		if (confirmationToken) {
			isConfirming = true
			auth
				.confirm(confirmationToken, true)
				.then(() => window.history.replaceState({ isConfirmationSuccess: true }, '', '/log-in'))
				.catch(() => window.history.replaceState({ isConfirmationFailure: true }, '', '/log-in'))
				.finally(() => {
					isConfirming = false
				})
		}
	}

	const router = navaid('/', () => signedOutRoute.set(null))

	router.on('/', () => signedOutRoute.set('home'))
	router.on('/log-in', () => signedOutRoute.set('log_in'))
	router.on('/sign-up', () => signedOutRoute.set('sign_up'))

	router.listen()
	onDestroy(router.unlisten)

	let page: typeof NotFound | null
	$: switch ($signedOutRoute) {
		case 'home':
			page = Home
			break
		case 'log_in':
			page = LogIn
			break
		case 'sign_up':
			page = SignUp
			break
		default:
			page = NotFound
			break
	}
</script>

{#if isConfirming}
	<section class="section"><progress class="progress is-primary" /></section>
{:else}
	<Nav />
	<svelte:component this={page} />
{/if}
