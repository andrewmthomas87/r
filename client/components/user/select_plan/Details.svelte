<script lang="ts">
	import type { IPlan } from 'models'

	export let plan: IPlan

	const deliveryDates: string[] = ['Monday Nov 9th', 'Wednesday Nov 11th', 'Friday Nov 13th']
</script>

<div class="block is-flex">
	<div class="is-flex-grow-1">
		<h3 class="title is-4">{plan.title}</h3>
		<h4 class="subtitle is-6">{plan.subtitle}</h4>
	</div>
	<a href="/" class="button is-link">Select different plan</a>
</div>
<div class="columns">
	{#each plan.meals as meal, i (meal.id)}
		<div class="column">
			<div class="card">
				<div class="card-image">
					<figure class="image is-4by3">
						<img src="https://bulma.io/images/placeholders/1280x960.png" alt={meal.name} />
					</figure>
				</div>
				<div class="card-content">
					<div class="media">
						<div class="media-left">
							<figure class="image is-48x48">
								<img src={meal.restaurant.logoURL} alt="{meal.restaurant.name} logo" />
							</figure>
						</div>
						<div class="media-content">
							<h5 class="title is-5">{meal.restaurant.name}</h5>
							<h6 class="subtitle is-6">{meal.name}</h6>
						</div>
					</div>
					<div class="tags">
						<span class="tag is-primary">{meal.tags[0]}</span><span class="tag is-warning">{meal.tags[1]}</span>
					</div>
					<div class="content">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
							vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
						</p>
						<p><strong>Delivery date:</strong> {deliveryDates[i]}</p>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
