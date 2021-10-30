import{_ as n,c as a,o as s,a as t}from"./app.3382dd63.js";const h='{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Options","slug":"options"},{"level":3,"title":"Base URL","slug":"base-url"},{"level":3,"title":"Line Numbers","slug":"line-numbers"},{"level":3,"title":"Advanced markdown-it","slug":"advanced-markdown-it"},{"level":2,"title":"Github Pages","slug":"github-pages"}],"relativePath":"configuration.md","lastUpdated":1635587277080}',e={},o=t(`__VP_STATIC_START__<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><p><strong>basic</strong> project structure is like this</p><div class="language-"><pre><code>.
\u251C\u2500 docs
\u2502  \u251C\u2500 .vitepress
\u2502  \u2502  \u2514\u2500 config.js
\u2502  \u2514\u2500 index.md
\u2514\u2500 package.json
</code></pre></div><p><code>.vitepress/config.js</code> is essential file</p><div class="language-js"><pre><code>modules<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
    title<span class="token operator">:</span> <span class="token string">&#39;T in TDK&#39;</span><span class="token punctuation">,</span>
    description<span class="token operator">:</span> <span class="token string">&#39;D in TDK&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h2><blockquote><p>all markdown files are compiled into Vue-components and processed by Vite;</p></blockquote><h3 id="base-url" tabindex="-1">Base URL <a class="header-anchor" href="#base-url" aria-hidden="true">#</a></h3><p>For example, if you plan to deploy your site to <code>https://foo.github.io/bar/</code>, then <code>base</code> should be set to <code>&#39;/bar/&#39;</code> (it should always start and end with a slash).</p><h3 id="line-numbers" tabindex="-1">Line Numbers <a class="header-anchor" href="#line-numbers" aria-hidden="true">#</a></h3><p>line numbers setting of code blocks via config:</p><p><code>markdown.lineNumbers: boolean</code></p><h3 id="advanced-markdown-it" tabindex="-1">Advanced markdown-it <a class="header-anchor" href="#advanced-markdown-it" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">const</span> anchor <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-anchor&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// options for markdown-it-anchor</span>
    <span class="token comment">// https://github.com/valeriangalliat/markdown-it-anchor#permalinks</span>
    anchor<span class="token operator">:</span> <span class="token punctuation">{</span>
      permalink<span class="token operator">:</span> anchor<span class="token punctuation">.</span>permalink<span class="token punctuation">.</span><span class="token function">headerLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// options for markdown-it-table-of-contents</span>
    toc<span class="token operator">:</span> <span class="token punctuation">{</span> includeLevel<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// use more markdown-it plugins!</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="github-pages" tabindex="-1">Github Pages <a class="header-anchor" href="#github-pages" aria-hidden="true">#</a></h2><ol><li>set the correct <code>base</code> in <code>docs/.vitepress/config.js</code></li></ol><blockquote></blockquote><p>If you are deploying to <code>https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;/</code>, for example your repository is at <code>https://github.com/&lt;USERNAME&gt;/&lt;REPO&gt;</code>, then set <code>base</code> to <code>&#39;/&lt;REPO&gt;/&#39;</code>.</p><ol start="2"><li>by create <code>deploy.sh</code></li></ol><div class="language-"><pre><code>#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

# if you are deploying to a custom domain
# echo &#39;www.example.com&#39; &gt; CNAME

git init
git add -A
git commit -m &#39;deploy&#39;
# if you are deploying to https://&lt;USERNAME&gt;.github.io
# git push -f git@github.com:&lt;USERNAME&gt;/&lt;USERNAME&gt;.github.io.git master

# if you are deploying to https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
# git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages
git push -f origin/master:gh-pages
cd -
</code></pre></div><ol start="3"><li>by Travis CI</li></ol><ul><li>set correct base</li><li>create .travis.yml in the root of project</li></ul><div class="language-yaml"><pre><code><span class="token key atrule">language</span><span class="token punctuation">:</span> node_js
<span class="token key atrule">node_js</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> lts/*
<span class="token key atrule">install</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> yarn install <span class="token comment"># npm ci</span>
<span class="token key atrule">script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> yarn docs<span class="token punctuation">:</span>build <span class="token comment"># npm run docs:build</span>
<span class="token key atrule">deploy</span><span class="token punctuation">:</span>
  <span class="token key atrule">provider</span><span class="token punctuation">:</span> pages
  <span class="token key atrule">skip_cleanup</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">local_dir</span><span class="token punctuation">:</span> docs/.vitepress/dist
  <span class="token comment"># A token generated on GitHub allowing Travis to push code on you repository.</span>
  <span class="token comment"># Set in the Travis settings page of your repository, as a secure variable.</span>
  <span class="token key atrule">github_token</span><span class="token punctuation">:</span> $GITHUB_TOKEN
  <span class="token key atrule">keep_history</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">on</span><span class="token punctuation">:</span>
    <span class="token key atrule">branch</span><span class="token punctuation">:</span> master
</code></pre></div><ol start="4"><li>by Gitlab CI</li></ol><ul><li>set correct base</li><li>set dest in config.js to <code>public</code></li><li>create .gitlab-ci.yml in root of project</li></ul><div class="language-yaml"><pre><code><span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>10.22.0
<span class="token key atrule">pages</span><span class="token punctuation">:</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> node_modules/
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> yarn install <span class="token comment"># npm install</span>
    <span class="token punctuation">-</span> yarn docs<span class="token punctuation">:</span>build <span class="token comment"># npm run docs:build</span>
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> public
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
</code></pre></div>__VP_STATIC_END__`,26),p=[o];function c(i,l,u,r,d,k){return s(),a("div",null,p)}var m=n(e,[["render",c]]);export{h as __pageData,m as default};
