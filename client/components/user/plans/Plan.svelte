<script lang="ts">
	import type { IPlan } from 'models'

	export let plan: IPlan
</script>

<div class="column">
	<div class="box is-clickable" on:click>
		<h3 class="title is-4">{plan.title}</h3>
		<h4 class="subtitle is-6">{plan.subtitle}</h4>
		{#each plan.meals as meal, i (meal.id)}
			<div class="block">
				<article class="media">
					<figure class="media-left">
						<p class="image is-64x64"><img src={meal.restaurant.logoURL} alt="{meal.restaurant.name} logo" /></p>
					</figure>
					<div class="media-content">
						<h5 class="title is-5">{meal.restaurant.name}</h5>
						<h6 class="subtitle is-6">{meal.name}</h6>
					</div>
				</article>
				<div class="tags">
					<span class="tag is-primary">{meal.tags[0]}</span><span class="tag is-warning">{meal.tags[1]}</span>
				</div>
				<div class="content">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
						vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
					</p>
				</div>
			</div>
			{#if i < plan.meals.length - 1}
				<hr />
			{/if}
		{/each}
	</div>
</div>
