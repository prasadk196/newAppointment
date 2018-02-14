var customers = [
    {
        "hub_firstname": "Diana",
        "hub_lastname": "Ken",
        "name":"Diana Ken",
        "accountid": "ade1da6f-4c8d-e711-80f7-c4346badc680"
    },
    {
        "hub_firstname": "Ken ",
        "hub_lastname": "Adams",
        "name": "Ken Adams",
        "accountid": "ade1da6f-4c8d-e711-80f7-c4346badc681"
    },
    {
        "hub_firstname": "Dane",
        "hub_lastname": "bridge",
        "name": "Dane bridge",
        "accountid": "ade1da6f-4c8d-e711-80f7-c4346badc682"
    },
    {
        "hub_firstname": "Riyuk",
        "hub_lastname": "shinigami",
        "name": "Riyuk shinigami",
        "accountid": "ade1da6f-4c8d-e711-80f7-c4346badc683"
    },
    {
        "hub_firstname": "Dante",
        "hub_lastname": "kudo",
        "name": "Dante kudo",
        "accountid": "ade1da6f-4c8d-e711-80f7-c4346badc684"
    }
];
var students = [
    {
        "fullname": "Vaas Montenegro",
        "contactid": "ade1da6f-4c8d-e711-80f7-c4346badc684"
    },
    {
        "fullname": "GlaDos",
        "contactid": "ade1da6f-4c8d-e711-80f7-c4346badc683"
    },
    {
        "fullname": "Bowser",
        "contactid": "ade1da6f-4c8d-e711-80f7-c4346badc682"
    },
    {
        "fullname": "Sephiroth ",
        "contactid": "ade1da6f-4c8d-e711-80f7-c4346badc681"
    },
    {
        "fullname": "Ganondorf",
        "contactid": "ade1da6f-4c8d-e711-80f7-c4346badc681"
    },
];

var locations = [
{
    "@odata.etag": "W/\"5025003\"",
    "hub_centername": "00313 - Success Opeartion, Inc.",
    "hub_centerid": "de033d69-cdc6-e711-80ff-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "00313 - Success Opeartion, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "cec72d62-cdc6-e711-80ff-c4346bad526c"
},
{
    "@odata.etag": "W/\"5291542\"",
    "hub_centername": "00913 - Society General Opeartion, Inc.",
    "hub_centerid": "845f5f41-99d3-e711-8102-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "00913 - Society General Opeartion, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "40c3e538-99d3-e711-8102-c4346badc680"
},
{
    "@odata.etag": "W/\"5262849\"",
    "hub_centername": "00913 - Spencer Opeartion, Inc.",
    "hub_centerid": "db9eda56-e7d0-e711-8102-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "00913 - Spencer Opeartion, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "1f965b4f-e7d0-e711-8102-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4597954\"",
    "hub_centername": "04111 - Lovelace Learning Systems, Inc.",
    "hub_centerid": "959b8eb3-e49d-e711-80f9-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "04111 - Lovelace Learning Systems, Inc. - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "85fa7bad-e49d-e711-80f9-c4346badc680"
},
{
    "@odata.etag": "W/\"4488657\"",
    "hub_centername": "04112 - Nils & Stacia Bollen",
    "hub_centerid": "3fcd58ed-c49a-e711-80f8-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "04112 - Nils & Stacia Bollen - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "3acd58ed-c49a-e711-80f8-c4346bad526c"
},
{
    "@odata.etag": "W/\"4509893\"",
    "hub_centername": "04117 - BBSR Achievement LLC",
    "hub_centerid": "3c7f6292-6b90-e711-80f8-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "BBSR Achievement LLC - 04117 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "6a5ac27c-6b90-e711-80f8-c4346badc680"
},
{
    "@odata.etag": "W/\"4488661\"",
    "hub_centername": "05118 - Southwest San Antonio Learning LLC",
    "hub_centerid": "299e6289-62a3-e711-80f9-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "05118 - Southwest San Antonio Learning LLC - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "6c515f82-62a3-e711-80f9-c4346badc680"
},
{
    "@odata.etag": "W/\"4495528\"",
    "hub_centername": "05119 - Trident Capital Management, Inc.",
    "hub_centerid": "16ab870c-77a3-e711-80f8-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "05119 - Trident Capital Management, Inc. - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "a5f01c06-77a3-e711-80f8-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487561\"",
    "hub_centername": "1000 - ITC Center",
    "hub_centerid": "469a245a-9b93-e711-80f7-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "ITC Center Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "424d1c58-9f93-e711-80f7-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4488673\"",
    "hub_centername": "10005 - Orenco Station - Hillsboro",
    "hub_centerid": "56759c6f-32ad-e711-80fb-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "10005 - Orenco Station - Hillsboro Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "fee7bc68-32ad-e711-80fb-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4487584\"",
    "hub_centername": "1215 - Vancouver learning center",
    "hub_centerid": "18794006-70ac-e711-80fc-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "1215 - Vancouver learning center - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "d29244f4-6fac-e711-80fc-c4346badc680"
},
{
    "@odata.etag": "W/\"5022745\"",
    "hub_centername": "30213 - Success Amarillo, Inc.",
    "hub_centerid": "8bcbe212-5cc6-e711-80ff-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30213 - Success Amarillo, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "e6569a0b-5cc6-e711-80ff-c4346bad526c"
},
{
    "@odata.etag": "W/\"4809323\"",
    "hub_centername": "30214 - MAX of Amarillo, Inc.",
    "hub_centerid": "a626c22c-14c6-e711-8100-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30214 - MAX of Amarillo, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "9e26c22c-14c6-e711-8100-c4346badc680"
},
{
    "@odata.etag": "W/\"4619098\"",
    "hub_centername": "30215 - SLC of Amarillo, Inc.",
    "hub_centerid": "50107ba4-5ec5-e711-8100-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30215 - SLC of Amarillo, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "907f339c-5ec5-e711-8100-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4618239\"",
    "hub_centername": "30216 - Learning Depot, Inc.",
    "hub_centerid": "cba755c2-53c5-e711-80ff-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30216 - Learning Depot, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "b00dab1b-53c5-e711-8100-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4487551\"",
    "hub_centername": "80098 - Rensel Insurance",
    "hub_centerid": "8b7559ab-55a3-e711-80f8-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "04112 - Nils & Stacia Bollen - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "3acd58ed-c49a-e711-80f8-c4346bad526c",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "04112 - Nils & Stacia Bollen",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "3fcd58ed-c49a-e711-80f8-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487571\"",
    "hub_centername": "80099 - Max BU'PA Insurance",
    "hub_centerid": "50ed780e-56a3-e711-80f8-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "04112 - Nils & Stacia Bollen - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "3acd58ed-c49a-e711-80f8-c4346bad526c",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "04112 - Nils & Stacia Bollen",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "3fcd58ed-c49a-e711-80f8-c4346bad526c"
},
{
    "@odata.etag": "W/\"5025000\"",
    "hub_centername": "90056 - Arm Services",
    "hub_centerid": "4552d0ec-cdc6-e711-80ff-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30215 - SLC of Amarillo, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "907f339c-5ec5-e711-8100-c4346bacfbbc",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "30215 - SLC of Amarillo, Inc.",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "50107ba4-5ec5-e711-8100-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"5022753\"",
    "hub_centername": "90077 - Success Educational Services",
    "hub_centerid": "9dd73577-5cc6-e711-80ff-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30215 - SLC of Amarillo, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "907f339c-5ec5-e711-8100-c4346bacfbbc",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "30215 - SLC of Amarillo, Inc.",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "50107ba4-5ec5-e711-8100-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"5022755\"",
    "hub_centername": "90079 - Max Educational Services",
    "hub_centerid": "46fd4368-5fc5-e711-8100-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30215 - SLC of Amarillo, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "907f339c-5ec5-e711-8100-c4346bacfbbc",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "30215 - SLC of Amarillo, Inc.",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "50107ba4-5ec5-e711-8100-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4618244\"",
    "hub_centername": "90099 - Super Educational Services",
    "hub_centerid": "70de127d-5ac5-e711-8100-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "30216 - Learning Depot, Inc. Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "b00dab1b-53c5-e711-8100-c4346bacfbbc",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "30216 - Learning Depot, Inc.",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "cba755c2-53c5-e711-80ff-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487556\"",
    "hub_centername": "A1 Education Services, Inc.",
    "hub_centerid": "361a67d9-f962-e711-80f2-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "A1 Education Services, Inc. - 00208 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "392ff082-f962-e711-80f2-c4346bad526c"
},
{
    "@odata.etag": "W/\"5304578\"",
    "hub_centername": "Ascension, LLC",
    "hub_centerid": "53c0e87e-a96b-e711-80f3-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Ascension, LLC - 00311 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "4ec0e87e-a96b-e711-80f3-c4346badc680"
},
{
    "@odata.etag": "W/\"4487542\"",
    "hub_centername": "Baltimore LC",
    "hub_centerid": "805c32ee-7c35-e711-80ed-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "babita khuntia",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "50afe85c-ba0f-e711-80e9-c4346bacfb24"
},
{
    "@odata.etag": "W/\"5157648\"",
    "hub_centername": "Bel Air Learning Center",
    "hub_centerid": "b97bc0df-a334-e711-80ed-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Nagendra kumar",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "c2c4d087-ba0f-e711-80f9-c4346bada738"
},
{
    "@odata.etag": "W/\"4487558\"",
    "hub_centername": "Better Education, Inc.",
    "hub_centerid": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Nagendra kumar",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "c2c4d087-ba0f-e711-80f9-c4346bada738"
},
{
    "@odata.etag": "W/\"4487545\"",
    "hub_centername": "BGA Education, Inc.",
    "hub_centerid": "091865a6-df6a-e711-80f2-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "BGA Education, Inc. - 00205 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "9d034635-df6a-e711-80f2-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4487543\"",
    "hub_centername": "Cascade Kids, Inc.",
    "hub_centerid": "fa9d120b-955c-e711-80f1-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Cascade Kids, Inc. - 00104 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "b7020bc5-945c-e711-80f2-c4346badc680"
},
{
    "@odata.etag": "W/\"5303189\"",
    "hub_centername": "Catonsville Learning Center",
    "hub_centerid": "f45b6933-9040-e711-80f0-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Catonsville Learning Center - Custom Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "7d7cbdd0-8d40-e711-80f0-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487566\"",
    "hub_centername": "CD5, LLC",
    "hub_centerid": "e9cfb78f-9052-e711-80f1-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "CD5, LLC - 00100 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "3ab85bde-8b52-e711-80f2-c4346badc680"
},
{
    "@odata.etag": "W/\"5378344\"",
    "hub_centername": "Columbia Learning Center",
    "hub_centerid": "c03233cf-8f40-e711-80f0-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Custom Team - Columbia Learning Center",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "9e49342c-8c40-e711-80f0-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487573\"",
    "hub_centername": "Columbia Learning Center",
    "hub_centerid": "7857097a-f666-e711-8102-c4346bada738",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Nagendra kumar",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "c2c4d087-ba0f-e711-80f9-c4346bada738",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4487567\"",
    "hub_centername": "Darcy Webb",
    "hub_centerid": "78197243-e06d-e711-80f2-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Darcy Webb - 00214 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "73197243-e06d-e711-80f2-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487549\"",
    "hub_centername": "Education Options, LLC",
    "hub_centerid": "a298b1fd-e26d-e711-80f2-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Education Options, LLC - 00216 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "9d98b1fd-e26d-e711-80f2-c4346bac4304"
},
{
    "@odata.etag": "W/\"5157152\"",
    "hub_centername": "Good Apple Achievement LLC",
    "hub_centerid": "648204a5-5c7b-e711-80f4-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Good Apple Achievement LLC - 04117 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "335f0f17-d779-e711-80f4-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4487550\"",
    "hub_centername": "Good Mango Achievement LLC",
    "hub_centerid": "6c53be80-be88-e711-80f5-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Good Mango Achievement LLC - 04119 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "9c09a77a-be88-e711-80f5-c4346bac4304"
},
{
    "@odata.etag": "W/\"4487560\"",
    "hub_centername": "Good Orange Achievement LLC",
    "hub_centerid": "67a830a9-4588-e711-80f6-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Good Orange Achievement LLC - 04118 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "22b0f49b-4588-e711-80f6-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4487583\"",
    "hub_centername": "Growth Inc",
    "hub_centerid": "02a8eb9a-8baa-e711-80fc-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Nagendra kumar",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "c2c4d087-ba0f-e711-80f9-c4346bada738"
},
{
    "@odata.etag": "W/\"4487554\"",
    "hub_centername": "Hagerstown LC",
    "hub_centerid": "6890e22c-7e40-e711-80f0-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "vinod krishnan",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "f74f01ad-bc0f-e711-80f9-fc15b42826a0"
},
{
    "@odata.etag": "W/\"4487557\"",
    "hub_centername": "Holly Springs",
    "hub_centerid": "c01eb217-846b-e711-80f2-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Catonsville Learning Center - Custom Team",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "7d7cbdd0-8d40-e711-80f0-c4346bad526c",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "Catonsville Learning Center",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "f45b6933-9040-e711-80f0-c4346bad526c"
},
{
    "@odata.etag": "W/\"5385497\"",
    "hub_centername": "Hunt Valley",
    "hub_centerid": "bd2227f2-1a3f-e711-80ef-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Anand Subramaniyam",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "21eef4e2-c33b-e711-80fe-c4346bada738"
},
{
    "@odata.etag": "W/\"4487578\"",
    "hub_centername": "IIT",
    "hub_centerid": "9f6bee1f-5677-e711-80f4-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Successful Students, LLC - 00117 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "25195fb8-4f77-e711-80f4-c4346badc680",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "Successful Students, LLC",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "70215cbe-4f77-e711-80f4-c4346badc680"
},
{
    "@odata.etag": "W/\"4487580\"",
    "hub_centername": "IIT Bhubaneswar",
    "hub_centerid": "6b54ab21-fa9a-e711-80f9-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "04112 - Nils & Stacia Bollen - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "3acd58ed-c49a-e711-80f8-c4346bad526c",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "04112 - Nils & Stacia Bollen",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "3fcd58ed-c49a-e711-80f8-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487548\"",
    "hub_centername": "JCP Ascension, LLC",
    "hub_centerid": "058d6776-826b-e711-80f2-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "JCP Ascension, LLC - 00310 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "d15e394c-826b-e711-80f2-c4346bac4304"
},
{
    "@odata.etag": "W/\"4487555\"",
    "hub_centername": "Maryland Learning Centers",
    "hub_centerid": "14c71086-414c-e711-80f1-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Maryland Learning Centers - 00212 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "a395e29c-1d4c-e711-80f1-c4346bad526c",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "Catonsville Learning Center",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "f45b6933-9040-e711-80f0-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487544\"",
    "hub_centername": "NWX",
    "hub_centerid": "8112c846-955c-e711-80f1-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Satellite",
    "hub_centertype": false,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "CD5, LLC - 00100 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "3ab85bde-8b52-e711-80f2-c4346badc680",
    "_hub_parentcenter_value@OData.Community.Display.V1.FormattedValue": "CD5, LLC",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_ParentCenter",
    "_hub_parentcenter_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
    "_hub_parentcenter_value": "e9cfb78f-9052-e711-80f1-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487568\"",
    "hub_centername": "Prod Support Lab",
    "hub_centerid": "d3811e7d-2570-e711-80f2-c4346bad526c",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Prod Support Lab - 99990 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "45b76f6a-2570-e711-80f2-c4346bad526c"
},
{
    "@odata.etag": "W/\"4487559\"",
    "hub_centername": "Puget Sound Learning Centers, LLC",
    "hub_centerid": "20db5a20-f375-e711-80f2-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Puget Sound Learning Centers, LLC - 00240 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "91ae2204-f375-e711-80f2-c4346bacfbbc"
},
{
    "@odata.etag": "W/\"4487574\"",
    "hub_centername": "Ray & Maggie Crawford",
    "hub_centerid": "e0a7d0bb-a734-e711-80ee-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "babita khuntia",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "50afe85c-ba0f-e711-80e9-c4346bacfb24"
},
{
    "@odata.etag": "W/\"4487575\"",
    "hub_centername": "SB Education, Inc.",
    "hub_centerid": "da8f5a01-116b-e711-80f3-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "SB Education, Inc. - 00211 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "f986ebd4-106b-e711-80f3-c4346badc680"
},
{
    "@odata.etag": "W/\"4487547\"",
    "hub_centername": "SBI Education, Inc.",
    "hub_centerid": "d12f4168-126b-e711-80f2-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "SBI Education, Inc. - 00212 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "0dec935e-126b-e711-80f2-c4346bac4304"
},
{
    "@odata.etag": "W/\"4487577\"",
    "hub_centername": "Successful Students, LLC",
    "hub_centerid": "70215cbe-4f77-e711-80f4-c4346badc680",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "Successful Students, LLC - 00117 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "25195fb8-4f77-e711-80f4-c4346badc680"
},
{
    "@odata.etag": "W/\"4487553\"",
    "hub_centername": "Timonium Learning Center",
    "hub_centerid": "5eb89403-a434-e711-80ed-c4346bacfbbc",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "vinod krishnan",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "systemuser",
    "_ownerid_value": "f74f01ad-bc0f-e711-80f9-fc15b42826a0"
},
{
    "@odata.etag": "W/\"4487546\"",
    "hub_centername": "XYZ Education, Inc.",
    "hub_centerid": "912ec9b7-e36a-e711-80f2-c4346bac4304",
    "hub_centertype@OData.Community.Display.V1.FormattedValue": "Center",
    "hub_centertype": true,
    "_ownerid_value@OData.Community.Display.V1.FormattedValue": "XYZ Education, Inc. - 00209 - Custom",
    "_ownerid_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "ownerid",
    "_ownerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "team",
    "_ownerid_value": "96675d6f-e36a-e711-80f2-c4346bac4304"
}
];

var apptHours = [

  {
      "@odata.etag": "W/\"3895302\"",
      "hub_capacity@OData.Community.Display.V1.FormattedValue": "2",
      "hub_capacity": 2,
      "hub_starttime@OData.Community.Display.V1.FormattedValue": "10:00 AM",
      "hub_starttime": 600,
      "hub_days@OData.Community.Display.V1.FormattedValue": "Friday",
      "hub_days": 5,
      "hub_endtime@OData.Community.Display.V1.FormattedValue": "12:00 PM",
      "hub_endtime": 660,
      "hub_timingsid": "b250a172-669f-e711-80f9-c4346badc680",
      "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/22/2017",
      "hub_effectivestartdate": "2017-09-22",
      "hub_effectiveenddate@OData.Community.Display.V1.FormattedValue": "10/31/2017",
      "hub_effectiveenddate": "2017-10-31",
      "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
      "aworkhours_x002e_hub_type": 4,
      "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
      "aworkhours_x002e_hub_duration": 30
  },
  {
      "@odata.etag": "W/\"3895837\"",
      "hub_capacity@OData.Community.Display.V1.FormattedValue": "3",
      "hub_capacity": 3,
      "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:00 AM",
      "hub_starttime": 480,
      "hub_days@OData.Community.Display.V1.FormattedValue": "Monday",
      "hub_days": 1,
      "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
      "hub_endtime": 540,
      "hub_timingsid": "69f5ca86-02a8-e711-80f9-c4346bad526c",
      "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "10/3/2017",
      "hub_effectivestartdate": "2017-10-03",
      "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
      "aworkhours_x002e_hub_type": 4,
      "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
      "aworkhours_x002e_hub_duration": 30
  },
  {
      "@odata.etag": "W/\"3895837\"",
      "hub_capacity@OData.Community.Display.V1.FormattedValue": "3",
      "hub_capacity": 3,
      "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:30 AM",
      "hub_starttime": 510,
      "hub_days@OData.Community.Display.V1.FormattedValue": "Monday",
      "hub_days": 1,
      "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:30 AM",
      "hub_endtime": 570,
      "hub_timingsid": "69f5ca86-02a8-e711-80f9-c4346bad526c",
      "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "10/3/2017",
      "hub_effectivestartdate": "2017-10-03",
      "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
      "aworkhours_x002e_hub_type": 4,
      "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "60 Mins",
      "aworkhours_x002e_hub_duration": 30
  },
  {
      "@odata.etag": "W/\"3895839\"",
      "hub_capacity@OData.Community.Display.V1.FormattedValue": "3",
      "hub_capacity": 3,
      "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:00 AM",
      "hub_starttime": 480,
      "hub_days@OData.Community.Display.V1.FormattedValue": "Tuesday",
      "hub_days": 2,
      "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
      "hub_endtime": 540,
      "hub_timingsid": "c013a214-e6a4-e711-80f9-c4346badc680",
      "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/29/2017",
      "hub_effectivestartdate": "2017-09-29",
      "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
      "aworkhours_x002e_hub_type": 4,
      "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "30 Mins",
      "aworkhours_x002e_hub_duration": 30
  },
  {
      "@odata.etag": "W/\"3895840\"",
      "hub_capacity@OData.Community.Display.V1.FormattedValue": "8",
      "hub_capacity": 8,
      "hub_starttime@OData.Community.Display.V1.FormattedValue": "8:00 AM",
      "hub_starttime": 480,
      "hub_days@OData.Community.Display.V1.FormattedValue": "Wednesday",
      "hub_days": 3,
      "hub_endtime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
      "hub_endtime": 540,
      "hub_timingsid": "1fbe3421-e6a4-e711-80f9-c4346badc680",
      "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/29/2017",
      "hub_effectivestartdate": "2017-09-29",
      "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
      "aworkhours_x002e_hub_type": 4,
      "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "60 Mins",
      "aworkhours_x002e_hub_duration": 60
  },
  {
      "@odata.etag": "W/\"3895841\"",
      "hub_capacity@OData.Community.Display.V1.FormattedValue": "5",
      "hub_capacity": 5,
      "hub_starttime@OData.Community.Display.V1.FormattedValue": "9:00 AM",
      "hub_starttime": 540,
      "hub_days@OData.Community.Display.V1.FormattedValue": "Thursday",
      "hub_days": 4,
      "hub_endtime@OData.Community.Display.V1.FormattedValue": "10:00 AM",
      "hub_endtime": 600,
      "hub_timingsid": "64204430-e6a4-e711-80f9-c4346badc680",
      "hub_effectivestartdate@OData.Community.Display.V1.FormattedValue": "9/29/2017",
      "hub_effectivestartdate": "2017-09-29",
      "aworkhours_x002e_hub_type@OData.Community.Display.V1.FormattedValue": "Welcome Conference",
      "aworkhours_x002e_hub_type": 4,
      "aworkhours_x002e_hub_duration@OData.Community.Display.V1.FormattedValue": "60 Mins",
      "aworkhours_x002e_hub_duration": 60
  }
];

var services = [
    {
        "@odata.etag": "W/\"3895840\"",
        "hub_enddate": "2017-09-29T18:30:00Z",
        "hub_enddate@OData.Community.Display.V1.FormattedValue": "9/29/2017",
        "hub_name": "Education Options Practise Test",
        "hub_sch_diagnostic_serviceid": "e9cfb78f-9052-e711-80f1-c4346bad526c",
        "hub_startdate": "2017-09-13T18:30:00Z",
        "hub_startdate@OData.Community.Display.V1.FormattedValue": "9/13/2017",
    },
   {
       "@odata.etag": "W/\"3895840\"",
       "hub_enddate": "2017-09-30T18:30:00Z",
       "hub_enddate@OData.Community.Display.V1.FormattedValue": "9/30/2017",
       "hub_name": "Algebra Test",
       "hub_sch_diagnostic_serviceid": "e9cfb78f-9052-e711-80f1-c4346bad526f",
       "hub_startdate": "2017-09-10T18:30:00Z",
       "hub_startdate@OData.Community.Display.V1.FormattedValue": "9/10/2017",
   },
   {
       "@odata.etag": "W/\"3895840\"",
       "hub_enddate": "2018-01-29T18:30:00Z",
       "hub_enddate@OData.Community.Display.V1.FormattedValue": "1/29/2018",
       "hub_name": "Practise Test",
       "hub_sch_diagnostic_serviceid": "e9cfb78f-9052-e711-80f1-c4346bad526g",
       "hub_startdate": "2018-01-13T18:30:00Z",
       "hub_startdate@OData.Community.Display.V1.FormattedValue": "1/13/2018",
   },
   {
       "@odata.etag": "W/\"3895840\"",
       "hub_enddate": "2017-10-29T18:30:00Z",
       "hub_enddate@OData.Community.Display.V1.FormattedValue": "10/30/2017",
       "hub_name": "Online Test",
       "hub_sch_diagnostic_serviceid": "e9cfb78f-9052-e711-80f1-c4346bad526h",
       "hub_startdate": "2017-10-13T18:30:00Z",
       "hub_startdate@OData.Community.Display.V1.FormattedValue": "10/13/2017",
   },
   {
       "@odata.etag": "W/\"3895840\"",
       "hub_enddate": "2018-02-27T18:30:00Z",
       "hub_enddate@OData.Community.Display.V1.FormattedValue": "2/27/2018",
       "hub_name": "Comprehensive Assessment",
       "hub_sch_diagnostic_serviceid": "e9cfb78f-9052-e711-80f1-c4346bad526i",
       "hub_startdate": "2018-02-13T18:30:00Z",
       "hub_startdate@OData.Community.Display.V1.FormattedValue": "2/13/2018",
   }
];

var pricelist = [
{
    "@odata.etag": "W/\"3895840\"",
    "hub_price": "20",
    "hub_price@OData.Community.Display.V1.FormattedValue": "$20.00",
    "hub_name": "GI | $20",
    "hub_pricelistid": "e9cfb78f-9052-e711-80f1-c4346bad526i",
    "_transactioncurrencyid_value": "e9cfb78f-9052-e711-80f1-c4346bad5",
    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.assocuiatenavigationproperty": "transactioncurrencyid",
    "_transactioncurrencyid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "transactioncurrency",
    "_transactioncurrencyid_value@Data.Community.Display.V1.FormattedValue": "US Dollar",
}
];

var discounts = [
    {
        "@odata.etag": "W/\"3895840\"",
        "hub_applies_to_appointment": "true",
        "hub_applies_to_appointment@Data.Community.Display.V1.FormattedValue": "Yes",
        "hub_applies_to_instructional": "true",
        "hub_applies_to_instructional@Data.Community.Display.V1.FormattedValue": "Yes",
        "hub_discountid": "01",
        "hub_fin_discount_defid": "e9cfb78f-9052-e711-80f1-c4346bad526i",
        "_hub_centerid_value": "e9cfb78f-9052-e711-80f1-c4346bad5",
        "_hub_centerid_value@Microsoft.Dynamics.CRM.assocuiatenavigationproperty": "hub_centerid",
        "_hub_centerid_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
        "_hub_centerid_value@Data.Community.Display.V1.FormattedValue": "Baltimore LC",
    }
];
var businesClosure = [
    {
        "@odata.etag": "W/\"3726985\"",
        "hub_reason": "Ad-hoc",
        "hub_startdatetime@OData.Community.Display.V1.FormattedValue": "2/28/2018",
        "hub_startdatetime": "2018-02-28T00:00:00Z",
        "hub_enddatetime@OData.Community.Display.V1.FormattedValue": "2/28/2018",
        "hub_enddatetime": "2018-02-28T00:00:00Z",
        "hub_duration@OData.Community.Display.V1.FormattedValue": "1,440.00",
        "hub_duration": 1440,
        "_hub_center_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
        "_hub_center_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_center",
        "_hub_center_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
        "_hub_center_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
        "hub_businessclosureid": "ade1da6f-4c8d-e711-80f7-c4346badc680"
    },
  {
      "@odata.etag": "W/\"3895710\"",
      "hub_reason": "Holiday",
      "hub_startdatetime@OData.Community.Display.V1.FormattedValue": "2/7/2018",
      "hub_startdatetime": "2018-02-07T00:00:00Z",
      "hub_enddatetime@OData.Community.Display.V1.FormattedValue": "2/8/2018",
      "hub_enddatetime": "2018-02-08T00:00:00Z",
      "hub_duration@OData.Community.Display.V1.FormattedValue": "0.00",
      "hub_duration": 0,
      "_hub_center_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
      "_hub_center_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_center",
      "_hub_center_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
      "_hub_center_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
      "hub_businessclosureid": "d446cc3c-33a8-e711-80f9-c4346bad526c"
  },
  {
      "@odata.etag": "W/\"3895842\"",
      "hub_reason": "Snow Day",
      "hub_startdatetime@OData.Community.Display.V1.FormattedValue": "10/2/2017",
      "hub_startdatetime": "2017-10-02T00:00:00Z",
      "hub_enddatetime@OData.Community.Display.V1.FormattedValue": "10/2/2017",
      "hub_enddatetime": "2017-10-02T00:00:00Z",
      "hub_duration@OData.Community.Display.V1.FormattedValue": "0.00",
      "hub_duration": 0,
      "_hub_center_value@OData.Community.Display.V1.FormattedValue": "Better Education, Inc.",
      "_hub_center_value@Microsoft.Dynamics.CRM.associatednavigationproperty": "hub_center",
      "_hub_center_value@Microsoft.Dynamics.CRM.lookuplogicalname": "hub_center",
      "_hub_center_value": "46ecf508-e26d-e711-80f2-c4346bacfbbc",
      "hub_businessclosureid": "3680f3ab-bb79-e711-80f4-c4346bad526c"
  }
];

function AppointmentData() {
    this.getCustomers = function (searchString) {
        for (var i = 5; i < 2000; i++) {
            for (var j = 0; j < 5; j++) {
                customers.push(customers[j]);
            }
        }
        return customers;
    }
    
    this.getStudents = function (customerId) {
        return students;
    }

    this.getLocations = function () {
        return locations;
    }

    this.saveAppointment = function (obj) {
        return true;
    }

    this.getAppointmentHours = function (startDate, endDate) {
        return apptHours;
    }

    this.getServices = function (locId, type, date) {
        return services;
    }

    this.getPricelist = function (serviceId) {
        return pricelist;
    }

    this.getDiscounts = function (centerId, type, date) {
        return discounts;
    }

    this.getBusinessClosure = function (centerId) {
        return businesClosure;
    }
}