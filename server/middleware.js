const jwt = require('jsonwebtoken');
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, process.env.SECRET_CODE, (err, decoded) => {
        if (err) {
            console.log(err);
            return res.status(401).send('Invalid token');
        }

        req.user = decoded;
        next();
    });
};

module.exports.placeOrder = (req, res, next) => {
    var options = {
        "key": process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        "amount": req.query.amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Leaseposh", //your business name
        "description": "Pay For Your Favourites To Rent",
        "image": "https://leaseposh.vercel.app/favicon.png",
        "order_id": req.query.order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature)
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
    });
}
