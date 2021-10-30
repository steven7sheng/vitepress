import{_ as s,c as e,o as a,a as t}from"./app.3382dd63.js";const k=`{"title":"Hello VitePress","description":"","frontmatter":{},"headers":[{"level":2,"title":"What's VitePress?","slug":"what-s-vitepress"},{"level":2,"title":"Getting Started","slug":"getting-started"}],"relativePath":"guide/index.md","lastUpdated":1635587277080}`,n={},o=t(`__VP_STATIC_START__<h1 id="hello-vitepress" tabindex="-1">Hello VitePress <a class="header-anchor" href="#hello-vitepress" aria-hidden="true">#</a></h1><blockquote><p>from Gadget @ 2021.10.30</p></blockquote><h2 id="what-s-vitepress" tabindex="-1">What&#39;s VitePress? <a class="header-anchor" href="#what-s-vitepress" aria-hidden="true">#</a></h2><p>visit <a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">https://vitepress.vuejs.org/</a></p><h2 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-hidden="true">#</a></h2><ul><li>step.1</li></ul><div class="language-bash"><pre><code><span class="token function">mkdir</span> @group/artifact <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> @group/artifact
</code></pre></div><ul><li>step.2</li></ul><div class="language-bash"><pre><code><span class="token function">yarn</span> init
</code></pre></div><ul><li>step.3</li></ul><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> --dev vitepress
</code></pre></div><ul><li>step.4</li></ul><div class="language-bash"><pre><code><span class="token function">mkdir</span> docs <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;# Hello VitePress&#39;</span><span class="token operator">&gt;</span>docs/index.md
</code></pre></div><ul><li>step.5</li></ul><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress dev docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vitepress serve docs&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>step.6</li></ul><div class="language-bash"><pre><code><span class="token function">yarn</span> docs:dev
</code></pre></div>__VP_STATIC_END__`,17),p=[o];function r(i,l,c,d,u,h){return a(),e("div",null,p)}var g=s(n,[["render",r]]);export{k as __pageData,g as default};