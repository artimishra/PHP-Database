

  function populate(s1,s2){
        var s1 = document.getElementById(s1);
		var s2 = document.getElementById(s2);
		s2.innerHTML = "";			
		
		if(s1.value == "Andaman and Nicobar Islands"){
		    var optionArray = ["nicobar|Nicobar","north and middle andaman|North and Middle Andaman","south andaman|South Andaman"];
		
		}else if(s1.value == "Andhra Pradesh"){
		    var optionArray = ["east Godavari|East Godavari","west Godavari|West Godavari","krishna|Krishna","guntur|Guntur","prakasam|Prakasam","nellore|Nellore","srikakulam|Srikakulam","vizianagaram|Vizianagaram","visakhapatnam|Visakhapatnam","kurnool|Kurnool","chittoor|Chittoor","kadapa|Kadapa","anantapur|Anantapur"];
		}else if(s1.value =="Arunachal Pradesh"){
		
		    var optionArray = ["anjaw|Anjaw","changlang|Changlang","dibang valley|Dibang Valley","east kameng|East Kameng","east siang|East Siang","kra daadi|Kra Daadi","kurung kumey|Kurung Kumey","lohit|Lohit","longding|Longding","lower dibang valley|Lower Dibang Valley","lower subansiri|Lower Subansiri","namsai|Namsai","papum pare|Papum Pare","siang|Siang","tawang|Tawang","tirap|Tirap","upper siang|Upper Siang","upper subansiri|Upper Subansiri","west kameng|West Kameng","west siang|West Siang"];
		}else if(s1.value == "Bihar"){
		
		    var optionArray = ["araria|Araria","madhepura|Madhepura","arwal|Arwal","madhubani|Madhubani","auranagabad|Aurangabad","monghyr|Monghyr","banka|Banka","muzaffarpur|Muzaffarpur","begusarai|Begusarai","nalanda|Nalanda","bhagalpur|Bhagalpur","nawada|Nawada","bhojpur|Bhojpur","patna|Patna","buxar|Buxar","purnea|Purnea","darbhanga|Darbhanga","rohtas|Rohtas","east champaran|East Champaran","sahasra|Saharsa","gaya|Gaya","samastipur|Samastipur","gopalganj|Gopalganj","saran|Saran","jamui|Jamui","shiekpura|Shiekhpura","jehanabad|Jehanabad","sheohar|Sheohar","kaimur|Kaimur","sitamarhi|Sitamarhi","kathiar|Katihar","siwan|Siwan","khagaria|Khagaria","supaul|Supaul","kishanganj|Kishanganj","vaishali|Vaishali","lakhisarai|Lakhisarai","west champaran|West Champaran"];
		}else if(s1.value == "Chandigarh"){
		    var optionArray = ["chandigarh|Chandigarh"];
		}
		else if(s1.value == "Chhattisgarh"){
		
		
		    var optionArray = ["balod|Balod","baloda bazar|Baloda Bazar","balrampur|Balrampur","bastar|Bastar","bemetara|Bemetara","bijapur|Bijapur","bilaspur|Bilaspur","dantewada (south bastar)|Dantewada (South Bastar)","dhamtari|Dhamtari","durg|Durg","gariband|Gariyaband","janjgir-champa|Janjgir-Champa","jashpur|Jashpur","kabirdham (kawardha)|Kabirdham (Kawardha)","kanker (north bastar)|Kanker (North Bastar)","kondagaon|Kondagaon","korba|Korba","korea (koriya)|Korea (Koriya)","mahasamund|Mahasamund","mungeli|Mungeli","narayanpur|Narayanpur","raigarh|Raigarh","raipur|Raipur","rajnandgaon|Rajnandgaon","sukma|Sukma","surajpur|Surajpur","surguja|Surguja"];
		}else if(s1.value == "Dadra and Nagar Haveli"){
		
            var optionArray = ["dadra and nagar haveli|Dadra and Nagar Haveli"];		
        }else if(s1.value == "Daman and Diu"){
		
            var optionArray = ["daman|Daman","diu|Diu"];		
        }else if(s1.value == "National Capital Territory of Delhi"){
		
            var optionArray = ["new delhi|New Delhi"];		
        }else if(s1.value == "Goa"){
		
            var optionArray = ["north goa|North Goa","south goa|South Goa"];		
        }else if(s1.value == "Gujarat"){
		
            var optionArray = ["ahmedabad|Ahmedabad","amreli|Amreli","anand|Anand","aravalli|Aravalli","banaskantha|Banaskantha","bharuch|Bharuch","bhavnagar|Bhavnagar","botad|Botad","chhota udaipur|Chhota Udaipur","dahod|Dahod","dang|Dang","devbhoomi dwaraka|Devbhoomi Dwaraka","gandhinagar|Gandhinagar","gir somnatah|Gir Somnatah","jamnagar|Jamnagar","junagadh|Junagadh","kutch|Kutch","kheda|Kheda","mahisagar|Mahisagar","mehsana|Mehsana","morbi|Morbi","narmada|Narmada","navsari|Navsari","panchmahal|Panchmahal","patan|Patan","porbandar|Porbandar","rajkot|Rajkot","sabarkantha|Sabarkantha","surat|Surat","surendranagar|Surendranagar","tapi|Tapi","vadodara|Vadodara","valsad|Valsad"];		
        }else if(s1.value == "Haryana"){
		
            var optionArray = ["ambala|Ambala","bhiwani|Bhiwani","charkhi dadri|Charkhi Dadri","faridabad|Faridabad","fatehabad|Fatehabad","gurugram|Gurugram","hisar|Hisar","jhajjar|Jhajjar","jind|Jind","kaithal|Kaithal","karnal|Karnal","kurukshetra|Kurukshetra","mahendragarh|Mahendragarh","nuh|Nuh","palwal|Palwal","panchkula|Panchkula","panipat|Panipat","rewari|Rewari","rohtak|Rohtak","sirsa|Sirsa","sonipat|Sonipat","yamunanagar|Yamunanagar"];		
        }else if(s1.value == "Himachal Pradesh"){
		
            var optionArray = ["bilaspur|Bilaspur","chamba|Chamba","hamirpur|Hamirpur","kangra|Kangra","kinnaur|Kinnaur","kullu|kullu","lahaul and spiti|Lahaul and Spiti","mandi|Mandi","shimla|Shimla","sirmaur|Sirmaur","solan|Solan","una|Una"];		
        }else if(s1.value == "Jammu and Kashmir"){
		
		      var optionArray = ["doba|Doda","jammu|Jammu","kathua|Kathua","kishtwar|Kishtwar","poonch|Poonch","rajouri|Rajouri","ramban|Ramban","reasi|Reasi","sambha|Sambha","udhampur|Udhampur","anantnag|Anantnag","bandipora|Bandipora","baramulla|Baramulla","budgam|Budgam","ganderbal|Ganderbal","kulgam|Kulgam","kupwara|Kupwara","pulwama|Pulwama","shopian|Shopian","srinagar|Srinagar","kargil|Kargil","leh|Leh"];
		}else if(s1.value == "Jharkhand"){

		      var optionArray = ["bokaro|Bokaro","chatra|Chatra","deoghar|Deoghar","dhanbad|Dhanbad","dumka|Dumka","east singhbhum|East Singhbhum","garhwa|Garhwa","giridih|Giridih","godda|Godda","gumla|Gumla","hazaribag|Hazaribag","jamtara|Jamtara","khunti|Khunti","koderma|Koderma","latehar|Latehar","lohardaga|Lohardaga","pakur|Pakur","palamu|Palamu","ramgarh|Ramgarh","ranchi|Ranchi","sahibganj|Sahibganj","seraikela kharsawan|Seraikela Kharsawan","simdega|Simdega","west singhbum|West Singhbhum"];
		}else if(s1.value =="Karnataka"){

		      var optionArray = ["bagalkot|Bagalkot","bengaluru urban|Bengaluru Urban","bengaluru rural|Bengaluru Rural","belagavi|Belagavi","bellary|Bellary","bidar|Bidar","vijayapura|Vijayapura","chamarajanagar|Chamarajanagar","chikballapur|Chikballapur","chikkamagaluru|Chikkamagaluru","chitradurga|chitradurga","dakshina kannada|Dakshina Kannada","davanagere|Davanagere","dharwad|Dharwad","gadag|Gadag","kalaburagi|Kalaburagi","hassan|Hassan","haveri|Haveri","kodagu|Kodagu","kolar|Kolar","koppal|Koppal","mandya|Mandya","mysuru|Mysuru","raichur|Raichur","ramanagara|Ramanagara","shivamooga|Shivamooga","tumakuru|Tumakuru","udupi|Udupi","uttara kannada|Uttara Kannada","yadgir|Yadgir"];
		}else if(s1.value == "Kerala"){
		
            var optionArray = ["alappuzha|Alappuzha","ernakulam|Ernakulam","idukki|Idukki","kannur|Kannur","kasaragod|Kasaragod","kollam|Kollam","kottayam|Kottayam","kozhikode|Kozhikode","malappuram|Malappuram","palakkad|Palakkad","pathanamthitta|Pathanamthitta","thiruvananthapuram|Thiruvananthapuram","thrissur|Thrissur","wayanad|Wayanad"];	  
		}else if(s1.value == "Lakshadweep"){
		
            var optionArray = ["lakshadweep|Lakshadweep"];
		}else if(s1.value == "Madhya Pradesh"){
		
            var optionArray = ["bhopal division|Bhopal Division","chambal divison|Chambal Division","gwalior division|Gwalior Division","indore division|Indore Division","jabalpur division|Jabalpur Division","narmadapuram divison|Narmadapuram Division","rewa division|Rewa Division","sagar division|Sagar Division","shadol division|Shahdol Division","ujjain division|Ujjain Division"];
		}else if(s1.value == "Maharashtra"){
		
            var optionArray = ["amravati division|Amravati Division","aurangabad division|Aurangabad Division","konkan division|Konkan Division","nagpur division|Nagpur Division","nashik division|Nashik Division","pune division|Pune Division"];	
		}else if(s1.value == "Manipur"){
		
            var optionArray = ["bishnupur|Bishnupur","thoubal|Thoubal","imphal east|Imphal East","imphal west|Imphal West","senapati|Senapati","ukhrul|Ukhrul","chandel|Chandel","churachandpur|Churachandpur","tamenglong|Tamenglong","jiribam|Jiribam","kangpokpi|Kangpokpi","kakching|Kakching","tengnoupal|Tengnoupal","kamjong|Kamjong","noney|Noney","pherzawl|Pherzawl"];		
        }else if(s1.value == "Meghalaya"){
		
            var optionArray = ["jaintia hills division|Jaintia Hills Division","khasi hills division|Khasi Hills Division","garo hill division|Garo Hills Division"];		
        }else if(s1.value == "Mizoram"){
		
            var optionArray = ["aizawl|Aizawl","kolasib|Kolasib","lawgtlai|Lawngtlai","lunglei|Lunglei","mamit|Mamit","siaha|Siaha","serchhip|Serchhip","champhai|Champhai"];
		}else if(s1.value == "Nagaland"){
		
            var optionArray = ["dimapur|Dimapur","kiphire|Kiphire","kohima|Kohima","longleng|longleng","mokokchung|mokokchung","mon|Mon","peren|Peren","phek|Phek","tuensang|Tuensang","wokha|Wokha","zunheboto|Zunheboto"];
		}else if(s1.value == "Odisha"){
		
            var optionArray = ["angul|Angul","boudh|Boudh","balangir|Balangir","bargarh|Bargarh","balasore|Balasore","bhadrak|Bhadrak","cuttack|Cuttack","debagarh|Debagarh","dhenkanal|Dhenkanal","ganjam|Ganjam","gajapati|Gajapati","jharsuguda|Jharsuguda","jaipur|Jajpur","jagatsinghapur|Jagatsinghapur","khordha|Khordha","kendujhar|Kendujhar","kalahandi|Kalahandi","kandhamal|Kandhamal","korapur|koraput","kendrapara|Kendrapara","malkangiri|Malkangiri","mayurbhanj|Mayurbhanj","nabarangpur|Nabarangpur","nuapada|Nuapada","nayagarh|Nayagarh","puri|Puri","rayagada|Rayagada","sambalpur|Sambalpur","subarnapur|Subarnapur","sundargarh|Sundargarh"];
		}else if(s1.value == "Puducherry"){
		
            var optionArray = ["karaikal|Karaikal","mahe|Mahe","pondicherry|Pondicherry","yanam|Yanam"];
		}else if(s1.value == "Punjab"){
		
            var optionArray = ["amritsar|Amritsar","barnala|Barnala","bathinda|Bathinda","faridkot|Faridkot","fategarh sahib|Fategarh Sahib","firozpur|Firozpur","fazilka|Fazilka","gurdaspur|Gurdaspur","hoshiarpur|Hoshiarpur","jalandhar|Jalandhar","kapurthala|Kapurthala","ludhiana|Ludhiana","mansa|Mansa","moga|Moga","sri muktsar sahib|Sri Muktsar Sahib","pathankot|Pathankot","patiala|Patiala","rupnagar|Rupnagar","sahbzada ajit singh nagar|Sahibzada Ajit Singh Nagar","sangrur|Sangrur","shahid bhagat singh nagar|Shahid Bhagat Singh Nagar","tarn taran|Tarn Taran"];
		}else if(s1.value == "Rajasthan"){
		
            var optionArray = ["ajmer|Ajmer","alwar|Alwar","banswara|Banswara","baran|Baran","barmer|Barmer","bharatpur|Bharatpur","bhilwara|Bhilwara","bikaner|Bikaner","bundi|Bundi","chittogarh|Chittogarh","churu|Churu","dausa|Dausa","dholpur|Dholpur","dungarpur|Dungarpur","hunamangarh|Hanumangarh","jaipur|Jaipur","jaisalmer|Jaisalmer","jalor|Jalor","jhalawar|Jhalawar","jhunjhunu|Jhunjhunu","jodhpur|Jodhpur","karauli|Karauli","kota|Kota","nagur|Nagur","pali|Pali","pratapgarh|Pratapgarh","rajsamand|Rajsamand","sawai madhopur|Sawai Madhopur","sikar|Sikar","sirohi|Sirohi","sri ganganagar|Sri Ganganagar","tonk|Tonk","udaipur|Udaipur"];
		}else if(s1.value == "Sikkim"){
		
            var optionArray = ["east sikkim|East Sikkim","north sikkim|North Sikkim","south sikkim|South Sikkim","west sikkim|West Sikkim"];
		}else if(s1.value == "Tamil Nadu"){
		
            var optionArray = ["ariyalur|Ariyalur","chennai|Chennai","coimbatore|Coimbatore","cuddalore|Cuddalore","dharmapuri|Dharmapuri","dindigul|Dindigul","erode|Erode","kanchipuram|Kanchipuram","kanniyakumri|Kanniyakumari","karur|Karur","krishnagiri|Krishnagiri","madurai|Madurai","nagapattinam|Nagapattinam","namakkal|Namakkal","the niligiris|The Niligiris","perambalur|Perambalur","puddukkottai|Puddukkottai","ramanathapuram|Ramanathapuram","salem|Salem","sivaganga|Sivaganga","thanjavur|Thanjavur","thoothukudi|Thoothukudi","tiruchirappalli|Tiruchirappalli","tirunelveli|Tirunelveli","tiruppur|Tiruppur","tiruvallur|Tiruvallur","tirruvanamalai|Tirruvanamalai","tiruvarur|Tiruvarur","vellore|Vellore","viluppuram|Viluppuram","virudhunagar|Virudhunagar"];
        }else if(s1.value == "Telangana"){
		
            var optionArray = ["adilabad|Adilabad","bhadradri kothagudem|Bhadradri Kothagudem","hyderabad|Hyderabad","jagityala|Jagital","jangaon|Jangaon","jayashankar bhupalapally|Jayashankar Bhupalapally","jogulamba gadwal|Jogulamba Gadwal","kamareddy|Kamareddy","karimnagar|Karimnagar","khammam|Khammam","kumarambheem asifabad|Kumarambheem Asifabad","mahabubabad|Mahabubabad","mahbubnagar|Mahbubnagar","mancherial|Mancherial","medak|Medak","medchal–malkajgiri|Medchal–Malkajgiri","nagarkurnool|Nagarkurnool","nalgonda|Nalgonda","nirmal|Nirmal","nizamabad|Nizamabad","peddapalli|Peddapalli","rajanna sircilla|Rajanna Sircilla","ranga reddy|Ranga Reddy","sangareddy|Sangareddy","siddipet|Siddipet","suryapet|Suryapet","vikarabad|Vikarabad","wanaparthy|Wanaparthy","warangal rural|Warangal Rural","warangal urban|Warangal Urban","yadadri bhuvanagiri|Yadadri Bhuvanagiri"];
		}else if(s1.value == "Tripura"){
		
            var optionArray = ["dhalai|Dhalai","north tripura|North Tripura","south tripura|South Tripura","west tripura|West Tripura"];
		}else if(s1.value == "Uttar Pradesh"){
		
            var optionArray = ["agra division|Agra Division","aligarh division|Aligarh Division","allahabad|Allahabad Division","bareilly division|Bareilly Division","basti division|Basti division","chitrakoot division|Chitrakoot Division","devipatan|Devipatan Division","faizabad division|Faizabad Division","gorakhpur division|Gorakhpur Division","jhansi division|Jhansi Division","kanpur division|Kanpur Division","lucknow division|Lucknow Division","meerut division|Meerut Division","mirzapur division|Mirzapur Division","moradabad division|Moradabad Division","varanasi division|Varanasi Division"];
		}else if(s1.value == "Uttarakhand"){
		
            var optionArray = ["almora|Almora","bageshwar|Bageshwar","chamoli|Chamoli","champawat|Champawat","dehradun|Dehradun","haridwar|Haridwar","nainital|Nainital","pauri garhwal|Pauri Garhwal","pithoragarh|pithoragarh","rudraprayag|Rudraprayag","tehri garhwal|Tehri Garhwal","udham singh nagar|Udham Singh Nagar","uttarkashi|Uttarkashi"];
		}else if(s1.value == "West Bengal"){
		
            var optionArray = ["alipurduar|Alipurduar","bankura|Bankura","bardhaman|Bardhaman","birbhum|Birbhum","cooch Behar|Cooch Behar","dakshin dinajpur|Dakshin Dinajpur","darjeeling|Darjeeling","hooghly|Hooghly","howrah|Howrah","jalpaiguri|Jalpaiguri","kolkata|Kolkata","maldah|Maldah","murshidabad|Murshidabad","nadia|Nadia","north 24 parganas|North 24 Parganas","paschim medinipur|Paschim Medinipur","purba medinipur|Purba Medinipur","purulia|Purulia","south 24 parganas|South 24 Parganas","uttar dinajpur|Uttar Dinajpur"];
		}	
		for(var option in optionArray)
		{
		    var pair = optionArray[option].split("|");
            var newOption = document.createElement("option");
             newOption.value = pair[0];
             newOption.innerHTML = pair[1];
             s2.options.add(newOption);			 
		
		}
		}