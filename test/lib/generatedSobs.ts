import { RestObject, SObject, sField, SalesforceFieldType, SFieldProperties } from '../../src/index';

/**
 * Immutable Property Interface for Account
 */
export interface AccountFields {
    readonly contacts?: ContactFields[];
    readonly id?: string;
    readonly isDeleted?: boolean;
    readonly masterRecord?: AccountFields;
    readonly masterRecordId?: string;
    readonly name?: string;
    readonly type?: string;
    readonly parent?: AccountFields;
    readonly parentId?: string;
    readonly billingStreet?: string;
    readonly billingCity?: string;
    readonly billingState?: string;
    readonly billingPostalCode?: string;
    readonly billingCountry?: string;
    readonly billingLatitude?: number;
    readonly billingLongitude?: number;
    readonly billingGeocodeAccuracy?: string;
    readonly billingAddress?: string;
    readonly shippingStreet?: string;
    readonly shippingCity?: string;
    readonly shippingState?: string;
    readonly shippingPostalCode?: string;
    readonly shippingCountry?: string;
    readonly shippingLatitude?: number;
    readonly shippingLongitude?: number;
    readonly shippingGeocodeAccuracy?: string;
    readonly shippingAddress?: string;
    readonly phone?: string;
    readonly fax?: string;
    readonly accountNumber?: string;
    readonly website?: string;
    readonly photoUrl?: string;
    readonly sic?: string;
    readonly industry?: string;
    readonly annualRevenue?: number;
    readonly numberOfEmployees?: number;
    readonly ownership?: string;
    readonly tickerSymbol?: string;
    readonly description?: string;
    readonly rating?: string;
    readonly site?: string;
    readonly ownerId?: string;
    readonly createdDate?: Date;
    readonly createdById?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedById?: string;
    readonly systemModstamp?: Date;
    readonly lastActivityDate?: Date;
    readonly lastViewedDate?: Date;
    readonly lastReferencedDate?: Date;
    readonly jigsaw?: string;
    readonly jigsawCompanyId?: string;
    readonly cleanStatus?: string;
    readonly accountSource?: string;
    readonly dunsNumber?: string;
    readonly tradestyle?: string;
    readonly naicsCode?: string;
    readonly naicsDesc?: string;
    readonly yearStarted?: string;
    readonly sicDesc?: string;
    readonly dandbCompanyId?: string;
    readonly customerPriority?: string;
    readonly sLA?: string;
    readonly active?: string;
    readonly numberofLocations?: number;
    readonly upsellOpportunity?: string;
    readonly sLASerialNumber?: string;
    readonly sLAExpirationDate?: Date;
}

/**
 * Generated class for Account
 */
export class Account extends RestObject implements AccountFields {
    @sField({ apiName: 'Contacts', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: true, salesforceType: undefined, salesforceLabel: 'undefined' })
    public contacts: Contact[];
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Account%20ID' })
    public id: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted' })
    public isDeleted: boolean;
    @sField({ apiName: 'MasterRecord', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: false, salesforceType: undefined, salesforceLabel: 'undefined' })
    public masterRecord: Account;
    @sField({ apiName: 'MasterRecordId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master%20Record%20ID' })
    public masterRecordId: string;
    @sField({ apiName: 'Name', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account%20Name' })
    public name: string;
    @sField({ apiName: 'Type', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account%20Type' })
    public type: string;
    @sField({ apiName: 'Parent', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: false, salesforceType: undefined, salesforceLabel: 'undefined' })
    public parent: Account;
    @sField({ apiName: 'ParentId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Parent%20Account%20ID' })
    public parentId: string;
    @sField({ apiName: 'BillingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Billing%20Street' })
    public billingStreet: string;
    @sField({ apiName: 'BillingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing%20City' })
    public billingCity: string;
    @sField({ apiName: 'BillingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing%20State/Province' })
    public billingState: string;
    @sField({ apiName: 'BillingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing%20Zip/Postal%20Code' })
    public billingPostalCode: string;
    @sField({ apiName: 'BillingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Billing%20Country' })
    public billingCountry: string;
    @sField({ apiName: 'BillingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Billing%20Latitude' })
    public billingLatitude: number;
    @sField({ apiName: 'BillingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Billing%20Longitude' })
    public billingLongitude: number;
    @sField({ apiName: 'BillingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Billing%20Geocode%20Accuracy' })
    public billingGeocodeAccuracy: string;
    @sField({ apiName: 'BillingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Billing%20Address' })
    public billingAddress: string;
    @sField({ apiName: 'ShippingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Shipping%20Street' })
    public shippingStreet: string;
    @sField({ apiName: 'ShippingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping%20City' })
    public shippingCity: string;
    @sField({ apiName: 'ShippingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping%20State/Province' })
    public shippingState: string;
    @sField({ apiName: 'ShippingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping%20Zip/Postal%20Code' })
    public shippingPostalCode: string;
    @sField({ apiName: 'ShippingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Shipping%20Country' })
    public shippingCountry: string;
    @sField({ apiName: 'ShippingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Shipping%20Latitude' })
    public shippingLatitude: number;
    @sField({ apiName: 'ShippingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Shipping%20Longitude' })
    public shippingLongitude: number;
    @sField({ apiName: 'ShippingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Shipping%20Geocode%20Accuracy' })
    public shippingGeocodeAccuracy: string;
    @sField({ apiName: 'ShippingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Shipping%20Address' })
    public shippingAddress: string;
    @sField({ apiName: 'Phone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Account%20Phone' })
    public phone: string;
    @sField({ apiName: 'Fax', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Account%20Fax' })
    public fax: string;
    @sField({ apiName: 'AccountNumber', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account%20Number' })
    public accountNumber: string;
    @sField({ apiName: 'Website', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Website' })
    public website: string;
    @sField({ apiName: 'PhotoUrl', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Photo%20URL' })
    public photoUrl: string;
    @sField({ apiName: 'Sic', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SIC%20Code' })
    public sic: string;
    @sField({ apiName: 'Industry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Industry' })
    public industry: string;
    @sField({ apiName: 'AnnualRevenue', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.CURRENCY, salesforceLabel: 'Annual%20Revenue' })
    public annualRevenue: number;
    @sField({ apiName: 'NumberOfEmployees', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.INT, salesforceLabel: 'Employees' })
    public numberOfEmployees: number;
    @sField({ apiName: 'Ownership', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Ownership' })
    public ownership: string;
    @sField({ apiName: 'TickerSymbol', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Ticker%20Symbol' })
    public tickerSymbol: string;
    @sField({ apiName: 'Description', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Account%20Description' })
    public description: string;
    @sField({ apiName: 'Rating', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account%20Rating' })
    public rating: string;
    @sField({ apiName: 'Site', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Account%20Site' })
    public site: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner%20ID' })
    public ownerId: string;
    @sField({ apiName: 'CreatedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Created%20Date' })
    public createdDate: Date;
    @sField({ apiName: 'CreatedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Created%20By%20ID' })
    public createdById: string;
    @sField({ apiName: 'LastModifiedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Modified%20Date' })
    public lastModifiedDate: Date;
    @sField({ apiName: 'LastModifiedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Last%20Modified%20By%20ID' })
    public lastModifiedById: string;
    @sField({ apiName: 'SystemModstamp', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'System%20Modstamp' })
    public systemModstamp: Date;
    @sField({ apiName: 'LastActivityDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Last%20Activity' })
    public lastActivityDate: Date;
    @sField({ apiName: 'LastViewedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Viewed%20Date' })
    public lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Referenced%20Date' })
    public lastReferencedDate: Date;
    @sField({ apiName: 'Jigsaw', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Data.com%20Key' })
    public jigsaw: string;
    @sField({ apiName: 'JigsawCompanyId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Jigsaw%20Company%20ID' })
    public jigsawCompanyId: string;
    @sField({ apiName: 'CleanStatus', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Clean%20Status' })
    public cleanStatus: string;
    @sField({ apiName: 'AccountSource', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Account%20Source' })
    public accountSource: string;
    @sField({ apiName: 'DunsNumber', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'D-U-N-S%20Number' })
    public dunsNumber: string;
    @sField({ apiName: 'Tradestyle', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Tradestyle' })
    public tradestyle: string;
    @sField({ apiName: 'NaicsCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'NAICS%20Code' })
    public naicsCode: string;
    @sField({ apiName: 'NaicsDesc', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'NAICS%20Description' })
    public naicsDesc: string;
    @sField({ apiName: 'YearStarted', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Year%20Started' })
    public yearStarted: string;
    @sField({ apiName: 'SicDesc', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SIC%20Description' })
    public sicDesc: string;
    @sField({ apiName: 'DandbCompanyId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'D%26B%20Company%20ID' })
    public dandbCompanyId: string;
    @sField({ apiName: 'CustomerPriority__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Customer%20Priority' })
    public customerPriority: string;
    @sField({ apiName: 'SLA__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'SLA' })
    public sLA: string;
    @sField({ apiName: 'Active__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Active' })
    public active: string;
    @sField({ apiName: 'NumberofLocations__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Number%20of%20Locations' })
    public numberofLocations: number;
    @sField({ apiName: 'UpsellOpportunity__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Upsell%20Opportunity' })
    public upsellOpportunity: string;
    @sField({ apiName: 'SLASerialNumber__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'SLA%20Serial%20Number' })
    public sLASerialNumber: string;
    @sField({ apiName: 'SLAExpirationDate__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'SLA%20Expiration%20Date' })
    public sLAExpirationDate: Date;

    constructor (fields?: AccountFields) {
        super('Account');
        this.contacts = void 0;
        this.id = void 0;
        this.isDeleted = void 0;
        this.masterRecord = void 0;
        this.masterRecordId = void 0;
        this.name = void 0;
        this.type = void 0;
        this.parent = void 0;
        this.parentId = void 0;
        this.billingStreet = void 0;
        this.billingCity = void 0;
        this.billingState = void 0;
        this.billingPostalCode = void 0;
        this.billingCountry = void 0;
        this.billingLatitude = void 0;
        this.billingLongitude = void 0;
        this.billingGeocodeAccuracy = void 0;
        this.billingAddress = void 0;
        this.shippingStreet = void 0;
        this.shippingCity = void 0;
        this.shippingState = void 0;
        this.shippingPostalCode = void 0;
        this.shippingCountry = void 0;
        this.shippingLatitude = void 0;
        this.shippingLongitude = void 0;
        this.shippingGeocodeAccuracy = void 0;
        this.shippingAddress = void 0;
        this.phone = void 0;
        this.fax = void 0;
        this.accountNumber = void 0;
        this.website = void 0;
        this.photoUrl = void 0;
        this.sic = void 0;
        this.industry = void 0;
        this.annualRevenue = void 0;
        this.numberOfEmployees = void 0;
        this.ownership = void 0;
        this.tickerSymbol = void 0;
        this.description = void 0;
        this.rating = void 0;
        this.site = void 0;
        this.ownerId = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.lastActivityDate = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.jigsaw = void 0;
        this.jigsawCompanyId = void 0;
        this.cleanStatus = void 0;
        this.accountSource = void 0;
        this.dunsNumber = void 0;
        this.tradestyle = void 0;
        this.naicsCode = void 0;
        this.naicsDesc = void 0;
        this.yearStarted = void 0;
        this.sicDesc = void 0;
        this.dandbCompanyId = void 0;
        this.customerPriority = void 0;
        this.sLA = void 0;
        this.active = void 0;
        this.numberofLocations = void 0;
        this.upsellOpportunity = void 0;
        this.sLASerialNumber = void 0;
        this.sLAExpirationDate = void 0;
        Object.assign(this, fields);
    }

    public static API_NAME: 'Account' = 'Account';
    private static _fields: { [P in keyof AccountFields]: SFieldProperties; };

    public static get FIELDS () {
        return this._fields = this._fields ? this._fields : Account.getPropertiesMeta<AccountFields, Account>(Account);
    }

    public static async retrieve (qry: string): Promise<Account[]> {
        return await RestObject.query<Account>(Account, qry);
    }

    public static fromSFObject (sob: SObject): Account {
        return new Account().mapFromQuery(sob);
    }

    public toImmutable (): AccountFields {
        return this.clone();
    }
}

/**
 * Immutable Property Interface for Contact
 */
export interface ContactFields {
    readonly id?: string;
    readonly isDeleted?: boolean;
    readonly masterRecord?: ContactFields;
    readonly masterRecordId?: string;
    readonly account?: AccountFields;
    readonly accountId?: string;
    readonly lastName?: string;
    readonly firstName?: string;
    readonly salutation?: string;
    readonly name?: string;
    readonly otherStreet?: string;
    readonly otherCity?: string;
    readonly otherState?: string;
    readonly otherPostalCode?: string;
    readonly otherCountry?: string;
    readonly otherLatitude?: number;
    readonly otherLongitude?: number;
    readonly otherGeocodeAccuracy?: string;
    readonly otherAddress?: string;
    readonly mailingStreet?: string;
    readonly mailingCity?: string;
    readonly mailingState?: string;
    readonly mailingPostalCode?: string;
    readonly mailingCountry?: string;
    readonly mailingLatitude?: number;
    readonly mailingLongitude?: number;
    readonly mailingGeocodeAccuracy?: string;
    readonly mailingAddress?: string;
    readonly phone?: string;
    readonly fax?: string;
    readonly mobilePhone?: string;
    readonly homePhone?: string;
    readonly otherPhone?: string;
    readonly assistantPhone?: string;
    readonly reportsTo?: ContactFields;
    readonly reportsToId?: string;
    readonly email?: string;
    readonly title?: string;
    readonly department?: string;
    readonly assistantName?: string;
    readonly leadSource?: string;
    readonly birthdate?: Date;
    readonly description?: string;
    readonly ownerId?: string;
    readonly createdDate?: Date;
    readonly createdById?: string;
    readonly lastModifiedDate?: Date;
    readonly lastModifiedById?: string;
    readonly systemModstamp?: Date;
    readonly lastActivityDate?: Date;
    readonly lastCURequestDate?: Date;
    readonly lastCUUpdateDate?: Date;
    readonly lastViewedDate?: Date;
    readonly lastReferencedDate?: Date;
    readonly emailBouncedReason?: string;
    readonly emailBouncedDate?: Date;
    readonly isEmailBounced?: boolean;
    readonly photoUrl?: string;
    readonly jigsaw?: string;
    readonly jigsawContactId?: string;
    readonly cleanStatus?: string;
    readonly level?: string;
    readonly languages?: string;
}

/**
 * Generated class for Contact
 */
export class Contact extends RestObject implements ContactFields {
    @sField({ apiName: 'Id', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ID, salesforceLabel: 'Contact%20ID' })
    public id: string;
    @sField({ apiName: 'IsDeleted', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Deleted' })
    public isDeleted: boolean;
    @sField({ apiName: 'MasterRecord', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: undefined, salesforceLabel: 'undefined' })
    public masterRecord: Contact;
    @sField({ apiName: 'MasterRecordId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Master%20Record%20ID' })
    public masterRecordId: string;
    @sField({ apiName: 'Account', readOnly: true, required: false, reference: () => { return Account; }, childRelationship: false, salesforceType: undefined, salesforceLabel: 'undefined' })
    public account: Account;
    @sField({ apiName: 'AccountId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Account%20ID' })
    public accountId: string;
    @sField({ apiName: 'LastName', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Last%20Name' })
    public lastName: string;
    @sField({ apiName: 'FirstName', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'First%20Name' })
    public firstName: string;
    @sField({ apiName: 'Salutation', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Salutation' })
    public salutation: string;
    @sField({ apiName: 'Name', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Full%20Name' })
    public name: string;
    @sField({ apiName: 'OtherStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Other%20Street' })
    public otherStreet: string;
    @sField({ apiName: 'OtherCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other%20City' })
    public otherCity: string;
    @sField({ apiName: 'OtherState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other%20State/Province' })
    public otherState: string;
    @sField({ apiName: 'OtherPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other%20Zip/Postal%20Code' })
    public otherPostalCode: string;
    @sField({ apiName: 'OtherCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Other%20Country' })
    public otherCountry: string;
    @sField({ apiName: 'OtherLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Other%20Latitude' })
    public otherLatitude: number;
    @sField({ apiName: 'OtherLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Other%20Longitude' })
    public otherLongitude: number;
    @sField({ apiName: 'OtherGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Other%20Geocode%20Accuracy' })
    public otherGeocodeAccuracy: string;
    @sField({ apiName: 'OtherAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Other%20Address' })
    public otherAddress: string;
    @sField({ apiName: 'MailingStreet', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Mailing%20Street' })
    public mailingStreet: string;
    @sField({ apiName: 'MailingCity', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing%20City' })
    public mailingCity: string;
    @sField({ apiName: 'MailingState', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing%20State/Province' })
    public mailingState: string;
    @sField({ apiName: 'MailingPostalCode', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing%20Zip/Postal%20Code' })
    public mailingPostalCode: string;
    @sField({ apiName: 'MailingCountry', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Mailing%20Country' })
    public mailingCountry: string;
    @sField({ apiName: 'MailingLatitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Mailing%20Latitude' })
    public mailingLatitude: number;
    @sField({ apiName: 'MailingLongitude', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DOUBLE, salesforceLabel: 'Mailing%20Longitude' })
    public mailingLongitude: number;
    @sField({ apiName: 'MailingGeocodeAccuracy', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Mailing%20Geocode%20Accuracy' })
    public mailingGeocodeAccuracy: string;
    @sField({ apiName: 'MailingAddress', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.ADDRESS, salesforceLabel: 'Mailing%20Address' })
    public mailingAddress: string;
    @sField({ apiName: 'Phone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Business%20Phone' })
    public phone: string;
    @sField({ apiName: 'Fax', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Business%20Fax' })
    public fax: string;
    @sField({ apiName: 'MobilePhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Mobile%20Phone' })
    public mobilePhone: string;
    @sField({ apiName: 'HomePhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Home%20Phone' })
    public homePhone: string;
    @sField({ apiName: 'OtherPhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Other%20Phone' })
    public otherPhone: string;
    @sField({ apiName: 'AssistantPhone', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PHONE, salesforceLabel: 'Asst.%20Phone' })
    public assistantPhone: string;
    @sField({ apiName: 'ReportsTo', readOnly: true, required: false, reference: () => { return Contact; }, childRelationship: false, salesforceType: undefined, salesforceLabel: 'undefined' })
    public reportsTo: Contact;
    @sField({ apiName: 'ReportsToId', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Reports%20To%20ID' })
    public reportsToId: string;
    @sField({ apiName: 'Email', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.EMAIL, salesforceLabel: 'Email' })
    public email: string;
    @sField({ apiName: 'Title', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Title' })
    public title: string;
    @sField({ apiName: 'Department', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Department' })
    public department: string;
    @sField({ apiName: 'AssistantName', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Assistant%27s%20Name' })
    public assistantName: string;
    @sField({ apiName: 'LeadSource', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Lead%20Source' })
    public leadSource: string;
    @sField({ apiName: 'Birthdate', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Birthdate' })
    public birthdate: Date;
    @sField({ apiName: 'Description', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.TEXTAREA, salesforceLabel: 'Contact%20Description' })
    public description: string;
    @sField({ apiName: 'OwnerId', readOnly: false, required: true, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Owner%20ID' })
    public ownerId: string;
    @sField({ apiName: 'CreatedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Created%20Date' })
    public createdDate: Date;
    @sField({ apiName: 'CreatedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Created%20By%20ID' })
    public createdById: string;
    @sField({ apiName: 'LastModifiedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Modified%20Date' })
    public lastModifiedDate: Date;
    @sField({ apiName: 'LastModifiedById', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.REFERENCE, salesforceLabel: 'Last%20Modified%20By%20ID' })
    public lastModifiedById: string;
    @sField({ apiName: 'SystemModstamp', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'System%20Modstamp' })
    public systemModstamp: Date;
    @sField({ apiName: 'LastActivityDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATE, salesforceLabel: 'Last%20Activity' })
    public lastActivityDate: Date;
    @sField({ apiName: 'LastCURequestDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Stay-in-Touch%20Request%20Date' })
    public lastCURequestDate: Date;
    @sField({ apiName: 'LastCUUpdateDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Stay-in-Touch%20Save%20Date' })
    public lastCUUpdateDate: Date;
    @sField({ apiName: 'LastViewedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Viewed%20Date' })
    public lastViewedDate: Date;
    @sField({ apiName: 'LastReferencedDate', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Last%20Referenced%20Date' })
    public lastReferencedDate: Date;
    @sField({ apiName: 'EmailBouncedReason', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Email%20Bounced%20Reason' })
    public emailBouncedReason: string;
    @sField({ apiName: 'EmailBouncedDate', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.DATETIME, salesforceLabel: 'Email%20Bounced%20Date' })
    public emailBouncedDate: Date;
    @sField({ apiName: 'IsEmailBounced', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.BOOLEAN, salesforceLabel: 'Is%20Email%20Bounced' })
    public isEmailBounced: boolean;
    @sField({ apiName: 'PhotoUrl', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.URL, salesforceLabel: 'Photo%20URL' })
    public photoUrl: string;
    @sField({ apiName: 'Jigsaw', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Data.com%20Key' })
    public jigsaw: string;
    @sField({ apiName: 'JigsawContactId', readOnly: true, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Jigsaw%20Contact%20ID' })
    public jigsawContactId: string;
    @sField({ apiName: 'CleanStatus', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Clean%20Status' })
    public cleanStatus: string;
    @sField({ apiName: 'Level__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.PICKLIST, salesforceLabel: 'Level' })
    public level: string;
    @sField({ apiName: 'Languages__c', readOnly: false, required: false, reference: undefined, childRelationship: false, salesforceType: SalesforceFieldType.STRING, salesforceLabel: 'Languages' })
    public languages: string;

    constructor (fields?: ContactFields) {
        super('Contact');
        this.id = void 0;
        this.isDeleted = void 0;
        this.masterRecord = void 0;
        this.masterRecordId = void 0;
        this.account = void 0;
        this.accountId = void 0;
        this.lastName = void 0;
        this.firstName = void 0;
        this.salutation = void 0;
        this.name = void 0;
        this.otherStreet = void 0;
        this.otherCity = void 0;
        this.otherState = void 0;
        this.otherPostalCode = void 0;
        this.otherCountry = void 0;
        this.otherLatitude = void 0;
        this.otherLongitude = void 0;
        this.otherGeocodeAccuracy = void 0;
        this.otherAddress = void 0;
        this.mailingStreet = void 0;
        this.mailingCity = void 0;
        this.mailingState = void 0;
        this.mailingPostalCode = void 0;
        this.mailingCountry = void 0;
        this.mailingLatitude = void 0;
        this.mailingLongitude = void 0;
        this.mailingGeocodeAccuracy = void 0;
        this.mailingAddress = void 0;
        this.phone = void 0;
        this.fax = void 0;
        this.mobilePhone = void 0;
        this.homePhone = void 0;
        this.otherPhone = void 0;
        this.assistantPhone = void 0;
        this.reportsTo = void 0;
        this.reportsToId = void 0;
        this.email = void 0;
        this.title = void 0;
        this.department = void 0;
        this.assistantName = void 0;
        this.leadSource = void 0;
        this.birthdate = void 0;
        this.description = void 0;
        this.ownerId = void 0;
        this.createdDate = void 0;
        this.createdById = void 0;
        this.lastModifiedDate = void 0;
        this.lastModifiedById = void 0;
        this.systemModstamp = void 0;
        this.lastActivityDate = void 0;
        this.lastCURequestDate = void 0;
        this.lastCUUpdateDate = void 0;
        this.lastViewedDate = void 0;
        this.lastReferencedDate = void 0;
        this.emailBouncedReason = void 0;
        this.emailBouncedDate = void 0;
        this.isEmailBounced = void 0;
        this.photoUrl = void 0;
        this.jigsaw = void 0;
        this.jigsawContactId = void 0;
        this.cleanStatus = void 0;
        this.level = void 0;
        this.languages = void 0;
        Object.assign(this, fields);
    }

    public static API_NAME: 'Contact' = 'Contact';
    private static _fields: { [P in keyof ContactFields]: SFieldProperties; };

    public static get FIELDS () {
        return this._fields = this._fields ? this._fields : Contact.getPropertiesMeta<ContactFields, Contact>(Contact);
    }

    public static async retrieve (qry: string): Promise<Contact[]> {
        return await RestObject.query<Contact>(Contact, qry);
    }

    public static fromSFObject (sob: SObject): Contact {
        return new Contact().mapFromQuery(sob);
    }

    public toImmutable (): ContactFields {
        return this.clone();
    }
}
