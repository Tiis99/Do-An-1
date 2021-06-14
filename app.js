require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const port = 3333;

// Import routes
const indexUser = require("./routes/index")

// Kết nối database
mongoose.connect(process.env.DATABASE_URL, 
{useNewUrlParser: true, useUnifiedTopology: true}).then(function() {
    console.log("Kết nối thành công với cơ sở dữ liệu");    
}).catch(function(err) {
    console.log('Không thể kết nối tới cơ sở dữ liệu. Đang thoát ra...', err);
    process.exit();
});

// Gửi yêu cầu phân tích kiểu nội dung application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// Gửi yêu cầu phân tích kiểu nội dung application/json
app.use(express.json())

// Route middlewares
app.use('/api/user',indexUser)

// Lắng nghe các requests
app.listen(port, function(){
    console.log("Cổng nghe máy chủ",+port)
})

