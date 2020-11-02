<script lang="ts">
	import type { User } from 'gotrue-js'

	import { auth } from 'stores/auth'
	import { tick } from 'svelte'

	let isSubmitting = false
	const values = {
		email: '',
		password: '',
		retypePassword: '',
		hasAgreed: false,
	}
	let error = ''
	let errors = {
		email: '',
		password: '',
		retypePassword: '',
		hasAgreed: '',
	}
	let user: User | null = null

	async function handleSubmit() {
		error = ''
		errors = {
			email: '',
			password: '',
			retypePassword: '',
			hasAgreed: '',
		}

		let valid = true
		if (!values.email) {
			errors.email = 'This field is required'
			valid = false
		}
		if (!values.password) {
			errors.password = 'This field is required'
			valid = false
		}
		if (!values.retypePassword) {
			errors.retypePassword = 'This field is required'
			valid = false
		}
		if (values.password && values.retypePassword && values.password !== values.retypePassword) {
			errors.password = 'Password fields must match'
			valid = false
		}
		if (!values.hasAgreed) {
			errors.hasAgreed = 'You must agree to the terms and conditions to create an account'
			valid = false
		}

		if (!valid) {
			values.password = ''
			values.retypePassword = ''
			return
		}

		isSubmitting = true
		await tick()

		try {
			user = await auth.signup(values.email, values.password)
		} catch (ex) {
			if (ex && ex.json && (ex.json.msg || ex.json.error_description)) {
				error = ex.json.msg || ex.json.error_description
			} else {
				error = 'An error occurred'
			}
			isSubmitting = false
		}
	}
</script>

<style>
	.box {
		width: 450px;
		max-width: 100%;
	}
</style>

<section class="section">
	<div class="columns is-centered">
		<div class="column is-narrow">
			<div class="box">
				<h1 class="title">Sign up</h1>
				<form on:submit|preventDefault={handleSubmit}>
					{#if user}
						<div class="notification is-success">
							<strong>Success!</strong>
							A verification email has been sent to you at
							<strong>{user.email}</strong>. Click the link in that email to verify your account and finish the sign up
							process.
						</div>
					{/if}
					{#if error}
						<div class="notification is-danger">{error}</div>
					{/if}
					<fieldset disabled={isSubmitting}>
						<div class="field">
							<label class="label" for="email">Email</label>
							<div class="control">
								<input
									id="email"
									class="input"
									class:is-danger={errors.email}
									type="text"
									placeholder="joe@smith.com"
									bind:value={values.email} />
							</div>
							{#if errors.email}
								<p class="help is-danger">{errors.email}</p>
							{/if}
						</div>
						<div class="field">
							<label class="label" for="password">Password</label>
							<div class="control">
								<input
									id="password"
									class="input"
									class:is-danger={errors.password}
									type="password"
									bind:value={values.password} />
							</div>
							{#if errors.password}
								<p class="help is-danger">{errors.password}</p>
							{/if}
						</div>
						<div class="field">
							<label class="label" for="retype-password">Retype password</label>
							<div class="control">
								<input
									id="retype-password"
									class="input"
									class:is-danger={errors.retypePassword}
									type="password"
									bind:value={values.retypePassword} />
							</div>
							{#if errors.retypePassword}
								<p class="help is-danger">{errors.retypePassword}</p>
							{/if}
						</div>
						<div class="field">
							<div class="control">
								<label class="checkbox">
									<input type="checkbox" bind:checked={values.hasAgreed} />
									I agree to the
									<!-- svelte-ignore a11y-missing-attribute -->
									<a>terms and conditions</a>
								</label>
								{#if errors.hasAgreed}
									<p class="help is-danger">{errors.hasAgreed}</p>
								{/if}
							</div>
						</div>
						<div class="field">
							<div class="control">
								<button class="button is-link" class:is-loading={isSubmitting && !user}>Submit</button>
							</div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</section>
