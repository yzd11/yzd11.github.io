// 文章没写 cover / description 时自动补上：
// cover 取正文第一张图，description 取“一句话总结”
hexo.extend.filter.register('before_post_render', function (data) {
  if (data.layout !== 'post') return data;

  if (!data.cover) {
    const img = data.content.match(/!\[[^\]]*\]\(([^)\s]+)/);
    if (img) {
      const src = img[1];
      data.cover = /^(https?:)?\//.test(src) ? src : '/' + data.path + src.split('/').pop();
    }
  }

  if (!data.description) {
    const summary = data.content.match(/\*\*一句话总结\*\*[:：]\s*(.+)/);
    if (summary) data.description = summary[1].trim();
  }
  return data;
});
