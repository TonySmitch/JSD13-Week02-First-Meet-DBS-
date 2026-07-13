const orders = [
  { order_number: "ORD-20251026-0001", customer: "Tony", product: "บริการอัดรูปด่วนสำหรับพาสปอร์ตและวีซ่า", total_amount: 34.00, payment_method: "promptpay", delivery_courier: "Flash Express", delivery_status: "delivered", order_status: "completed", date: "2025-10-26", items: [{ title: "บริการอัดรูปด่วนสำหรับพาสปอร์ตและวีซ่า", price: 34.00, quantity: 1, size: "1.5 inches", template: "White Background" }], pricing: { subtotal: 34.00, shipping_fee: 0.00, discount: 0.00, total_amount: 34.00, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "Flash Express", status: "delivered", address: { recipient_name: "Tony", phone_number: "0812345678", address_line: "123/45 ถนนร่มเกล้า", district: "มีนบุรี", province: "กรุงเทพมหานคร", postal_code: "10510" } } },
  { order_number: "ORD-20251026-0002", customer: "Mee", product: "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", total_amount: 19.50, payment_method: "true_wallet", delivery_courier: "J&T Express", delivery_status: "delivered", order_status: "completed", date: "2025-10-26", items: [{ title: "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", price: 19.50, quantity: 1, size: "1 inch", template: "Blue Background" }], pricing: { subtotal: 19.50, shipping_fee: 0.00, discount: 0.00, total_amount: 19.50, currency: "THB" }, payment: { method: "true_wallet", status: "paid" }, delivery: { courier: "J&T Express", status: "delivered", address: { recipient_name: "Mee", phone_number: "0898765432", address_line: "456 แขวงแสนแสบ", district: "มีนบุรี", province: "กรุงเทพมหานคร", postal_code: "10510" } } },
  { order_number: "ORD-20251026-0003", customer: "Somchai", product: "บริการอัดรูปด่วนสำหรับพาสปอร์ตและวีซ่า", total_amount: 25.00, payment_method: "promptpay", delivery_courier: "Thailand Post", delivery_status: "shipped", order_status: "processing", date: "2025-10-26", items: [{ title: "บริการอัดรูปด่วนสำหรับพาสปอร์ตและวีซ่า", price: 25.00, quantity: 1, size: "Passport", template: "Thailand Passport" }], pricing: { subtotal: 25.00, shipping_fee: 0.00, discount: 0.00, total_amount: 25.00, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "Thailand Post", status: "shipped", address: { recipient_name: "Somchai", phone_number: "0861234567", address_line: "789 หมู่ 2", district: "เมือง", province: "นนทบุรี", postal_code: "11000" } } },
  { order_number: "ORD-20251026-0004", customer: "Anan", product: "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", total_amount: 9.50, payment_method: "credit_card", delivery_courier: "Flash Express", delivery_status: "pending", order_status: "processing", date: "2025-10-26", items: [{ title: "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", price: 9.50, quantity: 1, size: "2 inches", template: "Formal Suit Template" }], pricing: { subtotal: 9.50, shipping_fee: 0.00, discount: 0.00, total_amount: 9.50, currency: "THB" }, payment: { method: "credit_card", status: "paid" }, delivery: { courier: "Flash Express", status: "pending", address: { recipient_name: "Anan", phone_number: "0855555555", address_line: "11/1 ถนนวิภาวดี", district: "จตุจักร", province: "กรุงเทพมหานคร", postal_code: "10900" } } },
  { order_number: "ORD-20251026-0005", customer: "Wasan", product: "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", total_amount: 13.50, payment_method: "promptpay", delivery_courier: "Kerry Express", delivery_status: "delivered", order_status: "completed", date: "2025-10-26", items: [{ title: "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", price: 13.50, quantity: 1, size: "1 inch", template: "White Background" }], pricing: { subtotal: 13.50, shipping_fee: 0.00, discount: 0.00, total_amount: 13.50, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "Kerry Express", status: "delivered", address: { recipient_name: "Wasan", phone_number: "0844444444", address_line: "99 ซอยสุขุมวิท 23", district: "วัฒนา", province: "กรุงเทพมหานคร", postal_code: "10110" } } },
  { order_number: "ORD-20251026-0006", customer: "Nattaporn", product: "บริการอัดรูปพาสปอร์ต", total_amount: 38.00, payment_method: "promptpay", delivery_courier: "J&T Express", delivery_status: "pending", order_status: "processing", date: "2025-10-26", items: [{ title: "บริการอัดรูปพาสปอร์ต", price: 38.00, quantity: 1, size: "Passport", template: "Japan Visa" }], pricing: { subtotal: 38.00, shipping_fee: 0.00, discount: 0.00, total_amount: 38.00, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "J&T Express", status: "pending", address: { recipient_name: "Nattaporn", phone_number: "0833333333", address_line: "222 ลาดพร้าว", district: "บางกะปิ", province: "กรุงเทพมหานคร", postal_code: "10240" } } },
  { order_number: "ORD-20251027-0001", customer: "Piti", product: "รูปถ่ายด่วน", total_amount: 19.50, payment_method: "promptpay", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-27", items: [{ title: "รูปถ่ายด่วน", price: 19.50, quantity: 1, size: "1.5 inches", template: "White Background" }], pricing: { subtotal: 19.50, shipping_fee: 0.00, discount: 0.00, total_amount: 19.50, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Piti", phone_number: "0822222222", address_line: "55 รังสิต", district: "ธัญบุรี", province: "ปทุมธานี", postal_code: "12110" } } },
  { order_number: "ORD-20251027-0002", customer: "Viroj", product: "บริการอัดรูปวีซ่าขนาดใหญ่", total_amount: 80.00, payment_method: "credit_card", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-27", items: [{ title: "บริการอัดรูปวีซ่าขนาดใหญ่", price: 80.00, quantity: 1, size: "Visa (2x2 inches)", template: "US Visa" }], pricing: { subtotal: 80.00, shipping_fee: 0.00, discount: 0.00, total_amount: 80.00, currency: "THB" }, payment: { method: "credit_card", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Viroj", phone_number: "0811111111", address_line: "88 สีลม", district: "บางรัก", province: "กรุงเทพมหานคร", postal_code: "10500" } } },
  { order_number: "ORD-20251027-0003", customer: "Mana", product: "รูปติดบัตรด่วน", total_amount: 14.00, payment_method: "true_wallet", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-27", items: [{ title: "รูปติดบัตรด่วน", price: 14.00, quantity: 1, size: "1 inch", template: "Blue Background" }], pricing: { subtotal: 14.00, shipping_fee: 0.00, discount: 0.00, total_amount: 14.00, currency: "THB" }, payment: { method: "true_wallet", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Mana", phone_number: "0800000000", address_line: "44 รามอินทรา", district: "บางเขน", province: "กรุงเทพมหานคร", postal_code: "10220" } } },
  { order_number: "ORD-20251028-0001", customer: "Chujai", product: "รูปถ่ายติดบัตร", total_amount: 17.50, payment_method: "promptpay", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-28", items: [{ title: "รูปถ่ายติดบัตร", price: 17.50, quantity: 1, size: "1.5 inches", template: "White Background" }], pricing: { subtotal: 17.50, shipping_fee: 0.00, discount: 0.00, total_amount: 17.50, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Chujai", phone_number: "0891112223", address_line: "12 ปิ่นเกล้า", district: "บางพลัด", province: "กรุงเทพมหานคร", postal_code: "10700" } } },
  { order_number: "ORD-20251028-0002", customer: "Piti 2", product: "บริการอัดรูปพาสปอร์ต", total_amount: 25.00, payment_method: "promptpay", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-28", items: [{ title: "บริการอัดรูปพาสปอร์ต", price: 25.00, quantity: 1, size: "Passport", template: "Thailand Passport" }], pricing: { subtotal: 25.00, shipping_fee: 0.00, discount: 0.00, total_amount: 25.00, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Piti 2", phone_number: "0893334445", address_line: "77 แจ้งวัฒนะ", district: "ปากเกร็ด", province: "นนทบุรี", postal_code: "11120" } } },
  { order_number: "ORD-20251028-0003", customer: "Siri", product: "บริการอัดรูปพาสปอร์ตด่วน", total_amount: 21.00, payment_method: "credit_card", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-28", items: [{ title: "บริการอัดรูปพาสปอร์ตด่วน", price: 21.00, quantity: 1, size: "Passport", template: "Thailand Passport" }], pricing: { subtotal: 21.00, shipping_fee: 0.00, discount: 0.00, total_amount: 21.00, currency: "THB" }, payment: { method: "credit_card", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Siri", phone_number: "0894445556", address_line: "5/5 สาทร", district: "ยานนาวา", province: "กรุงเทพมหานคร", postal_code: "10120" } } },
  { order_number: "ORD-20251029-0001", customer: "Kitti", product: "บริการอัดรูปชุดพาสปอร์ตครอบครัว", total_amount: 57.00, payment_method: "promptpay", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-29", items: [{ title: "บริการอัดรูปชุดพาสปอร์ตครอบครัว", price: 57.00, quantity: 1, size: "Passport", template: "Thailand Passport" }], pricing: { subtotal: 57.00, shipping_fee: 0.00, discount: 0.00, total_amount: 57.00, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Kitti", phone_number: "0895556667", address_line: "101 เพชรบุรี", district: "ราชเทวี", province: "กรุงเทพมหานคร", postal_code: "10400" } } },
  { order_number: "ORD-20251029-0002", customer: "Naree", product: "รูปสมัครงาน", total_amount: 14.50, payment_method: "true_wallet", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-29", items: [{ title: "รูปสมัครงาน", price: 14.50, quantity: 1, size: "2 inches", template: "Formal Suit Template" }], pricing: { subtotal: 14.50, shipping_fee: 0.00, discount: 0.00, total_amount: 14.50, currency: "THB" }, payment: { method: "true_wallet", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Naree", phone_number: "0896667778", address_line: "88/8 เพชรเกษม", district: "ภาษีเจริญ", province: "กรุงเทพมหานคร", postal_code: "10160" } } },
  { order_number: "ORD-20251029-0003", customer: "Prasert", product: "บริการอัดรูปวีซ่าท่องเที่ยว", total_amount: 40.00, payment_method: "credit_card", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-29", items: [{ title: "บริการอัดรูปวีซ่าท่องเที่ยว", price: 40.00, quantity: 1, size: "Visa (2x2 inches)", template: "US Visa" }], pricing: { subtotal: 40.00, shipping_fee: 0.00, discount: 0.00, total_amount: 40.00, currency: "THB" }, payment: { method: "credit_card", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Prasert", phone_number: "0897778889", address_line: "456 พหลโยธิน", district: "สายไหม", province: "กรุงเทพมหานคร", postal_code: "10220" } } },
  { order_number: "ORD-20251029-0004", customer: "Wichai", product: "รูปถ่ายด่วน 1.5 นิ้ว", total_amount: 19.00, payment_method: "promptpay", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-29", items: [{ title: "รูปถ่ายด่วน 1.5 นิ้ว", price: 19.00, quantity: 1, size: "1.5 inches", template: "Blue Background" }], pricing: { subtotal: 19.00, shipping_fee: 0.00, discount: 0.00, total_amount: 19.00, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Wichai", phone_number: "0898889990", address_line: "321 พระราม 2", district: "บางขุนเทียน", province: "กรุงเทพมหานคร", postal_code: "10150" } } },
  { order_number: "ORD-20251030-0001", customer: "Janya", product: "รูปถ่ายนิ้วด่วน", total_amount: 12.50, payment_method: "true_wallet", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-30", items: [{ title: "รูปถ่ายนิ้วด่วน", price: 12.50, quantity: 1, size: "1 inch", template: "White Background" }], pricing: { subtotal: 12.50, shipping_fee: 0.00, discount: 0.00, total_amount: 12.50, currency: "THB" }, payment: { method: "true_wallet", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Janya", phone_number: "0899990001", address_line: "9 เหม่งจ๋าย", district: "ห้วยขวาง", province: "กรุงเทพมหานคร", postal_code: "10310" } } },
  { order_number: "ORD-20251030-0002", customer: "Boonma", product: "รูปสมัครงานพร้อมเปลี่ยนเสื้อสูท", total_amount: 16.00, payment_method: "credit_card", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-30", items: [{ title: "รูปสมัครงานพร้อมเปลี่ยนเสื้อสูท", price: 16.00, quantity: 1, size: "2 inches", template: "Formal Suit Template" }], pricing: { subtotal: 16.00, shipping_fee: 0.00, discount: 0.00, total_amount: 16.00, currency: "THB" }, payment: { method: "credit_card", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Boonma", phone_number: "0890001112", address_line: "45 พระราม 9", district: "สวนหลวง", province: "กรุงเทพมหานคร", postal_code: "10250" } } },
  { order_number: "ORD-20251030-0003", customer: "Udom", product: "รูปถ่ายด่วน 1 นิ้ว", total_amount: 10.00, payment_method: "promptpay", delivery_courier: "N/A", delivery_status: "pending", order_status: "processing", date: "2025-10-30", items: [{ title: "รูปถ่ายด่วน 1 นิ้ว", price: 10.00, quantity: 1, size: "1 inch", template: "Blue Background" }], pricing: { subtotal: 10.00, shipping_fee: 0.00, discount: 0.00, total_amount: 10.00, currency: "THB" }, payment: { method: "promptpay", status: "paid" }, delivery: { courier: "N/A", status: "pending", address: { recipient_name: "Udom", phone_number: "0891112224", address_line: "888 นวมินทร์", district: "บึงกุ่ม", province: "กรุงเทพมหานคร", postal_code: "10240" } } }
];

let currentSort = { key: null, asc: true };
let statusChartInstance = null;
let revenueChartInstance = null;
let paymentChartInstance = null;
let productChartInstance = null;

function init() {
  populateFilters();
  renderStats();
  renderTable();
  renderCharts();
}

function populateFilters() {
  const couriers = [...new Set(orders.map(o => o.delivery_courier).filter(c => c !== "N/A"))].sort();
  const select = document.getElementById("courierFilter");
  select.innerHTML = '<option value="all">All Couriers</option>' + couriers.map(c => `<option value="${c}">${c}</option>`).join("");
}

function renderStats() {
  const total = orders.length;
  const revenue = orders.reduce((s, o) => s + o.total_amount, 0);
  const avg = revenue / total;
  const completed = orders.filter(o => o.order_status === "completed").length;
  const processing = orders.filter(o => o.order_status === "processing").length;

  document.getElementById("statsGrid").innerHTML = `
    <div class="stat-card stat-total">
      <div class="stat-label">Total Orders</div>
      <div class="stat-value">${total}</div>
      <div class="stat-sub">All time</div>
    </div>
    <div class="stat-card stat-revenue">
      <div class="stat-label">Total Revenue</div>
      <div class="stat-value">฿${revenue.toFixed(2)}</div>
      <div class="stat-sub">${orders.filter(o => o.payment.status === "paid").length} paid</div>
    </div>
    <div class="stat-card stat-avg">
      <div class="stat-label">Avg. Order Value</div>
      <div class="stat-value">฿${avg.toFixed(2)}</div>
      <div class="stat-sub">Per order</div>
    </div>
    <div class="stat-card stat-completed">
      <div class="stat-label">Completed</div>
      <div class="stat-value">${completed}</div>
      <div class="stat-sub">${(completed / total * 100).toFixed(1)}% of total</div>
    </div>
    <div class="stat-card stat-processing">
      <div class="stat-label">Processing</div>
      <div class="stat-value">${processing}</div>
      <div class="stat-sub">${(processing / total * 100).toFixed(1)}% of total</div>
    </div>
  `;
}

function getFilteredData() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const status = document.getElementById("statusFilter").value;
  const courier = document.getElementById("courierFilter").value;

  return orders.filter(o => {
    if (status !== "all" && o.order_status !== status) return false;
    if (courier !== "all" && o.delivery_courier !== courier) return false;
    if (search && !o.order_number.toLowerCase().includes(search) && !o.customer.toLowerCase().includes(search) && !o.product.toLowerCase().includes(search)) return false;
    return true;
  });
}

function sortTable(key) {
  if (currentSort.key === key) {
    currentSort.asc = !currentSort.asc;
  } else {
    currentSort.key = key;
    currentSort.asc = true;
  }
  renderTable();
}

function renderTable() {
  let data = getFilteredData();

  if (currentSort.key) {
    data.sort((a, b) => {
      let av = a[currentSort.key] ?? "";
      let bv = b[currentSort.key] ?? "";
      if (typeof av === "number") return currentSort.asc ? av - bv : bv - av;
      return currentSort.asc ? String(av).localeCompare(String(bv)) : String(bv).localeCompare(String(av));
    });
  }

  const tbody = document.getElementById("ordersBody");
  tbody.innerHTML = data.map(o => {
    const statusBadge = o.order_status === "completed" ? "badge-success" : "badge-warning";
    const deliveryBadge = o.delivery_status === "delivered" ? "badge-success" : o.delivery_status === "shipped" ? "badge-info" : "badge-warning";
    return `<tr>
      <td><strong>${o.order_number}</strong></td>
      <td>${o.customer}</td>
      <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${o.product}">${o.product}</td>
      <td>฿${o.total_amount.toFixed(2)}</td>
      <td><span class="badge badge-info">${o.payment_method}</span></td>
      <td><span class="badge ${deliveryBadge}">${o.delivery_status}</span></td>
      <td><span class="badge ${statusBadge}">${o.order_status}</span></td>
      <td>${o.date}</td>
      <td><button class="btn-view" onclick="showDetail('${o.order_number}')">View</button></td>
    </tr>`;
  }).join("");

  document.getElementById("tableInfo").textContent = `Showing ${data.length} of ${orders.length} orders`;
}

function showDetail(orderNumber) {
  const o = orders.find(x => x.order_number === orderNumber);
  if (!o) return;

  document.getElementById("modalTitle").textContent = `Order ${o.order_number}`;

  const itemsHtml = o.items.map((item, i) => `
    <div class="detail-field">
      <div class="label">Item ${i + 1}</div>
      <div class="value">${item.title} × ${item.quantity}</div>
      <div class="value" style="color:var(--text-secondary);font-size:13px">Size: ${item.size} | Template: ${item.template} | ฿${item.price.toFixed(2)}</div>
    </div>
  `).join("");

  const addr = o.delivery.address;
  document.getElementById("modalBody").innerHTML = `
    <div class="detail-section">
      <h4>Order Info</h4>
      <div class="detail-grid">
        <div class="detail-field"><div class="label">Customer</div><div class="value">${o.customer}</div></div>
        <div class="detail-field"><div class="label">Date</div><div class="value">${o.date}</div></div>
        <div class="detail-field"><div class="label">Status</div><div class="value"><span class="badge ${o.order_status === "completed" ? "badge-success" : "badge-warning"}">${o.order_status}</span></div></div>
        <div class="detail-field"><div class="label">Payment</div><div class="value"><span class="badge badge-info">${o.payment.method}</span> (${o.payment.status})</div></div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Items (${o.items.length})</h4>
      ${itemsHtml}
    </div>
    <div class="detail-section">
      <h4>Pricing</h4>
      <div class="detail-grid">
        <div class="detail-field"><div class="label">Subtotal</div><div class="value">฿${o.pricing.subtotal.toFixed(2)}</div></div>
        <div class="detail-field"><div class="label">Shipping</div><div class="value">฿${o.pricing.shipping_fee.toFixed(2)}</div></div>
        <div class="detail-field"><div class="label">Discount</div><div class="value">฿${o.pricing.discount.toFixed(2)}</div></div>
        <div class="detail-field"><div class="label">Total</div><div class="value"><strong>฿${o.pricing.total_amount.toFixed(2)}</strong></div></div>
      </div>
    </div>
    <div class="detail-section">
      <h4>Delivery</h4>
      <div class="detail-grid">
        <div class="detail-field"><div class="label">Courier</div><div class="value">${o.delivery.courier !== "N/A" ? o.delivery.courier : "Not assigned"}</div></div>
        <div class="detail-field"><div class="label">Status</div><div class="value"><span class="badge ${o.delivery.status === "delivered" ? "badge-success" : o.delivery.status === "shipped" ? "badge-info" : "badge-warning"}">${o.delivery.status}</span></div></div>
      </div>
      <div class="detail-grid" style="margin-top:12px">
        <div class="detail-field"><div class="label">Recipient</div><div class="value">${addr.recipient_name}</div></div>
        <div class="detail-field"><div class="label">Phone</div><div class="value">${addr.phone_number}</div></div>
        <div class="detail-field" style="grid-column:1/-1"><div class="label">Address</div><div class="value">${addr.address_line}, ${addr.district}, ${addr.province} ${addr.postal_code}</div></div>
      </div>
    </div>
  `;

  document.getElementById("orderModal").classList.add("active");
}

function closeModal(e) {
  if (e && e.target !== document.getElementById("orderModal")) return;
  document.getElementById("orderModal").classList.remove("active");
}

function renderCharts() {
  renderStatusChart();
  renderRevenueChart();
  renderPaymentChart();
  renderProductChart();
}

function renderStatusChart() {
  const ctx = document.getElementById("statusChart").getContext("2d");
  if (statusChartInstance) statusChartInstance.destroy();

  const counts = { completed: 0, processing: 0 };
  orders.forEach(o => { if (counts.hasOwnProperty(o.order_status)) counts[o.order_status]++; });

  statusChartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Processing"],
      datasets: [{
        data: [counts.completed, counts.processing],
        backgroundColor: ["#22c55e", "#f59e0b"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { padding: 16, usePointStyle: true } }
      }
    }
  });
}

function renderRevenueChart() {
  const ctx = document.getElementById("revenueChart").getContext("2d");
  if (revenueChartInstance) revenueChartInstance.destroy();

  const grouped = {};
  orders.forEach(o => {
    if (!grouped[o.date]) grouped[o.date] = 0;
    grouped[o.date] += o.total_amount;
  });

  const labels = Object.keys(grouped).sort();
  const data = labels.map(d => grouped[d]);

  revenueChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Revenue (THB)",
        data,
        backgroundColor: "#818cf8",
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: { beginAtZero: true, ticks: { callback: v => "฿" + v } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderPaymentChart() {
  const ctx = document.getElementById("paymentChart").getContext("2d");
  if (paymentChartInstance) paymentChartInstance.destroy();

  const counts = {};
  orders.forEach(o => {
    const m = o.payment.method;
    counts[m] = (counts[m] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const data = Object.values(counts);
  const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444", "#3b82f6"];

  paymentChartInstance = new Chart(ctx, {
    type: "pie",
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors.slice(0, labels.length),
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: "bottom", labels: { padding: 12, usePointStyle: true } }
      }
    }
  });
}

function renderProductChart() {
  const ctx = document.getElementById("productChart").getContext("2d");
  if (productChartInstance) productChartInstance.destroy();

  const counts = {};
  orders.forEach(o => {
    o.items.forEach(item => {
      const name = item.title.length > 25 ? item.title.slice(0, 25) + "..." : item.title;
      counts[name] = (counts[name] || 0) + item.quantity;
    });
  });

  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 8);
  const labels = entries.map(e => e[0]);
  const data = entries.map(e => e[1]);

  productChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Units Sold",
        data,
        backgroundColor: "#f59e0b",
        borderRadius: 4
      }]
    },
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { beginAtZero: true, ticks: { stepSize: 1 } },
        y: { grid: { display: false } }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
