import mongoose from "mongoose";

const userOrganizationDetailsSchema = new mongoose.Schema({

    OrganizationCode: { type: String },
    OrganizationName: { type: String },
    CINNumber: { type: String },
    GSTNumber: { type: String },
    DomainName: { type: String },
    AddressLine1: { type: String },
    AddressLine2: { type: String },
    Phone: { type: Number },
    City: { type: String },
    State: { type: String },
    PINCode: { type: Number },
    Country: { type: String },
    
}, {
    timestamps : true,
})


const userOrgDetail = mongoose.models.organizationdetailsdata || mongoose.model("organizationdetailsdata", userOrganizationDetailsSchema );

export default userOrgDetail;