<script lang="ts">
	let isMenuOpen = false
</script>

<style>
	#logo {
		color: #4e2a84;
	}
</style>

<nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item"> <strong id="logo" class="is-size-3">EVR</strong> </a>
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
		<div class="navbar-start"><a href="/" class="navbar-item">Plans</a></div>
		<div class="navbar-end">
			<a href="/profile" class="navbar-item"> <span class="icon"> <i class="fas fa-user" /> </span> </a>
			<div class="navbar-item">
				<div class="buttons"><a href="/log-out" class="button is-light">Log out</a></div>
			</div>
		</div>
	</div>
</nav>
