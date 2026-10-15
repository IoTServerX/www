const DRIVERS = [
  {
    "id": "abb_robot_rws",
    "name": "ABB Robot Web Services",
    "category": "CNCs & robots",
    "protocol": "RWS / HTTP",
    "status": "planned",
    "number": 1
  },
  {
    "id": "abb_totalflow_db2",
    "name": "ABB Totalflow DB2",
    "category": "Process & energy",
    "protocol": "TOTALFLOW DB2",
    "status": "planned",
    "number": 2
  },
  {
    "id": "activemq",
    "name": "ActiveMQ",
    "category": "Data & enterprise",
    "protocol": "ACTIVEMQ",
    "status": "planned",
    "number": 3
  },
  {
    "id": "ab_bulletin_1609",
    "name": "Allen-Bradley 1609 UPS",
    "number": 4,
    "category": "Building & infrastructure",
    "protocol": "SNMP / UDP",
    "status": "implemented"
  },
  {
    "id": "controllogix_server",
    "name": "Allen-Bradley ControlLogix Server",
    "number": 5,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "ab_ethernet",
    "name": "Allen-Bradley Ethernet",
    "number": 6,
    "category": "PLCs & controllers",
    "protocol": "CSP / PCCC",
    "status": "implemented"
  },
  {
    "id": "ab_micro800_ethernet",
    "name": "Allen-Bradley Micro800 Ethernet",
    "number": 7,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET/IP / CIP",
    "status": "implemented"
  },
  {
    "id": "ab_server_ethernet",
    "name": "Allen-Bradley Server Ethernet",
    "number": 8,
    "category": "PLCs & controllers",
    "protocol": "CSP / PCCC",
    "status": "implemented"
  },
  {
    "id": "alstom_redundant_ethernet",
    "name": "Alstom Redundant Ethernet",
    "number": 9,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "aromat_ethernet",
    "name": "Aromat Ethernet",
    "number": 10,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "asc_cpc",
    "name": "ASC CPC Autoclave",
    "category": "Process & energy",
    "protocol": "CPC / TCP",
    "status": "planned",
    "number": 11
  },
  {
    "id": "automationdirect_ebc",
    "name": "AutomationDirect EBC",
    "number": 12,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "automationdirect_ecom",
    "name": "AutomationDirect ECOM",
    "number": 13,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "productivity_ethernet",
    "name": "AutomationDirect Productivity Series Ethernet",
    "number": 14,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "bacnet_ip",
    "name": "BACnet/IP",
    "number": 15,
    "category": "Building & infrastructure",
    "protocol": "BACNET/IP",
    "status": "implemented"
  },
  {
    "id": "beckhoff_twincat",
    "name": "Beckhoff TwinCAT",
    "number": 16,
    "category": "PLCs & controllers",
    "protocol": "ADS / TCP",
    "status": "implemented"
  },
  {
    "id": "bristol_ip",
    "name": "Bristol IP",
    "number": 17,
    "category": "Process & energy",
    "protocol": "BSAP/IP",
    "status": "implemented"
  },
  {
    "id": "brother_speedio",
    "name": "Brother Speedio Ethernet",
    "category": "CNCs & robots",
    "protocol": "CNC / ETHERNET",
    "status": "planned",
    "number": 18
  },
  {
    "id": "brother_tc",
    "name": "Brother TC Ethernet",
    "category": "CNCs & robots",
    "protocol": "CNC / ETHERNET",
    "status": "planned",
    "number": 19
  },
  {
    "id": "busware_ethernet",
    "name": "BUSWARE Ethernet",
    "number": 20,
    "category": "PLCs & controllers",
    "protocol": "UDP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "claude_code",
    "name": "Claude Code",
    "category": "Data & enterprise",
    "protocol": "CLAUDE CODE INTEGRATION",
    "status": "planned",
    "number": 21
  },
  {
    "id": "codesys",
    "name": "CODESYS",
    "number": 22,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "controllogix_ethernet",
    "name": "ControlLogix Ethernet",
    "number": 23,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET/IP / CIP",
    "status": "implemented"
  },
  {
    "id": "cutlerhammer_elc_ethernet",
    "name": "Cutler-Hammer ELC Ethernet",
    "number": 24,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "danfoss_ethernet",
    "name": "Danfoss Ethernet Drives",
    "category": "Motion & drives",
    "protocol": "DRIVE / ETHERNET",
    "status": "planned",
    "number": 25
  },
  {
    "id": "dataforth_isolynx",
    "name": "Dataforth ISOLYNX Ethernet",
    "number": 26,
    "category": "Building & infrastructure",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "delta_dvp",
    "name": "Delta DVP Ethernet",
    "category": "PLCs & controllers",
    "protocol": "DVP / ETHERNET",
    "status": "planned",
    "number": 27
  },
  {
    "id": "dnp_ethernet",
    "name": "DNP Client Ethernet",
    "number": 28,
    "category": "Process & energy",
    "protocol": "TCP + UDP",
    "status": "implemented"
  },
  {
    "id": "euromap_63",
    "name": "EUROMAP 63",
    "number": 29,
    "category": "Data & enterprise",
    "protocol": "FILE EXCHANGE",
    "status": "implemented"
  },
  {
    "id": "fanuc_focas_ethernet",
    "name": "Fanuc Focas Ethernet",
    "number": 30,
    "category": "CNCs & robots",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "fanuc_robot_snpx",
    "name": "Fanuc Robot SNPX",
    "category": "CNCs & robots",
    "protocol": "SNPX",
    "status": "planned",
    "number": 31
  },
  {
    "id": "fisher_roc_ethernet",
    "name": "Fisher ROC Ethernet",
    "number": 32,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "fisher_rocplus_ethernet",
    "name": "Fisher ROC Plus Ethernet",
    "number": 33,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "fuji_sph2000",
    "name": "Fuji SPH2000 Ethernet",
    "category": "PLCs & controllers",
    "protocol": "SPH / ETHERNET",
    "status": "planned",
    "number": 34
  },
  {
    "id": "ge_ethernet",
    "name": "GE Ethernet",
    "number": 35,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "ge_egd",
    "name": "GE Ethernet Global Data",
    "number": 36,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "haas_shdr",
    "name": "Haas SHDR",
    "category": "CNCs & robots",
    "protocol": "SHDR / TCP",
    "status": "planned",
    "number": 37
  },
  {
    "id": "heidenhain_530",
    "name": "Heidenhain 530 Ethernet",
    "category": "CNCs & robots",
    "protocol": "CNC / ETHERNET",
    "status": "planned",
    "number": 38
  },
  {
    "id": "heidenhain_640",
    "name": "Heidenhain 640 Ethernet",
    "category": "CNCs & robots",
    "protocol": "CNC / ETHERNET",
    "status": "planned",
    "number": 39
  },
  {
    "id": "honeywell_hc900_ethernet",
    "name": "Honeywell HC900 Ethernet",
    "number": 40,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "honeywell_udc_ethernet",
    "name": "Honeywell UDC Ethernet",
    "number": 41,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "http_ingestion",
    "name": "HTTP Ingestion",
    "category": "Data & enterprise",
    "protocol": "HTTP SERVER",
    "status": "planned",
    "number": 42
  },
  {
    "id": "iec_60870_5_102",
    "name": "IEC 60870-5-102 Ethernet",
    "category": "Process & energy",
    "protocol": "IEC 60870-5-102",
    "status": "planned",
    "number": 43
  },
  {
    "id": "iec_60870_5_104",
    "name": "IEC 60870-5-104 Client",
    "number": 44,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "iec_61850_mms",
    "name": "IEC 61850 MMS Client",
    "number": 45,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "ignition",
    "name": "Ignition",
    "category": "Data & enterprise",
    "protocol": "IGNITION INTEGRATION",
    "status": "planned",
    "number": 46
  },
  {
    "id": "iotech_pointscan",
    "name": "IOtech PointScan 100",
    "number": 47,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "json_web_scraper",
    "name": "JSON Web Scraper",
    "category": "Data & enterprise",
    "protocol": "HTTP / JSON",
    "status": "planned",
    "number": 48
  },
  {
    "id": "keyence_ethernet",
    "name": "Keyence Ethernet",
    "number": 49,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "krauss_maffei_mc4",
    "name": "Krauss Maffei MC4 Ethernet",
    "number": 50,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "memory_based",
    "name": "Memory Based",
    "number": 51,
    "category": "Data & enterprise",
    "protocol": "LOCAL MEMORY",
    "status": "implemented"
  },
  {
    "id": "mettler_ind256x",
    "name": "Mettler Toledo / IND256x",
    "category": "Process & energy",
    "protocol": "WEIGHING / ETHERNET",
    "status": "planned",
    "number": 52
  },
  {
    "id": "microsoft_sql_server",
    "name": "Microsoft SQL Server",
    "category": "Data & enterprise",
    "protocol": "SQL SERVER",
    "status": "planned",
    "number": 53
  },
  {
    "id": "mitsubishi_cnc_ethernet",
    "name": "Mitsubishi CNC Ethernet",
    "number": 54,
    "category": "CNCs & robots",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "mitsubishi_ethernet",
    "name": "Mitsubishi Ethernet",
    "number": 55,
    "category": "PLCs & controllers",
    "protocol": "MC / TCP",
    "status": "implemented"
  },
  {
    "id": "modbus_ethernet",
    "name": "Modbus Ethernet",
    "number": 56,
    "category": "PLCs & controllers",
    "protocol": "MODBUS TCP / UDP",
    "status": "implemented"
  },
  {
    "id": "mqtt_client",
    "name": "MQTT Client",
    "number": 57,
    "category": "Data & enterprise",
    "protocol": "MQTT",
    "status": "implemented"
  },
  {
    "id": "mtconnect_client",
    "name": "MTConnect Client",
    "number": 58,
    "category": "Data & enterprise",
    "protocol": "HTTP",
    "status": "implemented"
  },
  {
    "id": "nws_weather",
    "name": "National Weather Service",
    "category": "Building & infrastructure",
    "protocol": "WEATHER / HTTP",
    "status": "planned",
    "number": 59
  },
  {
    "id": "odbc_client",
    "name": "ODBC Client",
    "number": 60,
    "category": "Data & enterprise",
    "protocol": "ODBC",
    "status": "implemented"
  },
  {
    "id": "omron_fins_ethernet",
    "name": "Omron FINS Ethernet",
    "number": 61,
    "category": "PLCs & controllers",
    "protocol": "FINS / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "omron_nj_ethernet",
    "name": "Omron NJ Ethernet",
    "number": 62,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "opcua_client",
    "name": "OPC UA Client",
    "number": 63,
    "category": "Data & enterprise",
    "protocol": "OPC UA",
    "status": "implemented"
  },
  {
    "id": "opcua_conditions",
    "name": "OPC UA Conditions",
    "category": "Data & enterprise",
    "protocol": "OPC UA CONDITIONS",
    "status": "planned",
    "number": 64
  },
  {
    "id": "opcua_events",
    "name": "OPC UA Events",
    "category": "Data & enterprise",
    "protocol": "OPC UA EVENTS",
    "status": "planned",
    "number": 65
  },
  {
    "id": "opc_xml_da_client",
    "name": "OPC XML-DA Client",
    "number": 66,
    "category": "Data & enterprise",
    "protocol": "OPC XML-DA / HTTP",
    "status": "implemented"
  },
  {
    "id": "optilogic",
    "name": "Optimation OptiLogic",
    "number": 67,
    "category": "Building & infrastructure",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "opto22_ethernet",
    "name": "Opto 22 Ethernet",
    "number": 68,
    "category": "Building & infrastructure",
    "protocol": "TCP + UDP",
    "status": "implemented"
  },
  {
    "id": "parker_acr9000",
    "name": "Parker ACR9000 Ethernet",
    "category": "Motion & drives",
    "protocol": "ACR / ETHERNET",
    "status": "planned",
    "number": 69
  },
  {
    "id": "ping",
    "name": "Ping",
    "number": 70,
    "category": "Building & infrastructure",
    "protocol": "ICMP",
    "status": "implemented"
  },
  {
    "id": "postgresql",
    "name": "PostgreSQL",
    "category": "Data & enterprise",
    "protocol": "POSTGRESQL",
    "status": "planned",
    "number": 71
  },
  {
    "id": "postgres_notifications",
    "name": "PostgreSQL Notifications",
    "category": "Data & enterprise",
    "protocol": "LISTEN / NOTIFY",
    "status": "planned",
    "number": 72
  },
  {
    "id": "productive_robotics_ob7",
    "name": "Productive Robotics OB7",
    "category": "CNCs & robots",
    "protocol": "ROSBRIDGE / WEBSOCKET",
    "status": "planned",
    "number": 73
  },
  {
    "id": "profinet_acyclic",
    "name": "PROFINET Acyclic",
    "category": "PLCs & controllers",
    "protocol": "PROFINET",
    "status": "planned",
    "number": 74
  },
  {
    "id": "pvi",
    "name": "PVI",
    "category": "PLCs & controllers",
    "protocol": "PVI",
    "status": "planned",
    "number": 75
  },
  {
    "id": "redis",
    "name": "Redis",
    "category": "Data & enterprise",
    "protocol": "REDIS",
    "status": "planned",
    "number": 76
  },
  {
    "id": "ros2",
    "name": "ROS 2",
    "category": "CNCs & robots",
    "protocol": "ROS 2 / DDS",
    "status": "planned",
    "number": 77
  },
  {
    "id": "saia_ethernet",
    "name": "Saia Ethernet",
    "category": "PLCs & controllers",
    "protocol": "S-BUS / ETHERNET",
    "status": "planned",
    "number": 78
  },
  {
    "id": "sattbus_ethernet",
    "name": "SattBus Ethernet",
    "number": 79,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "scanivalve_ethernet",
    "name": "Scanivalve Ethernet",
    "number": 80,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "script_source",
    "name": "Script Source",
    "category": "Data & enterprise",
    "protocol": "SCRIPTING",
    "status": "planned",
    "number": 81
  },
  {
    "id": "sew_drive",
    "name": "SEW Drives",
    "category": "Motion & drives",
    "protocol": "DRIVE / ETHERNET",
    "status": "planned",
    "number": 82
  },
  {
    "id": "siemens_s5",
    "name": "Siemens S5 Ethernet",
    "category": "PLCs & controllers",
    "protocol": "S5 / ETHERNET",
    "status": "planned",
    "number": 83
  },
  {
    "id": "siemens_s7_plus",
    "name": "Siemens S7 Plus Ethernet",
    "number": 84,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "siemens_sinumerik_808d",
    "name": "Siemens Sinumerik 808D",
    "category": "CNCs & robots",
    "protocol": "SINUMERIK",
    "status": "planned",
    "number": 85
  },
  {
    "id": "siemens_tcpip_ethernet",
    "name": "Siemens TCP/IP Ethernet",
    "number": 86,
    "category": "PLCs & controllers",
    "protocol": "S7COMM / TCP",
    "status": "implemented"
  },
  {
    "id": "siemens_tcpip_server",
    "name": "Siemens TCP/IP Server Ethernet",
    "number": 87,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "simatic505_ethernet",
    "name": "Simatic / TI 505 Ethernet",
    "number": 88,
    "category": "PLCs & controllers",
    "protocol": "TCP + UDP",
    "status": "skeleton"
  },
  {
    "id": "ethertrak",
    "name": "SIXNET EtherTRAK",
    "number": 89,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "sixnet_udr",
    "name": "SIXNET UDR Ethernet",
    "number": 90,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "snmp",
    "name": "SNMP",
    "number": 91,
    "category": "Building & infrastructure",
    "protocol": "SNMP / UDP",
    "status": "skeleton"
  },
  {
    "id": "sparkplug_b",
    "name": "Sparkplug B",
    "category": "Data & enterprise",
    "protocol": "SPARKPLUG B / MQTT",
    "status": "planned",
    "number": 92
  },
  {
    "id": "syslog",
    "name": "Syslog",
    "category": "Building & infrastructure",
    "protocol": "SYSLOG",
    "status": "planned",
    "number": 93
  },
  {
    "id": "tcp_ascii",
    "name": "TCP ASCII",
    "category": "Data & enterprise",
    "protocol": "ASCII / TCP",
    "status": "planned",
    "number": 94
  },
  {
    "id": "tcp_ingestion",
    "name": "TCP Server",
    "category": "Data & enterprise",
    "protocol": "TCP LISTENER",
    "status": "planned",
    "number": 95
  },
  {
    "id": "thermo_westronics_ethernet",
    "name": "Thermo Westronics Ethernet",
    "number": 96,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "timebase_websocket",
    "name": "Timebase WebSocket",
    "category": "Data & enterprise",
    "protocol": "WEBSOCKET",
    "status": "planned",
    "number": 97
  },
  {
    "id": "torque_tool_ethernet",
    "name": "Torque Tool Ethernet",
    "number": 98,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "toshiba_ethernet",
    "name": "Toshiba Ethernet",
    "number": 99,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "toyopuc_ethernet",
    "name": "Toyopuc PC3/PC2 Ethernet",
    "number": 100,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "triconex_ethernet",
    "name": "Triconex Ethernet",
    "number": 101,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "udp_ingestion",
    "name": "UDP Server",
    "category": "Data & enterprise",
    "protocol": "UDP LISTENER",
    "status": "planned",
    "number": 102
  },
  {
    "id": "universal_device",
    "name": "Universal Device",
    "number": 103,
    "category": "Data & enterprise",
    "protocol": "ETHERNET PROFILE",
    "status": "skeleton"
  },
  {
    "id": "ucon_ethernet",
    "name": "User-Configurable Ethernet",
    "number": 104,
    "category": "Data & enterprise",
    "protocol": "ETHERNET PROFILE",
    "status": "skeleton"
  },
  {
    "id": "wago_ethernet",
    "name": "WAGO Ethernet",
    "number": 105,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "wintriss_smartpac",
    "name": "Wintriss SmartPAC",
    "category": "Process & energy",
    "protocol": "SMARTPAC / TCP",
    "status": "planned",
    "number": 106
  },
  {
    "id": "xml_web_scraper",
    "name": "XML Web Scraper",
    "category": "Data & enterprise",
    "protocol": "HTTP / XML",
    "status": "planned",
    "number": 107
  },
  {
    "id": "yaskawa_mp_ethernet",
    "name": "Yaskawa MP Series Ethernet",
    "number": 108,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "yaskawa_robot_hses",
    "name": "Yaskawa Robot",
    "category": "CNCs & robots",
    "protocol": "HIGH SPEED ETHERNET SERVER",
    "status": "planned",
    "number": 109
  },
  {
    "id": "yokogawa_cx",
    "name": "Yokogawa CX",
    "number": 110,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "yokogawa_darwin",
    "name": "Yokogawa Darwin Ethernet",
    "number": 111,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "yokogawa_dx",
    "name": "Yokogawa DX Ethernet",
    "number": 112,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "yokogawa_dxp",
    "name": "Yokogawa DXP",
    "number": 113,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "yokogawa_fam3",
    "name": "Yokogawa FA-M3 Ethernet",
    "category": "PLCs & controllers",
    "protocol": "FA-M3 / ETHERNET",
    "status": "planned",
    "number": 114
  },
  {
    "id": "yokogawa_gx",
    "name": "Yokogawa GX Ethernet",
    "number": 115,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "yokogawa_mw",
    "name": "Yokogawa MW",
    "number": 116,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "skeleton"
  },
  {
    "id": "yokogawa_mx",
    "name": "Yokogawa MX",
    "number": 117,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "skeleton"
  }
];
