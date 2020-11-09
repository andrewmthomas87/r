<script lang="ts">
	import { user } from 'stores/auth'
	import { onMount } from 'svelte'

	onMount(async () => {
		await $user.logout()
		user.set(null)
	})
</script>
