const allowableUsesData = {
  // Fill in allowable uses per HLURB code.
  // Example format:
  // "AGZ": ["Crop production", "Agroforestry", "Farm-to-market facilities"],
  // "C1-Z": ["Retail", "Restaurants", "Personal services"],
  // "SEDZ": ["Special economic zone operations", "Logistics facilities"],
  "AGZ": [
    {
      title: "AGRICULTURAL ZONE (AGZ)"
    },
    "Cultivation and growing of staple crops, such as camote, cassava, rice and the like; silviculture and mushroom culture", 
    "Backyard raising of livestock and fowl provided that: <br/>a. For livestock- maximum of 1 sow and 10 heads <br/>b. For fowl- a maximum of 500 heads",
    "Single-detached dwelling units of landowners;",
    "Value adding facilities such as processing plants",
    "Support facilities (e.g., storage barns, palay dryers and warehouses)",
    "a. Protection Agricultural Sub-Zone<br/>i. Cultivation, raising and growing of staple crops;<br/>ii. Growing of diversified plants and trees;<br/>iii. Silviculture, mushroom culture and the like;<br/>iv. Fishpond activities;<br/>v. Rice/corn mill;<br/>vi. Agricultural Research and experimentation facilities;<br/>vii. Plant nursery; and<br/>viii. Class “A” slaughterhouse/abattoir<br/>",
    "b. Production Agricultural Sub-Zone<br/>i. Cultivation, raising and growing of staple crops<br/>ii. Growing of diversified plants and trees<br/>iii. Silviculture, mushroom culture and the like<br/>iv. Fishpond activities<br/>v. Rice/corn mill<br/>vi. Agricultural Research and experimentation facilities<br/>vii. Plant nursery<br/>viii. Class “A” slaughterhouse/abattoir"
 ],
 "C/MP-Z": [
    {
      title: "CEMETERY/MEMORIAL PARK ZONE (C/MP-Z)",
    },
    "Memorial Parks",
    "Cemetery",
    "Columbarium",
    "Crematorium",
    "Customary accessory uses such as crypts, chapels, parks, playgrounds, pocket parks, parkways, promenades, parking and toilet facilities"
 ],
 "C1-Z": [
    {
      title: "COMMERCIAL-1 ZONE (C1-Z)"
    },
    "Retail stores and shops like:<br/>a. Department store<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops, and the like<br/>l. Drugstores",
    "Food market and shops like:<br/>a. Bakery, cake, pastry and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",
    "Product showroom/display store",
    "Warehouse/storage facility for non-pollutive/non-hazardous finished products",
    "Personal service shops like:<br/>a. Medical, dental and similar clinics<br/>b. Beauty parlor<br/>c. Barber shop<br/>d. Wellness facilities such as sauna, spa, massage and facial clinics<br/>e. Dressmaking and tailoring shops",
    "Bayad centers",
    "Laundries",
    "Internet café and cyber stations",
    "Photo/video, lights & sounds services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",
    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicles and accessory repair shop<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shop<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",
    "Recreational centers/establishments like:<br/>a. Movie house/theater<br/>b. Play courts (e.g., tennis court, bowling lane, billiard hall)<br/>c. Swimming pool<br/>d. Gymnasium<br/>e. Stadium, coliseum<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",
    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, disco and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets and off-track betting stations",
    "Vocational/technical schools",
    "Special Education (SPED) school",
    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving school<br/>d. Speech clinics<br/>e. Tutorial centers",
    "Exhibit halls",
    "Convention centers and related facilities",
    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",
    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and Television stations",
    "Parking lots and garage facilities",
    "Parking buildings (aboveground/underground)",
    "Transportation terminals/garages with or without repair",
    "Display for cars, tractors, and similar vehicles",
    "Motorpool",
    "Hauling services and garage terminals for trucks, low trucks and buses",
    "Auto repair, tire, vulcanizing shops and car wash",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling stations/service stations",
    "Vehicle emission testing centers",
    "Machinery display shop/center",
    "Machine shop service operation",
    "Welding shops",
    "Medium-scale junk shops",
    "Engraving, photo developing and printing shops",
    "Printing, publication and graphics shops",
    "Manufacture of insignia, badges and similar emblems (except metal)",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing/typesetting, copiers and duplicating services",
    "Recording and film laboratories",
    "Construction supply stores/depots",
    "Gravel, sand and CHB stores",
    "Lumber/hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply/contractors",
    "Manufacture of ice, ice blocks, cubes, tubes and crushed ice (except dry ice)",
    "Lechon stores",
    "Chicharon factory",
    "Biscuit factory – manufacture of biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factory",
    "Other bakery products not elsewhere classified",
    "Shops for repacking of food products (e.g., fruits, vegetables, sugar and related products)",
    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",
    "Funeral parlors",
    "Commercial condominium (with residential units on upper floors)",
    "Commercial housing",
    "All uses allowed in all Residential Zones",
    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses/quarters<br/>b. Parking lots/building garages<br/>c. Storerooms and warehouses necessary for business operations<br/>d. Pump houses<br/>e. Generator houses"
  ],
  "GI-Z": [
    {
      title: "GENERAL INSTITUTIONAL ZONE (GI-Z)"
    },
    "Government and civic centers to house national, provincial, and local offices in the area",
    "Other types of government buildings",
    "Police and fire stations",
    "General hospitals, medical centers, specialty hospitals, medical, dental and similar clinics",
    "Health centers",
    "Colleges, universities, vocational and trade schools and other institutions of higher learning",
    "Learning facilities such as training centers, seminar halls and libraries",
    "Museums, galleries and exhibition halls",
    "Convention centers and related facilities",
    "Scientific, cultural, academic and research facilities",
    "Places of worship such as churches, mosques, temples, shrines and chapels",
    "Seminaries and convents",
    "Embassies and consulates",
    "Parking buildings",
    "Parks, playgrounds, pocket parks, parkways, promenades and playlots",
    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses/quarters<br/>b. Offices<br/>c. Eateries/canteens<br/>d. Parking lots/garage facilities<br/>e. Storerooms and warehouses necessary for the efficient conduct of the business<br/>f. Pump houses<br/>g. Generator houses"
  ],
  "I1-Z": [
    {
      title: "Industrial Zone (I1-Z)"
    },
      "Government and civic centers to house national, provincial and local offices in the area",
      "Other types of government buildings",
      "Police and fire stations",
      "General hospitals, medical centers, specialty hospitals, medical, dental and similar clinics",
      "Health centers",
      "Colleges, universities, vocational and trade schools and other institutions of higher learning",
      "Learning facilities such as training centers, seminar halls and libraries",
      "Museums, galleries and exhibition halls",
      "Convention centers and related facilities",
      "Scientific, cultural, academic and research facilities",
      "Places of worship such as churches, mosques, temples, shrines and chapels",
      "Seminaries and convents",
      "Embassies and consulates",
      "Parking buildings",
      "Parks, playgrounds, pocket parks, parkways, promenades and playlots",

      "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses and quarters<br/>b. Offices<br/>c. Eateries and canteens<br/>d. Parking lots and garage facilities<br/>e. Storerooms and warehouses necessary for the efficient conduct of the business<br/>f. Pump houses<br/>g. Generator houses"
      ],
  "I2-Z": [
    {
      title: "Industrial Zone (I2-Z)"
    },
      "Government and civic centers to house national, provincial and local offices in the area",
      "Other types of government buildings",
      "Police and fire stations",
      "General hospitals, medical centers, specialty hospitals, medical, dental and similar clinics",
      "Health centers",
      "Colleges, universities, vocational and trade schools and other institutions of higher learning",
      "Learning facilities such as training centers, seminar halls and libraries",
      "Museums, galleries and exhibition halls",
      "Convention centers and related facilities",
      "Scientific, cultural, academic and research facilities",
      "Places of worship such as churches, mosques, temples, shrines and chapels",
      "Seminaries and convents",
      "Embassies and consulates",
      "Parking buildings",
      "Parks, playgrounds, pocket parks, parkways, promenades and playlots",

      "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses and quarters<br/>b. Offices<br/>c. Eateries and canteens<br/>d. Parking lots and garage facilities<br/>e. Storerooms and warehouses necessary for the efficient conduct of the business<br/>f. Pump houses<br/>g. Generator houses"
  ],
  "MU1-A": [
    {
      title: "MIXED USE 1-A ZONE (MU1-A)"
    },

    "<h4>Mixed Use (MU) 1 - Predominantly Commercial:</h4>",

    "Wholesale stores",
    "Wet and dry markets",
    "Shopping centers, malls and supermarkets",

    "Retail stores and shops like:<br/>a. Department store<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops and the like<br/>l. Drugstores",

    "Food market and shops like:<br/>a. Bakery, cake, pastry and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",

    "Product showroom and display stores",
    "Warehouse and storage facilities for non-pollutive and non-hazardous finished products",

    "Personal service shops like:<br/>a. Medical, dental and similar clinics<br/>b. Beauty parlor<br/>c. Barber shop<br/>d. Wellness facilities such as sauna, spa, massage and facial clinics<br/>e. Dressmaking and tailoring shops",

    "Bayad centers",
    "Laundries",
    "Internet café and cyber stations",
    "Photo/video, lights and sound services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",

    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicles and accessory repair shops<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shops<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",

    "Recreational centers and establishments like:<br/>a. Movie house or theater<br/>b. Play courts such as tennis court, bowling lane and billiard hall<br/>c. Swimming pool<br/>d. Gymnasium<br/>e. Stadium and coliseum<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",

    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, discos and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets and off-track betting stations",

    "Vocational and technical schools",
    "Special Education (SPED) schools",

    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving schools<br/>d. Speech clinics<br/>e. Tutorial centers",

    "Exhibit halls",
    "Convention centers and related facilities",

    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",

    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and television stations",

    "Parking lots and garage facilities",
    "Parking buildings aboveground and underground",
    "Transportation terminals and garages with or without repair",
    "Display areas for cars, tractors and similar vehicles",
    "Motorpools",
    "Hauling services and garage terminals for trucks and buses",

    "Auto repair, tire and vulcanizing shops and car wash facilities",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling and service stations",
    "Vehicle emission testing centers",

    "Machinery display shops and centers",
    "Machine shop service operations",
    "Welding shops",
    "Medium-scale junk shops",

    "Engraving, photo developing and printing shops",
    "Printing, publication and graphics shops",
    "Manufacture of insignia, badges and similar emblems except metal",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing, typesetting, copier and duplicating services",
    "Recording and film laboratories",

    "Construction supply stores and depots",
    "Gravel, sand and CHB stores",
    "Lumber and hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply stores and contractors",

    "Manufacture of ice including ice blocks, cubes, tubes and crushed ice except dry ice",
    "Lechon stores",
    "Chicharon factories",
    "Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factories",
    "Other bakery products not elsewhere classified",
    "Food product repacking shops such as fruits, vegetables, sugar and related products",

    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",

    "Funeral parlors",
    "Commercial condominiums with residential units on upper floors",
    "Commercial housing",
    "All uses allowed in all Residential Zones",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses and quarters<br/>b. Parking lots and building garages<br/>c. Storerooms and warehouses necessary for business operations<br/>d. Pump houses<br/>e. Generator houses",

    "<h4>MU1-A Secondary Land Use: Residential:</h4>",

    "Single-detached family dwelling units",
    "Semi-detached family dwelling units",
    "Townhouses",
    "Apartments",
    "Residential condominiums",
    "PD 957 condominiums",
    "PD 957 subdivisions",
    "Boarding houses",
    "Dormitories",
    "Pension houses",
    "Hotel apartments or apartelles",
    "Hotels",
    "Museums",
    "Libraries",

    "Home occupation for professional practice or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No exterior change in building appearance<br/>c. Not more than twenty percent of the building shall be used<br/>d. No home occupation in customary accessory uses<br/>e. No excessive traffic and parking is provided off-street<br/>f. No equipment or process creates noise, vibration, glare, fumes, odors or electrical interference",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the dwelling floor area is used<br/>b. No exterior alteration and no hazard or nuisance is created<br/>c. Classified as non-pollutive and non-hazardous<br/>d. Capitalization does not exceed limits set by the DTI<br/>e. Compliance with provisions on accessory uses, traffic and equipment",

    "Recreational facilities for exclusive family use such as:<br/>a. Swimming pool<br/>b. Tennis courts<br/>c. Basketball courts",

    "Parks and open spaces",
    "Nursery and elementary schools",
    "High schools",
    "Vocational schools",
    "Tutorial services",
    "Sports clubs",
    "Religious uses",
    "Multi-purpose and barangay halls",
    "Clinics, nursing and recovery homes and health centers",
    "Plant nurseries",
    "Parking buildings aboveground and underground",

    "Customary accessory uses incidental to residential uses provided that these are non-commercial such as:<br/>a. Servants’ quarters<br/>b. Private garages<br/>c. Guardhouses<br/>d. Laundries<br/>e. Non-commercial garages<br/>f. Pet houses not exceeding 4.00 sq.m.<br/>g. Pump houses<br/>h. Generator houses",

    "Building and structure design regulations shall comply with the National Building Code, PD 957 – The Subdivision and Condominium Buyers’ Protective Decree, and this Ordinance"
  ],
  "MU1-B": [
    {
      title: "MIXED USE 1-B ZONE (MU1-B)"
    },

    "<h4>Mixed Use (MU) 1 - Predominantly Commercial:</h4>",

    "Wholesale stores",
    "Wet and dry markets",
    "Shopping centers, malls and supermarkets",

    "Retail stores and shops like:<br/>a. Department store<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops and the like<br/>l. Drugstores",

    "Food market and shops like:<br/>a. Bakery, cake, pastry and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",

    "Product showroom and display stores",
    "Warehouse and storage facilities for non-pollutive and non-hazardous finished products",

    "Personal service shops like:<br/>a. Medical, dental and similar clinics<br/>b. Beauty parlor<br/>c. Barber shop<br/>d. Wellness facilities such as sauna, spa, massage and facial clinics<br/>e. Dressmaking and tailoring shops",

    "Bayad centers",
    "Laundries",
    "Internet café and cyber stations",
    "Photo and video, lights and sound services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",

    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicle and accessory repair shops<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shops<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",

    "Recreational centers and establishments like:<br/>a. Movie house or theater<br/>b. Play courts such as tennis court, bowling lane and billiard hall<br/>c. Swimming pool<br/>d. Gymnasium<br/>e. Stadium and coliseum<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",

    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, discos and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets and off-track betting stations",

    "Vocational and technical schools",
    "Special Education (SPED) schools",

    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving schools<br/>d. Speech clinics<br/>e. Tutorial centers",

    "Exhibit halls",
    "Convention centers and related facilities",

    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",

    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and television stations",

    "Parking lots and garage facilities",
    "Parking buildings aboveground and underground",
    "Transportation terminals and garages with or without repair",
    "Display areas for cars, tractors and similar vehicles",
    "Motorpools",
    "Hauling services and garage terminals for trucks and buses",

    "Auto repair, tire and vulcanizing shops and car wash facilities",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling and service stations",
    "Vehicle emission testing centers",

    "Machinery display shops and centers",
    "Machine shop service operations",
    "Welding shops",
    "Medium-scale junk shops",

    "Engraving, photo developing and printing shops",
    "Printing, publication and graphics shops",
    "Manufacture of insignia, badges and similar emblems except metal",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing, typesetting, copier and duplicating services",
    "Recording and film laboratories",

    "Construction supply stores and depots",
    "Gravel, sand and CHB stores",
    "Lumber and hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply stores and contractors",

    "Manufacture of ice including ice blocks, cubes, tubes and crushed ice except dry ice",
    "Lechon stores",
    "Chicharon factories",
    "Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factories",
    "Other bakery products not elsewhere classified",
    "Food product repacking shops such as fruits, vegetables, sugar and related products",

    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",

    "Funeral parlors",
    "Commercial condominiums with residential units on upper floors",
    "Commercial housing",
    "All uses allowed in all Residential Zones",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses and quarters<br/>b. Parking lots and building garages<br/>c. Storerooms and warehouses necessary for business operations<br/>d. Pump houses<br/>e. Generator houses",

    "<h4>MU1-B Secondary Land Use: Residential:</h4>",

    "Single-detached family dwelling units",
    "Semi-detached family dwelling units",
    "Townhouses",
    "Apartments",
    "Residential condominiums",
    "PD 957 condominiums",
    "PD 957 subdivisions",
    "Boarding houses",
    "Dormitories",
    "Pension houses",
    "Hotel apartments or apartelles",
    "Hotels",
    "Museums",
    "Libraries",

    "Home occupation for professional practice or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No exterior change in building appearance<br/>c. Not more than twenty percent of the building shall be used<br/>d. No home occupation in customary accessory uses<br/>e. No excessive traffic and parking is provided off-street<br/>f. No equipment or process creates noise, vibration, glare, fumes, odors or electrical interference",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the dwelling floor area is used<br/>b. No exterior alteration and no hazard or nuisance is created<br/>c. Classified as non-pollutive and non-hazardous<br/>d. Capitalization does not exceed limits set by the DTI<br/>e. Compliance with provisions on accessory uses, traffic and equipment",

    "Recreational facilities for exclusive family use such as:<br/>a. Swimming pool<br/>b. Tennis courts<br/>c. Basketball courts",

    "Parks and open spaces",
    "Nursery and elementary schools",
    "High schools",
    "Vocational schools",
    "Tutorial services",
    "Sports clubs",
    "Religious uses",
    "Multi-purpose and barangay halls",
    "Clinics, nursing and recovery homes and health centers",
    "Plant nurseries",
    "Parking buildings aboveground and underground",

    "Customary accessory uses incidental to residential uses provided that these are non-commercial such as:<br/>a. Servants’ quarters<br/>b. Private garages<br/>c. Guardhouses<br/>d. Laundries<br/>e. Non-commercial garages<br/>f. Pet houses not exceeding 4.00 sq.m.<br/>g. Pump houses<br/>h. Generator houses",

    "Building and structure design regulations shall comply with the National Building Code, PD 957 – The Subdivision and Condominium Buyers’ Protective Decree, and this Ordinance"
  ],
  "MU1-D": [
    {
      title: "MIXED USE 1-D ZONE (MU1-D)"
    },

    "<h4>Mixed Use (MU) 1 - Predominantly Commercial:</h4>",

    "Wholesale stores",
    "Wet and dry markets",
    "Shopping centers, malls and supermarkets",

    "Retail stores and shops like:<br/>a. Department store<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops and the like<br/>l. Drugstores",

    "Food market and shops like:<br/>a. Bakery, cake, pastry and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",

    "Product showroom and display stores",
    "Warehouse and storage facilities for non-pollutive and non-hazardous finished products",

    "Personal service shops like:<br/>a. Medical, dental and similar clinics<br/>b. Beauty parlor<br/>c. Barber shop<br/>d. Wellness facilities such as sauna, spa, massage and facial clinics<br/>e. Dressmaking and tailoring shops",

    "Bayad centers",
    "Laundries",
    "Internet café and cyber stations",
    "Photo and video, lights and sound services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",

    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicles and accessory repair shops<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shops<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",

    "Recreational centers and establishments like:<br/>a. Movie house or theater<br/>b. Play courts such as tennis court, bowling lane and billiard hall<br/>c. Swimming pool<br/>d. Gymnasium<br/>e. Stadium and coliseum<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",

    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, discos and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets and off-track betting stations",

    "Vocational and technical schools",
    "Special Education (SPED) schools",

    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving schools<br/>d. Speech clinics<br/>e. Tutorial centers",

    "Exhibit halls",
    "Convention centers and related facilities",

    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",

    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and television stations",

    "Parking lots and garage facilities",
    "Parking buildings aboveground and underground",
    "Transportation terminals and garages with or without repair",
    "Display areas for cars, tractors and similar vehicles",
    "Motorpools",
    "Hauling services and garage terminals for trucks and buses",

    "Auto repair, tire and vulcanizing shops and car wash facilities",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling and service stations",
    "Vehicle emission testing centers",

    "Machinery display shops and centers",
    "Machine shop service operations",
    "Welding shops",
    "Medium-scale junk shops",

    "Engraving, photo developing and printing shops",
    "Printing, publication and graphics shops",
    "Manufacture of insignia, badges and similar emblems except metal",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing, typesetting, copier and duplicating services",
    "Recording and film laboratories",

    "Construction supply stores and depots",
    "Gravel, sand and CHB stores",
    "Lumber and hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply stores and contractors",

    "Manufacture of ice including ice blocks, cubes, tubes and crushed ice except dry ice",
    "Lechon stores",
    "Chicharon factories",
    "Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factories",
    "Other bakery products not elsewhere classified",
    "Food product repacking shops such as fruits, vegetables, sugar and related products",

    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",

    "Funeral parlors",
    "Commercial condominiums with residential units on upper floors",
    "Commercial housing",
    "All uses allowed in all Residential Zones",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses and quarters<br/>b. Parking lots and building garages<br/>c. Storerooms and warehouses necessary for the efficient conduct of the business<br/>d. Pump houses<br/>e. Generator houses",

    "<h4>MU1-D Secondary Land Use: Residential:</h4>",

    "Single-detached family dwelling units",
    "Semi-detached family dwelling units",
    "Townhouses",
    "Apartments",
    "Residential condominiums",
    "PD 957 condominiums",
    "PD 957 subdivisions",
    "Boarding houses",
    "Dormitories",
    "Pension houses",
    "Hotel apartments or apartelles",
    "Hotels",
    "Museums",
    "Libraries",

    "Home occupation for professional practice or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No exterior change in building appearance<br/>c. Not more than twenty percent of the building shall be used<br/>d. No home occupation in customary accessory uses<br/>e. No excessive traffic and parking is provided off-street<br/>f. No equipment or process creates noise, vibration, glare, fumes, odors or electrical interference",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the dwelling floor area is used<br/>b. No exterior alteration and no hazard or nuisance is created<br/>c. Classified as non-pollutive and non-hazardous<br/>d. Capitalization does not exceed limits set by the DTI<br/>e. Compliance with provisions on accessory uses, traffic and equipment",

    "Recreational facilities for exclusive family use such as:<br/>a. Swimming pool<br/>b. Tennis courts<br/>c. Basketball courts",

    "Parks and open spaces",
    "Nursery and elementary schools",
    "High schools",
    "Vocational schools",
    "Tutorial services",
    "Sports clubs",
    "Religious uses",
    "Multi-purpose and barangay halls",
    "Clinics, nursing and recovery homes and health centers",
    "Plant nurseries",
    "Parking buildings aboveground and underground",

    "Customary accessory uses incidental to residential uses provided that these are non-commercial such as:<br/>a. Servants’ quarters<br/>b. Private garages<br/>c. Guardhouses<br/>d. Laundries<br/>e. Non-commercial garages<br/>f. Pet houses not exceeding 4.00 sq.m.<br/>g. Pump houses<br/>h. Generator houses",

    "Building and structure design regulations shall comply with the National Building Code, PD 957 – The Subdivision and Condominium Buyers’ Protective Decree, and this Ordinance"
  ],
  "MU2-A": [
    {
      title: "MIXED USE 2-A ZONE (MU2-A)"
    },

    "<h4>Mixed Use (MU) 2 - Predominantly Residential:</h4>",

    "Single-detached family dwellings",
    "Semi-detached family dwelling units",
    "Townhouses",
    "Apartments",
    "Residential condominiums",
    "PD 957 condominiums",
    "PD 957 subdivisions",
    "Boarding houses",
    "Dormitories",
    "Pension houses",
    "Hotel apartments or apartelles",
    "Hotels",
    "Museums",
    "Libraries",

    "Home occupation for professional practice or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No exterior change in building appearance<br/>c. Not more than twenty percent of the building shall be used<br/>d. No home occupation in customary accessory uses<br/>e. No excessive traffic and parking is provided off-street<br/>f. No equipment or process creates noise, vibration, glare, fumes, odors or electrical interference",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the dwelling floor area is used<br/>b. No exterior alteration and no hazard or nuisance is created<br/>c. Classified as non-pollutive and non-hazardous<br/>d. Capitalization does not exceed limits set by the DTI<br/>e. Compliance with provisions on accessory uses, traffic and equipment",

    "Recreational facilities for exclusive family use such as:<br/>a. Swimming pool<br/>b. Tennis courts<br/>c. Basketball courts",

    "Parks and open spaces",
    "Nursery and elementary schools",
    "High schools",
    "Vocational schools",
    "Tutorial services",
    "Sports clubs",
    "Religious uses",
    "Multi-purpose and barangay halls",
    "Clinics, nursing and recovery homes and health centers",
    "Plant nurseries",
    "Parking buildings aboveground and underground",

    "Customary accessory uses incidental to residential uses provided that these are non-commercial such as:<br/>a. Servants’ quarters<br/>b. Private garages<br/>c. Guardhouses<br/>d. Laundries<br/>e. Non-commercial garages<br/>f. Pet houses not exceeding 4.00 sq.m.<br/>g. Pump houses<br/>h. Generator houses",

    "<h4>MU2-A Secondary Land Use: Commercial:</h4>",

    "Wholesale stores",
    "Wet and dry markets",
    "Shopping centers, malls and supermarkets",

    "Retail stores and shops like:<br/>a. Department store<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops and the like<br/>l. Drugstores",

    "Food market and shops like:<br/>a. Bakery, cake, pastry, and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",

    "Product showroom and display stores",
    "Warehouse and storage facilities for non-pollutive and non-hazardous finished products",

    "Personal service shops like:<br/>a. Medical, dental, and similar clinics<br/>b. Beauty parlors<br/>c. Barber shops<br/>d. Wellness facilities such as sauna, spa, massage, and facial clinics<br/>e. Dressmaking and tailoring shops",

    "Bayad centers",
    "Laundries",
    "Internet cafés and cyber stations",
    "Photo/video, lights & sound services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",

    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicles and accessory repair shops<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shops<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",

    "Recreational centers and establishments like:<br/>a. Movie houses or theaters<br/>b. Play courts such as tennis courts, bowling lanes, billiard halls<br/>c. Swimming pools<br/>d. Gymnasiums<br/>e. Stadiums and coliseums<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",

    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, discos, and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets, and off-track betting stations",

    "Vocational/technical schools",
    "Special Education (SPED) schools",

    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving schools<br/>d. Speech clinics<br/>e. Tutorial centers",

    "Exhibit halls",
    "Convention centers and related facilities",

    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",

    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and television stations",

    "Parking lots and garage facilities",
    "Parking buildings aboveground and underground",
    "Transportation terminals/garages with or without repair",
    "Display areas for cars, tractors, and similar vehicles",
    "Motorpools",
    "Hauling services and garage terminals for trucks and buses",

    "Auto repair, tire, and vulcanizing shops and car wash facilities",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling and service stations",
    "Vehicle emission testing centers",

    "Machinery display shops and centers",
    "Machine shop service operations",
    "Welding shops",
    "Medium-scale junk shops",

    "Engraving, photo developing, and printing shops",
    "Printing, publication, and graphics shops",
    "Manufacture of insignia, badges, and similar emblems except metal",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing/typesetting, copiers and duplicating services",
    "Recording and film laboratories",

    "Construction supply stores and depots",
    "Gravel, sand and CHB stores",
    "Lumber and hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply stores and contractors",

    "Manufacture of ice including ice blocks, cubes, tubes, crushed ice except dry ice",
    "Lechon stores",
    "Chicharon factories",
    "Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factories",
    "Other bakery products not elsewhere classified",
    "Shops repacking food products such as fruits, vegetables, sugar, and related products",

    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",

    "Funeral parlors",
    "Commercial condominiums with residential units on upper floors",
    "Commercial housing",
    "All uses allowed in all Residential Zones",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses/quarters<br/>b. Parking lots/building garages<br/>c. Storerooms and warehouses necessary for efficient business conduct<br/>d. Pump houses<br/>e. Generator houses"
  ],
  "MU2-B": [
    {
      "title": "MIXED USE 2-B ZONE (MU2-B)"
    },

    "<h4>Mixed Use (MU) 2 - Predominantly Residential:</h4>",

    "Single-detached family dwellings",
    "Semi-detached family dwelling units",
    "Townhouses",
    "Apartments",
    "Residential condominiums",
    "PD 957 condominiums",
    "PD 957 subdivisions",
    "Boarding houses",
    "Dormitories",
    "Pension houses",
    "Hotel apartments or apartelles",
    "Hotels",
    "Museums",
    "Libraries",

    "Home occupation for professional practice or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No exterior change in building appearance<br/>c. Not more than twenty percent of the building shall be used<br/>d. No home occupation in customary accessory uses<br/>e. No excessive traffic and parking is provided off-street<br/>f. No equipment or process creates noise, vibration, glare, fumes, odors or electrical interference",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the dwelling floor area is used<br/>b. No exterior alteration and no hazard or nuisance is created<br/>c. Classified as non-pollutive and non-hazardous<br/>d. Capitalization does not exceed limits set by the DTI<br/>e. Compliance with provisions on accessory uses, traffic and equipment",

    "Recreational facilities for exclusive family use such as:<br/>a. Swimming pool<br/>b. Tennis courts<br/>c. Basketball courts",

    "Parks and open spaces",
    "Nursery and elementary schools",
    "High schools",
    "Vocational schools",
    "Tutorial services",
    "Sports clubs",
    "Religious uses",
    "Multi-purpose and barangay halls",
    "Clinics, nursing and recovery homes and health centers",
    "Plant nurseries",
    "Parking buildings aboveground and underground",

    "Customary accessory uses incidental to residential uses provided that these are non-commercial such as:<br/>a. Servants’ quarters<br/>b. Private garages<br/>c. Guardhouses<br/>d. Laundries<br/>e. Non-commercial garages<br/>f. Pet houses not exceeding 4.00 sq.m.<br/>g. Pump houses<br/>h. Generator houses",

    "<h4>MU2-B Secondary Land Use: Commercial:</h4>",

    "Wholesale stores",
    "Wet and dry markets",
    "Shopping centers, malls and supermarkets",

    "Retail stores and shops like:<br/>a. Department store<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops and the like<br/>l. Drugstores",

    "Food market and shops like:<br/>a. Bakery, cake, pastry, and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",

    "Product showroom and display stores",
    "Warehouse and storage facilities for non-pollutive and non-hazardous finished products",

    "Personal service shops like:<br/>a. Medical, dental, and similar clinics<br/>b. Beauty parlors<br/>c. Barber shops<br/>d. Wellness facilities such as sauna, spa, massage, and facial clinics<br/>e. Dressmaking and tailoring shops",

    "Bayad centers",
    "Laundries",
    "Internet cafés and cyber stations",
    "Photo/video, lights & sound services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",

    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicles and accessory repair shops<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shops<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",

    "Recreational centers and establishments like:<br/>a. Movie houses or theaters<br/>b. Play courts such as tennis courts, bowling lanes, billiard halls<br/>c. Swimming pools<br/>d. Gymnasiums<br/>e. Stadiums and coliseums<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",

    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, discos, and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets, and off-track betting stations",

    "Vocational/technical schools",
    "Special Education (SPED) schools",

    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving schools<br/>d. Speech clinics<br/>e. Tutorial centers",

    "Exhibit halls",
    "Convention centers and related facilities",

    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",

    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and television stations",

    "Parking lots and garage facilities",
    "Parking buildings aboveground and underground",
    "Transportation terminals/garages with or without repair",
    "Display areas for cars, tractors, and similar vehicles",
    "Motorpools",
    "Hauling services and garage terminals for trucks and buses",

    "Auto repair, tire, and vulcanizing shops and car wash facilities",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling and service stations",
    "Vehicle emission testing centers",

    "Machinery display shops and centers",
    "Machine shop service operations",
    "Welding shops",
    "Medium-scale junk shops",

    "Engraving, photo developing, and printing shops",
    "Printing, publication, and graphics shops",
    "Manufacture of insignia, badges, and similar emblems except metal",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing/typesetting, copiers and duplicating services",
    "Recording and film laboratories",

    "Construction supply stores and depots",
    "Gravel, sand and CHB stores",
    "Lumber and hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply stores and contractors",

    "Manufacture of ice including ice blocks, cubes, tubes, crushed ice except dry ice",
    "Lechon stores",
    "Chicharon factories",
    "Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factories",
    "Other bakery products not elsewhere classified",
    "Shops repacking food products such as fruits, vegetables, sugar, and related products",

    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",

    "Funeral parlors",
    "Commercial condominiums with residential units on upper floors",
    "Commercial housing",
    "All uses allowed in all Residential Zones",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses/quarters<br/>b. Parking lots/building garages<br/>c. Storerooms and warehouses necessary for efficient business conduct<br/>d. Pump houses<br/>e. Generator houses"
  ],
  "MU3": [
    {
      "title": "MIXED USE 3 ZONE (MU3)"
    },

    "<h4>Predominantly Industrial (Industrial-1 Zone):</h4>",

    "Non-pollutive/non-hazardous manufacturing such as:<br/>a. Drying fish<br/>b. Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products<br/>c. Doughnut and hopia factories<br/>d. Manufacture of macaroni, spaghetti, vermicelli and other noodles<br/>e. Other bakery production not elsewhere classified<br/>f. Life belts factory<br/>g. Manufacture of luggage, handbags, wallets and small leather goods<br/>h. Manufacture of miscellaneous products of leather and leather substitute<br/>i. Manufacture of shoes except rubber, plastic and wood<br/>j. Manufacture of slippers and sandals except rubber and plastic<br/>k. Manufacture of footwear parts except rubber and plastic<br/>l. Printing, publishing and allied industries<br/>m. Manufacture or assembly of typewriters, cash registers, weighing, duplicating and accounting machines<br/>n. Renovation and repair of office machinery<br/>o. Manufacture or assembly of miscellaneous office machines<br/>p. Manufacture of rowboats, bancas and sailboats<br/>q. Manufacture of animal-drawn vehicles<br/>r. Manufacture of children vehicles and baby carriages<br/>s. Manufacture of laboratory and scientific instruments, barometers, chemical balances, etc.<br/>t. Manufacture of measuring and controlling equipment, plumb bobs, rain gauges, taxi meters, thermometers, etc.<br/>u. Manufacture or assembly of surgical, medical, dental equipment and medical furniture<br/>v. Ice plants and cold storage buildings<br/>w. Quick freezing and cold packaging for fish and other seafoods<br/>x. Quick freezing and cold packaging for fruits and vegetables<br/>y. Popcorn/rice factories<br/>z. Manufacture of medical/surgical supplies, adhesive tapes, antiseptic dressing, sanitary napkins, surgical gauze, etc.<br/>aa. Manufacture of orthopedic and prosthetic appliances<br/>bb. Manufacture of photographic equipment and accessories<br/>cc. Manufacture or assembly of optical instruments<br/>dd. Manufacture of eyeglasses and spectacles<br/>ee. Manufacture of optical lenses<br/>ff. Manufacture of watches and clocks<br/>gg. Manufacture of pianos<br/>hh. Manufacture of string instruments<br/>ii. Manufacture of wind and percussion instruments<br/>jj. Manufacture or assembly of electronic organs<br/>kk. Manufacture of sporting gloves and mitts<br/>ll. Manufacture of sporting balls (not rubber or plastic)<br/>mm. Manufacture of gym and playground equipment<br/>nn. Manufacture of sporting tables<br/>oo. Manufacture of other sporting and athletic goods<br/>pp. Manufacture of toys and dolls except rubber and mold plastic<br/>qq. Manufacture of pens, pencils and other office and artist materials<br/>rr. Manufacture of umbrellas and canes<br/>ss. Manufacture of buttons except plastic<br/>tt. Manufacture of brooms, brushes and fans<br/>uu. Manufacture of needles, pens, fasteners and zippers<br/>vv. Manufacture of signs and advertising displays (except printed)<br/>ww. Small-scale manufacturing of ice cream<br/>xx. Dairies and creameries",

    "Non-pollutive/hazardous manufacturing such as:<br/>a. Manufacture of house furniture<br/>b. Textile bag factories<br/>c. Jute bag factories<br/>d. Manufacture of miscellaneous textile goods, embroideries and woven apparel<br/>e. Manufacture of fiber batting, padding and upholstery filling except coir<br/>f. Men’s and boys’ garment factories<br/>g. Women’s, girls’ and ladies’ garment factories<br/>h. Manufacture of hats, gloves, handkerchiefs, neckwear and related clothing accessories<br/>i. Manufacture of raincoats and waterproof outer garments except jackets<br/>j. Manufacture of miscellaneous wearing apparel except footwear<br/>k. Manufacture of miscellaneous fabricated millwork<br/>l. Manufacture of wooden and cane containers<br/>m. Sawali, nipa and split cane factories<br/>n. Manufacture of bamboo, rattan and other cane baskets and wares<br/>o. Manufacture of cork products<br/>p. Manufacture of wooden shoes, shoelaces and similar products<br/>q. Manufacture of miscellaneous wood products<br/>r. Manufacture of miscellaneous furniture and fixtures except primarily of metals<br/>s. Manufacture of paper stationery, envelopes and related articles<br/>t. Manufacture of dry ice<br/>u. Repackaging of industrial products<br/>v. Pumping plants<br/>w. Warehouse/storage facilities for non-pollutive/hazardous industries",

    "<h4>Secondary Land Use: Commercial</h4>",

    "Wholesale stores",
    "Wet and dry markets",
    "Shopping centers, malls and supermarkets",

    "Retail stores and shops like:<br/>a. Department stores<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops, and the like<br/>l. Drugstores",

    "Food market and shops like:<br/>a. Bakery, cake, pastry, and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",

    "Product showroom and display stores",
    "Warehouse/storage facilities for non-pollutive/non-hazardous finished products",

    "Personal service shops like:<br/>a. Medical, dental and similar clinics<br/>b. Beauty parlors<br/>c. Barber shops<br/>d. Wellness facilities such as sauna, spa, massage and facial clinics<br/>e. Dressmaking and tailoring shops",

    "Bayad centers",
    "Laundries",
    "Internet cafés and cyber stations",
    "Photo/video, lights & sounds services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",

    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicles and accessory repair shops<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shops<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",

    "Recreational centers and establishments like:<br/>a. Movie houses or theaters<br/>b. Play courts such as tennis courts, bowling lanes, billiard halls<br/>c. Swimming pools<br/>d. Gymnasiums<br/>e. Stadiums and coliseums<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",

    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, discos, and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets and off-track betting stations",

    "Vocational/technical schools",
    "Special Education (SPED) schools",

    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving schools<br/>d. Speech clinics<br/>e. Tutorial centers",

    "Exhibit halls",
    "Convention centers and related facilities",

    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",

    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and television stations",

    "Parking lots and garage facilities",
    "Parking buildings aboveground and underground",
    "Transportation terminals/garages with or without repair",
    "Display areas for cars, tractors, and similar vehicles",
    "Motorpools",
    "Hauling services and garage terminals for trucks and buses",

    "Auto repair, tire, and vulcanizing shops and car wash facilities",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling and service stations",
    "Vehicle emission testing centers",

    "Machinery display shops and centers",
    "Machine shop service operations",
    "Welding shops",
    "Medium-scale junk shops",

    "Engraving, photo developing, and printing shops",
    "Printing, publication, and graphics shops",
    "Manufacture of insignia, badges, and similar emblems except metal",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing/typesetting, copiers and duplicating services",
    "Recording and film laboratories",

    "Construction supply stores and depots",
    "Gravel, sand and CHB stores",
    "Lumber and hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply stores and contractors",

    "Manufacture of ice including ice blocks, cubes, tubes, crushed ice except dry ice",
    "Lechon stores",
    "Chicharon factories",
    "Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factories",
    "Other bakery products not elsewhere classified",
    "Shops repacking food products such as fruits, vegetables, sugar, and related products",

    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",

    "Funeral parlors",
    "Commercial condominiums with residential units on upper floors",
    "Commercial housing",
    "All uses allowed in all Residential Zones",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses/quarters<br/>b. Parking lots/building garages<br/>c. Storerooms and warehouses necessary for efficient business conduct<br/>d. Pump houses<br/>e. Generator houses",

    "<h4>Allowable Use: Residential</h4>",

    "Single-detached family dwellings",
    "Semi-detached family dwelling units",
    "Townhouses",
    "Apartments",
    "Residential condominiums",
    "PD 957 condominiums",
    "PD 957 subdivisions",
    "Boarding houses",
    "Dormitories",
    "Pension houses",
    "Hotel apartments or apartelles",
    "Hotels",
    "Museums",
    "Libraries",

    "Home occupation for professional practice or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No exterior change in building appearance<br/>c. Not more than twenty percent of the building shall be used<br/>d. No home occupation in customary accessory uses<br/>e. No excessive traffic and parking is provided off-street<br/>f. No equipment or process creates noise, vibration, glare, fumes, odors or electrical interference",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the dwelling floor area is used<br/>b. No exterior alteration and no hazard or nuisance is created<br/>c. Classified as non-pollutive/non-hazardous<br/>d. Capitalization does not exceed limits set by the DTI<br/>e. Compliance with provisions on accessory uses, traffic and equipment",

    "Recreational facilities for exclusive family use such as:<br/>a. Swimming pool<br/>b. Tennis courts<br/>c. Basketball courts",

    "Parks and open spaces",
    "Nursery and elementary schools",
    "High schools",
    "Vocational schools",
    "Tutorial services",
    "Sports clubs",
    "Religious uses",
    "Multi-purpose and barangay halls",
    "Clinics, nursing and recovery homes and health centers",
    "Plant nurseries",
    "Parking buildings aboveground and underground",

    "Customary accessory uses incidental to residential uses provided that these are non-commercial such as:<br/>a. Servants’ quarters<br/>b. Private garages<br/>c. Guardhouses<br/>d. Laundries<br/>e. Non-commercial garages<br/>f. Pet houses not exceeding 4.00 sq.m.<br/>g. Pump houses<br/>h. Generator houses"
  ],
"MU4-B": [
    {
      "title": "MIXED USE 4 ZONE (MU4)"
    },

    "<h4>Predominantly Institutional</h4>",

    "Government and civic centers to house national, provincial, and local offices",
    "Other types of government buildings",
    "Police and fire stations",
    "General hospitals, medical centers, specialty hospitals, medical, dental and similar clinics",
    "Health centers",
    "Colleges, universities, vocational and trade schools, and other institutions of higher learning",
    "Learning facilities such as training centers, seminar halls and libraries",
    "Museums, galleries and exhibition halls",
    "Convention centers and related facilities",
    "Scientific, cultural, academic and research facilities",
    "Places of worship such as churches, mosques, temples, shrines, chapels",
    "Seminaries and convents",
    "Embassies/consulates",
    "Parking buildings",
    "Parks, playgrounds, pocket parks, parkways, promenades and playlots",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses/quarters<br/>b. Offices<br/>c. Eateries/canteens<br/>d. Parking lots/garage facilities<br/>e. Storerooms and warehouses necessary for efficient business conduct<br/>f. Pump houses<br/>g. Generator houses",

    "<h4>MU-4 Secondary Land Use: Commercial</h4>",

    "Wholesale stores",
    "Wet and dry markets",
    "Shopping centers, malls and supermarkets",

    "Retail stores and shops like:<br/>a. Department stores<br/>b. Bookstores and office supply shops<br/>c. Art supplies and novelties<br/>d. Home appliance stores<br/>e. Car display and dealer stores<br/>f. Photo shops<br/>g. Flower shops<br/>h. Curio or antique shops<br/>i. Pet shops and aquarium stores<br/>j. Jewelry shops<br/>k. Consumer electronics such as cellular phones, cameras, laptops, and the like<br/>l. Drugstores",

    "Food market and shops like:<br/>a. Bakery, cake, pastry, and delicatessen shops<br/>b. Liquor and wine stores<br/>c. Groceries<br/>d. Supermarkets<br/>e. Convenience stores",

    "Product showroom and display stores",
    "Warehouse/storage facilities for non-pollutive/non-hazardous finished products",

    "Personal service shops like:<br/>a. Medical, dental and similar clinics<br/>b. Beauty parlors<br/>c. Barber shops<br/>d. Wellness facilities such as sauna, spa, massage, and facial clinics<br/>e. Dressmaking and tailoring shops",

    "Bayad centers",
    "Laundries",
    "Internet cafés and cyber stations",
    "Photo/video, lights & sounds services",
    "Catering services and water stations",
    "Event planners",
    "Water stations",
    "Courier services",
    "Security agencies",
    "Janitorial services",
    "Travel agencies",

    "Repair shops like:<br/>a. House furniture and appliance repair shops<br/>b. Motor vehicles and accessory repair shops<br/>c. Battery shops and repair shops<br/>d. Bicycle repair shops<br/>e. Repair shops for watches, bags, shoes, cellular phones, cameras, computers and the like",

    "Recreational centers and establishments like:<br/>a. Movie houses or theaters<br/>b. Play courts such as tennis courts, bowling lanes, billiard halls<br/>c. Swimming pools<br/>d. Gymnasiums<br/>e. Stadiums and coliseums<br/>f. Sports clubhouses<br/>g. Other sports and recreational establishments",

    "Restaurants and other eateries",
    "Bars, sing-along lounges, pubs, beer gardens, bistros, discos, and dance halls",
    "Lotto terminals, off-fronton, online bingo outlets and off-track betting stations",

    "Vocational/technical schools",
    "Special Education (SPED) schools",

    "Short-term special education like:<br/>a. Dance schools<br/>b. Schools for self-defense<br/>c. Driving schools<br/>d. Speech clinics<br/>e. Tutorial centers",

    "Exhibit halls",
    "Convention centers and related facilities",

    "Financial institutions and services like:<br/>a. Banks<br/>b. Stand-alone automated teller machines<br/>c. Insurance<br/>d. Foreign exchange<br/>e. Money lending<br/>f. Pawnshops",

    "Offices",
    "Business Process Outsourcing (BPO) services",
    "Radio and television stations",

    "Parking lots and garage facilities",
    "Parking buildings aboveground and underground",
    "Transportation terminals/garages with or without repair",
    "Display areas for cars, tractors, and similar vehicles",
    "Motorpools",
    "Hauling services and garage terminals for trucks and buses",

    "Auto repair, tire, and vulcanizing shops and car wash facilities",
    "Auto sales, rentals, automotive handicraft, accessory and spare parts shops, marine craft and aircraft sales yards",
    "Boat storage",
    "Gasoline filling and service stations",
    "Vehicle emission testing centers",

    "Machinery display shops and centers",
    "Machine shop service operations",
    "Welding shops",
    "Medium-scale junk shops",

    "Engraving, photo developing, and printing shops",
    "Printing, publication, and graphics shops",
    "Manufacture of insignia, badges, and similar emblems except metal",
    "Glassware and metalware stores",
    "Signboard and streamer painting and silk screening",
    "Printing/typesetting, copiers and duplicating services",
    "Recording and film laboratories",

    "Construction supply stores and depots",
    "Gravel, sand and CHB stores",
    "Lumber and hardware stores",
    "Paint stores without bulk handling",
    "Gardens and landscaping supply stores and contractors",

    "Manufacture of ice including ice blocks, cubes, tubes, crushed ice except dry ice",
    "Lechon stores",
    "Chicharon factories",
    "Biscuit factories producing biscuits, cookies, crackers and similar dried bakery products",
    "Doughnut and hopia factories",
    "Other bakery products not elsewhere classified",
    "Shops repacking food products such as fruits, vegetables, sugar, and related products",

    "Manufacture of wood furniture including upholstered furniture",
    "Manufacture of rattan furniture including upholstered furniture",
    "Manufacture of box beds and mattresses",

    "Funeral parlors",
    "Commercial condominiums with residential units on upper floors",
    "Commercial housing",
    "All uses allowed in all Residential Zones",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses/quarters<br/>b. Parking lots/building garages<br/>c. Storerooms and warehouses necessary for efficient business conduct<br/>d. Pump houses<br/>e. Generator houses",

    "<h4>Allowable Use: Residential</h4>",

    "Single-detached family dwellings",
    "Semi-detached family dwelling units",
    "Townhouses",
    "Apartments",
    "Residential condominiums",
    "PD 957 condominiums",
    "PD 957 subdivisions",
    "Boarding houses",
    "Dormitories",
    "Pension houses",
    "Hotel apartments or apartelles",
    "Hotels",
    "Museums",
    "Libraries",

    "Home occupation for professional practice or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No exterior change in building appearance<br/>c. Not more than twenty percent of the building shall be used<br/>d. No home occupation in customary accessory uses<br/>e. No excessive traffic and parking is provided off-street<br/>f. No equipment or process creates noise, vibration, glare, fumes, odors or electrical interference",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the dwelling floor area is used<br/>b. No exterior alteration and no hazard or nuisance is created<br/>c. Classified as non-pollutive/non-hazardous<br/>d. Capitalization does not exceed limits set by the DTI<br/>e. Compliance with provisions on accessory uses, traffic and equipment",

    "Recreational facilities for exclusive family use such as:<br/>a. Swimming pool<br/>b. Tennis courts<br/>c. Basketball courts",

    "Parks and open spaces",
    "Nursery and elementary schools",
    "High schools",
    "Vocational schools",
    "Tutorial services",
    "Sports clubs",
    "Religious uses",
    "Multi-purpose and barangay halls",
    "Clinics, nursing and recovery homes and health centers",
    "Plant nurseries",
    "Parking buildings aboveground and underground",

    "Customary accessory uses incidental to residential uses provided that these are non-commercial such as:<br/>a. Servants’ quarters<br/>b. Private garages<br/>c. Guardhouses<br/>d. Laundries<br/>e. Non-commercial garages<br/>f. Pet houses not exceeding 4.00 sq.m.<br/>g. Pump houses<br/>h. Generator houses",

    "Building/Structure Design Regulations: Relevant provisions of the National Building Code, PD 957 – The Subdivision and Condominium Buyers’ Protective Decree, and this Ordinance"
  ],
  "R1-Z": [
    {
      title: "RESIDENTIAL-1 ZONE (R1-Z)"
    },

    "Single-detached dwelling units",
    "Semi-detached family dwelling units",
    "Residential subdivisions per PD 957 standards",

    "Home occupation for the practice of one’s profession or home business provided that:<br/>a. Persons engaged shall not exceed five including the owner<br/>b. No excessive traffic or parking issues shall be generated<br/>c. No equipment creates noise, vibration, fumes, odors or electrical interference in any radio or television receiver or causes line voltage fluctuations off the premises",

    "Home industry classified as cottage industry provided that:<br/>a. Not more than thirty percent of the residential floor area is used; no exterior alteration and no hazard or nuisance is created<br/>b. Classified as non-pollutive and non-hazardous as per this Ordinance"
  ],
  "UTS-Z": [
    {
      title: "UTILITIES, TRANSPORTATION AND SERVICES ZONE (UTS-Z)"
    },

    "Bus and terminals",
    "Port facilities",
    "Airports and heliport facilities",
    "All other types of transportation complexes",
    "Power plants",
    "Pumping plants",
    "Waste management facilities",
    "Climate monitoring facilities",
    "Telecommunication facilities such as cell (mobile) phone towers",
    "All other types of large complexes for public services",

    "Customary accessory uses incidental to any of the above uses such as:<br/>a. Staff houses and quarters<br/>b. Offices<br/>c. Eateries and canteens<br/>d. Parking lots and garage facilities<br/>e. Storerooms and warehouses necessary for business operations<br/>f. Pump houses<br/>g. Generator houses<br/>h. Public toilet facilities"
  ],
  "FZ-Prod": [
    {
      title: "PRODUCTION FOREST ZONE (FZ-Prod)"
    },

    "Industrial Forest Plantation Sub-Zone (Per DENR DAO No. 99-53) - refers to any tract of land planted mainly to timber-producing tree species, including rubber, and/or non-timber species such as rattan and bamboo, primarily to supply the raw material requirements of forest-based industries, among others.",

    "The Wood Processing Zone shall be the industrial forest plantation zone in which timber and non-timber forest products of the city shall be processed for value adding in accordance with the Comprehensive Development and Management Plan as approved by DENR, and relevant ordinances in relation to forest production and utilization. It shall be limited to non-invasive production forest activities and prohibits the logging of hardwood.",

    "Allowable uses:<br/>i. Planting of timber-producing species compatible with the ecological and biophysical characteristics of the area, but not excluding rubber, durian and/or non-timber species like rattan and bamboo<br/>ii. Agricultural activities on a suitable area of at most ten percent (10%) of the plantation",

    "Forest Buffer Sub-Zone (FB-SZ) - An area within the Forest Zone of the City outside the boundaries and immediately adjacent to designated protected areas that need specific management consideration and special development control in order to prevent or minimize harm/destruction to the said protected area, according to Section 8 of the NIPAS Act. The City of Butuan shall provide for a local ordinance declaring protected areas as national legislation to declare NIPAS sites are pending.",

    "It shall serve as a fence to prevent encroachment into the protected area. In the areas along Agusan River, easement in forestlands shall be 40 meters.",

    "Allowable uses:<br/>i. Utilization of this area shall be in accordance with the respective local ordinances and may include settlements, agriculture, sustainable land use and other low-intensity income-generating activities."
  ],
  "SPZ": [
    {
      title: "SPZ Forest (SPZ)"
    }
  ],
  "MZP-SZ":[
    {
      title: "Mariculture Park (MZP-SZ)"
    }
  ],
  "WZ-Prod": [
    {
      title: "Production Munizipal Water (WZ-Prod)"
    }
  ],
  "T-Z": [
    {
      title: "TOURISM ZONE (T-Z)"
    },

    "Tourism Zones have the following standard ratio for buildable and open space:<br/>Maximum of Fifty percent (50%) Buildable Area<br/>Thirty percent (30%) for Open Circulatory Space<br/>Minimum of Twenty percent (20%) Green Space<br/>The total percentage ratio of which is one hundred percent (100%).",

    "Allowable uses include:<br/>Agri-tourism<br/>Resort areas<br/>Theme parks<br/>Heritage and Historical Sites<br/>Other related activities such as tree parks and botanical gardens<br/>Tourism accommodations such as:<br/>a. Cottages<br/>b. Lodging inns<br/>c. Restaurants<br/>d. Home stays<br/>Souvenir shops<br/>Open air outdoor sports activities<br/>Food production and processing activities such as vegetables, fruits and plantation crops and fish production to sustain the tourism industry<br/>Parking areas",

    "Building/Structure Design Regulations:<br/>Per the relevant provisions of the National Building Code and this Ordinance<br/>Subject to national locational and building guidelines and standards of concerned agencies"
  ],
  "FZ-Prot": [
      {
        title: "PROTECTION FOREST ZONE (FZ-Prot)"
      },

      "<h4>Forest Reserve Sub-Zone</h4>",
      "Reforestation",
      "Religious ceremonies and burial sites of Indigenous Peoples",
      "Scientific studies provided that there is no gathering of species or alteration of the area",
      "Building/Structure Design Regulations: No permanent structures are allowed",

      "<h4>Civil Reservation Sub-Zone</h4>",
      "Areas of public domain proclaimed by the President of the Philippines or Congress for specific purposes such as town sites, resettlement areas, ancestral lands, and similar uses",
      "Allowable uses shall be as provided in each specific proclamation or regulation",
      "Development of the Forest Land Use Plan (FLUP) and Indigenous Peoples’ Development Program shall aid in regulating forest and ancestral lands",
      "Building/Structure Design Regulations: No permanent structures are allowed",

      "<h4>Military Reservation Sub-Zone</h4>",
      "Military-related uses such as airbases, campsites, docks and harbors, firing ranges, naval bases, target ranges, wharves, and similar facilities",
      "Allowable uses and activities shall be as provided in Proclamation No. 113 (s.1936) and Proclamation No. 658 (s.1940) and other applicable issuances",
      "Building/Structure Design Regulations: Buildings and structures shall comply with the regulations provided in this Ordinance",

      "<h4>Mangrove Sub-Zone</h4>",
      "Mangrove plantations",
      "Aquasilviculture",
      "Fish polyculture",
      "Eco-tourism",
      "Edu-tourism",
      "Mangrove areas shall be rehabilitated through reforestation",
      "Activities that damage the ecosystem such as clearing mangrove forests for fishpond development are prohibited",
      "Building/Structure Design Regulations: No permanent buildings or structures are allowed"
  ],
  "FZ-Prod (A&D)": [
    {
      title: "PRODUCTION FOREST ZONE (FZ-Prod A&D)"
    }
  ],
  "MUZ": [
    {
      title: "MUZ Forest (MUZ)"
    }
  ],
  "LF-SZ": [
    {
      title: "Landfill (LF-SZ)"
    }
  ],
  "SH-Z": [
    {
      title: "RESIDENTIAL SOCIALIZED HOUSING ZONE (SH-Z)"
    },
    "Single, detached row houses",
    "Multi-level residential buildings"
  ],
  "SEDZ": [
    {
      title: "(SEDZ)"
    }
  ],
  "SEDZ-1 (Logisti*": [
    {
      title: "SEDZ-1 (Logistics)"
    }
  ],
  "SEDZ-1 (Port Ar*": [
    {
      title: "SEDZ-1 (Port Area)"
    }
  ],
  "SEDZ 2A": [
    {
      "title": "SEDZ 2A"
    },

    "<h4>Allowable Uses</h4>",
    "Research and development on wood and other by-products",
    "Sawmills",
    "Plywood and veneer plants",
    "Wood treating plants",
    "Blockboard, fiberboard, particle board, and other wood-based plants",
    "Commercial establishments in support of the wood-based industry",
    "Low-density residential areas mainly intended for workers"
  ],
  "SEDZ-2B": [
    {
      title: "(SEDZ 2B)"
    },
  ],
  "SEDZ 3": [
    {
      title: "(SEDZ 3)"
    },

    "<h4>Allowable Uses</h4>",
    "Rice, corn, flour, and cassava mills",
    "Warehouses and solar dryers",
    "Drying, cleaning, and curing facilities",
    "Canning and preserving of fruits and vegetables",
    "Manufacturing and processing of other food products",
    "Support facilities",
    "Low-density residential areas",
    "Commercial establishments complementary to the industry such as stores and souvenir shops",

    "<h4>Prohibited Uses</h4>",
    "Pollutive and hazardous industries",
    "Establishments non-complementary with the protected watershed"
  ],
  "R2-Z": [
    {
      "title": "RESIDENTIAL-2 ZONE (R2-Z)"
    },

    "<h4>Allowable Uses (In addition to all uses allowed in Residential-1 Zone)</h4>",
    "Apartments",
    "Boarding houses",
    "Dormitories",
    "Museums",
    "Libraries",
    "High schools",
    "Vocational schools",

    "<h4>Allowable Uses in Residential-1 Zone (R1-Z)</h4>",
    "Single-detached dwelling units",
    "Semi-detached family dwelling units",
    "Residential subdivisions compliant with PD 957 standards",

    "<h4>Home Occupation (R1-Z)</h4>",
    "Practice of one’s profession or home-based businesses such as tailoring, baking, and sari-sari stores, subject to the following conditions:",
    "Maximum of five (5) persons engaged including the owner",
    "No traffic generation beyond what is normal in a residential neighborhood and parking demand must be accommodated",
    "No equipment that creates noise, vibration, fumes, odors, or electrical interference detectable off the premises",

    "<h4>Home Industry (Cottage Industry)</h4>",
    "Shall not occupy more than thirty percent (30%) of the residential floor area",
    "No change in the outside appearance of the dwelling unit",
    "Must be non-pollutive and non-hazardous as provided in this Ordinance"
  ],
  "PUD": [
    {
      title: "PLANNED UNIT DEVELOPMENT (PUD) ZONE – UNIVERSITY TOWN"
    },

    "<h4>Allowable Uses</h4>",
    "Commercial activities providing basic social services to the university population and regional government offices such as convenience stores, banks, laundry shops, grocery stores, and supermarkets",
    "Performing centers",
    "Exhibition halls",
    "Museums",
    "Galleries",
    "Research facilities",
    "Low-density residential development for the university population",
    "Transient housing for students, academic staff, and non-academic staff",
    "Affordable housing development for government employees and the university population",
    "Public open spaces, parks, and other green spaces",
    "Libraries and other learning hubs",
    "Community service providers such as beauty salons, barber shops, spas, dental and medical clinics, pet shops, bookshops, repair shops (shoe, key, car), photocopy services, and notarial offices",
    "Food retail establishments including cafes and restaurants",
    "Low-intensity activities",

    "<h4>Restrictions</h4>",
    "Gambling establishments of any form shall be located at least one hundred (100) meters away from educational and governmental institutions",
    "Bars, discos, and establishments of ill repute shall be located at least one hundred (100) meters away from educational and governmental institutions",
    "Industrial activities are restricted within the zone",
    "Noise- and vibration-generating activities that may disturb wildlife and ecotourism activities are prohibited"
  ],
  "PUD 1": [
    {
      "title": "PLANNED UNIT DEVELOPMENT (PUD) 1 – UPTOWN BANCASI AIRPORT"
    },

    "<h4>Allowable Uses</h4>",
    "Boutique hotels",
    "Convention centers",
    "Event venues",
    "Commercial centers",
    "Business and Information Technology offices",
    "Warehouses",
    "Low-density residential development as allowed under R-1, R-2, or applicable CAAP regulations",
    "Casinos authorized by law, limited to a maximum of three (3) at any given time",

    "<h4>Residential Uses – R-1</h4>",
    "Single-detached dwelling units",
    "Semi-detached family dwelling units",
    "Residential subdivisions compliant with PD 957 standards",

    "<h4>Home Occupation (R-1)</h4>",
    "Practice of one’s profession or home-based businesses such as tailoring, baking, and sari-sari stores, subject to the following conditions:",
    "Maximum of five (5) persons engaged including the owner",
    "No traffic generation beyond what is normal in a residential neighborhood and parking demand must be accommodated",
    "No equipment that creates noise, vibration, fumes, odors, or electrical interference detectable off the premises",

    "<h4>Home Industry (Cottage Industry – R-1)</h4>",
    "Shall not occupy more than thirty percent (30%) of the residential floor area",
    "No change in the outside appearance of the dwelling unit",
    "Must be non-pollutive and non-hazardous",

    "<h4>Residential Uses – R-2</h4>",
    "Apartments",
    "Boarding houses",
    "Dormitories",
    "Museums",
    "Libraries",
    "High schools",
    "Vocational schools",

    "<h4>Prohibited Uses</h4>",
    "Pollutive and hazardous industries",
    "Industries that emit strong odors or fumes",
    "Structures that may destroy or adversely affect archaeological, heritage, and tourist sites such as the Butuan Balangay Museum and the proposed Bood Promontory Heritage Park"
  ],
  "PUD 3": [
    {
      "title": "PLANNED UNIT DEVELOPMENT (PUD) 3 – HIGHLANDS ZONE"
    },

    "<h4>Allowable Uses</h4>",
    "Ecotourism activities",
    "Leisure hubs",
    "Low-density and low-intensity commercial areas",
    "Residential development (R-1 and R-2)",

    "<h4>Residential Uses – R-1</h4>",
    "Single-detached dwelling units",
    "Semi-detached family dwelling units",
    "Residential subdivisions per PD 957 standards",

    "<h4>Home Occupation (R-1)</h4>",
    "Practice of one’s profession or home-based businesses such as tailoring, baking, and sari-sari stores, subject to the following:",
    "Maximum of five (5) persons engaged including the owner",
    "No traffic generation beyond normal for a residential neighborhood; parking must be accommodated",
    "No equipment creating noise, vibration, fumes, odors, or electrical interference detectable off-premises",

    "<h4>Home Industry (Cottage Industry – R-1)</h4>",
    "Shall not occupy more than thirty percent (30%) of the residential floor area",
    "No change in the outside appearance of the dwelling unit",
    "Must be non-pollutive and non-hazardous",

    "<h4>Residential Uses – R-2</h4>",
    "Apartments",
    "Boarding houses",
    "Dormitories",
    "Museums",
    "Libraries",
    "High schools",
    "Vocational schools",

    "<h4>Prohibited Uses</h4>",
    "Industrial activities",
    "Noise- and vibration-generating activities that may disturb wildlife and ecotourism activities"
  ],
  "NBZ": [
    {
      "title": "PROTECTED LAND USE AREAS (PLUA) – NO BUILD ZONE"
    },

    "<h4>Description</h4>",
    "Land areas with the presence of natural resources and vegetation such as mangroves, forests, rivers, seas, and beachfronts that serve as natural habitats of endemic species",
    "Includes heritage sites, archaeological sites, and areas with historical significance",
    "Includes danger-prone areas with high vulnerability to natural disasters such as riverbanks, coastal areas, low-lying areas, and rain-induced landslide-prone areas near mountain edges and foothills",
    "Areas are monitored and regulated with limited allowable physical development",

    "<h4>Buffer Strips / Easements (Section 40)</h4>",
    "Easements for the protection of water resources shall be observed along rivers, creeks, streams, seashores, lakes, and all waterways",

    "<h4>Agusan River Easement</h4>",
    "Protection buffer of two hundred (200) meters on both sides of the river",
    "No-build zone within the fifty (50) to one hundred fifty (150) meter buffer on both sides of the river"
  ],
};

export default allowableUsesData;
