// 用 KaTeX 渲染 $...$ 与 $$...$$ 公式
hexo.extend.filter.register('markdown-it:renderer', function (md) {
  md.use(require('markdown-it-texmath'), {
    engine: require('katex'),
    delimiters: 'dollars'
  });
});

// 公式块里的 \$（美元符号）会被 texmath 当成定界符，渲染前换成 KaTeX 的写法
hexo.extend.filter.register('before_post_render', function (data) {
  data.content = data.content.replace(/\$\$[\s\S]+?\$\$/g, block => block.replace(/\\\$/g, '\\text{\\textdollar}'));
  return data;
});
