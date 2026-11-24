const Razorpay = require("razorpay");

let _instance = null;

exports.getInstance = () => {
	if (!_instance) {
		_instance = new Razorpay({
			key_id: process.env.RAZORPAY_KEY || "",
			key_secret: process.env.RAZORPAY_SECRET || "",
		});
	}
	return _instance;
};

// Backward-compatible named export (lazy)
Object.defineProperty(exports, "instance", {
	get: () => exports.getInstance(),
});
