<script lang="ts">
	import { PLANS } from 'components/data'
	import type { Router } from 'navaid'
	import { user } from 'stores/auth'
	import { getContext } from 'svelte'
	import Plan from './Plan.svelte'

	const router = getContext<Router>('router')

	fetch('/.netlify/functions/all-plans', {
		method: 'GET',
		headers: { Authorization: `Bearer ${$user.token.access_token}` },
	})
</script>

<section class="section">
	<div class="container">
		<h1 class="title">Current plan</h1>
		<h2 class="subtitle">Nov 1st &ndash; Nov 7th</h2>
		<p>You do not have a plan for this week.</p>
	</div>
</section>
<section class="section">
	<div class="container">
		<h1 class="title">Upcoming plans</h1>
		<h2 class="subtitle">Nov 8th &ndash; Nov 14th</h2>
		<div class="columns">
			{#each PLANS as plan (plan.id)}
				<Plan {plan} on:click={() => router.route(`/plan/${plan.id}`)} />
			{/each}
		</div>
	</div>
</section>
