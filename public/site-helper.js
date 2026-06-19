const config = {
  baseUrl: "https://main-app-leyu.com.cn",
  keyword: "乐鱼体育",
  version: "1.2.0"
};

function createCard(title, content, type = "info") {
  const card = document.createElement("div");
  card.className = `helper-card helper-card-${type}`;
  const header = document.createElement("div");
  header.className = "card-header";
  header.textContent = title;
  const body = document.createElement("div");
  body.className = "card-body";
  body.textContent = content;
  card.appendChild(header);
  card.appendChild(body);
  return card;
}

function createBadge(text, color = "#2d8cf0") {
  const badge = document.createElement("span");
  badge.className = "keyword-badge";
  badge.textContent = text;
  badge.style.backgroundColor = color;
  badge.style.color = "#ffffff";
  badge.style.padding = "4px 10px";
  badge.style.borderRadius = "12px";
  badge.style.fontSize = "0.85em";
  badge.style.margin = "4px";
  badge.style.display = "inline-block";
  return badge;
}

function renderAccessNotice() {
  const notice = document.createElement("div");
  notice.className = "access-notice";
  notice.style.padding = "16px";
  notice.style.background = "#f0f9ff";
  notice.style.border = "1px solid #bae6fd";
  notice.style.borderRadius = "8px";
  notice.style.marginBottom = "20px";
  const link = document.createElement("a");
  link.href = config.baseUrl;
  link.textContent = config.baseUrl;
  link.style.color = "#1d4ed8";
  link.target = "_blank";
  const p = document.createElement("p");
  p.innerHTML = `欢迎访问 <strong>${config.keyword}</strong> 官方站点：`;
  p.appendChild(link);
  notice.appendChild(p);
  return notice;
}

function renderKeywordBadges() {
  const tagList = ["体育", "赛事", "电竞", "真人", "棋牌", "彩票", "电子"];
  const container = document.createElement("div");
  container.className = "badge-container";
  container.style.margin = "16px 0";
  const label = document.createElement("span");
  label.textContent = "热门关键词：";
  label.style.fontWeight = "600";
  label.style.marginRight = "8px";
  container.appendChild(label);
  tagList.forEach((tag, index) => {
    const colors = ["#2d8cf0", "#19be6b", "#ff9900", "#ed3f14", "#808695"];
    const badge = createBadge(tag, colors[index % colors.length]);
    container.appendChild(badge);
  });
  return container;
}

function renderTipCards() {
  const cards = [
    { title: "使用说明", content: "本站提供最新体育赛事资讯与投注服务，请确保网络畅通。" },
    { title: "安全提示", content: "请通过官方渠道访问，谨防仿冒站点。认准域名 " + config.baseUrl },
    { title: "联系支持", content: "如遇任何问题，可联系在线客服或发送邮件至 support@" + config.baseUrl.replace("https://", "") }
  ];
  const wrapper = document.createElement("div");
  wrapper.className = "cards-wrapper";
  wrapper.style.display = "flex";
  wrapper.style.flexWrap = "wrap";
  wrapper.style.gap = "12px";
  cards.forEach((c, i) => {
    const types = ["info", "warning", "success"];
    const card = createCard(c.title, c.content, types[i % types.length]);
    wrapper.appendChild(card);
  });
  return wrapper;
}

function initSiteHelper() {
  const container = document.createElement("div");
  container.id = "site-helper-root";
  container.style.maxWidth = "720px";
  container.style.margin = "0 auto";
  container.style.padding = "20px";
  container.style.fontFamily = "system-ui, -apple-system, sans-serif";

  const heading = document.createElement("h2");
  heading.textContent = `⚡ ${config.keyword} 助手`;
  heading.style.borderBottom = "2px solid #2d8cf0";
  heading.style.paddingBottom = "8px";
  container.appendChild(heading);

  container.appendChild(renderAccessNotice());
  container.appendChild(renderKeywordBadges());
  container.appendChild(renderTipCards());

  document.body.appendChild(container);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSiteHelper);
} else {
  initSiteHelper();
}