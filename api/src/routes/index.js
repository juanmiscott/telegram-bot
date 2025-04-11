const express = require('express')
const router = express.Router()

const adminUsers = require('./admin/users.js')
const adminCustomers = require('./admin/customers.js')
const adminFaqs = require('./admin/faqs.js')

router.use('/admin/users', adminUsers)
router.use('/admin/customers', adminCustomers)
router.use('/admin/faqs', adminFaqs)

module.exports = router
