<script lang="ts">
	import { auth, user } from 'stores/auth'
	import { tick } from 'svelte'

	let isConfirmationSuccess = window.history.state?.isConfirmationSuccess
	let isConfirmationFailure = window.history.state?.isConfirmationFailure

	let isSubmitting = false
	const values = {
		email: '',
		password: '',
		remember: false,
	}
	let error = ''
	let errors = {
		email: '',
		password: '',
	}

	async function handleSubmit() {
		error = ''
		errors = {
			email: '',
			password: '',
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

		if (!valid) {
			values.password = ''
			return
		}

		isSubmitting = true
		await tick()

		try {
			const u = await auth.login(values.email, values.password, values.remember)
			user.set(u)
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
				<h1 class="title">Log in</h1>
				<form on:submit|preventDefault={handleSubmit}>
					{#if isConfirmationSuccess}
						<div class="notification is-success">
							<button class="delete" on:click={() => (isConfirmationSuccess = false)} />
							<strong>Success!</strong>
							Your email has been verified and your account is ready. Log in to continue.
						</div>
					{/if}
					{#if isConfirmationFailure}
						<div class="notification is-danger">
							<button class="delete" on:click={() => (isConfirmationFailure = false)} />
							<strong>Email confirmation failed.</strong>
							Something went wrong, make sure you're clicking on the right link.
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
							<div class="control">
								<label class="checkbox"> <input type="checkbox" bind:checked={values.remember} /> remember me </label>
							</div>
						</div>
						<div class="field">
							<div class="control"><button class="button is-link" class:is-loading={isSubmitting}>Submit</button></div>
						</div>
					</fieldset>
				</form>
			</div>
		</div>
	</div>
</section>
