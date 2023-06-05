/*
用药助手_专业版PLUS解锁
https:\/\/newdrugs\.dxy\.cn\/app\/user\/pro\/stat url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/Crack/DrugsPro.js

By @RuyeNet

QX:
https:\/\/newdrugs\.dxy\.cn\/app\/user\/pro\/stat url script-response-body https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/Crack/DrugsPro.js

Surge4：
http-response https:\/\/newdrugs\.dxy\.cn\/app\/user\/pro\/stat requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/RuyeNet/QuantumultX/main/Crack/DrugsPro.js

Surge & QX MITM = newdrugs.dxy.cn
*/

let obj = JSON.parse($response.body);
obj = { "message": "成功", "code": "success", "data": { "isActive": false, "userProStatStatusEnum": "VALID", "userProInfoVO": { "rightsNum": 12, "activeType": 0, "userProStatStatusEnum": "VALID", "subscribeButtonText": "立即开通 ¥178/年", "purchaseTotalValue": 494 }, "svipUserProInfo": { "subscribeType": "iap", "nowPrice": 3000, "subscribe": true, "subscribeExpiresDate": "2286-04-08 05:45:19", "originPrice": 4200, "nowPayDesc": "1个月PLUS会员连续订阅", "expiredTime": "2286-04-08 05:45:19", "androidWithhold": false, "productId": "cn.dxy.drugspro.autorenew.plus.onemonth", "orderType": 300001, "rightsNum": 13, "activeType": 1, "expiredDay": 99999999, "userProStatStatusEnum": "VALID", "placeholderVip": false, "purchaseTotalValue": 782, "upgradeSvipCount": 0 }, "memberDiscount": false, "userProDiscountType": 0, "userProDiscountPromptType": 0, "promotionDiscountPromptType": 0, "remainExpiredDay": 0, "discountPrice": 0, "promotionPeriod": false, "upgradable": false, "displayUpgradeProduct": false } };
$done({
	'body': JSON.stringify(obj)
})
