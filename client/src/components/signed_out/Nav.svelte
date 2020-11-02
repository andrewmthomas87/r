<script lang="ts">
	let isMenuOpen = false
</script>

<nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img src="https://bulma.io/images/bulma-logo.png" alt="logo" width="112" height="28" />
		</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			role="button"
			class="navbar-burger burger"
			class:is-active={isMenuOpen}
			aria-label="menu"
			aria-expanded="false"
			data-target="navbar-menu"
			on:click={() => (isMenuOpen = !isMenuOpen)}>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	</div>
	<div id="navbar-menu" class="navbar-menu" class:is-active={isMenuOpen}>
		<div class="navbar-start"><a href="/" class="navbar-item">Home</a></div>
		<div class="navbar-end">
			<div class="navbar-item">
				<div class="buttons">
					<a href="/sign-up" class="button is-primary"><strong>Sign up</strong></a>
					<a href="/log-in" class="button is-light">Log in</a>
				</div>
			</div>
		</div>
	</div>
</nav>
