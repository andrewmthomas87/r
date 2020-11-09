<script lang="ts">
	import { PLANS } from 'components/data'
	import type { IPlan } from 'models'
	import Details from './Details.svelte'

	const plan: IPlan = PLANS[1]
</script>

<style>
	#mmyy-input,
	#cvc-input {
		width: 6rem;
	}
</style>

<section class="section">
	<div class="container">
		<h1 class="title">Order plan</h1>
		<h2 class="subtitle">Review plan details and checkout</h2>
		<Details {plan} />
		<hr />
		<h2 class="title">Check out</h2>
		<form on:submit|preventDefault={() => {}}>
			<div class="columns is-variable is-8">
				<div class="column is-three-fifths">
					<div class="block">
						<h3 class="subtitle is-4">Shipping address</h3>
						<div class="columns is-variable is-3 mb-0">
							<div class="column">
								<div class="field">
									<label class="label" for="first-name-input">First name</label>
									<div class="control"><input id="first-name-input" class="input" type="text" /></div>
								</div>
							</div>
							<div class="column">
								<div class="field">
									<label class="label" for="last-name-input">Last name</label>
									<div class="control"><input id="last-name-input" class="input" type="text" /></div>
								</div>
							</div>
						</div>
						<div class="field">
							<label class="label" for="address-input">Address</label>
							<div class="control"><input id="address-input" class="input" type="text" /></div>
						</div>
						<div class="field">
							<label class="label" for="address2-input">Apt, Suite</label>
							<div class="control"><input id="address2-input" class="input" type="text" /></div>
						</div>
						<div class="columns is-variable is-3 mb-0">
							<div class="column is-half">
								<div class="field">
									<label class="label" for="city-input">City</label>
									<div class="control">
										<input id="city-input" class="input" type="text" value="Evanston" disabled />
									</div>
								</div>
							</div>
							<div class="column">
								<div class="field">
									<label class="label" for="state-input">State</label>
									<div class="control"><input id="state-input" class="input" type="text" value="IL" disabled /></div>
								</div>
							</div>
							<div class="column">
								<div class="field">
									<label class="label" for="zip-input">Zip</label>
									<div class="control">
										<div class="select is-fullwidth">
											<select id="zip-input">
												<option>60201</option>
												<option>60202</option>
												<option>60203</option>
												<option>60204</option>
												<option>60208</option>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="field">
							<label class="label" for="phone-input">Phone</label>
							<div class="control"><input id="phone-input" class="input" type="text" /></div>
						</div>
					</div>
					<div class="block">
						<h3 class="subtitle is-4">Payment method</h3>
						<div class="field">
							<label class="label" for="card-number-input">Card number</label>
							<div class="field has-addons">
								<div class="control is-expanded"><input id="card-number-input" class="input" type="text" /></div>
								<div class="control"><input id="mmyy-input" class="input" type="text" placeholder="MM/YY" /></div>
								<div class="control"><input id="cvc-input" class="input" type="text" placeholder="CVC" /></div>
							</div>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="box">
						<h3 class="title is-4">Place order</h3>
						<h4 class="subtitle is-6">For Nov 8th &ndash; Nov 14th</h4>
						<div class="level">
							<div class="level-left">
								<div class="level-item">
									<div class="content">
										<p>{plan.title}</p>
										<p><strong>Subtotal</strong></p>
									</div>
								</div>
							</div>
							<div class="level-right">
								<div class="level-item">
									<div class="content">
										<p>59.99</p>
										<p><strong>59.99</strong></p>
									</div>
								</div>
							</div>
						</div>
						<button class="button is-primary">Place order</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</section>
