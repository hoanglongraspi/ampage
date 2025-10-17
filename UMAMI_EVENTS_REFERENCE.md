# Umami Events Reference - Chi Tiết Các Events

## Tổng Quan
Sau khi cập nhật, hệ thống sẽ track các UTM parameters một cách **CỤ THỂ và CHI TIẾT** thay vì chỉ có event chung chung "utm_captured".

## Các Events Bạn Sẽ Thấy Trong Umami

### 1. **UTM Capture Events**

Khi user truy cập với UTM parameters như:
```
?utm_source=google&utm_medium=cpc&utm_campaign=fall2024
```

Bạn sẽ thấy các events sau trong Umami:

#### `utm-capture`
- Event tổng hợp với tất cả parameters

#### `source-google`
- Event cụ thể cho utm_source
- Properties: medium, campaign, landing_page

#### `medium-cpc`
- Event cụ thể cho utm_medium  
- Properties: source, campaign

#### `campaign-fall2024`
- Event cụ thể cho utm_campaign
- Properties: source, medium

#### `google/cpc/fall2024`
- Event kết hợp đầy đủ campaign path
- Properties: landing, term, content

---

### 2. **Page View Events**

#### `view-/about`
- Track page views với UTM attribution
- Properties: source, medium, campaign
- Ví dụ: `view-/contact`, `view-/products`

---

### 3. **Contact Form Events**

Khi ai đó submit contact form:

#### `contact-submit`
- Event submit form chung
- Properties: subject, has_utm

#### `lead-google/cpc/fall2024`
- Lead cụ thể từ campaign
- Properties: subject, term, content

**Ví dụ trong Umami:**
- `lead-google/cpc/fall2024`
- `lead-facebook/social/awareness`
- `lead-newsletter/email/product-launch`

---

### 4. **Product Interest Events**

Khi user click vào product:

#### `product-speech-language-pathology`
- Click vào product cụ thể
- Properties: name, source, medium, campaign

#### `fall2024-product`
- Product interest từ campaign cụ thể
- Properties: product, source, medium

**Ví dụ các product events:**
- `product-speech-language-pathology`
- `product-physical-occupational-therapy`
- `product-audiology`
- `product-dentistry`
- `product-wound-care-diabetes`

---

### 5. **Conversion Events**

#### `conversion-contact_form`
- Conversion từ contact form
- Properties: value, source, medium, campaign

#### `google/cpc/fall2024-conversion`
- Conversion từ campaign cụ thể
- Properties: type, value

---

### 6. **Outbound Link Events**

#### `outbound_link`
- Clicks trên external links
- Properties: url, label

**Ví dụ:**
- Link đến mRehab.agency
- Link đến AudioSight.agency

---

### 7. **Button Click Events**

#### `button_click`
- Track các button quan trọng
- Properties: button, location, UTM params

---

## Ví Dụ Thực Tế

### Campaign: Google Ads Fall 2024
URL: `https://auspexmedix.com/?utm_source=google&utm_medium=cpc&utm_campaign=fall2024`

**Events bạn sẽ thấy:**
1. ✅ `utm-capture` - Capture tổng quát
2. ✅ `source-google` - Nguồn từ Google
3. ✅ `medium-cpc` - Medium là CPC
4. ✅ `campaign-fall2024` - Campaign Fall 2024
5. ✅ `google/cpc/fall2024` - Full campaign path
6. ✅ `view-/` - Page view với attribution

Nếu user click vào Speech-Language Pathology:
7. ✅ `product-speech-language-pathology`
8. ✅ `fall2024-product`

Nếu user submit contact form:
9. ✅ `contact-submit`
10. ✅ `lead-google/cpc/fall2024`
11. ✅ `conversion-contact_form`
12. ✅ `google/cpc/fall2024-conversion`

---

### Campaign: Facebook Social Awareness
URL: `https://auspexmedix.com/contact?utm_source=facebook&utm_medium=social&utm_campaign=awareness`

**Events:**
1. ✅ `source-facebook`
2. ✅ `medium-social`
3. ✅ `campaign-awareness`
4. ✅ `facebook/social/awareness`
5. ✅ `view-/contact`
6. ✅ `lead-facebook/social/awareness` (khi submit form)

---

### Campaign: Email Newsletter
URL: `https://auspexmedix.com/products?utm_source=mailchimp&utm_medium=email&utm_campaign=newsletter-oct`

**Events:**
1. ✅ `source-mailchimp`
2. ✅ `medium-email`
3. ✅ `campaign-newsletter-oct`
4. ✅ `mailchimp/email/newsletter-oct`
5. ✅ `view-/products`
6. ✅ `product-audiology` (nếu click)
7. ✅ `newsletter-oct-product` (nếu có interest)

---

## Cách Xem Trong Umami Dashboard

### 1. Xem Tất Cả Events
- Vào tab **Events**
- Bạn sẽ thấy tất cả events được list ra

### 2. Filter Theo Campaign
- Search: `google/cpc/fall2024`
- Thấy tất cả activities từ campaign đó

### 3. Filter Theo Source
- Search: `source-google`
- Thấy tất cả traffic từ Google

### 4. Filter Theo Medium
- Search: `medium-cpc`
- Thấy tất cả paid campaigns

### 5. Filter Theo Product
- Search: `product-`
- Thấy tất cả product interests

### 6. Filter Theo Leads
- Search: `lead-`
- Thấy tất cả leads với attribution

### 7. Filter Theo Conversions
- Search: `conversion-`
- Thấy tất cả conversions với source

---

## So Sánh: Trước vs Sau

### ❌ TRƯỚC (Chung chung)
```
utm_captured
utm_captured
utm_captured
```
Không biết từ đâu, campaign gì

### ✅ SAU (Cụ thể)
```
source-google
medium-cpc
campaign-fall2024
google/cpc/fall2024
lead-google/cpc/fall2024
conversion-google/cpc/fall2024
```
Rõ ràng, dễ phân tích!

---

## Testing

### Bước 1: Truy Cập Với UTM
```bash
http://localhost:5173/?utm_source=google&utm_medium=cpc&utm_campaign=test2024
```

### Bước 2: Mở Console (F12)
Bạn sẽ thấy:
```
Umami Event: utm-capture {utm_source: "google", ...}
Umami Event: source-google {medium: "cpc", ...}
Umami Event: medium-cpc {source: "google", ...}
Umami Event: campaign-test2024 {source: "google", ...}
Umami Event: google/cpc/test2024 {landing: "/", ...}
```

### Bước 3: Check Umami Dashboard
- Vào https://analytics.auspexmedix.com
- Tab **Events**
- Tìm: `google/cpc/test2024`

---

## Campaign Tracking Best Practices

### Google Ads
```
?utm_source=google&utm_medium=cpc&utm_campaign=product-launch-2024
```
Events: `google/cpc/product-launch-2024`

### Facebook Ads
```
?utm_source=facebook&utm_medium=cpc&utm_campaign=retargeting-q4
```
Events: `facebook/cpc/retargeting-q4`

### Email Newsletter
```
?utm_source=mailchimp&utm_medium=email&utm_campaign=monthly-newsletter
```
Events: `mailchimp/email/monthly-newsletter`

### LinkedIn Sponsored
```
?utm_source=linkedin&utm_medium=cpc&utm_campaign=b2b-healthcare
```
Events: `linkedin/cpc/b2b-healthcare`

### Partner Referral
```
?utm_source=partner-ub&utm_medium=referral&utm_campaign=research-collab
```
Events: `partner-ub/referral/research-collab`

---

## Reporting & Analysis

### ROI Theo Campaign
1. Filter: `google/cpc/fall2024`
2. Count events: `lead-google/cpc/fall2024`
3. Count conversions: `google/cpc/fall2024-conversion`
4. Calculate: Conversion Rate = Conversions / Leads

### Product Performance
1. Filter: `product-speech-language-pathology`
2. Xem properties để biết traffic từ đâu
3. So sánh với các products khác

### Channel Performance
1. Compare: `source-google` vs `source-facebook` vs `source-linkedin`
2. Analyze: medium performance (cpc vs email vs social)

### Campaign Attribution
1. Track full journey: 
   - UTM capture → 
   - Page views → 
   - Product interest → 
   - Contact form → 
   - Conversion

---

## Notes

- ✅ Events giờ **CỤ THỂ** và dễ tìm
- ✅ Mỗi campaign có **event riêng**
- ✅ Dễ dàng **filter và phân tích**
- ✅ Track được **full customer journey**
- ✅ ROI measurement **chính xác**

## Support

Nếu không thấy events:
1. Check browser console có logs không
2. Verify Umami script loaded
3. Check network tab xem requests
4. Đảm bảo UTM parameters đúng format

