const DRIVERS = [
  {
    "id": "abb_robot_rws",
    "name": "ABB Robot Web Services",
    "category": "CNCs & robots",
    "protocol": "RWS1 / HTTP DIGEST",
    "status": "implemented",
    "number": 1
  },
  {
    "id": "abb_totalflow_db2",
    "name": "ABB Totalflow DB2",
    "category": "Process & energy",
    "protocol": "DB2 FORMAT0 / TCP",
    "status": "implemented",
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
    "id": "controllogix_ethernet",
    "name": "Allen-Bradley ControlLogix Ethernet",
    "number": 5,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET/IP / CIP",
    "status": "implemented"
  },
  {
    "id": "controllogix_server",
    "name": "Allen-Bradley ControlLogix Server",
    "number": 6,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "ab_ethernet",
    "name": "Allen-Bradley Ethernet",
    "number": 7,
    "category": "PLCs & controllers",
    "protocol": "CSP / PCCC",
    "status": "implemented"
  },
  {
    "id": "ab_micro800_ethernet",
    "name": "Allen-Bradley Micro800 Ethernet",
    "number": 8,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET/IP / CIP",
    "status": "implemented"
  },
  {
    "id": "ab_server_ethernet",
    "name": "Allen-Bradley Server Ethernet",
    "number": 9,
    "category": "PLCs & controllers",
    "protocol": "CSP / PCCC",
    "status": "implemented"
  },
  {
    "id": "alstom_redundant_ethernet",
    "name": "Alstom Redundant Ethernet",
    "number": 10,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "aromat_ethernet",
    "name": "Aromat Ethernet",
    "number": 11,
    "category": "PLCs & controllers",
    "protocol": "ET-LAN / MEWTOCOL",
    "status": "implemented"
  },
  {
    "id": "asc_cpc",
    "name": "ASC CPC Autoclave",
    "category": "Process & energy",
    "protocol": "CPC / TCP",
    "status": "planned",
    "number": 12
  },
  {
    "id": "automationdirect_ebc",
    "name": "AutomationDirect EBC",
    "number": 13,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "automationdirect_ecom",
    "name": "AutomationDirect ECOM",
    "number": 14,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "productivity_ethernet",
    "name": "AutomationDirect Productivity Series Ethernet",
    "number": 15,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "bacnet_ip",
    "name": "BACnet/IP",
    "number": 16,
    "category": "Building & infrastructure",
    "protocol": "BACNET/IP",
    "status": "implemented"
  },
  {
    "id": "beckhoff_twincat",
    "name": "Beckhoff TwinCAT",
    "number": 17,
    "category": "PLCs & controllers",
    "protocol": "ADS / TCP",
    "status": "implemented"
  },
  {
    "id": "bristol_ip",
    "name": "Bristol IP",
    "number": 18,
    "category": "Process & energy",
    "protocol": "BSAP/IP",
    "status": "implemented"
  },
  {
    "id": "brother_speedio",
    "name": "Brother Speedio Ethernet",
    "category": "CNCs & robots",
    "protocol": "SX1 / TCP",
    "status": "implemented",
    "number": 19
  },
  {
    "id": "brother_tc",
    "name": "Brother TC Ethernet",
    "category": "CNCs & robots",
    "protocol": "TC CNC / TCP",
    "status": "implemented",
    "number": 20
  },
  {
    "id": "busware_ethernet",
    "name": "BUSWARE Ethernet",
    "number": 21,
    "category": "PLCs & controllers",
    "protocol": "UDP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "can_raw",
    "name": "CAN Raw",
    "category": "PLCs & controllers",
    "protocol": "RAW CAN / BACKEND UNSPECIFIED",
    "status": "planned",
    "number": 22
  },
  {
    "id": "cip_ethernet",
    "name": "CIP Ethernet",
    "category": "PLCs & controllers",
    "protocol": "UNCONNECTED CIP / TCP",
    "status": "implemented",
    "number": 23
  },
  {
    "id": "claude_code",
    "name": "Claude Code",
    "category": "Data & enterprise",
    "protocol": "CLAUDE CODE INTEGRATION",
    "status": "planned",
    "number": 24
  },
  {
    "id": "codesys",
    "name": "CODESYS",
    "number": 25,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "csv_stream",
    "name": "CSV Stream",
    "category": "Data & enterprise",
    "protocol": "UTF-8 RECORDS / TCP",
    "status": "implemented",
    "number": 26
  },
  {
    "id": "ucon_ethernet",
    "name": "Custom Protocol",
    "number": 27,
    "category": "Data & enterprise",
    "protocol": "TCP CLIENT / TYPED PROFILES + BOUNDED LUA",
    "status": "implemented"
  },
  {
    "id": "cutlerhammer_elc_ethernet",
    "name": "Cutler-Hammer ELC Ethernet",
    "number": 28,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "danfoss_ethernet",
    "name": "Danfoss FC/TSC",
    "category": "Motion & drives",
    "protocol": "FC PARAMETERS / TCP",
    "status": "implemented",
    "number": 29
  },
  {
    "id": "dataforth_isolynx",
    "name": "Dataforth ISOLYNX Ethernet",
    "number": 30,
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
    "number": 31
  },
  {
    "id": "devicehub_agent",
    "name": "DeviceHub Agent",
    "category": "Data & enterprise",
    "protocol": "gRPC / HTTP2",
    "status": "implemented",
    "number": 32
  },
  {
    "id": "dnp_ethernet",
    "name": "DNP Client Ethernet",
    "number": 33,
    "category": "Process & energy",
    "protocol": "TCP + UDP",
    "status": "implemented"
  },
  {
    "id": "enron_modbus",
    "name": "Enron Modbus",
    "category": "Process & energy",
    "protocol": "ENRON MODBUS / TCP",
    "status": "planned",
    "number": 34
  },
  {
    "id": "euromap_63",
    "name": "EUROMAP 63",
    "number": 35,
    "category": "Data & enterprise",
    "protocol": "FILE EXCHANGE",
    "status": "implemented"
  },
  {
    "id": "excel_workbook",
    "name": "Excel Workbook",
    "category": "Data & enterprise",
    "protocol": "READ-ONLY XLSX / LOCAL",
    "status": "implemented",
    "number": 36
  },
  {
    "id": "fanuc_focas_ethernet",
    "name": "Fanuc Focas Ethernet",
    "number": 37,
    "category": "CNCs & robots",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "fanuc_robot_snpx",
    "name": "FANUC Robot",
    "category": "CNCs & robots",
    "protocol": "READ-ONLY SNPX / TCP",
    "status": "implemented",
    "number": 38
  },
  {
    "id": "fisher_roc_ethernet",
    "name": "Fisher ROC Ethernet",
    "number": 39,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "fisher_rocplus_ethernet",
    "name": "Fisher ROC Plus Ethernet",
    "number": 40,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "fuji_sph2000",
    "name": "Fuji SPH2000 Ethernet",
    "category": "PLCs & controllers",
    "protocol": "SPH LOADER / TCP",
    "status": "implemented",
    "number": 41
  },
  {
    "id": "ge_ethernet",
    "name": "GE Ethernet",
    "number": 42,
    "category": "PLCs & controllers",
    "protocol": "SRTP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "ge_egd",
    "name": "GE Ethernet Global Data",
    "number": 43,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "generic_device",
    "name": "Generic Device",
    "category": "PLCs & controllers",
    "protocol": "LITERAL TCP POLL",
    "status": "implemented",
    "number": 44
  },
  {
    "id": "haas_shdr",
    "name": "Haas SHDR",
    "category": "CNCs & robots",
    "protocol": "SHDR / TCP",
    "status": "planned",
    "number": 45
  },
  {
    "id": "heidenhain_530",
    "name": "Heidenhain 530 Ethernet",
    "category": "CNCs & robots",
    "protocol": "READ-ONLY LSV2 / TCP",
    "status": "implemented",
    "number": 46
  },
  {
    "id": "heidenhain_640",
    "name": "Heidenhain 640 Ethernet",
    "category": "CNCs & robots",
    "protocol": "READ-ONLY LSV2 / TCP",
    "status": "implemented",
    "number": 47
  },
  {
    "id": "hid_device",
    "name": "HID Device",
    "category": "Building & infrastructure",
    "protocol": "HID INPUT / DEVICE FORMAT UNSPECIFIED",
    "status": "planned",
    "number": 48
  },
  {
    "id": "honeywell_hc900_ethernet",
    "name": "Honeywell HC900 Ethernet",
    "number": 49,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "honeywell_udc_ethernet",
    "name": "Honeywell UDC Ethernet",
    "number": 50,
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
    "number": 51
  },
  {
    "id": "iec_60870_5_102",
    "name": "IEC 60870-5-102 Ethernet",
    "category": "Process & energy",
    "protocol": "FT1.2 / TCP",
    "status": "implemented",
    "number": 52
  },
  {
    "id": "iec_60870_5_104",
    "name": "IEC 60870-5-104 Client",
    "number": 53,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "iec_61850_mms",
    "name": "IEC 61850 MMS Client",
    "number": 54,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "ignition",
    "name": "Ignition",
    "category": "Data & enterprise",
    "protocol": "NATS / TCP",
    "status": "implemented",
    "number": 55
  },
  {
    "id": "industrial_ot_server",
    "name": "Industrial OT Server",
    "category": "Data & enterprise",
    "protocol": "MQTT 3.1.1 / TCP",
    "status": "implemented",
    "number": 56
  },
  {
    "id": "iotech_pointscan",
    "name": "IOtech PointScan 100",
    "number": 57,
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
    "number": 58
  },
  {
    "id": "keyence_ethernet",
    "name": "Keyence Ethernet",
    "number": 59,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "krauss_maffei_mc4",
    "name": "Krauss Maffei MC4 Ethernet",
    "number": 60,
    "category": "Process & energy",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "memory_based",
    "name": "Memory Based",
    "number": 61,
    "category": "Data & enterprise",
    "protocol": "LOCAL MEMORY",
    "status": "implemented"
  },
  {
    "id": "mettler_ind256x",
    "name": "Mettler Toledo IND256x",
    "category": "Process & energy",
    "protocol": "CONTINUOUS WEIGHING / TCP",
    "status": "implemented",
    "number": 62
  },
  {
    "id": "microsoft_sql_server",
    "name": "Microsoft SQL Server",
    "category": "Data & enterprise",
    "protocol": "SQL SERVER",
    "status": "planned",
    "number": 63
  },
  {
    "id": "mitsubishi_cnc_ethernet",
    "name": "Mitsubishi CNC Ethernet",
    "number": 64,
    "category": "CNCs & robots",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "mitsubishi_ethernet",
    "name": "Mitsubishi Ethernet",
    "number": 65,
    "category": "PLCs & controllers",
    "protocol": "MC BINARY / TCP + UDP",
    "status": "implemented"
  },
  {
    "id": "modbus_ethernet",
    "name": "Modbus Ethernet",
    "number": 66,
    "category": "PLCs & controllers",
    "protocol": "MODBUS TCP / UDP",
    "status": "implemented"
  },
  {
    "id": "modbus_rtu_over_tcp",
    "name": "Modbus RTU over TCP",
    "category": "PLCs & controllers",
    "protocol": "RTU FRAMING / TCP",
    "status": "planned",
    "number": 67
  },
  {
    "id": "mqtt_client",
    "name": "MQTT Client",
    "number": 68,
    "category": "Data & enterprise",
    "protocol": "MQTT / JSON SUBSCRIPTIONS + OPTIONAL TAG PUBLISHING",
    "status": "implemented"
  },
  {
    "id": "mtconnect_client",
    "name": "MTConnect Client",
    "number": 69,
    "category": "Data & enterprise",
    "protocol": "HTTP",
    "status": "implemented"
  },
  {
    "id": "mysql",
    "name": "MySQL",
    "category": "Data & enterprise",
    "protocol": "MYSQL / TCP",
    "status": "planned",
    "number": 70
  },
  {
    "id": "nws_weather",
    "name": "National Weather Service",
    "category": "Building & infrastructure",
    "protocol": "WEATHER / HTTP",
    "status": "planned",
    "number": 71
  },
  {
    "id": "odbc_client",
    "name": "ODBC Client",
    "number": 72,
    "category": "Data & enterprise",
    "protocol": "ODBC",
    "status": "implemented"
  },
  {
    "id": "omron_fins_ethernet",
    "name": "Omron FINS Ethernet",
    "number": 73,
    "category": "PLCs & controllers",
    "protocol": "FINS / UDP / TCP",
    "status": "implemented"
  },
  {
    "id": "omron_nj_ethernet",
    "name": "Omron NJ Ethernet",
    "number": 74,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "opcua_client",
    "name": "OPC UA Client",
    "number": 75,
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
    "number": 76
  },
  {
    "id": "opcua_events",
    "name": "OPC UA Events",
    "category": "Data & enterprise",
    "protocol": "OPC UA EVENTS",
    "status": "planned",
    "number": 77
  },
  {
    "id": "opc_xml_da_client",
    "name": "OPC XML-DA Client",
    "number": 78,
    "category": "Data & enterprise",
    "protocol": "OPC XML-DA / HTTP",
    "status": "implemented"
  },
  {
    "id": "optilogic",
    "name": "Optimation OptiLogic",
    "number": 79,
    "category": "Building & infrastructure",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "opto22_ethernet",
    "name": "Opto 22 Ethernet",
    "number": 80,
    "category": "Building & infrastructure",
    "protocol": "MMIO / TCP + UDP",
    "status": "implemented"
  },
  {
    "id": "osi_agent",
    "name": "OSI Agent",
    "category": "Data & enterprise",
    "protocol": "NATS / TCP (LEGACY + ADVANCED V1)",
    "status": "implemented",
    "number": 81
  },
  {
    "id": "panasonic_mewtocol",
    "name": "Panasonic FP / MEWTOCOL Ethernet",
    "category": "PLCs & controllers",
    "protocol": "MEWTOCOL-COM / TCP",
    "status": "planned",
    "number": 82
  },
  {
    "id": "panasonic_fp7",
    "name": "Panasonic FP7 Ethernet",
    "category": "PLCs & controllers",
    "protocol": "MEWTOCOL7 / TCP",
    "status": "implemented",
    "number": 83
  },
  {
    "id": "parker_acr9000",
    "name": "Parker ACR9000 Ethernet",
    "category": "Motion & drives",
    "protocol": "ACR PARAMETERS / TCP",
    "status": "implemented",
    "number": 84
  },
  {
    "id": "ping",
    "name": "Ping",
    "number": 85,
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
    "number": 86
  },
  {
    "id": "postgres_notifications",
    "name": "PostgreSQL Notifications",
    "category": "Data & enterprise",
    "protocol": "LISTEN / NOTIFY",
    "status": "planned",
    "number": 87
  },
  {
    "id": "productive_robotics_ob7",
    "name": "Productive Robotics OB7",
    "category": "CNCs & robots",
    "protocol": "ROSBRIDGE / WEBSOCKET",
    "status": "planned",
    "number": 88
  },
  {
    "id": "profinet_acyclic",
    "name": "PROFINET Acyclic",
    "category": "PLCs & controllers",
    "protocol": "PNIO-CM / UDP (GENERAL + TURCK)",
    "status": "implemented",
    "number": 89
  },
  {
    "id": "pvi",
    "name": "PVI",
    "category": "PLCs & controllers",
    "protocol": "PVI",
    "status": "planned",
    "number": 90
  },
  {
    "id": "redis",
    "name": "Redis",
    "category": "Data & enterprise",
    "protocol": "REDIS",
    "status": "planned",
    "number": 91
  },
  {
    "id": "rest_client",
    "name": "REST Client",
    "category": "Data & enterprise",
    "protocol": "HTTP GET / JSON",
    "status": "implemented",
    "number": 92
  },
  {
    "id": "ros2",
    "name": "ROS 2",
    "category": "CNCs & robots",
    "protocol": "ROS 2 / DDS",
    "status": "planned",
    "number": 93
  },
  {
    "id": "saia_ethernet",
    "name": "Saia Ether-S-Bus Ethernet",
    "category": "PLCs & controllers",
    "protocol": "ETHER-S-BUS / UDP",
    "status": "implemented",
    "number": 94
  },
  {
    "id": "sattbus_ethernet",
    "name": "SattBus Ethernet",
    "number": 95,
    "category": "PLCs & controllers",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "scale_network",
    "name": "Scale Network",
    "category": "Process & energy",
    "protocol": "RAW TCP POLL",
    "status": "implemented",
    "number": 96
  },
  {
    "id": "scanivalve_ethernet",
    "name": "Scanivalve Ethernet",
    "number": 97,
    "category": "Process & energy",
    "protocol": "ETHERNET",
    "status": "implemented"
  },
  {
    "id": "script_source",
    "name": "Script Source",
    "category": "Data & enterprise",
    "protocol": "SCRIPTING",
    "status": "planned",
    "number": 98
  },
  {
    "id": "sew_drive",
    "name": "SEW Drives",
    "category": "Motion & drives",
    "protocol": "CIP / MOVILINK",
    "status": "implemented",
    "number": 99
  },
  {
    "id": "siemens_s5",
    "name": "Siemens S5 Ethernet",
    "category": "PLCs & controllers",
    "protocol": "S5 ISO / TCP (WORD/KG + BYTE/IEEE)",
    "status": "implemented",
    "number": 100
  },
  {
    "id": "siemens_s7_plus",
    "name": "Siemens S7 Plus Ethernet",
    "number": 101,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "siemens_sinumerik_808d",
    "name": "Siemens Sinumerik 808D",
    "category": "CNCs & robots",
    "protocol": "SINUMERIK",
    "status": "implemented",
    "number": 102
  },
  {
    "id": "siemens_tcpip_ethernet",
    "name": "Siemens TCP/IP Ethernet",
    "number": 103,
    "category": "PLCs & controllers",
    "protocol": "S7COMM / TCP",
    "status": "implemented"
  },
  {
    "id": "siemens_tcpip_server",
    "name": "Siemens TCP/IP Server Ethernet",
    "number": 104,
    "category": "PLCs & controllers",
    "protocol": "TCP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "signal_generator",
    "name": "Signal Generator",
    "category": "Data & enterprise",
    "protocol": "LOCAL SIGNALS",
    "status": "planned",
    "number": 105
  },
  {
    "id": "simatic505_ethernet",
    "name": "Simatic / TI 505 Ethernet",
    "number": 106,
    "category": "PLCs & controllers",
    "protocol": "TCP + UDP",
    "status": "implemented"
  },
  {
    "id": "ethertrak",
    "name": "SIXNET EtherTRAK",
    "number": 107,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "sixnet_udr",
    "name": "SIXNET UDR Ethernet",
    "number": 108,
    "category": "Building & infrastructure",
    "protocol": "UDP / ETHERNET",
    "status": "implemented"
  },
  {
    "id": "snmp",
    "name": "SNMP",
    "number": 109,
    "category": "Building & infrastructure",
    "protocol": "SNMP / UDP",
    "status": "implemented"
  },
  {
    "id": "sparkplug_b",
    "name": "Sparkplug B",
    "category": "Data & enterprise",
    "protocol": "SPARKPLUG B / MQTT",
    "status": "planned",
    "number": 110
  },
  {
    "id": "syslog",
    "name": "Syslog Server",
    "category": "Building & infrastructure",
    "protocol": "RFC5424 / RFC3164 · UDP / TCP",
    "status": "implemented",
    "number": 111
  },
  {
    "id": "tcp_ascii",
    "name": "TCP ASCII",
    "category": "Data & enterprise",
    "protocol": "ASCII / TCP",
    "status": "planned",
    "number": 112
  },
  {
    "id": "tcp_ingestion",
    "name": "TCP Server",
    "category": "Data & enterprise",
    "protocol": "TCP LISTENER",
    "status": "planned",
    "number": 113
  },
  {
    "id": "thermo_westronics_ethernet",
    "name": "Thermo Westronics Ethernet",
    "number": 114,
    "category": "Process & energy",
    "protocol": "SV100 / SV180 · TCP",
    "status": "implemented"
  },
  {
    "id": "timebase_websocket",
    "name": "Timebase WebSocket",
    "category": "Data & enterprise",
    "protocol": "WEBSOCKET",
    "status": "planned",
    "number": 115
  },
  {
    "id": "torque_tool_ethernet",
    "name": "Torque Tool Ethernet",
    "number": 116,
    "category": "Process & energy",
    "protocol": "OPEN PROTOCOL / FEP / TCP",
    "status": "implemented"
  },
  {
    "id": "toshiba_ethernet",
    "name": "Toshiba Ethernet",
    "number": 117,
    "category": "PLCs & controllers",
    "protocol": "ASCII COMPUTER LINK / UDP",
    "status": "implemented"
  },
  {
    "id": "toyopuc_ethernet",
    "name": "Toyopuc PC3/PC2 Ethernet",
    "number": 118,
    "category": "PLCs & controllers",
    "protocol": "COMPUTER LINK / TCP",
    "status": "implemented"
  },
  {
    "id": "triconex_ethernet",
    "name": "Triconex Ethernet",
    "number": 119,
    "category": "Process & energy",
    "protocol": "TSAA / UDP",
    "status": "implemented"
  },
  {
    "id": "udp_ingestion",
    "name": "UDP Server",
    "category": "Data & enterprise",
    "protocol": "UDP LISTENER",
    "status": "planned",
    "number": 120
  },
  {
    "id": "universal_device",
    "name": "Universal Device",
    "number": 121,
    "category": "Data & enterprise",
    "protocol": "JAVASCRIPT PROFILE / TCP / UDP",
    "status": "implemented"
  },
  {
    "id": "wago_ethernet",
    "name": "WAGO Ethernet",
    "number": 122,
    "category": "PLCs & controllers",
    "protocol": "MODBUS TCP",
    "status": "implemented"
  },
  {
    "id": "wintriss_smartpac",
    "name": "Wintriss SmartPAC",
    "category": "Process & energy",
    "protocol": "SMARTPAC / TCP",
    "status": "planned",
    "number": 123
  },
  {
    "id": "xml_web_scraper",
    "name": "XML Web Scraper",
    "category": "Data & enterprise",
    "protocol": "HTTP / XML",
    "status": "planned",
    "number": 124
  },
  {
    "id": "yaskawa_mp_ethernet",
    "name": "Yaskawa MP Series Ethernet",
    "number": 125,
    "category": "PLCs & controllers",
    "protocol": "RTU OVER TCP / MODBUS TCP",
    "status": "implemented"
  },
  {
    "id": "yaskawa_mp2300_cip",
    "name": "Yaskawa MP2300 EtherNet/IP",
    "category": "Motion & drives",
    "protocol": "EDS INPUT ONLY / SIX RAW BYTES",
    "status": "implemented",
    "number": 126
  },
  {
    "id": "yaskawa_robot_hses",
    "name": "Yaskawa Robot",
    "category": "CNCs & robots",
    "protocol": "HIGH SPEED ETHERNET SERVER",
    "status": "planned",
    "number": 127
  },
  {
    "id": "yokogawa_cx",
    "name": "Yokogawa CX",
    "number": 128,
    "category": "Process & energy",
    "protocol": "CX RECORDER / TCP",
    "status": "implemented"
  },
  {
    "id": "yokogawa_darwin",
    "name": "Yokogawa Darwin Ethernet",
    "number": 129,
    "category": "Process & energy",
    "protocol": "DARWIN RECORDER / TCP",
    "status": "implemented"
  },
  {
    "id": "yokogawa_dx",
    "name": "Yokogawa DX Ethernet",
    "number": 130,
    "category": "Process & energy",
    "protocol": "DX RECORDER / TCP",
    "status": "implemented"
  },
  {
    "id": "yokogawa_dxp",
    "name": "Yokogawa DXP",
    "number": 131,
    "category": "Process & energy",
    "protocol": "DXP RECORDER / TCP",
    "status": "implemented"
  },
  {
    "id": "yokogawa_fam3",
    "name": "Yokogawa FA-M3 Ethernet",
    "category": "PLCs & controllers",
    "protocol": "COMPUTER LINK / TCP",
    "status": "implemented",
    "number": 132
  },
  {
    "id": "yokogawa_gx",
    "name": "Yokogawa GX Ethernet",
    "number": 133,
    "category": "Process & energy",
    "protocol": "GX RECORDER / TCP",
    "status": "implemented"
  },
  {
    "id": "yokogawa_mw",
    "name": "Yokogawa MW",
    "number": 134,
    "category": "Process & energy",
    "protocol": "MW100 RECORDER / TCP",
    "status": "implemented"
  },
  {
    "id": "yokogawa_mx",
    "name": "Yokogawa MX",
    "number": 135,
    "category": "Process & energy",
    "protocol": "MX100 BINARY / TCP",
    "status": "implemented"
  }
];
