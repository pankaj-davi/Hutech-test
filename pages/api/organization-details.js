import nc from "next-connect";
import db from "../../utility/connectDb";
import userOrgDetail from "../../Modal/userOrganizationDetails";

const handler = nc();

handler.post(async (req, res) => {
    
    try {
        
        await db.connect();
        const {
            orgCode,
            orgName,
            cinNumber,
            gstNumber,
            domainName,
            addressLineOne,
            addresslineTwo,
            phoneNumber,
            city,
            state,
            pinCode,
            country,
        } = req.body;
        
        const inserDetail = userOrgDetail.insertMany({
            "OrganizationCode": orgCode,
            "OrganizationName": orgName,
            "CINNumber": cinNumber,
            "GSTNumber": gstNumber,
            "DomainName": domainName,
            "AddressLine1": addressLineOne,
            "AddressLine2": addresslineTwo,
            "Phone": phoneNumber,
            "City": city,
            "State": state,
            "PINCode": pinCode,
            "Country": country,
        });

        res.status(200).json({ message: "your data has been successfully submitted"});

    } catch (err) {
        res.status(401).json({ message: "something wend wrong please try again"});
    }
})

export default handler;