use ("03_my-ecommerce-project");
// 1. ล้างข้อมูลเก่าในคอลเลกชันเพื่อป้องกันข้อมูลซ้ำ (เทียบเท่า TRUNCATE TABLE)
db.orders.deleteMany({});

// 2. แทรกข้อมูลจำลอง (Mock Data) จำนวน 19 ออเดอร์ อ้างอิงจากโครงสร้างบริการถ่ายภาพ + Delivery
db.orders.insertMany([
  {
    "_id": ObjectId("668fde123456789abcdef001"),
    "order_number": "ORD-20251026-0001",
    "buyer_id": ObjectId("65f123456789abcdef000001"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{
      "product_id": ObjectId("668f987654321abcdef00001"),
      "title": "บริการอัดรูปด่วนสำหรับพาสปอร์ตและวีซ่า",
      "price": 34.00,
      "quantity": 1,
      "customization": { "selected_size": "1.5 inches", "selected_template": "White Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img1.jpg" }
    }],
    "pricing": { "subtotal": 34.00, "shipping_fee": 0.00, "discount": 0.00, "total_amount": 34.00, "currency": "THB" },
    "payment": { "method": "promptpay", "status": "paid", "paid_at": ISODate("2025-10-26T12:05:00Z") },
    "delivery": { "courier": "Flash Express", "status": "delivered", "shipping_address": { "recipient_name": "Tony", "phone_number": "0812345678", "address_line": "123/45 ถนนร่มเกล้า", "district": "มีนบุรี", "province": "กรุงเทพมหานคร", "postal_code": "10510" } },
    "order_status": "completed",
    "created_at": ISODate("2025-10-26T12:05:00Z"),
    "updated_at": ISODate("2025-10-26T12:05:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef002"),
    "order_number": "ORD-20251026-0002",
    "buyer_id": ObjectId("65f123456789abcdef000003"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{
      "product_id": ObjectId("668f987654321abcdef00002"),
      "title": "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน",
      "price": 19.50,
      "quantity": 1,
      "customization": { "selected_size": "1 inch", "selected_template": "Blue Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img2.jpg" }
    }],
    "pricing": { "subtotal": 19.50, "shipping_fee": 0.00, "discount": 0.00, "total_amount": 19.50, "currency": "THB" },
    "payment": { "method": "true_wallet", "status": "paid", "paid_at": ISODate("2025-10-26T12:10:00Z") },
    "delivery": { "courier": "J&T Express", "status": "delivered", "shipping_address": { "recipient_name": "Mee", "phone_number": "0898765432", "address_line": "456 แขวงแสนแสบ", "district": "มีนบุรี", "province": "กรุงเทพมหานคร", "postal_code": "10510" } },
    "order_status": "completed",
    "created_at": ISODate("2025-10-26T12:10:00Z"),
    "updated_at": ISODate("2025-10-26T12:10:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef003"),
    "order_number": "ORD-20251026-0003",
    "buyer_id": ObjectId("65f123456789abcdef000004"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00001"), "title": "บริการอัดรูปด่วนสำหรับพาสปอร์ตและวีซ่า", "price": 25.00, "quantity": 1, "customization": { "selected_size": "Passport", "selected_template": "Thailand Passport", "user_uploaded_image_url": "https://storage.example.com/uploads/img3.jpg" } }],
    "pricing": { "subtotal": 25.00, "shipping_fee": 0.00, "total_amount": 25.00, "currency": "THB" },
    "payment": { "method": "promptpay", "status": "paid", "paid_at": ISODate("2025-10-26T12:15:00Z") },
    "delivery": { "courier": "Thailand Post", "status": "shipped", "shipping_address": { "recipient_name": "Somchai", "phone_number": "0861234567", "address_line": "789 หมู่ 2", "district": "เมือง", "province": "นนทบุรี", "postal_code": "11000" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-26T12:15:00Z"),
    "updated_at": ISODate("2025-10-26T12:15:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef004"),
    "order_number": "ORD-20251026-0004",
    "buyer_id": ObjectId("65f123456789abcdef000005"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", "price": 9.50, "quantity": 1, "customization": { "selected_size": "2 inches", "selected_template": "Formal Suit Template", "user_uploaded_image_url": "https://storage.example.com/uploads/img4.jpg" } }],
    "pricing": { "subtotal": 9.50, "shipping_fee": 0.00, "total_amount": 9.50, "currency": "THB" },
    "payment": { "method": "credit_card", "status": "paid", "paid_at": ISODate("2025-10-26T12:20:00Z") },
    "delivery": { "courier": "Flash Express", "status": "pending", "shipping_address": { "recipient_name": "Anan", "phone_number": "0855555555", "address_line": "11/1 ถนนวิภาวดี", "district": "จตุจักร", "province": "กรุงเทพมหานคร", "postal_code": "10900" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-26T12:20:00Z"),
    "updated_at": ISODate("2025-10-26T12:20:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef005"),
    "order_number": "ORD-20251026-0005",
    "buyer_id": ObjectId("65f123456789abcdef000006"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "แพ็กเกจรูปถ่ายติดบัตร/สมัครงาน", "price": 13.50, "quantity": 1, "customization": { "selected_size": "1 inch", "selected_template": "White Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img5.jpg" } }],
    "pricing": { "subtotal": 13.50, "shipping_fee": 0.00, "total_amount": 13.50, "currency": "THB" },
    "payment": { "method": "promptpay", "status": "paid", "paid_at": ISODate("2025-10-26T12:30:00Z") },
    "delivery": { "courier": "Kerry Express", "status": "delivered", "shipping_address": { "recipient_name": "Wasan", "phone_number": "0844444444", "address_line": "99 ซอยสุขุมวิท 23", "district": "วัฒนา", "province": "กรุงเทพมหานคร", "postal_code": "10110" } },
    "order_status": "completed",
    "created_at": ISODate("2025-10-26T12:30:00Z"),
    "updated_at": ISODate("2025-10-26T12:30:00Z")
  },
  // ออเดอร์ที่ 6 ถึง 19 (นำเข้าค่า total_price ตามที่ระบุในคำสั่ง Mock Data)
  {
    "_id": ObjectId("668fde123456789abcdef006"),
    "order_number": "ORD-20251026-0006",
    "buyer_id": ObjectId("65f123456789abcdef000007"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00001"), "title": "บริการอัดรูปพาสปอร์ต", "price": 38.00, "quantity": 1, "customization": { "selected_size": "Passport", "selected_template": "Japan Visa", "user_uploaded_image_url": "https://storage.example.com/uploads/img6.jpg" } }],
    "pricing": { "subtotal": 38.00, "shipping_fee": 0.00, "total_amount": 38.00, "currency": "THB" },
    "payment": { "method": "promptpay", "status": "paid", "paid_at": ISODate("2025-10-26T12:35:00Z") },
    "delivery": { "courier": "J&T Express", "status": "pending", "shipping_address": { "recipient_name": "Nattaporn", "phone_number": "0833333333", "address_line": "222 ลาดพร้าว", "district": "บางกะปิ", "province": "กรุงเทพมหานคร", "postal_code": "10240" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-26T12:35:00Z"),
    "updated_at": ISODate("2025-10-26T12:35:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef007"),
    "order_number": "ORD-20251027-0001",
    "buyer_id": ObjectId("65f123456789abcdef000008"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปถ่ายด่วน", "price": 19.50, "quantity": 1, "customization": { "selected_size": "1.5 inches", "selected_template": "White Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img7.jpg" } }],
    "pricing": { "subtotal": 19.50, "shipping_fee": 0.00, "total_amount": 19.50 },
    "payment": { "method": "promptpay", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Piti", "phone_number": "0822222222", "address_line": "55 รังสิต", "district": "ธัญบุรี", "province": "ปทุมธานี", "postal_code": "12110" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-27T12:05:00Z"), "updated_at": ISODate("2025-10-27T12:05:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef008"),
    "order_number": "ORD-20251027-0002",
    "buyer_id": ObjectId("65f123456789abcdef000009"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00001"), "title": "บริการอัดรูปวีซ่าขนาดใหญ่", "price": 80.00, "quantity": 1, "customization": { "selected_size": "Visa (2x2 inches)", "selected_template": "US Visa", "user_uploaded_image_url": "https://storage.example.com/uploads/img8.jpg" } }],
    "pricing": { "subtotal": 80.00, "shipping_fee": 0.00, "total_amount": 80.00 },
    "payment": { "method": "credit_card", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Viroj", "phone_number": "0811111111", "address_line": "88 สีลม", "district": "บางรัก", "province": "กรุงเทพมหานคร", "postal_code": "10500" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-27T12:10:00Z"), "updated_at": ISODate("2025-10-27T12:10:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef009"),
    "order_number": "ORD-20251027-0003",
    "buyer_id": ObjectId("65f123456789abcdef000010"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปติดบัตรด่วน", "price": 14.00, "quantity": 1, "customization": { "selected_size": "1 inch", "selected_template": "Blue Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img9.jpg" } }],
    "pricing": { "subtotal": 14.00, "shipping_fee": 0.00, "total_amount": 14.00 },
    "payment": { "method": "true_wallet", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Mana", "phone_number": "0800000000", "address_line": "44 รามอินทรา", "district": "บางเขน", "province": "กรุงเทพมหานคร", "postal_code": "10220" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-27T12:15:00Z"), "updated_at": ISODate("2025-10-27T12:15:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef010"),
    "order_number": "ORD-20251028-0001",
    "buyer_id": ObjectId("65f123456789abcdef000011"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปถ่ายติดบัตร", "price": 17.50, "quantity": 1, "customization": { "selected_size": "1.5 inches", "selected_template": "White Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img10.jpg" } }],
    "pricing": { "subtotal": 17.50, "shipping_fee": 0.00, "total_amount": 17.50 },
    "payment": { "method": "promptpay", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Chujai", "phone_number": "0891112223", "address_line": "12 ปิ่นเกล้า", "district": "บางพลัด", "province": "กรุงเทพมหานคร", "postal_code": "10700" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-28T12:00:00Z"), "updated_at": ISODate("2025-10-28T12:00:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef011"),
    "order_number": "ORD-20251028-0002",
    "buyer_id": ObjectId("65f123456789abcdef000012"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00001"), "title": "บริการอัดรูปพาสปอร์ต", "price": 25.00, "quantity": 1, "customization": { "selected_size": "Passport", "selected_template": "Thailand Passport", "user_uploaded_image_url": "https://storage.example.com/uploads/img11.jpg" } }],
    "pricing": { "subtotal": 25.00, "shipping_fee": 0.00, "total_amount": 25.00 },
    "payment": { "method": "promptpay", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Piti 2", "phone_number": "0893334445", "address_line": "77 แจ้งวัฒนะ", "district": "ปากเกร็ด", "province": "นนทบุรี", "postal_code": "11120" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-28T12:05:00Z"), "updated_at": ISODate("2025-10-28T12:05:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef012"),
    "order_number": "ORD-20251028-0003",
    "buyer_id": ObjectId("65f123456789abcdef000013"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00001"), "title": "บริการอัดรูปพาสปอร์ตด่วน", "price": 21.00, "quantity": 1, "customization": { "selected_size": "Passport", "selected_template": "Thailand Passport", "user_uploaded_image_url": "https://storage.example.com/uploads/img12.jpg" } }],
    "pricing": { "subtotal": 21.00, "shipping_fee": 0.00, "total_amount": 21.00 },
    "payment": { "method": "credit_card", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Siri", "phone_number": "0894445556", "address_line": "5/5 สาทร", "district": "ยานนาวา", "province": "กรุงเทพมหานคร", "postal_code": "10120" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-28T12:10:00Z"), "updated_at": ISODate("2025-10-28T12:10:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef013"),
    "order_number": "ORD-20251029-0001",
    "buyer_id": ObjectId("65f123456789abcdef000014"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00001"), "title": "บริการอัดรูปชุดพาสปอร์ตครอบครัว", "price": 57.00, "quantity": 1, "customization": { "selected_size": "Passport", "selected_template": "Thailand Passport", "user_uploaded_image_url": "https://storage.example.com/uploads/img13.jpg" } }],
    "pricing": { "subtotal": 57.00, "shipping_fee": 0.00, "total_amount": 57.00 },
    "payment": { "method": "promptpay", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Kitti", "phone_number": "0895556667", "address_line": "101 เพชรบุรี", "district": "ราชเทวี", "province": "กรุงเทพมหานคร", "postal_code": "10400" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-29T12:00:00Z"), "updated_at": ISODate("2025-10-29T12:00:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef014"),
    "order_number": "ORD-20251029-0002",
    "buyer_id": ObjectId("65f123456789abcdef000015"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปสมัครงาน", "price": 14.50, "quantity": 1, "customization": { "selected_size": "2 inches", "selected_template": "Formal Suit Template", "user_uploaded_image_url": "https://storage.example.com/uploads/img14.jpg" } }],
    "pricing": { "subtotal": 14.50, "shipping_fee": 0.00, "total_amount": 14.50 },
    "payment": { "method": "true_wallet", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Naree", "phone_number": "0896667778", "address_line": "88/8 เพชรเกษม", "district": "ภาษีเจริญ", "province": "กรุงเทพมหานคร", "postal_code": "10160" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-29T12:05:00Z"), "updated_at": ISODate("2025-10-29T12:05:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef015"),
    "order_number": "ORD-20251029-0003",
    "buyer_id": ObjectId("65f123456789abcdef000016"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00001"), "title": "บริการอัดรูปวีซ่าท่องเที่ยว", "price": 40.00, "quantity": 1, "customization": { "selected_size": "Visa (2x2 inches)", "selected_template": "US Visa", "user_uploaded_image_url": "https://storage.example.com/uploads/img15.jpg" } }],
    "pricing": { "subtotal": 40.00, "shipping_fee": 0.00, "total_amount": 40.00 },
    "payment": { "method": "credit_card", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Prasert", "phone_number": "0897778889", "address_line": "456 พหลโยธิน", "district": "สายไหม", "province": "กรุงเทพมหานคร", "postal_code": "10220" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-29T12:10:00Z"), "updated_at": ISODate("2025-10-29T12:10:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef016"),
    "order_number": "ORD-20251029-0004",
    "buyer_id": ObjectId("65f123456789abcdef000017"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปถ่ายด่วน 1.5 นิ้ว", "price": 19.00, "quantity": 1, "customization": { "selected_size": "1.5 inches", "selected_template": "Blue Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img16.jpg" } }],
    "pricing": { "subtotal": 19.00, "shipping_fee": 0.00, "total_amount": 19.00 },
    "payment": { "method": "promptpay", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Wichai", "phone_number": "0898889990", "address_line": "321 พระราม 2", "district": "บางขุนเทียน", "province": "กรุงเทพมหานคร", "postal_code": "10150" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-29T12:15:00Z"), "updated_at": ISODate("2025-10-29T12:15:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef017"),
    "order_number": "ORD-20251030-0001",
    "buyer_id": ObjectId("65f123456789abcdef000018"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปถ่ายนิ้วด่วน", "price": 12.50, "quantity": 1, "customization": { "selected_size": "1 inch", "selected_template": "White Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img17.jpg" } }],
    "pricing": { "subtotal": 12.50, "shipping_fee": 0.00, "total_amount": 12.50 },
    "payment": { "method": "true_wallet", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Janya", "phone_number": "0899990001", "address_line": "9 เหม่งจ๋าย", "district": "ห้วยขวาง", "province": "กรุงเทพมหานคร", "postal_code": "10310" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-30T12:00:00Z"), "updated_at": ISODate("2025-10-30T12:00:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef018"),
    "order_number": "ORD-20251030-0002",
    "buyer_id": ObjectId("65f123456789abcdef000019"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปสมัครงานพร้อมเปลี่ยนเสื้อสูท", "price": 16.00, "quantity": 1, "customization": { "selected_size": "2 inches", "selected_template": "Formal Suit Template", "user_uploaded_image_url": "https://storage.example.com/uploads/img18.jpg" } }],
    "pricing": { "subtotal": 16.00, "shipping_fee": 0.00, "total_amount": 16.00 },
    "payment": { "method": "credit_card", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Boonma", "phone_number": "0890001112", "address_line": "45 พระราม 9", "district": "สวนหลวง", "province": "กรุงเทพมหานคร", "postal_code": "10250" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-30T12:05:00Z"), "updated_at": ISODate("2025-10-30T12:05:00Z")
  },
  {
    "_id": ObjectId("668fde123456789abcdef019"),
    "order_number": "ORD-20251030-0003",
    "buyer_id": ObjectId("65f123456789abcdef000020"),
    "seller_id": ObjectId("65f123456789abcdef000002"),
    "items": [{ "product_id": ObjectId("668f987654321abcdef00002"), "title": "รูปถ่ายด่วน 1 นิ้ว", "price": 10.00, "quantity": 1, "customization": { "selected_size": "1 inch", "selected_template": "Blue Background", "user_uploaded_image_url": "https://storage.example.com/uploads/img19.jpg" } }],
    "pricing": { "subtotal": 10.00, "shipping_fee": 0.00, "total_amount": 10.00 },
    "payment": { "method": "promptpay", "status": "paid" },
    "delivery": { "status": "pending", "shipping_address": { "recipient_name": "Udom", "phone_number": "0891112224", "address_line": "888 นวมินทร์", "district": "บึงกุ่ม", "province": "กรุงเทพมหานคร", "postal_code": "10240" } },
    "order_status": "processing",
    "created_at": ISODate("2025-10-30T12:10:00Z"), "updated_at": ISODate("2025-10-30T12:10:00Z")
  }
]);
db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "_id",
      foreignField: "_id",
      as: "000001"
    }
  }
]);
