<script context="module">
	export function preload() {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	.posts {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}

  .posts h2 {
    margin-top: 2em;
  }

  .posts a {
    padding: 0.375em 0.75em;
    border-radius: 0.5em;
    background: #07a;
    color: #fff;
    text-decoration: none;
  }

.posts a:hover {
  background: #08b;
}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<div class="posts">
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<article>
      <h2>{post.title.rendered}</h2>
      {@html post.content.rendered}
      <a rel="prefetch" href="{post.id}">Read single page</a>
    </article>
	{/each}
</div>
