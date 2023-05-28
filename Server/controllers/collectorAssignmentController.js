const Order = require('../models/Order');

const assignCollector = async (req, res) => {
    try {
        const orderID = req.body.orderID;
        const collectorID = req.body.collectorID;

        const assignedOrder = await Order.update(
            { collectorID: collectorID },
            { where: { orderID: orderID } }
        );

        res.json(assignedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};


const removeCollector = async (req, res) => {
    try {
        const orderID = req.body.orderID;

        const unassignedOrder = await Order.update(
            { collectorID: null },
            { where: { orderID: orderID } }
        );

        res.json(unassignedOrder);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};



module.exports = {
    assignCollector, removeCollector, 
};
