import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const Survey = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const questions = {
  1: {
    question: 'Are you an issuer looking for capital or an investor?',
    answers: ['Issuer', 'Investor'],
    nextStep: (answer) => answer === 'Issuer' ? 2 : 202,
  },
  2: {
    question: 'What type of private capital are you seeking?',
    answers: ['Loan/Senior Debt (Company)', 'Mezzanine Debt (Company)', 'Equity (Company)', 'Loan/Debt (Real Estate)', 'Equity (Real Estate)', 'Limited Partners (Fund)'],
    nextStep: (answer) => {
      if (['Loan/Senior Debt (Company)', 'Mezzanine Debt (Company)', 'Equity (Company)'].includes(answer)) {
        return 3;
      } else if (['Loan/Debt (Real Estate)', 'Equity (Real Estate)'].includes(answer)) {
        return 60;
      } else if (answer === 'Limited Partners (Fund)') {
        return 70;
      }
    },
  },
  3: {
    question: 'What stage is your business?',
    answers: ['Mature/Buyout', 'Growth', 'Later Stage', 'Early Stage', 'Seed', 'Restructuring/Distressed'],
    nextStep: () => 4,
  },
  4: {
    question: 'What was your prior year revenue? ($millions)',
    answers: ['X'],

    nextStep: () => 5,
  },
  5: {
    question: 'What was your prior year EBITDA? ($millions)',
    answers: ['X'],
    nextStep: () => 10,

  },
    // ... Previous questions ...

10: {
  question: 'What type of loan are you seeking*?',
  answers: ['Commercial Lending', 'Consumer Loan Portfolios', 'Asset Based Lending', 'Specialty Lending'],
  nextStep: (answer) => {
    if (answer === 'Commercial Lending') {
      return 11;
    } else if (answer === 'Consumer Loan Portfolios') {
      return 12;
    } else if (answer === 'Asset Based Lending') {
      return 13;
    } else if (answer === 'Specialty Lending') {
      return 14;
    }
  },
},
11: {
  question: 'What type of commercial loan are you seeking*?',
  answers: ['2nd Lien', 'Bridge Loans', 'DIPLoans', 'Hard Money Lending', 'LeveragedLoans', 'Merchant Cash Advance', 'Mezzanine Financing', 'MiddleMarketLending', 'ResidualLoans(ISOs)', 'Subordinated Loans', 'Unitranche', 'Venture Capital Loans'],
  nextStep: () => 90,
},
12: {
  question: 'What type of consumer loan are you seeking*?',
  answers: ['AutoLoans', 'Consumer Loans', 'HighNetWorthLending', 'IndirectAutoFiancing', 'Mortgage', 'Mortgages-NonQM', 'MSRs', 'Student Loans', 'Warehouse Loans - Mortgages', 'Warehouse Loans – ABS'],
  nextStep: () => 90,
},
13: {
  question: 'What type of asset based loan are you seeking*?',
  answers: ['Asset Based Loans', 'Equipment Financing', 'Factoring', 'FleetFinance', 'Import/Export', 'Inventory Financing', 'Leasing', 'Lender Finance', 'Purchase Order Financing', 'SupplyChain', 'TradeFinance', 'VendorFinance'],
  nextStep: () => 90,
},
14: {
  question: 'What type of specialty lending are you seeking*?',
  answers: ['2nd Lien', 'Bridge Loans', 'DIPLoans', 'Hard Money Lending', 'LeveragedLoans', 'Merchant Cash Advance', 'Mezzanine Financing', 'MiddleMarketLending', 'ResidualLoans(ISOs)', 'Subordinated Loans', 'Unitranche', 'Venture Capital Loans'],
  nextStep: () => 90,
},
30: {
  question: 'What industry is your company?',
  answers: ['Business Services', 'Consumer Services', 'Communications/Media', 'Construction', 'Consumer/Retail', 'Ecommerce', 'Financial Services', 'FinTech', 'Government/Contracting', 'Healthcare', 'Industrial/Manufacturing', 'Infrastructure', 'Real Assets', 'Recreation', 'Technology', 'Transportation/Warehousing'],
  nextStep: (answer) => {
    const index = questions[30].answers.indexOf(answer);
    return 31 + index;
  },
},
31: {
  question: 'Business Services – Select One',
  answers: ['Accounting', 'AdvertisingMarketing', 'AgricultureServices', 'AppraisalAuction', 'ArchitectEngineering', 'BusinessProcessOutsourcing', 'BusinessServices-All', 'Cleaning', 'CommercialLabs', 'CommercialRealEstateServicing', 'Consulting', 'ConsumerCreditReporting', 'Environmental', 'FarmLaborServices', 'IT Services', 'LandscapeLawn', 'Legal', 'MortgageServicer', 'Other-BS', 'PackagingLabeling', 'PayrollProcessing', 'PestControl', 'PrintingPhotography', 'Repairs', 'ResidentialMortgageServicing', 'Security', 'TalentManagement', 'Staffing', 'WasteManagement', 'Wholesale'],
  nextStep: () => 90,
},
32: {
  question: 'Consumer Services – Select One',
  answers: ['Accounting', 'AdvertisingMarketing', 'ConsumerServices-All', 'EducationServices', 'FuneralCemetary', 'InteriorDesign', 'Laundry/DryCleaners', 'MembershipOrganizations', 'MiscConsumerServices', 'MotionPictures', 'Other-CS', 'SocialServices/Charities/NonProfit'],
  nextStep: () => 90,
},
33: {
  question: 'Communications/Media – Select One',
  answers: ['Communication/Media-All', 'Communications', 'Entertainment', 'Media', 'Movies/Theatre', 'Other-CM', 'Radio', 'TelecomInfraStructure', 'Telecommunications', 'Television/Cable'],
  nextStep: () => 90,
},
34: {
  question: 'Construction – Select One',
  answers: ['BuildingContractors', 'HeavyConstructionContractors', 'TradeContractors', 'BuildingMaterials', 'Products/Supplies', 'Machinery/Equipment', 'Construction-All', 'Other-Construction'],
  nextStep: () => 90,
},
35: {
  question: 'Consumer/Retail – Select One',
  answers: ['Apparel&Stores', 'AutoDealer', 'Autos&Products', 'BeautySalons/Products/Cosmetics', 'Consumer/Retail-All', 'ConsumerProducts', 'ElectronicStoresRepairs', 'Food&Beverage', 'Franchises', 'FurnitureFixturesStores', 'Hardware/HomeSupply', 'Jewelry', 'OfficeEquipmentSupplies', 'Other-CR', 'Pharmacy', 'Products/Supplies', 'Restaurants', 'RetailMisc', 'ToysSportingGoods'],
  nextStep: () => 90,
},
36: {
  question: 'Ecommerce – Select One',
  answers: ['Ecommerce-All', 'ShoppingTech/Auctions', 'FashionTech/Online', 'FoodTech/Online', 'HotelTech/Online', 'Music&ArtApplications/Online', 'NewsTech/Weather/Online', 'PetProducts&Services/Online', 'ServicesTech/Online', 'SportsTech/Fitness/Online', 'Tickets&EventTech/Online', 'TravelTech/Online', 'VehicleTech/Online', 'Other-Ecommerce'],
  nextStep: () => 90,
},
37: {
  question: 'Financial Services – Select One',
  answers: ['AgriculturalInvestor', 'AlternativeInvestments', 'Angels', 'AutoLeasing', 'BankersBank', 'Bank-NonUS', 'Banks', 'Banks-Community/Regional', 'BDC', 'BusinessAssociation', 'CLOManager', 'ConsultantAssetManagement', 'CreditCardProcessing', 'CreditUnions', 'CTA', 'CTF', 'DebtCollectors', 'Endowment', 'EquipmentRentalLeasing', 'FamilyOffice(Multi)', 'FamilyOffice(Non-Investing)', 'FamilyOffice(Single)', 'FinancialServices-All', 'Foundation', 'FundlessSponsor', 'HedgeFoF', 'HedgeFund', 'HedgeFundSeeder', 'HighNetWorth/LP', 'IBD/RIA', 'Insurance', 'InvestmentBank', 'Lender-AssetBasedFactoring', 'Lender-Auto', 'Lender-Commercial', 'Lender-Consumer', 'Lender-CRE', 'Lender-MerchantCashAdvance', 'Lender-SmallBusiness', 'Lender-Specialty', 'Lender-Warehouse', 'LifeSettlements', 'MerchantBank', 'Mezzanine', 'MortgageBank', 'Other(PatentTrollers, LitigationFunding, etc)', 'Other-FS', 'PensionFund', 'PensionFund-Public', 'PreciousMetalsTrading', 'PrivateEquity', 'PrivateEquityFoF', 'RealEstate(Buy/Rehab/Rent/Sell)', 'RealEstate(Direct Investments)', 'RealEstate(PropertyManagement/Brokerage)', 'RealEstate-All', 'REIT', 'SBIC', 'SovereignWealthFund', 'SPAC', 'TraditionalAssetManagement', 'TrustCompany', 'VentureCapital', 'VentureCapitalFoF', 'WealthManager'],
  nextStep: () => 90,
},
38: {
  question: 'FinTech – Select One',
  answers: ['AssetManagement', 'Banking/InvestmentBanking/CrowdFunding', 'CommercialRealEstate/Construction', 'CreditReporting/Scoring', 'Crypto/Blockchain', 'FinTech-All', 'FixedIncome/FX', 'InsureTech', 'Lending-Business', 'Lending-Consumer', 'Lending-Mortgages', 'MicroFinance', 'Other-FT', 'Payments/Billing', 'ResidentialRealEstate', 'SupplyChain', 'TradingTech/Exchanges'],
  nextStep: () => 90,
},
39: {
  question: 'Government/Contracting – Select One',
  answers: ['Agency', 'City', 'Consultant', 'County/Town', 'Government-All', 'GovernmentContracting', 'GovernmentTech', 'Other-Government', 'SchoolDistrict'],
  nextStep: () => 90,
},
40: {
  question: 'Healthcare – Select One',
  answers: ['Biotechnology/LifeSciences', 'Cannabis', 'EquipmentSupplies', 'Healthcare-All', 'HealthCenters', 'MedicalDevices/Diagnostics', 'MedicalEquipmentSupplies', 'MedicalServices', 'NutritionalProducts', 'Other-Healthcare', 'Pharmaceuticals', 'VeterinaryServices'],
  nextStep: () => 90,
},
41: {
  question: 'Industrial/Manufacturing – Select One',
  answers: ['AdvancedMaterials/Nanotech', 'ApparelManufacturing', 'Chemicals/AlliedProducts', 'Container', 'Distribution', 'Electrical/Electronic', 'Elevators', 'FarmMachinery', 'FurnitureFixturesManufacturing', 'Industrial/Manufacturing-All', 'Lumber/Pallet/Crate/Box', 'MachineryEquipment', 'ManufacturingMisc', 'MetalsManufacturing', 'Other-IM', 'Paper', 'PetroleumProducts', 'Printing&Publishing', 'Rubber/Plastics', 'Stone/Clay/Glass/Concrete', 'Textiles', 'Tobacco'],
  nextStep: () => 90,
},
42: {
  question: 'Infrastructure – Select One',
  answers: ['Communication', 'Energy', 'EnergyServices', 'Infrastructure-All', 'MachinerySevices', 'Oil&Gas-MidStream', 'Other-Infrastructure', 'PowerConventional', 'PowerRenewable', 'Social', 'Transportation', 'WasteManagement', 'Water'],
  nextStep: () => 90,
},
43: {
  question: 'RealAssets – Select One',
  answers: ['RealAssets-All', 'Agriculture', 'Commodities', 'Energy', 'EnergyServices', 'Infrastructure', 'Metals&Mining', 'Oil&Gas-E&P', 'Oil&Gas-MidStream', 'Oil&Gas-Services', 'Other-RealAssets', 'PowerConventional', 'PowerRenewable', 'RealEstate', 'Timberland', 'Water'],
  nextStep: () => 90,
},
44: {
  question: 'Recreation – Select One',
  answers: ['AmusementParks', 'BowlingCenters', 'GolfCourses', 'Marinas', 'Recreation-All', 'SkiResorts', 'SportsTeams', 'Other-Recreation'],
  nextStep: () => 90,
},
45: {
  question: 'Technology – Select One',
  answers: ['AdTech/DigitalMarketing', 'AgTech', 'Apps:Business/Legal/Compliance/ProjectMgmt', 'Apps:Consumer/Weather/News/Beauty', 'ArtificialIntel/BigData/Analytics', 'Autonomous/ElectricVehicles', 'BioMetrics', 'CleanTech/EnergyTech', 'Cloud/Networks', 'CommEquipment', 'ComputerHardware/MobileDevices/Wearables', 'ComputerServices', 'ComputerStores', 'Delivery/ShippingTech/Logistics', 'DigitalMedia/Photos/Publishing', 'Document/VideoManagement', 'Drones/Aerospace/Aviation', 'EducationTech', 'Electronics', 'EnterpriseSoftware', 'FrontierTech', 'Gaming/Gambling', 'HealthInfoTech', 'HomeTech/VirtualAssistants', 'HRTech/Staffing/Outsourcing', 'IndustryNewsWebsite', 'InformationTech', 'IntellectualProperty', 'Internet/SearchSolutions', 'IofThings', 'LawEnforcement/FirstResponders/Defense', 'LightingTech/LEDLighting', 'Mapping/GPS/Tracking', 'MarketPlace', 'Message/Meet/Communicate/CRM', 'MobileApps', 'MobileTech/AppDevelopment', 'Other-Technology', 'Parenting/Childcare', 'ProgrammingTools/Developers/Websites', 'ReputationManagement/OnlineReviews', 'Robotics', 'SaaS', 'SalesTech/CallCenters/CustomerSupport', 'Security/CyberSecurity/IdentityAuthorization', 'Sensors/MonitoringEquipment', 'SemiConductor', 'Social/BusinessNetworks', 'Software', 'Technology-All', 'TechOther', 'TechStorage', 'Video/TV/Radio/BroadcastTech', 'VirtualReality/AR/3DTech/3DPrinting', 'Voice/LanguageTranslation', 'WirelessCommunication'],
  nextStep: () => 90,
},
46: {
  question: 'Transportation/Warehousing',
  answers: ['Aerospace/Defense', 'AircraftManufacturing', 'AirlineTransportation', 'AutoAuctions', 'AutoDealers', 'AutoGasStation', 'AutoManufacturing', 'AutoPartsRepairs', 'AutoRentalLeasing', 'Buses', 'Freight', 'Logistics', 'MiscTransportation', 'Motorcycles/Bicycles/PowerSports', 'Other-Transportation', 'RailTransportation', 'RVs', 'SelfStorage', 'TaxiLimousines', 'Transportation-All', 'TruckTrailers', 'TruckTransportation', 'Warehousing', 'WaterTransportation'],
  nextStep: () => 90,
},
60: {
  question: 'What is your property type?',
  answers: ['All Property Types', 'Office', 'Industrial', 'Retail', 'Multifamily', 'Hotel', 'SeniorHousing', 'Self Storage', 'Residential', 'Warehouse', 'Distressed RE', '_', 'AffordableHousing', 'Apartment', 'CommunityDevLoans', 'HomeBuilder Financing', 'ManufacturedHousing', 'Mobile Home Parks', 'ResiFixupFliporRent', 'Student Housing', 'Timeshare', '_', 'Agriculture', 'ChurchLoans', 'Construction', 'Land', 'Health care', 'Nursing Homes', 'Entertainment', 'Golf', 'ResortFinance', 'Sports', '_', 'BNotes', 'CREBridgeLoans', 'SpecialServicing', 'Environmental Issues', 'Leases', 'Net Lease', 'Other'],
  nextStep: () => 90,
},
70: {
  question: 'What type of fund is it?',
  answers: ['All Funds', 'Fund of PEs', 'PE-Funds', 'Fund of VCs', 'VC Funds', 'Fund of HFs', 'HF-Strategy', 'Seeder', 'Fund of REs', 'RE-Funds', 'MutualFunds', 'SecondaryFunds', 'LBO Funds', 'EmergingManagers', 'Equity Tax Fund', 'Pension Funds'],
  nextStep: () => 90,
},
90: {
  question: 'How much capital do you want to raise?* ($ millions)',
  answers: ['100','500'],

  nextStep: () => 91,
},
91: {
  question: 'Where are you headquarters?* (Country)',
  answers: ['US', 'Canada', 'UK', 'France', 'Germany', 'Italy', 'Spain', 'Switzerland', '-', 'China', 'Japan', 'Hong Kong', '-', 'Israel', '-', 'Global', 'Africa', 'Asia', 'Australia', 'CentralAmerica', 'Europe', 'MiddleEast', 'SouthAmerica', '-', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Myanmar/Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominican Republic', 'Dominica', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'French Guiana', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Italy', 'Ivory Coast', 'Jamaica', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Republic of Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'North Korea', 'Norway', 'Oman', 'Pacific Islands', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent\'s & Grenadines', 'Samoa', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic (Slovakia)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Korea, Republic of (South Korea)', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor Leste', 'Togo', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (UK)', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe', 'Taiwan', 'Tokyo', 'South Korea', 'United Arab Emirates'],
  nextStep: () => 92, // Assuming the next question is 92
},
    
// ... Previous questions ...

92: {
  question: 'What are your headquarters? (State – US/Canada)',
  answers: ['AB', 'AK', 'AL', 'AR', 'AS', 'AZ', 'BC', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KA', 'KS', 'KY', 'LA', 'MA', 'MB', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NB', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NL', 'NM', 'NS', 'NT', 'NU', 'NV', 'NY', 'OH', 'OK', 'ON', 'OR', 'PA', 'PE', 'PR', 'PW', 'QC', 'RI', 'SC', 'SD', 'SK', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY', 'YT'],
  nextStep: () => 93,
},
93: {
  question: 'What type of Investor are you looking for?',
  answers: ['All Types', 'One Type'],
  nextStep: (answer) => answer === 'One Type' ? 94 : 99,
},
94: {
  question: 'What type of Investor are you looking for?',
  answers: ['Strategic Investor', '-', 'Angels', 'Agriculture Investor', 'Asset Manager', 'Bank', 'Bank-Community', 'BDC/SBIC/SPAC/CLO', 'CreditUnion', 'Endowment/Foundation', 'Family Office', 'Fund of Funds', 'FundLess Sponsor', 'Hedge Fund', 'Hedge Fund Seeder', 'High Net Worth', 'Insurance', 'Investment Bank', 'Lender-NonBank', 'Life Settlement', 'Litigation Funding', 'Mezzanine Fund', 'Pension Fund', 'Private Equity Fund', 'Real Estate Investor', 'REIT', 'Sovereign Wealth Fund', 'Venture Capital Fund', 'Mortgage Lender', 'Retail Investor'],
  nextStep: () => 99,
},
99: {////////////////////////////////////////////////////////////////
  question: 'GOTO [x] FIND MATCHES',
  answers: ['100','500'],

  nextStep: () => 202, // Assuming the next question is 202
},/////////////////////////////////////////////////////////
202: {
  question: 'What type of investment/loan are you seeking to make?',
  answers: ['Loan/Senior Debt (Company)', 'Mezzanine Debt (Company)', 'Equity (Company)', 'Loan/Debt (Real Estate)', 'Equity (Real Estate)', 'Limited Partner (Fund)'],
  nextStep: (answer) => {
    if (['Loan/Senior Debt (Company)', 'Mezzanine Debt (Company)', 'Equity (Company)'].includes(answer)) {
      return 203;
    } else if (['Loan/Debt (Real Estate)', 'Equity (Real Estate)'].includes(answer)) {
      return 260;
    } else if (answer === 'Limited Partner (Fund)') {
      return 270;
    }
  },
},
203: {
  question: 'What stage business?',
  answers: ['Mature/Buyout', 'Growth', 'Later Stage', 'Early Stage', 'Seed', 'Restructuring/Distressed'],
  nextStep: () => 204,
},
204: {
  question: 'What range of prior year revenue? ($millions)',
  nextStep: () => 205, // Assuming the next question is 205
},

205: {
  question: 'What range of prior year EBITDA? ($millions)',
  answers: ['100','500'],

  nextStep: (answer, context) => {
    if (context[202] === 'Loan/Senior Debt (Company)') {
      return 210;
    } else if (['Mezzanine Debt (Company)', 'Equity (Company)'].includes(context[202])) {
      return 230;
    }
  },
},
210: {
  question: 'What types of loans?* (choose one or more)',
  answers: ['Commercial Lending', 'Consumer Loan Portfolios', 'Asset Based Lending', 'Specialty Lending'],
  nextStep: (answer) => {
    if (answer.includes('Commercial Lending')) {
      return 211;
    } else if (answer.includes('Consumer Loan Portfolios')) {
      return 212;
    } else if (answer.includes('Asset Based Lending')) {
      return 213;
    } else if (answer.includes('Specialty Lending')) {
      return 214;
    }
  },
},
211: {
  question: 'What types of commercial loans?* (choose one or more)',
  answers: ['2nd Lien', 'Bridge Loans', 'DIPLoans', 'Hard Money Lending', 'LeveragedLoans', 'Merchant Cash Advance', 'Mezzanine Financing', 'MiddleMarketLending', 'ResidualLoans(ISOs)', 'Subordinated Loans', 'Unitranche', 'Venture Capital Loans'],
  nextStep: () => 290,
},
212: {
  question: 'What types of consumer loans?* (choose one or more)',
  answers: ['AutoLoans', 'Consumer Loans', 'HighNetWorthLending', 'IndirectAutoFiancing', 'Mortgage', 'Mortgages-NonQM', 'MSRs', 'Student Loans', 'Warehouse Loans - Mortgages', 'Warehouse Loans – ABS'],
  nextStep: () => 290,
},
213: {
  question: 'What types of asset based loans?* (choose one or more)',
  answers: ['Asset Based Loans', 'Equipment Financing', 'Factoring', 'FleetFinance', 'Import/Export', 'Inventory Financing', 'Leasing', 'Lender Finance', 'Purchase Order Financing', 'SupplyChain', 'TradeFinance', 'VendorFinance'],
  nextStep: () => 290,
},
214: {
  question: 'What type of specialty lending?* (choose one or more)',
  answers: ['2nd Lien', 'Bridge Loans', 'DIPLoans', 'Hard Money Lending', 'LeveragedLoans', 'Merchant Cash Advance', 'Mezzanine Financing', 'MiddleMarketLending', 'ResidualLoans(ISOs)', 'Subordinated Loans', 'Unitranche', 'Venture Capital Loans'],
  nextStep: () => 290,
},   
    
230: {
  question: 'What industries?* (choose one or more)',
  answers: ['Business Services', 'Consumer Services', 'Communications/Media', 'Construction', 'Consumer/Retail', 'Ecommerce', 'Financial Services', 'FinTech', 'Government/Contracting', 'Healthcare', 'Industrial/Manufacturing', 'Infrastructure', 'Real Assets', 'Recreation', 'Technology', 'Transportation/Warehousing'],
  nextStep: (answer) => {
    if (answer.includes('Business Services')) {
      return 231;
    } else if (answer.includes('Consumer Services')) {
      return 232;
    } else if (answer.includes('Communications/Media')) {
      return 233;
    } else if (answer.includes('Construction')) {
      return 234;
    } else if (answer.includes('Consumer/Retail')) {
      return 235;
    } else if (answer.includes('Ecommerce')) {
      return 236;
    } else if (answer.includes('Financial Services')) {
      return 237;
    } else if (answer.includes('FinTech')) {
      return 238;
    } else if (answer.includes('Government/Contracting')) {
      return 239;
    } else if (answer.includes('Healthcare')) {
      return 240;
    } else if (answer.includes('Industrial/Manufacturing')) {
      return 241;
    } else if (answer.includes('Infrastructure')) {
      return 242;
    } else if (answer.includes('Real Assets')) {
      return 243;
    } else if (answer.includes('Recreation')) {
      return 244;
    } else if (answer.includes('Technology')) {
      return 245;
    } else if (answer.includes('Transportation/Warehousing')) {
      return 246;
    }
  }
},
231: {
  question: 'Business Services* (choose one or more)',
  answers: ['Accounting', 'AdvertisingMarketing', 'AgricultureServices', 'AppraisalAuction', 'ArchitectEngineering', 'BusinessProcessOutsourcing', 'BusinessServices-All', 'Cleaning', 'CommercialLabs', 'CommercialRealEstateServicing', 'Consulting', 'ConsumerCreditReporting', 'Environmental', 'FarmLaborServices', 'IT Services', 'LandscapeLawn', 'Legal', 'MortgageServicer', 'Other-BS', 'PackagingLabeling', 'PayrollProcessing', 'PestControl', 'PrintingPhotography', 'Repairs', 'ResidentialMortgageServicing', 'Security', 'TalentManagement', 'Staffing', 'WasteManagement', 'Wholesale'],
  nextStep: () => 290, // Assuming the next question is 290
},
232: {
  question: 'Consumer Services* (choose one or more)',
  answers: ['Accounting', 'AdvertisingMarketing', 'ConsumerServices-All', 'EducationServices', 'FuneralCemetary', 'InteriorDesign', 'Laundry/DryCleaners', 'MembershipOrganizations', 'MiscConsumerServices', 'MotionPictures', 'Other-CS', 'SocialServices/Charities/NonProfit'],
  nextStep: () => 290, // Assuming the next question is 290
},
233: {
  question: 'Communications/Media* (choose one or more)',
  answers: ['Communication/Media-All', 'Communications', 'Entertainment', 'Media', 'Movies/Theatre', 'Other-CM', 'Radio', 'TelecomInfraStructure', 'Telecommunications', 'Television/Cable'],
  nextStep: () => 290, // Assuming the next question is 290
},
234: {
  question: 'Construction* (choose one or more)',
  answers: ['BuildingContractors', 'HeavyConstructionContractors', 'TradeContractors', 'BuildingMaterials', 'Products/Supplies', 'Machinery/Equipment', 'Construction-All', 'Other-Construction'],
  nextStep: () => 290, // Assuming the next question is 290
},
235: {
  question: 'Consumer/Retail* (choose one or more)',
  answers: ['Apparel&Stores', 'AutoDealer', 'Autos&Products', 'BeautySalons/Products/Cosmetics', 'Consumer/Retail-All', 'ConsumerProducts', 'ElectronicStoresRepairs', 'Food&Beverage', 'Franchises', 'FurnitureFixturesStores', 'Hardware/HomeSupply', 'Jewelry', 'OfficeEquipmentSupplies', 'Other-CR', 'Pharmacy', 'Products/Supplies', 'Restaurants', 'RetailMisc', 'ToysSportingGoods'],
  nextStep: () => 290, // Assuming the next question is 290
},
236: {
  question: 'Ecommerce* (choose one or more)',
  answers: ['Ecommerce-All', 'ShoppingTech/Auctions', 'FashionTech/Online', 'FoodTech/Online', 'HotelTech/Online', 'Music&ArtApplications/Online', 'NewsTech/Weather/Online', 'PetProducts&Services/Online', 'ServicesTech/Online', 'SportsTech/Fitness/Online', 'Tickets&EventTech/Online', 'TravelTech/Online', 'VehicleTech/Online', 'Other-Ecommerce'],
  nextStep: () => 290, // Assuming the next question is 290
},
// ... Previous questions ...

237: {
  question: 'Financial Services* (choose one or more)',
  answers: ['AgriculturalInvestor', 'AlternativeInvestments', 'Angels', 'AutoLeasing', 'BankersBank', 'Bank-NonUS', 'Banks', 'Banks-Community/Regional', 'BDC', 'BusinessAssociation', 'CLOManager', 'ConsultantAssetManagement', 'CreditCardProcessing', 'CreditUnions', 'CTA', 'CTF', 'DebtCollectors', 'Endowment', 'EquipmentRentalLeasing', 'FamilyOffice(Multi)', 'FamilyOffice(Non-Investing)', 'FamilyOffice(Single)', 'FinancialServices-All', 'Foundation', 'FundlessSponsor', 'HedgeFoF', 'HedgeFund', 'HedgeFundSeeder', 'HighNetWorth/LP', 'IBD/RIA', 'Insurance', 'InvestmentBank', 'Lender-AssetBasedFactoring', 'Lender-Auto', 'Lender-Commercial', 'Lender-Consumer', 'Lender-CRE', 'Lender-MerchantCashAdvance', 'Lender-SmallBusiness', 'Lender-Specialty', 'Lender-Warehouse', 'LifeSettlements', 'MerchantBank', 'Mezzanine', 'MortgageBank', 'Other(PatentTrollers, LitigationFunding, etc)', 'Other-FS', 'PensionFund', 'PensionFund-Public', 'PreciousMetalsTrading', 'PrivateEquity', 'PrivateEquityFoF', 'RealEstate(Buy/Rehab/Rent/Sell)', 'RealEstate(Direct Investments)', 'RealEstate(PropertyManagement/Brokerage)', 'RealEstate-All', 'REIT', 'SBIC', 'SovereignWealthFund', 'SPAC', 'TraditionalAssetManagement', 'TrustCompany', 'VentureCapital', 'VentureCapitalFoF', 'WealthManager'],
  nextStep: () => 290, // Assuming the next question is 290
},
238: {
  question: 'FinTech* (choose one or more)',
  answers: ['AssetManagement', 'Banking/InvestmentBanking/CrowdFunding', 'CommercialRealEstate/Construction', 'CreditReporting/Scoring', 'Crypto/Blockchain', 'FinTech-All', 'FixedIncome/FX', 'InsureTech', 'Lending-Business', 'Lending-Consumer', 'Lending-Mortgages', 'MicroFinance', 'Other-FT', 'Payments/Billing', 'ResidentialRealEstate', 'SupplyChain', 'TradingTech/Exchanges'],
  nextStep: () => 290, // Assuming the next question is 290
},
239: {
  question: 'Government/Contracting* (choose one or more)',
  answers: ['Agency', 'City', 'Consultant', 'County/Town', 'Government-All', 'GovernmentContracting', 'GovernmentTech', 'Other-Government', 'SchoolDistrict'],
  nextStep: () => 290, // Assuming the next question is 290
},
240: {
  question: 'Healthcare* (choose one or more)',
  answers: ['Biotechnology/LifeSciences', 'Cannabis', 'EquipmentSupplies', 'Healthcare-All', 'HealthCenters', 'MedicalDevices/Diagnostics', 'MedicalEquipmentSupplies', 'MedicalServices', 'NutritionalProducts', 'Other-Healthcare', 'Pharmaceuticals', 'VeterinaryServices'],
  nextStep: () => 290, // Assuming the next question is 290
},
// ... Previous questions ...

241: {
  question: 'Industrial/Manufacturing* (choose one or more)',
  answers: ['AdvancedMaterials/Nanotech', 'ApparelManufacturing', 'Chemicals/AlliedProducts', 'Container', 'Distribution', 'Electrical/Electronic', 'Elevators', 'FarmMachinery', 'FurnitureFixturesManufacturing', 'Industrial/Manufacturing-All', 'Lumber/Pallet/Crate/Box', 'MachineryEquipment', 'ManufacturingMisc', 'MetalsManufacturing', 'Other-IM', 'Paper', 'PetroleumProducts', 'Printing&Publishing', 'Rubber/Plastics', 'Stone/Clay/Glass/Concrete', 'Textiles', 'Tobacco'],
  nextStep: () => 290, // Assuming the next question is 290
},
242: {
  question: 'Infrastructure* (choose one or more)',
  answers: ['Communication', 'Energy', 'EnergyServices', 'Infrastructure-All', 'MachinerySevices', 'Oil&Gas-MidStream', 'Other-Infrastructure', 'PowerConventional', 'PowerRenewable', 'Social', 'Transportation', 'WasteManagement', 'Water'],
  nextStep: () => 290, // Assuming the next question is 290
},
243: {
  question: 'RealAssets* (choose one or more)',
  answers: ['AgricultureLivestock', 'CleanEnergy', 'Energy-All', 'FishingHuntingTrapping', 'ForestryTimber', 'LuxuryGoods-Art,Wine,etc', 'MiningMetals', 'MiningNonMetals', 'Oil&Gas-All', 'Oil&Gas-Royalties', 'Oil&Gas-UpStream', 'Other-RA', 'PotashFertilizer', 'RealAssets-All'],
  nextStep: () => 290, // Assuming the next question is 290
},
244: {
  question: 'Recreation* (choose one or more)',
  answers: ['AmusementParks', 'CruiseShips', 'GamingSlots', 'GolfCourses', 'HotelCasinos', 'HotelsMotels', 'Leisure', 'Other-Recreation', 'Recreation-All', 'SportsFacilities', 'SportsTeams', 'TimeShares', 'TravelAgencies'],
  nextStep: () => 290, // Assuming the next question is 290
},
245: {
  question: 'Technology* (choose one or more)',
  answers: ['AdTech/DigitalMarketing', 'AgTech', 'Apps:Business/Legal/Compliance/ProjectMgmt', 'Apps:Consumer/Weather/News/Beauty', 'ArtificialIntel/BigData/Analytics', 'Autonomous/ElectricVehicles', 'BioMetrics', 'CleanTech/EnergyTech', 'Cloud/Networks', 'CommEquipment', 'ComputerHardware/MobileDevices/Wearables', 'ComputerServices', 'ComputerStores', 'Delivery/ShippingTech/Logistics', 'DigitalMedia/Photos/Publishing', 'Document/VideoManagement', 'Drones/Aerospace/Aviation', 'EducationTech', 'Electronics', 'EnterpriseSoftware', 'FrontierTech', 'Gaming/Gambling', 'HealthInfoTech', 'HomeTech/VirtualAssistants', 'HRTech/Staffing/Outsourcing', 'IndustryNewsWebsite', 'InformationTech', 'IntellectualProperty', 'Internet/SearchSolutions', 'IofThings', 'LawEnforcement/FirstResponders/Defense', 'LightingTech/LEDLighting', 'Mapping/GPS/Tracking', 'MarketPlace', 'Message/Meet/Communicate/CRM', 'MobileApps', 'MobileTech/AppDevelopment', 'Other-Technology', 'Parenting/Childcare', 'ProgrammingTools/Developers/Websites', 'ReputationManagement/OnlineReviews', 'Robotics', 'SaaS', 'SalesTech/CallCenters/CustomerSupport', 'Security/CyberSecurity/IdentityAuthorization', 'Sensors/MonitoringEquipment', 'SemiConductor', 'Social/BusinessNetworks', 'Software', 'Technology-All', 'TechOther', 'TechStorage', 'Video/TV/Radio/BroadcastTech', 'VirtualReality/AR/3DTech/3DPrinting', 'Voice/LanguageTranslation', 'WirelessCommunication'],
  nextStep: () => 290, // Assuming the next question is 290
},
246: {
  question: 'Transportation/Warehousing* (choose one or more)',
  answers: ['Aerospace/Defense', 'AircraftManufacturing', 'AirlineTransportation', 'AutoAuctions', 'AutoDealers', 'AutoGasStation', 'AutoManufacturing', 'AutoPartsRepairs', 'AutoRentalLeasing', 'Buses', 'Freight', 'Logistics', 'MiscTransportation', 'Motorcycles/Bicycles/PowerSports', 'Other-Transportation', 'RailTransportation', 'RVs', 'SelfStorage', 'TaxiLimousines', 'Transportation-All', 'TruckTrailers', 'TruckTransportation', 'Warehousing', 'WaterTransportation'],
  nextStep: () => 290, // Assuming the next question is 290
},
260: {
  question: 'What property types?',
  answers: ['All Property Types', 'Office', 'Industrial', 'Retail', 'Multifamily', 'Hotel', 'SeniorHousing', 'Self Storage', 'Residential', 'Warehouse', 'Distressed RE', '_', 'AffordableHousing', 'Apartment', 'CommunityDevLoans', 'HomeBuilder Financing', 'ManufacturedHousing', 'Mobile Home Parks', 'ResiFixupFliporRent', 'Student Housing', 'Timeshare', '_', 'Agriculture', 'ChurchLoans', 'Construction', 'Land', 'Health care', 'Nursing Homes', 'Entertainment', 'Golf', 'ResortFinance', 'Sports', '_', 'BNotes', 'CREBridgeLoans', 'SpecialServicing', 'Environmental Issues', 'Leases', 'Net Lease', 'Other'],
  nextStep: () => 290, // Assuming the next question is 290
},
270: {
  question: 'What type of fund is it?',
  answers: ['All Funds', 'Fund of PEs', 'PE-Funds', 'Fund of VCs', 'VC Funds', 'Fund of HFs', 'HF-Strategy', 'Seeder', 'Fund of REs', 'RE-Funds', 'MutualFunds', 'SecondaryFunds', 'LBO Funds', 'EmergingManagers', 'Equity Tax Fund', 'Pension Funds'],
  nextStep: () => 290, // Assuming the next question is 290
},
290: {
  question: 'What is your investment size range?* ($ millions)',
  nextStep: () => 291, // Assuming the next question is 291
},
291: {
  question: 'Where is your geographical preference?* (Choose one or more Countries)',
  answers: ['US', 'Canada', 'UK', 'France', 'Germany', 'Italy', 'Spain', 'Switzerland', '-', 'China', 'Japan', 'Hong Kong', '-', 'Israel', '-', 'Global', 'Africa', 'Asia', 'Australia', 'CentralAmerica', 'Europe', 'MiddleEast', 'SouthAmerica', '-', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia & Herzegovina', 'Botswana', 'Brazil', 'Brunei Darussalam', 'Bulgaria', 'Burkina Faso', 'Myanmar/Burma', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Chile', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominican Republic', 'Dominica', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland', 'French Guiana', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guadeloupe', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Italy', 'Ivory Coast', 'Jamaica', 'Jordan', 'Kazakhstan', 'Kenya', 'Kosovo', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Republic of Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Moldova, Republic of', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'North Korea', 'Norway', 'Oman', 'Pacific Islands', 'Pakistan', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent\'s & Grenadines', 'Samoa', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovak Republic (Slovakia)', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Korea, Republic of (South Korea)', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor Leste', 'Togo', 'Trinidad & Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks & Caicos Islands', 'Uganda', 'Ukraine', 'United Arab Emirates', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (UK)', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe', 'Taiwan', 'Tokyo', 'South Korea', 'United Arab Emirates', 'HollandNet', 'Jersey', 'The Netherlands', 'Noord-Holland', 'ES', 'Netherlands'],
  nextStep: (answer) => {
    if (answer === 'US' || answer === 'Canada') {
      return 292;
    } else {
      return 293;
    }
  },
},
// ... Previous questions ...

292: {
  question: 'Where is your geographical preference? (Choose one or more States – US/Canada)',
  answers: ['AB', 'AK', 'AL', 'AR', 'AS', 'AZ', 'BC', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KA', 'KS', 'KY', 'LA', 'MA', 'MB', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MP', 'MS', 'MT', 'NB', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NL', 'NM', 'NS', 'NT', 'NU', 'NV', 'NY', 'OH', 'OK', 'ON', 'OR', 'PA', 'PE', 'PR', 'PW', 'QC', 'RI', 'SC', 'SD', 'SK', 'TN', 'TX', 'UT', 'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY', 'YT'],
  nextStep: () => 293, // Assuming the next question is 293
},
293: {
  question: 'What type of Investor are you?* (choose one)',
  answers: ['Strategic Investor', '-', 'Angels', 'Agriculture Investor', 'Asset Manager', 'Bank', 'Bank-Community', 'BDC/SBIC/SPAC/CLO', 'CreditUnion', 'Endowment/Foundation', 'Family Office', 'Fund of Funds', 'FundLess Sponsor', 'Hedge Fund', 'Hedge Fund Seeder', 'High Net Worth', 'Insurance', 'Investment Bank', 'Lender-NonBank', 'Life Settlement', 'Litigation Funding', 'Mezzanine Fund', 'Pension Fund', 'Private Equity Fund', 'Real Estate Investor', 'REIT', 'Sovereign Wealth Fund', 'Venture Capital Fund', 'Mortgage Lender', 'Retail Investor'],
  nextStep: () => 300, // Assuming the next question is 300
},
///////////////////////////////////////////////////////////////////////////
300: {
  question: 'GOTO [x] FIND MATCHE',
  answers: ['X'],

  nextStep: () => 'x', // Assuming the next step is determined by the "FIND MATCHE" process
},
///////////////////////////////////////////////////////////////
}





  const handleAnswer = (answer: string) => {
    setAnswers({ ...answers, [step]: answer });
    console.log(questions[step])
    setStep(questions[step].nextStep(answer));
  };

  return (
    <View style={styles.container}>
      {questions[step] && (
        <View>
          <Text>{questions[step].question}</Text>
          <View style={styles.grid}>
            {questions[step].answers.map((answer) => (
              <Button key={answer} title={answer} onPress={() => handleAnswer(answer)} />
            ))}
          </View>
        </View>
      )}
      {/* More steps... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '3px',
    justifyContent: 'space-around',
  },
  textOutsideGrid: {
    marginBottom: 10,
  },
});

export default Survey;
