const DRIVERS = [
  {
    "id": "ab_bulletin_1609",
    "name": "Allen-Bradley 1609 UPS",
    "number": 1,
    "category": "Building & infrastructure",
    "protocol": "SNMP / UDP"
  },
  {
    "id": "controllogix_server",
    "name": "Allen-Bradley ControlLogix Server",
    "number": 2,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "ab_ethernet",
    "name": "Allen-Bradley Ethernet",
    "number": 3,
    "category": "PLCs & controllers",
    "protocol": "CSP / PCCC"
  },
  {
    "id": "ab_micro800_ethernet",
    "name": "Allen-Bradley Micro800 Ethernet",
    "number": 4,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET/IP / CIP"
  },
  {
    "id": "ab_server_ethernet",
    "name": "Allen-Bradley Server Ethernet",
    "number": 5,
    "category": "PLCs & controllers",
    "protocol": "CSP / PCCC"
  },
  {
    "id": "alstom_redundant_ethernet",
    "name": "Alstom Redundant Ethernet",
    "number": 6,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "aromat_ethernet",
    "name": "Aromat Ethernet",
    "number": 7,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "automationdirect_ebc",
    "name": "AutomationDirect EBC",
    "number": 8,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "automationdirect_ecom",
    "name": "AutomationDirect ECOM",
    "number": 9,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "productivity_ethernet",
    "name": "AutomationDirect Productivity Series Ethernet",
    "number": 10,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "bacnet_ip",
    "name": "BACnet/IP",
    "number": 11,
    "category": "Building & infrastructure",
    "protocol": "BACNET/IP"
  },
  {
    "id": "beckhoff_twincat",
    "name": "Beckhoff TwinCAT",
    "number": 12,
    "category": "PLCs & controllers",
    "protocol": "ADS / TCP"
  },
  {
    "id": "bristol_ip",
    "name": "Bristol IP",
    "number": 13,
    "category": "Process & energy",
    "protocol": "BSAP/IP"
  },
  {
    "id": "busware_ethernet",
    "name": "BUSWARE Ethernet",
    "number": 14,
    "category": "PLCs & controllers",
    "protocol": "UDP / ETHERNET"
  },
  {
    "id": "codesys",
    "name": "CODESYS",
    "number": 15,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "controllogix_ethernet",
    "name": "ControlLogix Ethernet",
    "number": 16,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET/IP / CIP"
  },
  {
    "id": "cutlerhammer_elc_ethernet",
    "name": "Cutler-Hammer ELC Ethernet",
    "number": 17,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "dataforth_isolynx",
    "name": "Dataforth ISOLYNX Ethernet",
    "number": 18,
    "category": "Building & infrastructure",
    "protocol": "ETHERNET"
  },
  {
    "id": "dnp_ethernet",
    "name": "DNP Client Ethernet",
    "number": 19,
    "category": "Process & energy",
    "protocol": "TCP + UDP"
  },
  {
    "id": "euromap_63",
    "name": "EUROMAP 63",
    "number": 20,
    "category": "Data & enterprise",
    "protocol": "FILE EXCHANGE"
  },
  {
    "id": "fanuc_focas_ethernet",
    "name": "Fanuc Focas Ethernet",
    "number": 21,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "fisher_roc_ethernet",
    "name": "Fisher ROC Ethernet",
    "number": 22,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "fisher_rocplus_ethernet",
    "name": "Fisher ROC Plus Ethernet",
    "number": 23,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "ge_ethernet",
    "name": "GE Ethernet",
    "number": 24,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "ge_egd",
    "name": "GE Ethernet Global Data",
    "number": 25,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "honeywell_hc900_ethernet",
    "name": "Honeywell HC900 Ethernet",
    "number": 26,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "honeywell_udc_ethernet",
    "name": "Honeywell UDC Ethernet",
    "number": 27,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "iec_60870_5_104",
    "name": "IEC 60870-5-104 Client",
    "number": 28,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "iec_61850_mms",
    "name": "IEC 61850 MMS Client",
    "number": 29,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "iotech_pointscan",
    "name": "IOtech PointScan 100",
    "number": 30,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET"
  },
  {
    "id": "keyence_ethernet",
    "name": "Keyence Ethernet",
    "number": 31,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "krauss_maffei_mc4",
    "name": "Krauss Maffei MC4 Ethernet",
    "number": 32,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "memory_based",
    "name": "Memory Based",
    "number": 33,
    "category": "Data & enterprise",
    "protocol": "LOCAL MEMORY"
  },
  {
    "id": "mitsubishi_cnc_ethernet",
    "name": "Mitsubishi CNC Ethernet",
    "number": 34,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "mitsubishi_ethernet",
    "name": "Mitsubishi Ethernet",
    "number": 35,
    "category": "PLCs & controllers",
    "protocol": "MC / TCP"
  },
  {
    "id": "modbus_ethernet",
    "name": "Modbus Ethernet",
    "number": 36,
    "category": "PLCs & controllers",
    "protocol": "MODBUS TCP / UDP"
  },
  {
    "id": "mqtt_client",
    "name": "MQTT Client",
    "number": 37,
    "category": "Data & enterprise",
    "protocol": "MQTT"
  },
  {
    "id": "mtconnect_client",
    "name": "MTConnect Client",
    "number": 38,
    "category": "Data & enterprise",
    "protocol": "HTTP"
  },
  {
    "id": "odbc_client",
    "name": "ODBC Client",
    "number": 39,
    "category": "Data & enterprise",
    "protocol": "ODBC"
  },
  {
    "id": "omron_fins_ethernet",
    "name": "Omron FINS Ethernet",
    "number": 40,
    "category": "PLCs & controllers",
    "protocol": "FINS / ETHERNET"
  },
  {
    "id": "omron_nj_ethernet",
    "name": "Omron NJ Ethernet",
    "number": 41,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "opcua_client",
    "name": "OPC UA Client",
    "number": 42,
    "category": "Data & enterprise",
    "protocol": "OPC UA"
  },
  {
    "id": "opc_xml_da_client",
    "name": "OPC XML-DA Client",
    "number": 43,
    "category": "Data & enterprise",
    "protocol": "OPC XML-DA / HTTP"
  },
  {
    "id": "optilogic",
    "name": "Optimation OptiLogic",
    "number": 44,
    "category": "Building & infrastructure",
    "protocol": "ETHERNET"
  },
  {
    "id": "opto22_ethernet",
    "name": "Opto 22 Ethernet",
    "number": 45,
    "category": "Building & infrastructure",
    "protocol": "TCP + UDP"
  },
  {
    "id": "ping",
    "name": "Ping",
    "number": 46,
    "category": "Building & infrastructure",
    "protocol": "ICMP"
  },
  {
    "id": "sattbus_ethernet",
    "name": "SattBus Ethernet",
    "number": 47,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "scanivalve_ethernet",
    "name": "Scanivalve Ethernet",
    "number": 48,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "siemens_s7_plus",
    "name": "Siemens S7 Plus Ethernet",
    "number": 49,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "siemens_tcpip_ethernet",
    "name": "Siemens TCP/IP Ethernet",
    "number": 50,
    "category": "PLCs & controllers",
    "protocol": "S7COMM / TCP"
  },
  {
    "id": "siemens_tcpip_server",
    "name": "Siemens TCP/IP Server Ethernet",
    "number": 51,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "simatic505_ethernet",
    "name": "Simatic / TI 505 Ethernet",
    "number": 52,
    "category": "PLCs & controllers",
    "protocol": "TCP + UDP"
  },
  {
    "id": "ethertrak",
    "name": "SIXNET EtherTRAK",
    "number": 53,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET"
  },
  {
    "id": "sixnet_udr",
    "name": "SIXNET UDR Ethernet",
    "number": 54,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET"
  },
  {
    "id": "snmp",
    "name": "SNMP",
    "number": 55,
    "category": "Building & infrastructure",
    "protocol": "SNMP / UDP"
  },
  {
    "id": "thermo_westronics_ethernet",
    "name": "Thermo Westronics Ethernet",
    "number": 56,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "torque_tool_ethernet",
    "name": "Torque Tool Ethernet",
    "number": 57,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "toshiba_ethernet",
    "name": "Toshiba Ethernet",
    "number": 58,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "toyopuc_ethernet",
    "name": "Toyopuc PC3/PC2 Ethernet",
    "number": 59,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET"
  },
  {
    "id": "triconex_ethernet",
    "name": "Triconex Ethernet",
    "number": 60,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "universal_device",
    "name": "Universal Device",
    "number": 61,
    "category": "Data & enterprise",
    "protocol": "ETHERNET PROFILE"
  },
  {
    "id": "ucon_ethernet",
    "name": "User-Configurable Ethernet",
    "number": 62,
    "category": "Data & enterprise",
    "protocol": "ETHERNET PROFILE"
  },
  {
    "id": "wago_ethernet",
    "name": "WAGO Ethernet",
    "number": 63,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "yaskawa_mp_ethernet",
    "name": "Yaskawa MP Series Ethernet",
    "number": 64,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "yokogawa_cx",
    "name": "Yokogawa CX",
    "number": 65,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "yokogawa_darwin",
    "name": "Yokogawa Darwin Ethernet",
    "number": 66,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "yokogawa_dx",
    "name": "Yokogawa DX Ethernet",
    "number": 67,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "yokogawa_dxp",
    "name": "Yokogawa DXP",
    "number": 68,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "yokogawa_gx",
    "name": "Yokogawa GX Ethernet",
    "number": 69,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  },
  {
    "id": "yokogawa_mw",
    "name": "Yokogawa MW",
    "number": 70,
    "category": "Process & energy",
    "protocol": "ETHERNET"
  },
  {
    "id": "yokogawa_mx",
    "name": "Yokogawa MX",
    "number": 71,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET"
  }
];
