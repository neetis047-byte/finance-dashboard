
const SEED_TRANSACTIONS = [
  { id: 1,  date: '2024-11-03', desc: 'Monthly Salary',        category: 'Salary',        type: 'income',  amount: 95000 },
  { id: 2,  date: '2024-11-05', desc: 'Swiggy Food Order',     category: 'Food',          type: 'expense', amount: 820 },
  { id: 3,  date: '2024-11-08', desc: 'Electricity Bill',      category: 'Utilities',     type: 'expense', amount: 1450 },
  { id: 4,  date: '2024-11-10', desc: 'Freelance Project',     category: 'Freelance',     type: 'income',  amount: 22000 },
  { id: 5,  date: '2024-11-12', desc: 'Amazon Shopping',       category: 'Shopping',      type: 'expense', amount: 3200 },
  { id: 6,  date: '2024-11-14', desc: 'Ola Cabs',              category: 'Transport',     type: 'expense', amount: 480 },
  { id: 7,  date: '2024-11-15', desc: 'Netflix Subscription',  category: 'Entertainment', type: 'expense', amount: 649 },
  { id: 8,  date: '2024-11-17', desc: 'Zepto Groceries',       category: 'Food',          type: 'expense', amount: 1200 },
  { id: 9,  date: '2024-11-18', desc: 'Gym Membership',        category: 'Health',        type: 'expense', amount: 2000 },
  { id: 10, date: '2024-11-20', desc: 'SIP Investment',        category: 'Investment',    type: 'expense', amount: 10000 },
  { id: 11, date: '2024-11-22', desc: 'Mutual Fund Return',    category: 'Investment',    type: 'income',  amount: 3400 },
  { id: 12, date: '2024-11-25', desc: 'Zomato Order',          category: 'Food',          type: 'expense', amount: 650 },
  { id: 13, date: '2024-11-27', desc: 'Rapido Bike',           category: 'Transport',     type: 'expense', amount: 120 },
  { id: 14, date: '2024-11-28', desc: 'Medicine Purchase',     category: 'Health',        type: 'expense', amount: 380 },
  { id: 15, date: '2024-11-30', desc: 'Spotify Premium',       category: 'Entertainment', type: 'expense', amount: 119 },
  { id: 16, date: '2024-10-03', desc: 'Monthly Salary',        category: 'Salary',        type: 'income',  amount: 95000 },
  { id: 17, date: '2024-10-07', desc: 'Blinkit Groceries',     category: 'Food',          type: 'expense', amount: 1850 },
  { id: 18, date: '2024-10-10', desc: 'Jio Recharge',          category: 'Utilities',     type: 'expense', amount: 299 },
  { id: 19, date: '2024-10-12', desc: 'Weekend Trip',          category: 'Entertainment', type: 'expense', amount: 8500 },
  { id: 20, date: '2024-10-15', desc: 'Freelance Design',      category: 'Freelance',     type: 'income',  amount: 15000 },
  { id: 21, date: '2024-10-18', desc: 'Nykaa Shopping',        category: 'Shopping',      type: 'expense', amount: 2200 },
  { id: 22, date: '2024-10-20', desc: 'SIP Investment',        category: 'Investment',    type: 'expense', amount: 10000 },
  { id: 23, date: '2024-10-22', desc: 'Metro Card Recharge',   category: 'Transport',     type: 'expense', amount: 500 },
  { id: 24, date: '2024-10-25', desc: 'Doctor Consultation',   category: 'Health',        type: 'expense', amount: 800 },
  { id: 25, date: '2024-10-28', desc: 'Book Purchase',         category: 'Shopping',      type: 'expense', amount: 650 },
  { id: 26, date: '2024-09-03', desc: 'Monthly Salary',        category: 'Salary',        type: 'income',  amount: 95000 },
  { id: 27, date: '2024-09-06', desc: 'Food Delivery Zomato',  category: 'Food',          type: 'expense', amount: 1100 },
  { id: 28, date: '2024-09-10', desc: 'Water & Internet Bill', category: 'Utilities',     type: 'expense', amount: 1800 },
  { id: 29, date: '2024-09-13', desc: 'Concert Tickets',       category: 'Entertainment', type: 'expense', amount: 3000 },
  { id: 30, date: '2024-09-15', desc: 'Freelance Writing',     category: 'Freelance',     type: 'income',  amount: 8000 },
  { id: 31, date: '2024-09-18', desc: 'Flipkart Order',        category: 'Shopping',      type: 'expense', amount: 4500 },
  { id: 32, date: '2024-09-20', desc: 'SIP Investment',        category: 'Investment',    type: 'expense', amount: 10000 },
  { id: 33, date: '2024-09-22', desc: 'Auto Rickshaw',         category: 'Transport',     type: 'expense', amount: 180 },
  { id: 34, date: '2024-09-24', desc: 'Protein Supplements',   category: 'Health',        type: 'expense', amount: 1400 },
  { id: 35, date: '2024-09-28', desc: 'Dividend Income',       category: 'Investment',    type: 'income',  amount: 2100 },
  { id: 36, date: '2024-08-03', desc: 'Monthly Salary',        category: 'Salary',        type: 'income',  amount: 95000 },
  { id: 37, date: '2024-08-08', desc: 'Restaurant Dining',     category: 'Food',          type: 'expense', amount: 2400 },
  { id: 38, date: '2024-08-12', desc: 'Electricity Bill',      category: 'Utilities',     type: 'expense', amount: 1700 },
  { id: 39, date: '2024-08-14', desc: 'Movie Tickets',         category: 'Entertainment', type: 'expense', amount: 900 },
  { id: 40, date: '2024-08-20', desc: 'SIP Investment',        category: 'Investment',    type: 'expense', amount: 10000 },
  { id: 41, date: '2024-08-22', desc: 'Cab to Airport',        category: 'Transport',     type: 'expense', amount: 1200 },
  { id: 42, date: '2024-08-25', desc: 'Freelance Project',     category: 'Freelance',     type: 'income',  amount: 18000 },
  { id: 43, date: '2024-07-03', desc: 'Monthly Salary',        category: 'Salary',        type: 'income',  amount: 95000 },
  { id: 44, date: '2024-07-09', desc: 'Groceries Zepto',       category: 'Food',          type: 'expense', amount: 2100 },
  { id: 45, date: '2024-07-14', desc: 'Prime Video',           category: 'Entertainment', type: 'expense', amount: 299 },
  { id: 46, date: '2024-07-18', desc: 'New Shoes',             category: 'Shopping',      type: 'expense', amount: 5500 },
  { id: 47, date: '2024-07-22', desc: 'SIP Investment',        category: 'Investment',    type: 'expense', amount: 10000 },
  { id: 48, date: '2024-07-28', desc: 'Mutual Fund Return',    category: 'Investment',    type: 'income',  amount: 4200 },
];

const CAT_META = {
  'Food':          { icon: '🍜', color: '#e07c54' },
  'Transport':     { icon: '🚗', color: '#6096d0' },
  'Entertainment': { icon: '🎬', color: '#9b6de0' },
  'Shopping':      { icon: '🛍️', color: '#d0a060' },
  'Health':        { icon: '💊', color: '#4caf7d' },
  'Utilities':     { icon: '💡', color: '#60c0d0' },
  'Salary':        { icon: '💼', color: '#c9a84c' },
  'Freelance':     { icon: '💻', color: '#80c880' },
  'Investment':    { icon: '📈', color: '#e0a060' },
  'Other':         { icon: '◦', color: '#888' },
};

const state = {
  role: 'viewer',
  transactions: [],
  filters: { search: '', type: 'all', category: 'all', sort: 'date-desc' },
  editingId: null,
  charts: {},
};

function loadState() {
  const saved = localStorage.getItem('aurum_transactions');
  state.transactions = saved ? JSON.parse(saved) : [...SEED_TRANSACTIONS];
  const savedRole = localStorage.getItem('aurum_role');
  if (savedRole) state.role = savedRole;
}

function saveTransactions() {
  localStorage.setItem('aurum_transactions', JSON.stringify(state.transactions));
}

function fmt(amount) {
  return '₹' + amount.toLocaleString('en-IN');
}

function fmtDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function fmtShort(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
}

function getMonthKey(dateStr) {
  return dateStr.slice(0, 7);
}

function getMonthLabel(ym) {
  const [y, m] = ym.split('-');
  return new Date(y, m - 1).toLocaleDateString('en-IN', { month: 'short', year: '2-digit' });
}

function getCurrentMonth() {
  const txns = state.transactions;
  if (!txns.length) return '2024-11';
  const sorted = [...txns].sort((a, b) => b.date.localeCompare(a.date));
  return getMonthKey(sorted[0].date);
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2500);
}


function applyRole() {
  const adminEls = document.querySelectorAll('.admin-only');
  adminEls.forEach(el => {
    el.classList.toggle('hidden', state.role !== 'admin');
  });
  const badge = document.getElementById('roleBadge');
  const roleText = document.getElementById('roleText');
  const mobileRole = document.getElementById('mobileRole');
  const dot = badge.querySelector('.badge-dot');
  roleText.textContent = state.role === 'admin' ? 'Admin' : 'Viewer';
  mobileRole.textContent = state.role === 'admin' ? 'Admin' : 'Viewer';
  dot.style.background = state.role === 'admin' ? 'var(--gold)' : 'var(--green)';
  dot.style.boxShadow = state.role === 'admin' ? '0 0 6px var(--gold)' : '0 0 6px var(--green)';
}

const SECTION_TITLES = {
  dashboard:    ['Financial Overview', 'Your wealth at a glance'],
  transactions: ['Transactions', 'Browse and manage your activity'],
  insights:     ['Insights', 'Patterns and observations from your data'],
};

function navigate(sectionId) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  const section = document.getElementById('section-' + sectionId);
  if (section) {
    section.classList.add('active');
    // Re-trigger animations
    section.querySelectorAll('.animate-in').forEach((el, i) => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
  }

  document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(el => {
    el.classList.add('active');
  });

  const [title, sub] = SECTION_TITLES[sectionId] || ['Dashboard', ''];
  document.getElementById('pageTitle').textContent = title;
  document.getElementById('pageSubtitle').innerHTML = sub + ' — <span id="currentDate"></span>';
  setDate();

  if (sectionId === 'insights') renderInsights();
  if (sectionId === 'transactions') renderTransactionTable();
}

function setDate() {
  const el = document.getElementById('currentDate');
  if (el) el.textContent = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}

function renderCards() {
  const curMonth = getCurrentMonth();
  const prevMonths = [...new Set(state.transactions.map(t => getMonthKey(t.date)))]
    .sort().reverse();
  const prevMonth = prevMonths[1] || curMonth;

  const cur = state.transactions.filter(t => getMonthKey(t.date) === curMonth);
  const prev = state.transactions.filter(t => getMonthKey(t.date) === prevMonth);

  const income  = cur.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const expense = cur.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
  const balance = income - expense;
  const prevIncome  = prev.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
  const prevExpense = prev.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);

  const pctChange = (cur, prev) => {
    if (!prev) return null;
    const diff = ((cur - prev) / prev * 100).toFixed(1);
    return diff;
  };

  document.getElementById('cardBalance').textContent = fmt(balance);
  const bd = pctChange(balance, prevIncome - prevExpense);
  const balDelta = document.getElementById('cardBalanceDelta');
  if (bd !== null) {
    balDelta.textContent = (bd > 0 ? '+' : '') + bd + '%';
    balDelta.className = 'card-delta ' + (bd >= 0 ? 'positive' : 'negative');
  }

  document.getElementById('cardIncome').textContent = fmt(income);
  const id_ = pctChange(income, prevIncome);
  if (id_ !== null) {
    const el = document.getElementById('cardIncomeDelta');
    el.textContent = (id_ > 0 ? '+' : '') + id_ + '%';
    el.className = 'card-delta ' + (id_ >= 0 ? 'positive' : 'negative');
  }
  document.getElementById('cardIncomeCount').textContent =
    cur.filter(t => t.type === 'income').length + ' transactions';

  document.getElementById('cardExpense').textContent = fmt(expense);
  const ed = pctChange(expense, prevExpense);
  if (ed !== null) {
    const el = document.getElementById('cardExpenseDelta');
    el.textContent = (ed > 0 ? '+' : '') + ed + '%';
    el.className = 'card-delta ' + (ed >= 0 ? 'negative' : 'positive');
  }
  document.getElementById('cardExpenseCount').textContent =
    cur.filter(t => t.type === 'expense').length + ' transactions';

  const savingsRate = income > 0 ? Math.round((balance / income) * 100) : 0;
  document.getElementById('cardSavings').textContent = savingsRate + '%';
  document.getElementById('savingsFill').style.width = Math.max(0, Math.min(100, savingsRate)) + '%';

  renderSparkline();
}

function renderSparkline() {
  const canvas = document.getElementById('sparkBalance');
  if (!canvas) return;
  const months = [...new Set(state.transactions.map(t => getMonthKey(t.date)))].sort().slice(-6);
  const data = months.map(m => {
    const txns = state.transactions.filter(t => getMonthKey(t.date) === m);
    const inc = txns.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const exp = txns.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    return inc - exp;
  });

  if (state.charts.sparkline) state.charts.sparkline.destroy();
  state.charts.sparkline = new Chart(canvas, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{ data, borderColor: 'rgba(201,168,76,0.7)', borderWidth: 1.5, pointRadius: 0, tension: 0.4, fill: false }]
    },
    options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: { enabled: false } }, scales: { x: { display: false }, y: { display: false } }, animation: false }
  });
}
function renderTrendChart() {
  const months = [...new Set(state.transactions.map(t => getMonthKey(t.date)))].sort().slice(-6);
  const incomeData = months.map(m => state.transactions.filter(t => getMonthKey(t.date) === m && t.type === 'income').reduce((s, t) => s + t.amount, 0));
  const expenseData = months.map(m => state.transactions.filter(t => getMonthKey(t.date) === m && t.type === 'expense').reduce((s, t) => s + t.amount, 0));

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const gridColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)';
  const tickColor = isDark ? '#5c5955' : '#aaa49e';

  if (state.charts.trend) state.charts.trend.destroy();
  state.charts.trend = new Chart(document.getElementById('trendChart'), {
    type: 'bar',
    data: {
      labels: months.map(getMonthLabel),
      datasets: [
        { label: 'Income', data: incomeData, backgroundColor: 'rgba(76,175,125,0.5)', borderColor: '#4caf7d', borderWidth: 1.5, borderRadius: 4 },
        { label: 'Expenses', data: expenseData, backgroundColor: 'rgba(224,86,86,0.45)', borderColor: '#e05656', borderWidth: 1.5, borderRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + fmt(ctx.raw) } } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: tickColor, font: { family: 'DM Mono', size: 10 } } },
        y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { family: 'DM Mono', size: 10 }, callback: v => '₹' + (v/1000).toFixed(0) + 'k' } }
      }
    }
  });
}

function renderDonutChart() {
  const curMonth = getCurrentMonth();
  const expenses = state.transactions.filter(t => getMonthKey(t.date) === curMonth && t.type === 'expense');
  const byCat = {};
  expenses.forEach(t => { byCat[t.category] = (byCat[t.category] || 0) + t.amount; });
  const labels = Object.keys(byCat);
  const data = labels.map(k => byCat[k]);
  const colors = labels.map(k => CAT_META[k]?.color || '#888');

  if (state.charts.donut) state.charts.donut.destroy();
  state.charts.donut = new Chart(document.getElementById('donutChart'), {
    type: 'doughnut',
    data: { labels, datasets: [{ data, backgroundColor: colors, borderWidth: 0, hoverOffset: 6 }] },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '65%',
      plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => ' ' + ctx.label + ': ' + fmt(ctx.raw) } } }
    }
  });

  const legend = document.getElementById('donutLegend');
  legend.innerHTML = labels.map((l, i) => `
    <div class="donut-legend-item">
      <span class="donut-legend-dot" style="background:${colors[i]}"></span>
      <span>${l}</span>
    </div>
  `).join('');
}
function renderRecentTransactions() {
  const recent = [...state.transactions]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  const list = document.getElementById('recentTxnList');
  list.innerHTML = recent.map(t => {
    const meta = CAT_META[t.category] || CAT_META['Other'];
    const sign = t.type === 'income' ? '+' : '-';
    return `
      <div class="mini-txn">
        <div class="mini-txn-left">
          <div class="mini-txn-icon" style="background:${meta.color}20">${meta.icon}</div>
          <div>
            <div class="mini-txn-desc">${t.desc}</div>
            <div class="mini-txn-cat">${t.category}</div>
          </div>
        </div>
        <div class="mini-txn-right">
          <div class="mini-txn-amount ${t.type}">${sign}${fmt(t.amount)}</div>
          <div class="mini-txn-date">${fmtShort(t.date)}</div>
        </div>
      </div>
    `;
  }).join('');
}
function getFilteredTransactions() {
  const { search, type, category, sort } = state.filters;
  let txns = [...state.transactions];

  if (search) {
    const q = search.toLowerCase();
    txns = txns.filter(t =>
      t.desc.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  }
  if (type !== 'all') txns = txns.filter(t => t.type === type);
  if (category !== 'all') txns = txns.filter(t => t.category === category);

  txns.sort((a, b) => {
    if (sort === 'date-desc') return b.date.localeCompare(a.date);
    if (sort === 'date-asc')  return a.date.localeCompare(b.date);
    if (sort === 'amount-desc') return b.amount - a.amount;
    if (sort === 'amount-asc')  return a.amount - b.amount;
    return 0;
  });

  return txns;
}

function renderTransactionTable() {
  const txns = getFilteredTransactions();
  const tbody = document.getElementById('txnTableBody');
  const empty = document.getElementById('txnEmpty');
  const footer = document.getElementById('txnFooter');
  const isAdmin = state.role === 'admin';

  if (!txns.length) {
    tbody.innerHTML = '';
    empty.classList.remove('hidden');
    footer.textContent = '';
    return;
  }

  empty.classList.add('hidden');
  tbody.innerHTML = txns.map(t => {
    const meta = CAT_META[t.category] || CAT_META['Other'];
    const sign = t.type === 'income' ? '+' : '-';
    return `
      <tr>
        <td class="txn-date">${fmtDate(t.date)}</td>
        <td>${t.desc}</td>
        <td><span class="txn-cat-badge">${meta.icon} ${t.category}</span></td>
        <td><span class="txn-type-badge ${t.type}">${t.type.toUpperCase()}</span></td>
        <td class="txn-amount ${t.type}">${sign}${fmt(t.amount)}</td>
        ${isAdmin ? `<td><div class="txn-actions">
          <button class="btn-edit" onclick="openEdit(${t.id})" title="Edit">✎</button>
          <button class="btn-delete" onclick="deleteTransaction(${t.id})" title="Delete">✕</button>
        </div></td>` : ''}
      </tr>
    `;
  }).join('');

  const total = txns.reduce((s, t) => s + (t.type === 'income' ? t.amount : -t.amount), 0);
  footer.textContent = `${txns.length} transaction${txns.length !== 1 ? 's' : ''} shown • Net: ${total >= 0 ? '+' : ''}${fmt(Math.abs(total))}`;
}

function populateCategoryFilter() {
  const cats = [...new Set(state.transactions.map(t => t.category))].sort();
  const sel = document.getElementById('filterCategory');
  sel.innerHTML = '<option value="all">All Categories</option>' +
    cats.map(c => `<option value="${c}">${c}</option>`).join('');
}

function renderInsights() {
  const months = [...new Set(state.transactions.map(t => getMonthKey(t.date)))].sort().reverse();
  const curMonth = months[0];
  const curExp = state.transactions.filter(t => getMonthKey(t.date) === curMonth && t.type === 'expense');

  const byCat = {};
  curExp.forEach(t => { byCat[t.category] = (byCat[t.category] || 0) + t.amount; });
  const topCat = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0];
  const topMeta = topCat ? (CAT_META[topCat[0]] || CAT_META['Other']) : null;

  document.getElementById('insightTop').innerHTML = topCat ? `
    <div class="insight-label">TOP SPENDING CATEGORY</div>
    <div class="insight-value">${topMeta.icon} ${topCat[0]}</div>
    <div class="insight-sub">${fmt(topCat[1])} this month — ${((topCat[1] / curExp.reduce((s,t)=>s+t.amount,0))*100).toFixed(0)}% of expenses</div>
  ` : '<div class="insight-label">No data</div>';

  
  const curIncome = state.transactions.filter(t => getMonthKey(t.date) === curMonth && t.type === 'income').reduce((s,t) => s+t.amount, 0);
  const curExpTotal = curExp.reduce((s,t) => s+t.amount, 0);
  const savings = curIncome - curExpTotal;
  const rate = curIncome > 0 ? ((savings / curIncome) * 100).toFixed(0) : 0;
  document.getElementById('insightSavings').innerHTML = `
    <div class="insight-label">SAVINGS THIS MONTH</div>
    <div class="insight-value">${fmt(savings)}</div>
    <div class="insight-sub">${rate}% savings rate · ${rate > 20 ? '✓ Great discipline' : rate > 10 ? '~ Moderate savings' : '⚠ Consider reducing expenses'}</div>
  `;

  const catCounts = {};
  curExp.forEach(t => { catCounts[t.category] = (catCounts[t.category] || 0) + 1; });
  const freqCat = Object.entries(catCounts).sort((a,b) => b[1]-a[1])[0];
  document.getElementById('insightFrequent').innerHTML = freqCat ? `
    <div class="insight-label">MOST FREQUENT CATEGORY</div>
    <div class="insight-value">${CAT_META[freqCat[0]]?.icon || '◦'} ${freqCat[0]}</div>
    <div class="insight-sub">${freqCat[1]} transactions in ${getMonthLabel(curMonth)}</div>
  ` : '<div class="insight-label">No data</div>';

  const allTxns = state.transactions.filter(t => getMonthKey(t.date) === curMonth);
  const avg = allTxns.length > 0 ? Math.round(allTxns.reduce((s,t)=>s+t.amount,0) / allTxns.length) : 0;
  document.getElementById('insightAvg').innerHTML = `
    <div class="insight-label">AVG TRANSACTION SIZE</div>
    <div class="insight-value">${fmt(avg)}</div>
    <div class="insight-sub">${allTxns.length} total transactions in ${getMonthLabel(curMonth)}</div>
  `;

  renderCompareChart();
  renderCategoryBars();
}

function renderCompareChart() {
  const months = [...new Set(state.transactions.map(t => getMonthKey(t.date)))].sort().slice(-6);
  const incData = months.map(m => state.transactions.filter(t => getMonthKey(t.date) === m && t.type === 'income').reduce((s,t)=>s+t.amount,0));
  const expData = months.map(m => state.transactions.filter(t => getMonthKey(t.date) === m && t.type === 'expense').reduce((s,t)=>s+t.amount,0));

  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  const gridColor = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.06)';
  const tickColor = isDark ? '#5c5955' : '#aaa49e';

  if (state.charts.compare) state.charts.compare.destroy();
  state.charts.compare = new Chart(document.getElementById('compareChart'), {
    type: 'line',
    data: {
      labels: months.map(getMonthLabel),
      datasets: [
        { label: 'Income', data: incData, borderColor: '#4caf7d', backgroundColor: 'rgba(76,175,125,0.08)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#4caf7d' },
        { label: 'Expenses', data: expData, borderColor: '#e05656', backgroundColor: 'rgba(224,86,86,0.06)', fill: true, tension: 0.4, pointRadius: 4, pointBackgroundColor: '#e05656' }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: tickColor, font: { family: 'DM Mono', size: 10 } } }, tooltip: { callbacks: { label: ctx => ' ' + fmt(ctx.raw) } } },
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: tickColor, font: { family: 'DM Mono', size: 10 } } },
        y: { grid: { color: gridColor }, ticks: { color: tickColor, font: { family: 'DM Mono', size: 10 }, callback: v => '₹' + (v/1000).toFixed(0) + 'k' } }
      }
    }
  });
}

function renderCategoryBars() {
  const curMonth = getCurrentMonth();
  const expenses = state.transactions.filter(t => getMonthKey(t.date) === curMonth && t.type === 'expense');
  const byCat = {};
  expenses.forEach(t => { byCat[t.category] = (byCat[t.category] || 0) + t.amount; });
  const sorted = Object.entries(byCat).sort((a,b) => b[1]-a[1]);
  const max = sorted[0]?.[1] || 1;

  const container = document.getElementById('categoryBars');
  container.innerHTML = sorted.map(([cat, amt]) => {
    const meta = CAT_META[cat] || CAT_META['Other'];
    const pct = (amt / max * 100).toFixed(0);
    return `
      <div class="cat-bar-row">
        <div class="cat-bar-header">
          <span class="cat-bar-name">${meta.icon} ${cat}</span>
          <span class="cat-bar-amount">${fmt(amt)}</span>
        </div>
        <div class="cat-bar-track">
          <div class="cat-bar-fill" style="width:${pct}%;background:${meta.color}"></div>
        </div>
      </div>
    `;
  }).join('');
}

function openAdd() {
  state.editingId = null;
  document.getElementById('modalTitle').textContent = 'Add Transaction';
  document.getElementById('fDesc').value = '';
  document.getElementById('fAmount').value = '';
  document.getElementById('fType').value = 'expense';
  document.getElementById('fCategory').value = 'Food';
  document.getElementById('fDate').value = new Date().toISOString().slice(0, 10);
  document.getElementById('modalOverlay').classList.remove('hidden');
}

function openEdit(id) {
  const txn = state.transactions.find(t => t.id === id);
  if (!txn) return;
  state.editingId = id;
  document.getElementById('modalTitle').textContent = 'Edit Transaction';
  document.getElementById('fDesc').value = txn.desc;
  document.getElementById('fAmount').value = txn.amount;
  document.getElementById('fType').value = txn.type;
  document.getElementById('fCategory').value = txn.category;
  document.getElementById('fDate').value = txn.date;
  document.getElementById('modalOverlay').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.add('hidden');
  state.editingId = null;
}

function saveTransaction() {
  const desc     = document.getElementById('fDesc').value.trim();
  const amount   = parseFloat(document.getElementById('fAmount').value);
  const type     = document.getElementById('fType').value;
  const category = document.getElementById('fCategory').value;
  const date     = document.getElementById('fDate').value;

  if (!desc || isNaN(amount) || amount <= 0 || !date) {
    showToast('Please fill all fields correctly.');
    return;
  }

  if (state.editingId !== null) {
    const idx = state.transactions.findIndex(t => t.id === state.editingId);
    if (idx !== -1) state.transactions[idx] = { ...state.transactions[idx], desc, amount, type, category, date };
    showToast('Transaction updated.');
  } else {
    const newId = Math.max(0, ...state.transactions.map(t => t.id)) + 1;
    state.transactions.unshift({ id: newId, desc, amount, type, category, date });
    showToast('Transaction added.');
  }

  saveTransactions();
  closeModal();
  renderAll();
}

function deleteTransaction(id) {
  if (!confirm('Delete this transaction?')) return;
  state.transactions = state.transactions.filter(t => t.id !== id);
  saveTransactions();
  renderAll();
  showToast('Transaction deleted.');
}

function exportCSV() {
  const headers = ['Date', 'Description', 'Category', 'Type', 'Amount'];
  const rows = state.transactions.map(t => [t.date, `"${t.desc}"`, t.category, t.type, t.amount]);
  const csv = [headers, ...rows].map(r => r.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'aurum-transactions.csv';
  a.click();
  URL.revokeObjectURL(url);
  showToast('Exported as CSV.');
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('aurum_theme', next);
  // Re-render charts to pick up new colors
  setTimeout(renderCharts, 50);
}

function loadTheme() {
  const saved = localStorage.getItem('aurum_theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
}

function renderCharts() {
  renderTrendChart();
  renderDonutChart();
}

function renderAll() {
  renderCards();
  renderCharts();
  renderRecentTransactions();
  populateCategoryFilter();
  renderTransactionTable();
}
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  loadState();
  setDate();


  document.querySelectorAll('[data-section]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      navigate(el.dataset.section);
      // Close sidebar on mobile
      document.getElementById('sidebar').classList.remove('open');
      document.querySelector('.sidebar-overlay')?.classList.remove('visible');
    });
  });

  
  const roleSelect = document.getElementById('roleSelect');
  roleSelect.value = state.role;
  roleSelect.addEventListener('change', () => {
    state.role = roleSelect.value;
    localStorage.setItem('aurum_role', state.role);
    applyRole();
    renderTransactionTable();
    showToast(`Role switched to ${state.role === 'admin' ? 'Admin' : 'Viewer'}.`);
  });

  
  document.getElementById('searchInput').addEventListener('input', e => {
    state.filters.search = e.target.value;
    renderTransactionTable();
  });
  document.getElementById('filterType').addEventListener('change', e => {
    state.filters.type = e.target.value;
    renderTransactionTable();
  });
  document.getElementById('filterCategory').addEventListener('change', e => {
    state.filters.category = e.target.value;
    renderTransactionTable();
  });
  document.getElementById('sortBy').addEventListener('change', e => {
    state.filters.sort = e.target.value;
    renderTransactionTable();
  });

  
  document.getElementById('addTxnBtn').addEventListener('click', openAdd);
  document.getElementById('exportBtn').addEventListener('click', exportCSV);

  document.getElementById('modalSubmit').addEventListener('click', saveTransaction);
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalCancel').addEventListener('click', closeModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);

  const sidebar = document.getElementById('sidebar');
  let overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  document.body.appendChild(overlay);

  document.getElementById('hamburger').addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('visible');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
  });
  applyRole();
  renderAll();
  navigate('dashboard');
});
