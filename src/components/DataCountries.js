const countryCode = {
  "BRL":"Brazil",
  "AED":"United Arab Emirates",
  "AFN":"Afghanistan",
  "ALL":"Albania",
  "AMD":"Armenia",
  "ANG":"Netherlands Antilles",
  "AOA":"Angola",
  "ARS":"Argentina",
  "AUD":"Australia",
  "AWG":"Aruba",
  "AZN":"Azerbaijan",
  "BAM":"Bosnia and Herzegovina",
  "BBD":"Barbados",
  "BDT":"Bangladesh",
  "BGN":"Bulgaria",
  "BHD":"Bahrain",
  "BIF":"Burundi",
  "BMD":"Bermuda",
  "BND":"Brunei",
  "BOB":"Bolivia",
  "BSD":"Bahamas",
  "BTN":"Bhutan",
  "BWP":"Botswana",
  "BYN":"Belarus",
  "BZD":"Belize",
  "CAD":"Canada",
  "CDF":"Democratic Republic of the Congo",
  "CHF":"Switzerland",
  "CLP":"Chile",
  "CNY":"China",
  "COP":"Colombia",
  "CRC":"Costa Rica",
  "CUP":"Cuba",
  "CVE":"Cape Verde",
  "CZK":"Czech Republic",
  "DJF":"Djibouti",
  "DKK":"Denmark",
  "DOP":"Dominican Republic",
  "DZD":"Algeria",
  "EGP":"Egypt",
  "ERN":"Eritrea",
  "ETB":"Ethiopia",
  "EUR":"Eurozone",
  "FJD":"Fiji",
  "FKP":"Falkland Islands",
  "FOK":"Faroe Islands",
  "GBP":"United Kingdom",
  "GEL":"Georgia",
  "GGP":"Guernsey",
  "GHS":"Ghana",
  "GIP":"Gibraltar",
  "GMD":"Gambia",
  "GNF":"Guinea",
  "GTQ":"Guatemala",
  "GYD":"Guyana",
  "HKD":"Hong Kong",
  "HNL":"Honduras",
  "HRK":"Croatia",
  "HTG":"Haiti",
  "HUF":"Hungary",
  "IDR":"Indonesia",
  "ILS":"Israel",
  "IMP":"Isle of Man",
  "INR":"India",
  "IQD":"Iraq",
  "IRR":"Iran",
  "ISK":"Iceland",
  "JEP":"Jersey",
  "JMD":"Jamaica",
  "JOD":"Jordan",
  "JPY":"Japan",
  "KES":"Kenya",
  "KGS":"Kyrgyzstan",
  "KHR":"Cambodia",
  "KID":"Kiribati",
  "KMF":"Comoros",
  "KRW":"South Korea",
  "KWD":"Kuwait",
  "KYD":"Cayman Islands",
  "KZT":"Kazakhstan",
  "LAK":"Laos",
  "LBP":"Lebanon",
  "LKR":"Sri Lanka",
  "LRD":"Liberia",
  "LSL":"Lesotho",
  "LYD":"Libya",
  "MAD":"Morocco",
  "MDL":"Moldova",
  "MGA":"Madagascar",
  "MKD":"North Macedonia",
  "MMK":"Myanmar",
  "MNT":"Mongolia",
  "MOP":"Macau",
  "MRU":"Mauritania",
  "MUR":"Mauritius",
  "MVR":"Maldives",
  "MWK":"Malawi",
  "MXN":"Mexico",
  "MYR":"Malaysia",
  "MZN":"Mozambique",
  "NAD":"Namibia",
  "NGN":"Nigeria",
  "NIO":"Nicaragua",
  "NOK":"Norway",
  "NPR":"Nepal",
  "NZD":"New Zealand",
  "OMR":"Oman",
  "PAB":"Panama",
  "PEN":"Peru",
  "PGK":"Papua New Guinea",
  "PHP":"Philippines",
  "PKR":"Pakistan",
  "PLN":"Poland",
  "PYG":"Paraguay",
  "QAR":"Qatar",
  "RON":"Romania",
  "RSD":"Serbia",
  "RUB":"Russia",
  "RWF":"Rwanda",
  "SAR":"Saudi Arabia",
  "SBD":"Solomon Islands",
  "SCR":"Seychelles",
  "SDG":"Sudan",
  "SEK":"Sweden",
  "SGD":"Singapore",
  "SHP":"Saint Helena",
  "SLE":"Sierra Leone",
  "SLL":"Sierra Leone (alternative code)",
  "SOS":"Somalia",
  "SRD":"Suriname",
  "SSP":"South Sudan",
  "STN":"São Tomé and Príncipe",
  "SYP":"Syria",
  "SZL":"Eswatini",
  "THB":"Thailand",
  "TJS":"Tajikistan",
  "TMT":"Turkmenistan",
  "TND":"Tunisia",
  "TOP":"Tonga",
  "TRY":"Turkey",
  "TTD":"Trinidad and Tobago",
  "TVD":"Tuvalu",
  "TWD":"Taiwan",
  "TZS":"Tanzania",
  "UAH":"Ukraine",
  "UGX":"Uganda",
  "USD":"United States",
  "UYU":"Uruguay",
  "UZS":"Uzbekistan",
  "VES":"Venezuela",
  "VND":"Vietnam",
  "VUV":"Vanuatu",
  "WST":"Samoa",
  "XAF":"Central African CFA Franc",
  "XCD":"East Caribbean Dollar",
  "XDR":"Special Drawing Rights (SDR)",
  "XOF":"West African CFA Franc",
  "XPF":"French Pacific Franc",
  "YER":"Yemen",
  "ZAR":"South Africa",
  "ZMW":"Zambia",
  "ZWL": "Zimbabwe"
}

const countryCodeNameOfCurrency = {
"BRL" : "Brazilian Real",
"AED" : "United Arab Emirates Dirham",
"AFN" : "Afghan Afghani",
"ALL" : "Albanian Lek",
"AMD" : "Armenian Dram",
"ANG" : "Netherlands Antillean Guilder",
"AOA" : "Angolan Kwanza",
"ARS" : "Argentine Peso",
"AUD" : "Australian Dollar",
"AWG" : "Aruban Florin",
"AZN" : "Azerbaijani Manat",
"BAM" : "Bosnia and Herzegovina Convertible Mark",
"BBD" : "Barbadian Dollar",
"BDT" : "Bangladeshi Taka",
"BGN" : "Bulgarian Lev",
"BHD" : "Bahraini Dinar",
"BIF" : "Burundian Franc",
"BMD" : "Bermudian Dollar",
"BND" : "Brunei Dollar",
"BOB" : "Bolivian Boliviano",
"BSD" : "Bahamian Dollar",
"BTN" : "Bhutanese Ngultrum",
"BWP" : "Botswana Pula",
"BYN" : "Belarusian Ruble",
"BZD" : "Belize Dollar",
"CAD" : "Canadian Dollar",
"CDF" : "Congolese Franc",
"CHF" : "Swiss Franc",
"CLP" : "Chilean Peso",
"CNY" : "Chinese Yuan",
"COP" : "Colombian Peso",
"CRC" : "Costa Rican Colón",
"CUP" : "Cuban Peso",
"CVE" : "Cape Verdean Escudo",
"CZK" : "Czech Koruna",
"DJF" : "Djiboutian Franc",
"DKK" : "Danish Krone",
"DOP" : "Dominican Peso",
"DZD" : "Algerian Dinar",
"EGP" : "Egyptian Pound",
"ERN" : "Eritrean Nakfa",
"ETB" : "Ethiopian Birr",
"EUR" : "Euro",
"FJD" : "Fijian Dollar",
"FKP" : "Falkland Islands Pound",
"FOK" : "Faroese Króna",
"GBP" : "British Pound Sterling",
"GEL" : "Georgian Lari",
"GGP" : "Guernsey Pound",
"GHS" : "Ghanaian Cedi",
"GIP" : "Gibraltar Pound",
"GMD" : "Gambian Dalasi",
"GNF" : "Guinean Franc",
"GTQ" : "Guatemalan Quetzal",
"GYD" : "Guyanese Dollar",
"HKD" : "Hong Kong Dollar",
"HNL" : "Honduran Lempira",
"HRK" : "Croatian Kuna",
"HTG" : "Haitian Gourde",
"HUF" : "Hungarian Forint",
"IDR" : "Indonesian Rupiah",
"ILS" : "Israeli New Shekel",
"IMP" : "Isle of Man Pound",
"INR" : "Indian Rupee",
"IQD" : "Iraqi Dinar",
"IRR" : "Iranian Rial",
"ISK" : "Icelandic Króna",
"JEP" : "Jersey Pound",
"JMD" : "Jamaican Dollar",
"JOD" : "Jordanian Dinar",
"JPY" : "Japanese Yen",
"KES" : "Kenyan Shilling",
"KGS" : "Kyrgyzstani Som",
"KHR" : "Cambodian Riel",
"KID" : "Kiribati Dollar",
"KMF" : "Comorian Franc",
"KRW" : "South Korean Won",
"KWD" : "Kuwaiti Dinar",
"KYD" : "Cayman Islands Dollar",
"KZT" : "Kazakhstani Tenge",
"LAK" : "Lao Kip",
"LBP" : "Lebanese Pound",
"LKR" : "Sri Lankan Rupee",
"LRD" : "Liberian Dollar",
"LSL" : "Lesotho Loti",
"LYD" : "Libyan Dinar",
"MAD" : "Moroccan Dirham",
"MDL" : "Moldovan Leu",
"MGA" : "Malagasy Ariary",
"MKD" : "North Macedonian Denar",
"MMK" : "Burmese Kyat",
"MNT" : "Mongolian Tugrik",
"MOP" : "Macanese Pataca",
"MRU" : "Mauritanian Ouguiya",
"MUR" : "Mauritian Rupee",
"MVR" : "Maldivian Rufiyaa",
"MWK" : "Malawian Kwacha",
"MXN" : "Mexican Peso",
"MYR" : "Malaysian Ringgit",
"MZN" : "Mozambican Metical",
"NAD" : "Namibian Dollar",
"NGN" : "Nigerian Naira",
"NIO" : "Nicaraguan Córdoba",
"NOK" : "Norwegian Krone",
"NPR" : "Nepalese Rupee",
"NZD" : "New Zealand Dollar",
"OMR" : "Omani Rial",
"PAB" : "Panamanian Balboa",
"PEN" : "Peruvian Nuevo Sol",
"PGK" : "Papua New Guinean Kina",
"PHP" : "Philippine Peso",
"PKR" : "Pakistani Rupee",
"PLN" : "Polish Złoty",
"PYG" : "Paraguayan Guarani",
"QAR" : "Qatari Riyal",
"RON" : "Romanian Leu",
"RSD" : "Serbian Dinar",
"RUB" : "Russian Ruble",
"RWF" : "Rwandan Franc",
"SAR" : "Saudi Riyal",
"SBD" : "Solomon Islands Dollar",
"SCR" : "Seychellois Rupee",
"SDG" : "Sudanese Pound",
"SEK" : "Swedish Krona",
"SGD" : "Singapore Dollar",
"SHP" : "Saint Helena Pound",
"SLE" : "Sierra Leonean Leone",
"SLL" : "Sierra Leonean Leone (alternative code)",
"SOS" : "Somali Shilling",
"SRD" : "Surinamese Dollar",
"SSP" : "South Sudanese Pound",
"STN" : "São Tomé and Príncipe Dobra",
"SYP" : "Syrian Pound",
"SZL" : "Eswatini Lilangeni",
"THB" : "Thai Baht",
"TJS" : "Tajikistani Somoni",
"TMT" : "Turkmenistan Manat",
"TND" : "Tunisian Dinar",
"TOP" : "Tongan Pa'anga",
"TRY" : "Turkish Lira",
"TTD" : "Trinidad and Tobago Dollar",
"TVD" : "Tuvaluan Dollar",
"TWD" : "New Taiwan Dollar",
"TZS" : "Tanzanian Shilling",
"UAH" : "Ukrainian Hryvnia",
"UGX" : "Ugandan Shilling",
"USD" : "United States Dollar",
"UYU" : "Uruguayan Peso",
"UZS" : "Uzbekistani Som",
"VES" : "Venezuelan Bolívar",
"VND" : "Vietnamese Đồng",
"VUV" : "Vanuatu Vatu",
"WST" : "Samoan Tala",
"XAF" : "Central African C",
}
export { countryCode, countryCodeNameOfCurrency };