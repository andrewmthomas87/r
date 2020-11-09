<script lang="ts">
	import { user } from '../stores/auth'
	import SignedOut from './signed_out/SignedOut.svelte'
	import User from './user/User.svelte'
</script>

<style global lang="scss">
	@import '../root.scss';
</style>

{#if $user}
	<User />
{:else}
	<SignedOut />
{/if}
