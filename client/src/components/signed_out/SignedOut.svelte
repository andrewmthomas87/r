<script lang="ts">
	import navaid from 'navaid'
	import { signedOutRoute } from 'stores/router'
	import { onDestroy } from 'svelte'
	import Home from './Home.svelte'
	import Nav from './Nav.svelte'
	import NotFound from './NotFound.svelte'
	import LogIn from './LogIn.svelte'
	import SignUp from './SignUp.svelte'

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

<Nav />
<svelte:component this={page} />
