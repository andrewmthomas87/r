<script lang="ts">
	import navaid from 'navaid'
	import { userRoute } from 'stores/router'
	import { onDestroy, setContext } from 'svelte'
	import LogOut from './LogOut.svelte'
	import Nav from './Nav.svelte'
	import NotFound from './NotFound.svelte'
	import Plans from './plans/Plans.svelte'
	import SelectPlan from './select_plan/SelectPlan.svelte'

	const router = navaid('/', () => userRoute.set(null))
	setContext('router', router)

	router.on('/log-in', () => router.route('/'))

	router.on('/', () => userRoute.set({ type: 'plans' }))
	router.on('/plan/:id', ({ id }) => userRoute.set({ type: 'select_plan', id }))
	router.on('/log-out', () => userRoute.set({ type: 'log_out' }))

	router.listen()
	onDestroy(router.unlisten)

	let page: typeof NotFound | null
	$: switch ($userRoute?.type) {
		case 'plans':
			page = Plans
			break
		case 'select_plan':
			page = SelectPlan
			break
		case 'log_out':
			page = LogOut
			break
		default:
			page = NotFound
			break
	}
</script>

<Nav />
<svelte:component this={page} />
<footer class="footer">
	<div class="content has-text-centered">
		<p><small><a href="/">Terms and Privacy</a> &mdash; <a href="/">Disclaimer</a></small></p>
		<p>&copy; EVR 2020</p>
	</div>
</footer>
