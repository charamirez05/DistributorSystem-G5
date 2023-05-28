const Order = require('../models/Order');
const Dealer= require('../models/Dealer');

const registerDealer = async (req, res) => {
    try {
        const dealerFName= req.body.dealerFName;
        const dealerMName=req.body.dealerMName;
        const dealerLName=req.body.dealerLName;
        const dealerBDate=req.body.dealerBDate;
        const dealerGender=req.body.dealerGender;
        const dealerCuAddress=req.body.dealerCuAddress;
        const dealerPeAddress=req.body.dealerPeAddress;
        const dealerContactNo=req.body.dealerContactNo;
        const dealerHasBusiness=req.body.dealerHasBusiness;
        const dealerBusinessName= req.body.dealerBusinessName;
        const dealerBusinessPhone= req.body.dealerBusinessPhone;
        const dealerBusinessAddress= req.body.dealerBusinessAddress;
        const dealerBusinessTIN= req.body.dealerBusinessTIN;
        const dealerCreditLimit= req.body.dealerCreditLimit;
        const dealerSubmissionDate=req.body.dealerSubmissionDate;
        const attachments= req.body.attachments;
    
        const dealer = await Dealer.create({dealerFName, dealerMName,dealerLName, dealerBDate, dealerGender, dealerCuAddress, dealerPeAddress, dealerContactNo, dealerHasBusiness, dealerBusinessName, dealerBusinessPhone, dealerBusinessAddress, dealerBusinessTIN,dealerCreditLimit,dealerSubmissionDate,attachments});
      res.json(dealer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
  };

  const getAllDealers = async (req, res) => {
    try {
      const dealers = await Dealer.findAll();
      
      res.json(dealers);
    } catch (error) {
      console.error('Error retrieving orders:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  
 
const getDealerByID = async (req, res) => {
    try {
      const dealer = await Dealer.findOne({
        where: {
            dealerID: req.params.dealerID
        }
      });
  
      res.json(dealer);
    } catch (error) {
      console.error('Error retrieving dealerrs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
};
module.exports = {
    registerDealer, getAllDealers, getDealerByID
};
