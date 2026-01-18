/***********************
 * DATA (YOU EDIT THIS)
 ***********************/



const grade6Words = [  
	{ word: "accomplished", definition: "highly skilled or successful", sentence: "She is an accomplished singer who performs on stage.", difficulty: "normal" },
	{ word: "accordion", definition: "a musical instrument played by squeezing and pulling", sentence: "He played a cheerful tune on his accordion.", difficulty: "normal" },
	{ word: "accused", definition: "blamed for doing something wrong", sentence: "She was accused of breaking the vase.", difficulty: "normal" },
	{ word: "acquire", definition: "to get or obtain something", sentence: "He hopes to acquire a new skill this year.", difficulty: "normal" },
	{ word: "adjacent", definition: "next to or beside something", sentence: "The playground is adjacent to the school.", difficulty: "normal" },
	{ word: "advertisement", definition: "a message that promotes something", sentence: "The advertisement made the toy look exciting.", difficulty: "normal" },
	{ word: "aghast", definition: "shocked or horrified", sentence: "She was aghast when she saw the mess.", difficulty: "normal" },
	{ word: "airborne", definition: "in the air or flying", sentence: "The kite became airborne as the wind picked up.", difficulty: "normal" },
	{ word: "amazement", definition: "great surprise or wonder", sentence: "He watched in amazement as the fireworks exploded.", difficulty: "normal" },
	{ word: "ambitious", definition: "having strong goals", sentence: "She is ambitious and wants to be a doctor.", difficulty: "normal" },
	{ word: "amused", definition: "entertained or made to laugh", sentence: "The puppy looked amused by the bouncing ball.", difficulty: "normal" },
	{ word: "amusement", definition: "enjoyment or fun", sentence: "The park had many rides for everyone’s amusement.", difficulty: "normal" },
	{ word: "anthropologist", definition: "a scientist who studies humans and cultures", sentence: "The anthropologist traveled to study ancient tribes.", difficulty: "normal" },
	{ word: "apologizing", definition: "saying sorry", sentence: "He kept apologizing for being late.", difficulty: "normal" },
	{ word: "appetizer", definition: "a small dish before the main meal", sentence: "We shared nachos as an appetizer.", difficulty: "normal" },
	{ word: "applaud", definition: "to clap to show approval", sentence: "The audience began to applaud loudly.", difficulty: "normal" },
	{ word: "appliances", definition: "machines used at home", sentence: "The new appliances made cooking easier.", difficulty: "normal" },
	{ word: "appreciate", definition: "to value or be thankful for", sentence: "I appreciate your help with the project.", difficulty: "normal" },
	{ word: "apprentice", definition: "someone learning a trade", sentence: "The apprentice watched the chef carefully.", difficulty: "normal" },
	{ word: "aquamarines", definition: "blue-green gemstones", sentence: "Her bracelet sparkled with aquamarines.", difficulty: "normal" },
	{ word: "archaeologist", definition: "a scientist who studies ancient objects", sentence: "The archaeologist discovered an old temple.", difficulty: "normal" },
	{ word: "arrangement", definition: "the way things are organized", sentence: "The flower arrangement looked beautiful.", difficulty: "normal" },
	{ word: "associate", definition: "to connect one thing with another", sentence: "Many people associate winter with snow.", difficulty: "normal" },
	{ word: "atmosphere", definition: "the air around Earth or the mood of a place", sentence: "The café had a warm atmosphere.", difficulty: "normal" },
	{ word: "attachment", definition: "something connected to something else", sentence: "He added the photo as an email attachment.", difficulty: "normal" },
	{ word: "attic", definition: "the space or room just below the roof of a house", sentence: "They stored old boxes in the attic.", difficulty: "normal" },
	{ word: "autopsy", definition: "a medical examination of a body to find the cause of death", sentence: "The doctor performed an autopsy to learn what happened.", difficulty: "normal" },
	{ word: "awesome", definition: "extremely good or impressive", sentence: "The fireworks show was absolutely awesome.", difficulty: "normal" },
	{ word: "background", definition: "the area behind something", sentence: "The mountains looked beautiful in the background.", difficulty: "normal" },
	{ word: "banquets", definition: "large formal meals", sentence: "The hotel hosted two banquets this weekend.", difficulty: "normal" },
	{ word: "barefoot", definition: "without shoes", sentence: "She walked barefoot on the soft grass.", difficulty: "normal" },
	{ word: "beanie", definition: "a small knit cap", sentence: "He wore a beanie to keep warm.", difficulty: "normal" },
	{ word: "behavior", definition: "the way someone acts", sentence: "The teacher praised his good behavior.", difficulty: "normal" },
	{ word: "Benedictine", definition: "relating to the Benedictine religious order", sentence: "The monks followed Benedictine traditions.", difficulty: "normal" },
	{ word: "bind", definition: "to tie or fasten", sentence: "They used rope to bind the logs together.", difficulty: "normal" },
	{ word: "binoculars", definition: "a tool for seeing distant things", sentence: "He used binoculars to watch the birds.", difficulty: "normal" },
	{ word: "bitterness", definition: "a strong unpleasant taste or feeling", sentence: "The medicine had a slight bitterness.", difficulty: "normal" },
	{ word: "boardwalk", definition: "a wooden walkway near a beach", sentence: "We strolled along the boardwalk at sunset.", difficulty: "normal" },
	{ word: "botanist", definition: "a scientist who studies plants", sentence: "The botanist examined the rare flower.", difficulty: "normal" },
	{ word: "breakdown", definition: "a failure or collapse", sentence: "The car had a breakdown on the highway.", difficulty: "normal" },
	{ word: "breathless", definition: "unable to breathe easily", sentence: "She was breathless after running fast.", difficulty: "normal" },
	{ word: "brokenhearted", definition: "very sad or upset", sentence: "He felt brokenhearted after the bad news.", difficulty: "normal" },
	{ word: "brook", definition: "a small stream", sentence: "The brook flowed gently through the forest.", difficulty: "normal" },
	{ word: "bruise", definition: "a dark mark from an injury", sentence: "She got a bruise after bumping her leg.", difficulty: "normal" },
	{ word: "budget", definition: "a plan for spending money", sentence: "They made a budget for the trip.", difficulty: "normal" },
	{ word: "buffalo", definition: "a large wild animal", sentence: "The buffalo grazed in the field.", difficulty: "normal" },
	{ word: "bulldozer", definition: "a large machine for pushing earth", sentence: "The bulldozer cleared the construction site.", difficulty: "normal" },
	{ word: "bungalow", definition: "a small one-story house", sentence: "They stayed in a cozy bungalow near the beach.", difficulty: "normal" },
	{ word: "buzzes", definition: "makes a humming sound", sentence: "The bee buzzes around the flowers.", difficulty: "normal" },
	{ word: "calculation", definition: "a math process to find an answer", sentence: "His calculation was correct.", difficulty: "normal" },
	{ word: "campfire", definition: "an outdoor fire for warmth or cooking", sentence: "We roasted marshmallows over the campfire.", difficulty: "normal" },
	{ word: "canopy", definition: "a covering that hangs over something", sentence: "The canopy protected us from the sun.", difficulty: "normal" },
	{ word: "cardigan", definition: "a knitted sweater that opens in front", sentence: "She wore a warm cardigan to school.", difficulty: "normal" },
	{ word: "carousel", definition: "a spinning ride with animals to sit on", sentence: "The children loved the carousel at the fair.", difficulty: "normal" },
	{ word: "cephalothorax", definition: "the fused head and body of some animals", sentence: "A spider’s cephalothorax holds its eyes and legs.", difficulty: "normal" },
	{ word: "cerebellum", definition: "the part of the brain that controls movement", sentence: "The cerebellum helps you stay balanced.", difficulty: "normal" },
	{ word: "ceremonial", definition: "related to a ceremony", sentence: "They wore ceremonial clothing for the event.", difficulty: "normal" },
	{ word: "chandelier", definition: "a fancy hanging light", sentence: "The chandelier sparkled above the table.", difficulty: "normal" },
	{ word: "circuit", definition: "a path for electricity", sentence: "The light turned on when the circuit was complete.", difficulty: "normal" },
	{ word: "clothing", definition: "items worn on the body", sentence: "She folded her clothing neatly.", difficulty: "normal" },
	{ word: "clucking", definition: "the sound a chicken makes", sentence: "The hens were clucking in the yard.", difficulty: "normal" },
	{ word: "clumsy", definition: "awkward or not graceful", sentence: "He felt clumsy when he tripped.", difficulty: "normal" },
	{ word: "cobblestone", definition: "a rounded stone used for roads", sentence: "The old street was made of cobblestone.", difficulty: "normal" },
	{ word: "cochlea", definition: "a spiral part of the inner ear", sentence: "The cochlea helps you hear sounds.", difficulty: "normal" },
	{ word: "cockatiel", definition: "a small parrot with a crest", sentence: "Their cockatiel whistled happily.", difficulty: "normal" },
	{ word: "cocoa", definition: "a powder used to make chocolate drinks", sentence: "She made warm cocoa on a cold day.", difficulty: "normal" },
	{ word: "collection", definition: "a group of gathered items", sentence: "He showed me his coin collection.", difficulty: "normal" },
	{ word: "comfortable", definition: "feeling relaxed", sentence: "The chair was very comfortable.", difficulty: "normal" },
	{ word: "committed", definition: "dedicated or loyal", sentence: "She is committed to finishing her project.", difficulty: "normal" },
	{ word: "committee", definition: "a group that makes decisions", sentence: "The committee voted on the plan.", difficulty: "normal" },
	{ word: "conductor", definition: "someone who leads a musical group", sentence: "The conductor raised his baton.", difficulty: "normal" },
	{ word: "core", definition: "the central or most important part", sentence: "The core of the apple was left over.", difficulty: "normal" },
	{ word: "cotton", definition: "a soft white fiber used for fabric", sentence: "Her shirt was made of cotton.", difficulty: "normal" },
	{ word: "cougar", definition: "a large wild cat", sentence: "The cougar moved silently through the trees.", difficulty: "normal" },
	{ word: "course", definition: "a path or class of study", sentence: "He took a course in biology.", difficulty: "normal" },
	{ word: "craftsman", definition: "a skilled worker", sentence: "The craftsman carved the wood carefully.", difficulty: "normal" },
	{ word: "creepy", definition: "strange and scary", sentence: "The old house looked creepy at night.", difficulty: "normal" },
	{ word: "crow", definition: "a black bird known for its cawing", sentence: "A crow landed on the fence.", difficulty: "normal" },
	{ word: "cruise", definition: "a trip on a large ship", sentence: "They went on a cruise to the islands.", difficulty: "normal" },
	{ word: "crust", definition: "the outer layer of something", sentence: "The pizza crust was crispy.", difficulty: "normal" },
	{ word: "cuddly", definition: "soft and pleasant to hug", sentence: "The stuffed bear was very cuddly.", difficulty: "normal" },
	{ word: "cunning", definition: "clever in a tricky way", sentence: "The fox was cunning and quick.", difficulty: "normal" },
	{ word: "curled", definition: "formed into a curved shape", sentence: "The cat curled up on the couch.", difficulty: "normal" },
	{ word: "current", definition: "happening now or a flow of water", sentence: "The river’s current was strong.", difficulty: "normal" },
	{ word: "cutaneous", definition: "related to the skin", sentence: "A cutaneous rash can be itchy.", difficulty: "normal" },
	{ word: "cymbals", definition: "metal instruments that crash together", sentence: "The cymbals made a loud sound.", difficulty: "normal" },
	{ word: "czar", definition: "a former Russian ruler", sentence: "The czar lived in a grand palace.", difficulty: "normal" },
	{ word: "decadence", definition: "excessive luxury or self-indulgence", sentence: "The rich dessert felt like pure decadence.", difficulty: "normal" },
	{ word: "deforestation", definition: "cutting down many trees", sentence: "Deforestation harms animal habitats.", difficulty: "normal" },
	{ word: "delightful", definition: "very pleasant or enjoyable", sentence: "The cookies were absolutely delightful.", difficulty: "normal" },
	{ word: "deliver", definition: "to bring or hand over something", sentence: "The driver will deliver the package today.", difficulty: "normal" },
	{ word: "denominator", definition: "the bottom number in a fraction", sentence: "The denominator shows total parts.", difficulty: "normal" },
	{ word: "diaphragm", definition: "a muscle that helps you breathe", sentence: "Your diaphragm moves when you inhale.", difficulty: "normal" },
	{ word: "disgusting", definition: "very unpleasant", sentence: "The smell was absolutely disgusting.", difficulty: "normal" },
	{ word: "draft", definition: "a rough version of writing", sentence: "She wrote a draft of her essay.", difficulty: "normal" },
	{ word: "dynamite", definition: "an explosive material", sentence: "The workers used dynamite to break the rock.", difficulty: "normal" },
	{ word: "earmuffs", definition: "warm coverings for the ears", sentence: "She wore earmuffs in the snow.", difficulty: "normal" },
	{ word: "echo", definition: "a repeated sound", sentence: "His shout made an echo in the cave.", difficulty: "normal" },
	{ word: "eclipse", definition: "when one object blocks another in space", sentence: "We watched the solar eclipse safely.", difficulty: "normal" },
	{ word: "electricity", definition: "energy that powers devices", sentence: "Electricity keeps the lights on.", difficulty: "normal" },
	{ word: "electron", definition: "a tiny particle with a negative charge", sentence: "An electron moves around the atom.", difficulty: "normal" },
	{ word: "enamel", definition: "a hard coating on teeth", sentence: "Brushing protects your tooth enamel.", difficulty: "normal" },
	{ word: "enclosure", definition: "a space that is closed in", sentence: "The rabbits stayed in their enclosure.", difficulty: "normal" },
	{ word: "encouraged", definition: "given support or confidence", sentence: "Her coach encouraged her to try again.", difficulty: "normal" },
	{ word: "enlighten", definition: "to teach or give knowledge", sentence: "The book helped enlighten its readers.", difficulty: "normal" },
	{ word: "enthusiastic", definition: "excited and eager", sentence: "He was enthusiastic about the trip.", difficulty: "normal" },
	{ word: "equivalent", definition: "equal in value or meaning", sentence: "Two quarters are equivalent to fifty cents.", difficulty: "normal" },
	{ word: "erosion", definition: "wearing away of land", sentence: "Erosion shaped the canyon.", difficulty: "normal" },
	{ word: "excavate", definition: "to dig up something buried", sentence: "They excavate fossils carefully.", difficulty: "normal" },
	{ word: "exchanging", definition: "giving one thing for another", sentence: "They were exchanging gifts.", difficulty: "normal" },
	{ word: "exercise", definition: "physical activity", sentence: "She does exercise every morning.", difficulty: "normal" },
	{ word: "exhaustion", definition: "extreme tiredness", sentence: "He collapsed from exhaustion.", difficulty: "normal" },
	{ word: "exploitation", definition: "unfair use of something or someone", sentence: "The movie exposed exploitation of workers.", difficulty: "normal" },
	{ word: "extinction", definition: "when a species dies out", sentence: "Dinosaurs faced extinction long ago.", difficulty: "normal" },
	{ word: "fertilization", definition: "joining of egg and sperm", sentence: "Fertilization begins new life.", difficulty: "normal" },
	{ word: "fictitious", definition: "not real; made up", sentence: "The story was about a fictitious town.", difficulty: "normal" },
	{ word: "fisherman", definition: "someone who catches fish", sentence: "The fisherman cast his net.", difficulty: "normal" },
	{ word: "foolish", definition: "lacking good sense", sentence: "It was foolish to run in the rain.", difficulty: "normal" },
	{ word: "foreground", definition: "the front part of a picture", sentence: "The tree stood in the foreground.", difficulty: "normal" },
	{ word: "forgotten", definition: "not remembered", sentence: "He had forgotten his keys.", difficulty: "normal" },
	{ word: "frightening", definition: "scary", sentence: "The loud thunder was frightening.", difficulty: "normal" },
	{ word: "frisbee", definition: "a flying plastic disc", sentence: "They played frisbee at the park.", difficulty: "normal" },
	{ word: "frustration", definition: "feeling upset from difficulty", sentence: "She sighed in frustration.", difficulty: "normal" },
	{ word: "fundraiser", definition: "an event to raise money", sentence: "The school held a fundraiser.", difficulty: "normal" },
	{ word: "gender", definition: "being male or female", sentence: "The form asked for gender.", difficulty: "normal" },
	{ word: "gentleman", definition: "a polite man", sentence: "He acted like a true gentleman.", difficulty: "normal" },
	{ word: "geographer", definition: "a scientist who studies Earth", sentence: "The geographer made a map.", difficulty: "normal" },
	{ word: "geothermal", definition: "heat from inside Earth", sentence: "Geothermal energy warms some homes.", difficulty: "normal" },
	{ word: "geyser", definition: "a hot spring that shoots water", sentence: "The geyser erupted suddenly.", difficulty: "normal" },
	{ word: "gondola", definition: "a long boat used in Venice", sentence: "They rode a gondola down the canal.", difficulty: "normal" },
	{ word: "gondolier", definition: "the person who rows a gondola", sentence: "The gondolier sang as he rowed.", difficulty: "normal" },
	{ word: "goose", definition: "a large water bird", sentence: "The goose honked loudly.", difficulty: "normal" },
	{ word: "greatness", definition: "the quality of being excellent", sentence: "She dreamed of achieving greatness.", difficulty: "normal" },
	{ word: "groan", definition: "a low sound of pain", sentence: "He let out a groan after falling.", difficulty: "normal" },
	{ word: "grotesque", definition: "very ugly or distorted", sentence: "The statue looked strangely grotesque.", difficulty: "normal" },
	{ word: "grown", definition: "fully developed", sentence: "The grown cat was much bigger.", difficulty: "normal" },
	{ word: "grumble", definition: "to complain quietly", sentence: "He began to grumble about the chores.", difficulty: "normal" },
	{ word: "hammock", definition: "a hanging bed made of fabric or rope", sentence: "He relaxed in the hammock under the trees.", difficulty: "normal" },
	{ word: "harmonica", definition: "a small musical instrument played by blowing air", sentence: "She played a tune on her harmonica.", difficulty: "normal" },
	{ word: "Hawaii", definition: "a U.S. state made of islands", sentence: "They traveled to Hawaii for vacation.", difficulty: "normal" },
	{ word: "headgear", definition: "something worn on the head", sentence: "The cyclist wore protective headgear.", difficulty: "normal" },
	{ word: "heaven", definition: "a place of perfect happiness", sentence: "The sunset looked like a piece of heaven.", difficulty: "normal" },
	{ word: "heirloom", definition: "a valuable family object passed down", sentence: "The ring was a precious heirloom.", difficulty: "normal" },
	{ word: "herbivore", definition: "an animal that eats plants", sentence: "A cow is a herbivore.", difficulty: "normal" },
	{ word: "heritage", definition: "traditions passed down through generations", sentence: "They celebrated their cultural heritage.", difficulty: "normal" },
	{ word: "hiccups", definition: "sudden, repeated sounds from the throat", sentence: "He got hiccups after drinking too fast.", difficulty: "normal" },
	{ word: "highway", definition: "a major public road", sentence: "They drove down the highway for hours.", difficulty: "normal" },
	{ word: "hikers", definition: "people who walk long distances outdoors", sentence: "The hikers reached the mountain peak.", difficulty: "normal" },
	{ word: "hisses", definition: "makes a sharp 'sss' sound", sentence: "The snake hisses when it feels threatened.", difficulty: "normal" },
	{ word: "Holland", definition: "another name for part of the Netherlands", sentence: "They visited tulip fields in Holland.", difficulty: "normal" },
	{ word: "hollow", definition: "empty on the inside", sentence: "The tree trunk was hollow.", difficulty: "normal" },
	{ word: "hologram", definition: "a 3D image created with light", sentence: "The concert used a hologram of the singer.", difficulty: "normal" },
	{ word: "humongous", definition: "extremely large", sentence: "The sandwich was humongous.", difficulty: "normal" },
	{ word: "humus", definition: "rich soil made from decayed plants", sentence: "The garden grew well in humus.", difficulty: "normal" },
	{ word: "hydrant", definition: "a water pipe used by firefighters", sentence: "The dog sat next to the fire hydrant.", difficulty: "normal" },
	{ word: "icicle", definition: "a hanging piece of frozen water", sentence: "An icicle formed on the roof.", difficulty: "normal" },
	{ word: "igneous", definition: "formed from cooled lava or magma", sentence: "Granite is an igneous rock.", difficulty: "normal" },
	{ word: "illegally", definition: "against the law", sentence: "They parked illegally in a no‑parking zone.", difficulty: "normal" },
	{ word: "illusion", definition: "something that tricks the eyes or mind", sentence: "The magic trick was just an illusion.", difficulty: "normal" },
	{ word: "immediately", definition: "right away", sentence: "She answered the phone immediately.", difficulty: "normal" },
	{ word: "immigration", definition: "moving to a new country to live", sentence: "Immigration has shaped many cultures.", difficulty: "normal" },
	{ word: "improvise", definition: "to make something up on the spot", sentence: "He had to improvise when he forgot his lines.", difficulty: "normal" },
	{ word: "infantry", definition: "soldiers who fight on foot", sentence: "The infantry marched across the field.", difficulty: "normal" },
	{ word: "innocent", definition: "not guilty of wrongdoing", sentence: "The jury found him innocent.", difficulty: "normal" },
	{ word: "insulator", definition: "a material that blocks heat or electricity", sentence: "Rubber is an insulator.", difficulty: "normal" },
	{ word: "interesting", definition: "holding attention", sentence: "The book was very interesting.", difficulty: "normal" },
	{ word: "investigate", definition: "to look into something carefully", sentence: "The detective will investigate the case.", difficulty: "normal" },
	{ word: "Jerusalem", definition: "a historic city in the Middle East", sentence: "Many people visit Jerusalem each year.", difficulty: "normal" },
	{ word: "kinetic", definition: "related to motion", sentence: "Kinetic energy increases when you run.", difficulty: "normal" },
	{ word: "learner", definition: "someone who is learning", sentence: "She is a fast learner.", difficulty: "normal" },
	{ word: "lifeguard", definition: "a person who watches swimmers for safety", sentence: "The lifeguard blew his whistle.", difficulty: "normal" },
	{ word: "loose", definition: "not tight", sentence: "The screw was loose.", difficulty: "normal" },
	{ word: "lose", definition: "to misplace or not win", sentence: "Don’t lose your keys again.", difficulty: "normal" },
	{ word: "magnetism", definition: "the force magnets create", sentence: "Magnetism pulls metal objects.", difficulty: "normal" },
	{ word: "magnificent", definition: "very beautiful or impressive", sentence: "The view from the mountain was magnificent.", difficulty: "normal" },
	{ word: "maroon", definition: "a dark reddish‑brown color", sentence: "She wore a maroon sweater.", difficulty: "normal" },
	{ word: "mathematician", definition: "a person skilled in math", sentence: "The mathematician solved the problem quickly.", difficulty: "normal" },
	{ word: "measurement", definition: "the size or amount of something", sentence: "He took the measurement of the table.", difficulty: "normal" },
	{ word: "mediocre", definition: "average or not very good", sentence: "The movie was mediocre.", difficulty: "normal" },
	{ word: "meows", definition: "the sounds a cat makes", sentence: "The kitten meows for food.", difficulty: "normal" },
	{ word: "metamorphic", definition: "changed by heat and pressure", sentence: "Marble is a metamorphic rock.", difficulty: "normal" },
	{ word: "Michelangelo", definition: "a famous Italian artist", sentence: "Michelangelo painted the Sistine Chapel.", difficulty: "normal" },
	{ word: "mighty", definition: "strong and powerful", sentence: "The mighty river carved the canyon.", difficulty: "normal" },
	{ word: "moan", definition: "a low sound of pain or sadness", sentence: "He let out a moan after falling.", difficulty: "normal" },
	{ word: "monarchy", definition: "a government ruled by a king or queen", sentence: "The country was once a monarchy.", difficulty: "normal" },
	{ word: "neighborhood", definition: "a local area where people live", sentence: "Kids played in the neighborhood.", difficulty: "normal" },
	{ word: "nineteenth", definition: "the number 19th", sentence: "She finished in nineteenth place.", difficulty: "normal" },
	{ word: "noble", definition: "having high moral qualities", sentence: "He made a noble decision.", difficulty: "normal" },
	{ word: "noticeably", definition: "easy to see or observe", sentence: "She was noticeably taller this year.", difficulty: "normal" },
	{ word: "nourishment", definition: "food that helps you grow", sentence: "Fruit provides good nourishment.", difficulty: "normal" },
	{ word: "nugget", definition: "a small lump or piece", sentence: "He found a gold nugget.", difficulty: "normal" },
	{ word: "nuisance", definition: "something annoying", sentence: "The buzzing fly was a nuisance.", difficulty: "normal" },
	{ word: "oddly", definition: "strangely", sentence: "He was oddly quiet today.", difficulty: "normal" },
	{ word: "opossum", definition: "a small nocturnal animal", sentence: "The opossum hid in the bushes.", difficulty: "normal" },
	{ word: "opportunity", definition: "a chance to do something", sentence: "This job is a great opportunity.", difficulty: "normal" },
	{ word: "orchestra", definition: "a large group of musicians", sentence: "The orchestra played beautifully.", difficulty: "normal" },
	{ word: "ornaments", definition: "decorative objects", sentence: "They hung ornaments on the tree.", difficulty: "normal" },
	{ word: "ostrich", definition: "a large flightless bird", sentence: "The ostrich ran quickly across the field.", difficulty: "normal" },
	{ word: "overflow", definition: "to spill over the top", sentence: "The sink began to overflow.", difficulty: "normal" },
	{ word: "passengers", definition: "people traveling in a vehicle", sentence: "The passengers boarded the plane.", difficulty: "normal" },
	{ word: "pastries", definition: "sweet baked goods", sentence: "The bakery sold fresh pastries.", difficulty: "normal" },
	{ word: "permission", definition: "approval to do something", sentence: "He asked for permission to leave early.", difficulty: "normal" },
	{ word: "pizzeria", definition: "a restaurant that sells pizza", sentence: "They ate lunch at the pizzeria.", difficulty: "normal" },
	{ word: "poisonous", definition: "harmful or deadly if eaten", sentence: "Some mushrooms are poisonous.", difficulty: "normal" },
	{ word: "Polish", definition: "relating to Poland or its language", sentence: "She learned to speak Polish.", difficulty: "normal" },
	{ word: "pouch", definition: "a small bag or pocket", sentence: "The kangaroo carried its baby in a pouch.", difficulty: "normal" },
	{ word: "predicament", definition: "a difficult situation", sentence: "He was stuck in a tough predicament.", difficulty: "normal" },
	{ word: "pregnancy", definition: "the state of carrying a baby", sentence: "She announced her pregnancy.", difficulty: "normal" },
	{ word: "prehistoric", definition: "from before written history", sentence: "They found prehistoric cave drawings.", difficulty: "normal" },
	{ word: "prior", definition: "earlier or before", sentence: "He had no prior experience.", difficulty: "normal" },
	{ word: "prospective", definition: "expected or likely in the future", sentence: "They met with prospective buyers.", difficulty: "normal" },
	{ word: "proton", definition: "a positively charged particle", sentence: "A proton is found in the nucleus.", difficulty: "normal" },
	{ word: "provide", definition: "to give something needed", sentence: "They provide food for the shelter.", difficulty: "normal" },
	{ word: "quarry", definition: "a place where stone is taken from the ground", sentence: "The workers dug limestone from the quarry.", difficulty: "normal" },
	{ word: "radiation", definition: "energy that travels in waves", sentence: "The sun gives off radiation.", difficulty: "normal" },
	{ word: "radishes", definition: "small red root vegetables", sentence: "She sliced radishes for the salad.", difficulty: "normal" },
	{ word: "rafting", definition: "traveling on a river in a raft", sentence: "They went rafting down the rapids.", difficulty: "normal" },
	{ word: "ranger", definition: "a person who protects a park or forest", sentence: "The ranger guided the hikers.", difficulty: "normal" },
	{ word: "rapids", definition: "fast‑moving water in a river", sentence: "The rapids were exciting to watch.", difficulty: "normal" },
	{ word: "scholarship", definition: "money given to help pay for school", sentence: "She earned a scholarship for college.", difficulty: "normal" },
	{ word: "scratched", definition: "marked with something sharp", sentence: "The cat scratched the couch.", difficulty: "normal" },
	{ word: "scribbled", definition: "wrote quickly and messily", sentence: "He scribbled a note on the paper.", difficulty: "normal" },
	{ word: "scuba diving", definition: "swimming underwater with special gear", sentence: "They went scuba diving near the reef.", difficulty: "normal" },
	{ word: "sculptor", definition: "an artist who makes sculptures", sentence: "The sculptor shaped the clay carefully.", difficulty: "normal" },
	{ word: "sculpture", definition: "a piece of art made by carving or shaping", sentence: "The museum displayed a marble sculpture.", difficulty: "normal" },
	{ word: "sketches", definition: "quick drawings", sentence: "She made sketches of the landscape.", difficulty: "normal" },
	{ word: "sleeker", definition: "smoother and more stylish", sentence: "The new car design looks sleeker.", difficulty: "normal" },
	{ word: "smartphone", definition: "a mobile phone with advanced features", sentence: "He checked the map on his smartphone.", difficulty: "normal" },
	{ word: "spectrum", definition: "a range of colors or ideas", sentence: "The rainbow showed a full spectrum of colors.", difficulty: "normal" },
	{ word: "spherical", definition: "shaped like a ball", sentence: "The planet is nearly spherical.", difficulty: "normal" },
	{ word: "squawk", definition: "a loud, harsh bird sound", sentence: "The parrot let out a squawk.", difficulty: "normal" },
	{ word: "startled", definition: "surprised or shocked suddenly", sentence: "The loud noise startled him.", difficulty: "normal" },
	{ word: "stirrup", definition: "a foot support on a saddle", sentence: "She placed her foot in the stirrup.", difficulty: "normal" },
	{ word: "stoop", definition: "to bend forward", sentence: "He had to stoop to pick up the coin.", difficulty: "normal" },
	{ word: "struck", definition: "hit or impacted", sentence: "The ball struck the wall.", difficulty: "normal" },
	{ word: "stubborn", definition: "unwilling to change", sentence: "The donkey was stubborn and wouldn’t move.", difficulty: "normal" },
	{ word: "stylish", definition: "fashionable or trendy", sentence: "Her outfit looked very stylish.", difficulty: "normal" },
	{ word: "substitution", definition: "replacing one thing with another", sentence: "The recipe allowed a sugar substitution.", difficulty: "normal" },
	{ word: "suggested", definition: "offered an idea", sentence: "She suggested going for a walk.", difficulty: "normal" },
	{ word: "summit", definition: "the highest point of a mountain", sentence: "They reached the summit at noon.", difficulty: "normal" },
	{ word: "sunbather", definition: "someone lying in the sun", sentence: "The sunbather relaxed on the beach.", difficulty: "normal" },
	{ word: "supply", definition: "to provide something needed", sentence: "They supply water to the town.", difficulty: "normal" },
	{ word: "surrounded", definition: "enclosed on all sides", sentence: "The cabin was surrounded by trees.", difficulty: "normal" },
	{ word: "susceptible", definition: "easily affected by something", sentence: "Young plants are susceptible to frost.", difficulty: "normal" },
	{ word: "swallow", definition: "to make food go down the throat", sentence: "It was hard to swallow the large pill.", difficulty: "normal" },
	{ word: "swelling", definition: "an area that becomes larger due to injury", sentence: "The swelling on his ankle got worse.", difficulty: "normal" },
	{ word: "swirling", definition: "moving in a twisting motion", sentence: "Leaves were swirling in the wind.", difficulty: "normal" },
	{ word: "syllable", definition: "a unit of sound in a word", sentence: "‘Apple’ has two syllables.", difficulty: "normal" },
	{ word: "thermos", definition: "a container that keeps drinks hot or cold", sentence: "She poured tea into her thermos.", difficulty: "normal" },
	{ word: "thermostat", definition: "a device that controls temperature", sentence: "The thermostat turned on the heater.", difficulty: "normal" },
	{ word: "though", definition: "despite the fact", sentence: "He went outside, though it was raining.", difficulty: "normal" },
	{ word: "thoughtfully", definition: "with careful consideration", sentence: "She packed his lunch thoughtfully.", difficulty: "normal" },
	{ word: "thrilled", definition: "very excited", sentence: "He was thrilled to win the prize.", difficulty: "normal" },
	{ word: "throughout", definition: "in every part of something", sentence: "The smell spread throughout the house.", difficulty: "normal" },
	{ word: "town hall", definition: "a building for local government", sentence: "The meeting was held at the town hall.", difficulty: "normal" },
	{ word: "tremendous", definition: "very large or great", sentence: "They made tremendous progress.", difficulty: "normal" },
	{ word: "unbelievable", definition: "very hard to believe", sentence: "The magic trick was unbelievable.", difficulty: "normal" },
	{ word: "underneath", definition: "below something", sentence: "The cat hid underneath the bed.", difficulty: "normal" },
	{ word: "unexpected", definition: "surprising", sentence: "The storm was unexpected.", difficulty: "normal" },
	{ word: "unpredictable", definition: "not able to be predicted", sentence: "The weather is unpredictable.", difficulty: "normal" },
	{ word: "unwrapped", definition: "removed the wrapping", sentence: "She unwrapped her birthday gift.", difficulty: "normal" },
	{ word: "venture", definition: "a risky or daring journey", sentence: "They began a venture into the forest.", difficulty: "normal" },
	{ word: "veterinarian", definition: "an animal doctor", sentence: "The veterinarian examined the puppy.", difficulty: "normal" },
	{ word: "wacky", definition: "silly or funny", sentence: "He wore a wacky hat to the party.", difficulty: "normal" },
	{ word: "wallet", definition: "a small case for money and cards", sentence: "He lost his wallet at the store.", difficulty: "normal" },
	{ word: "weightless", definition: "having no weight", sentence: "Astronauts feel weightless in space.", difficulty: "normal" },
	{ word: "whiskers", definition: "long hairs on an animal’s face", sentence: "The cat’s whiskers twitched.", difficulty: "normal" },
	{ word: "who's", definition: "contraction of 'who is'", sentence: "Who’s coming to dinner tonight.", difficulty: "normal" },
	{ word: "whose", definition: "belonging to whom", sentence: "Whose jacket is this.", difficulty: "normal" },
	{ word: "witnesses", definition: "people who see an event", sentence: "The witnesses described what happened.", difficulty: "normal" },
	{ word: "papillae", definition: "tiny bumps on the tongue that help you taste", sentence: "The papillae on your tongue let you sense sweet, salty, and sour flavors.", difficulty: "challenging" },
	{ word: "abalone", definition: "a sea snail with a colorful, shiny shell", sentence: "The diver found an abalone shell that shimmered in the sunlight.", difficulty: "challenging" },
	{ word: "unnecessary", definition: "not needed", sentence: "Adding extra sugar to the recipe was unnecessary.", difficulty: "challenging" },
	{ word: "self-conscious", definition: "worried about how you look or what others think", sentence: "He felt self-conscious when everyone stared at his new haircut.", difficulty: "challenging" },
	{ word: "sequoia", definition: "a very tall, long‑living tree", sentence: "The giant sequoia towered above all the other trees in the forest.", difficulty: "challenging" },
	{ word: "vocal cords", definition: "folds in the throat that produce sound", sentence: "Your vocal cords vibrate when you speak or sing.", difficulty: "challenging" },
	{ word: "perseverance", definition: "continuing to try even when something is difficult", sentence: "Her perseverance helped her finish the long project.", difficulty: "challenging" },
	{ word: "photosynthesis", definition: "the process plants use to make food from sunlight", sentence: "Plants use photosynthesis to turn sunlight into energy.", difficulty: "challenging" },
	{ word: "physiological", definition: "related to how the body works", sentence: "Running causes many physiological changes in the body.", difficulty: "challenging" },
	{ word: "superstitious", definition: "believing in things that are not based on science", sentence: "He was superstitious and avoided walking under ladders.", difficulty: "challenging" },
	{ word: "Portuguese", definition: "relating to Portugal or its language", sentence: "She learned Portuguese before visiting Lisbon.", difficulty: "challenging" },
	{ word: "sedimentary", definition: "formed from layers of sand, mud, or small rocks", sentence: "Sandstone is a type of sedimentary rock.", difficulty: "challenging" },
	{ word: "parachuting", definition: "jumping from an aircraft using a parachute", sentence: "He tried parachuting for the first time and loved the thrill.", difficulty: "challenging" },
	{ word: "ozone layer", definition: "a layer of gas in the atmosphere that protects Earth", sentence: "The ozone layer shields us from harmful ultraviolet rays.", difficulty: "challenging" },
	{ word: "obligatory", definition: "required or necessary", sentence: "Helmet use is obligatory when riding a motorcycle.", difficulty: "challenging" },
	{ word: "ocurrence", definition: "(should be spelled “occurrence”) something that happens", sentence: "Finding a four‑leaf clover was a rare occurrence.", difficulty: "challenging" },
	{ word: "pessimist", definition: "someone who expects bad outcomes", sentence: "The pessimist believed the trip would be ruined by rain.", difficulty: "challenging" },
	{ word: "knowledgeable", definition: "having a lot of information or understanding", sentence: "The guide was very knowledgeable about the history of the city.", difficulty: "challenging" },
	{ word: "knuckle", definition: "the joint of a finger", sentence: "He scraped his knuckle while opening the box.", difficulty: "challenging" },
	{ word: "larynx", definition: "the voice box in the throat", sentence: "The doctor checked her larynx when she lost her voice.", difficulty: "challenging" },
	{ word: "Renaissance", definition: "a period of great artistic and cultural growth", sentence: "The Renaissance produced many famous artists and thinkers.", difficulty: "challenging" },
	{ word: "laundromat", definition: "a place with machines for washing clothes", sentence: "They went to the laundromat to clean their blankets.", difficulty: "challenging" },
	{ word: "exaggeration", definition: "making something seem bigger or more extreme than it is", sentence: "Saying the fish was “as big as a car” was an exaggeration.", difficulty: "challenging" },
	{ word: "plateau", definition: "a flat area of land that is higher than the land around it", sentence: "They camped on a plateau overlooking the valley.", difficulty: "challenging" },
	{ word: "complimentary", definition: "free of charge", sentence: "The hotel offered complimentary breakfast to all guests.", difficulty: "challenging" },
	{ word: "advantage", definition: "a benefit or something that helps you succeed", sentence: "Being tall can be an advantage in basketball.", difficulty: "challenging" },
	{ word: "renegade", definition: "someone who rebels or goes against the rules", sentence: "The renegade refused to follow the group’s plan.", difficulty: "challenging" },
	{ word: "remorse", definition: "feeling sorry for something you did", sentence: "He felt deep remorse after breaking his friend’s toy.", difficulty: "challenging" },
	{ word: "obedience", definition: "following rules or instructions", sentence: "The dog showed great obedience during training.", difficulty: "challenging" },
	{ word: "subordinate", definition: "lower in rank or position", sentence: "The manager gave instructions to her subordinate employees.", difficulty: "challenging" },
	{ word: "submarine", definition: "a ship that travels underwater", sentence: "The submarine disappeared beneath the waves.", difficulty: "challenging" },
	{ word: "testimonial", definition: "a statement praising someone or something", sentence: "The athlete gave a testimonial about his favorite shoes.", difficulty: "challenging" },
	{ word: "adversity", definition: "difficulties or challenges", sentence: "She stayed strong even in the face of adversity.", difficulty: "challenging" },
	{ word: "memorandum", definition: "a written message or note used in business", sentence: "The boss sent a memorandum about the new schedule.", difficulty: "challenging" },
	{ word: "manipulate", definition: "to control or influence something skillfully", sentence: "He could manipulate the puzzle pieces easily.", difficulty: "challenging" },
	{ word: "individual", definition: "a single person or thing", sentence: "Each individual in the group had a different opinion.", difficulty: "challenging" },
	{ word: "confiscate", definition: "to take something away, usually by authority", sentence: "The teacher had to confiscate the toy during class.", difficulty: "challenging" },
	{ word: "panorama", definition: "a wide, unbroken view of an area", sentence: "The mountain offered a beautiful panorama of the valley.", difficulty: "challenging" },
	{ word: "infuriate", definition: "to make someone very angry", sentence: "The rude comment began to infuriate her.", difficulty: "challenging" },
	{ word: "coincidence", definition: "events happening at the same time by chance", sentence: "Meeting her friend at the store was a funny coincidence.", difficulty: "challenging" },
	{ word: "diversity", definition: "variety or differences among people or things", sentence: "The school celebrated diversity with a cultural fair.", difficulty: "challenging" },
	{ word: "ovation", definition: "long, enthusiastic applause", sentence: "The performer received a standing ovation.", difficulty: "challenging" },
	{ word: "pacifist", definition: "someone who refuses to fight or support violence", sentence: "The pacifist believed problems should be solved peacefully.", difficulty: "challenging" },
	{ word: "paradox", definition: "something that seems impossible but is actually true", sentence: "It’s a paradox that standing still can make you more tired than walking.", difficulty: "challenging" },
	{ word: "perforated", definition: "having small holes in it", sentence: "The notebook paper was perforated so it could be torn out easily.", difficulty: "challenging" },
	{ word: "periodical", definition: "a magazine or publication released regularly", sentence: "She read her favorite periodical every month.", difficulty: "challenging" },
	{ word: "preliminary", definition: "happening before the main event", sentence: "They held a preliminary meeting to plan the project.", difficulty: "challenging" },
	{ word: "posterity", definition: "future generations", sentence: "They planted trees for the benefit of posterity.", difficulty: "challenging" },
	{ word: "possession", definition: "something that belongs to someone", sentence: "His baseball glove was his most prized possession.", difficulty: "challenging" },

	]

const grade1Words = [
  { word: "cloudy", sentence: "The sky was dark and cloudy.", definition: "full of clouds; overcast", difficulty: "normal" },
  { word: "green", sentence: "The tree's leaves were bright green.", definition: "the color of most growing plants", difficulty: "normal" },
  { word: "skirt", sentence: "She was wearing a blue skirt.", definition: "a kind of clothing that hangs from the waist", difficulty: "normal" },
  { word: "scissors", sentence: "| cut the picture with the scissors.", definition: "a tool for cutting things", difficulty: "normal" },
  { word: "seal", sentence: "|saw a seal in the ocean!", definition: "a sea animal with thick fur", difficulty: "normal" },
  { word: "six", sentence: "You are six years old.", definition: "one more than five", difficulty: "normal" },
  { word: "shoulder", sentence: "She pushed me with her shoulder.", definition: "the part of the body between the neck and the arm", difficulty: "normal" },
  { word: "rainy", sentence: "This was a wet, rainy summer.", definition: "having a lot of rainful", difficulty: "normal" },
  { word: "truck", sentence: "My dad has a green truck.", definition: "a large motor vehicle used for carrying heavy loads", difficulty: "normal" },
  { word: "slow", sentence: "My sister is a Slow eater.", definition: "taking along time", difficulty: "normal" },
  { word: "under", sentence: "Mom says there aren't monsters under my bed.", definition: "below or beneath something", difficulty: "normal" },
  { word: "train", sentence: "lam going to travel to Brazil by train.", definition: "a line of railroad cars hooked together and pulled by an engine along tracks", difficulty: "normal" },
  { word: "January", sentence: "My mom's birthday Is in January.", definition: "the first month of the year", difficulty: "normal" },
  { word: "ball", sentence: "You can throw, catch, or kick a ball.", definition: "something round, often a toy used in games", difficulty: "normal" },
  { word: "belt", sentence: "A belt helps to hold up your pants.", definition: "a strip of cloth or leather worn around your waist", difficulty: "normal" },
  { word: "banana", sentence: "| put a banana In my smoothie.", definition: "a curved, yellow fruit that grows in large bunches", difficulty: "normal" },
  { word: "brown", sentence: "She has brown eyes.", definition: "having the color of coffee or chocolate", difficulty: "normal" },
  { word: "cold", sentence: "Snow and ice are cold.", definition: "not hot", difficulty: "normal" },
  { word: "quack", sentence: "| heard a duck's quack near the lake.", definition: "to make the characteristic cry of a duck", difficulty: "normal" },
  { word: "bug", sentence: "My sister wants to catch that bug.", definition: "an insect", difficulty: "normal" },
  { word: "fat", sentence: "The cat is getting fat because you feed It too much.", definition: "having a lot of flesh on the body", difficulty: "normal" },
  { word: "egg", sentence: "The bird had one egg in her nest.", definition: "an oval object that is laid by female birds", difficulty: "normal" },
  { word: "hot dog", sentence: "She prefers a hamburger instead of a hot dog.", definition: "a small cooked sausage that is mild in flavor and is usually served ina long roll", difficulty: "normal" },
  { word: "blue", sentence: "The water in the lake looks blue.", definition: "the color of the clear sky during the day", difficulty: "normal" },
  { word: "frog", sentence: "| caught a small, green frog by the pond.", definition: "a small animal that lives part of the time in water and part of the time on land", difficulty: "normal" },
  { word: "kite", sentence: "Patty flew her kite in the park.", definition: "a light wooden frame that is covered with paper, cloth, or plastic", difficulty: "normal" },
  { word: "hello", sentence: "She said hello to her uncle with a big hug.", definition: "What people say when they greet someone", difficulty: "normal" },
  { word: "blouse", sentence: "She wore a pretty blouse.", definition: "an often somewhat formal shirt for women and girls", difficulty: "normal" },
  { word: "mailman", sentence: "The mailman brought a birthday card for Lisa.", definition: "a man whose job is to deliver mail", difficulty: "normal" },
  { word: "leg", sentence: "He broke his leg skiing.", definition: "one of the long body parts used for standing, walking, and running", difficulty: "normal" },
  { word: "Monday", sentence: "We have computer class on Monday.", definition: "the day after Sunday; the second day of the week", difficulty: "normal" },
  { word: "man", sentence: "That man is my grandfather.", definition: "an adult male human being", difficulty: "normal" },
  { word: "mouse", sentence: "There iS a mouse in the room!", definition: "a small animal with soft fur and a long, thin, hairless tail", difficulty: "normal" },
  { word: "down", sentence: "May I sit down, please?", definition: "to a lower place", difficulty: "normal" },
  { word: "box", sentence: "All my toys are in the box.", definition: "a container with stiff sides, shaped like a rectangle or a square", difficulty: "normal" },
  { word: "clap", sentence: "We clap our hands to the music.", definition: "to hit the hands together to make a sound", difficulty: "normal" },
  { word: "dog", sentence: "That dog barks all day long.", definition: "an animal with four legs, commonly kept as a pet", difficulty: "normal" },
  { word: "finish", sentence: "| will finish my homework before dinner.", definition: "to come to anend", difficulty: "normal" },
  { word: "doll", sentence: "My daughter has a beautiful doll.", definition: "a toy that looks like a baby ora child", difficulty: "normal" },
  { word: "fire", sentence: "We built a fire to keep warm.", definition: "the flame, heat, and light caused by something burning", difficulty: "normal" },
  { word: "one", sentence: "| have one baseball bat.", definition: "the lowest cardinal number; refers to a single thing", difficulty: "normal" },
  { word: "pig", sentence: "My favorite farm animal is a pig.", definition: "an animal with a fat body, short legs, and a curly tail", difficulty: "normal" },
  { word: "robot", sentence: "A robot can help people work.", definition: "a machine that is run by a computer", difficulty: "normal" },
  { word: "foam", sentence: "The waves left white foam on the beach.", definition: "a light frothy mass of fine bubbles formed in or on the surface of a liquid", difficulty: "normal" },
  { word: "sing", sentence: "He likes to sing happy songs.", definition: "to make music with one's voice", difficulty: "normal" },
  { word: "girl", sentence: "A girl grows up to be a woman.", definition: "a female child", difficulty: "normal" },
  { word: "slim", sentence: "The pencil is slim, making it easy to hold in your small", definition: "of small diameter or thickness", difficulty: "normal" },
  { word: "school", sentence: "On Sundays | do not go to school.", definition: "the place where students go to learn", difficulty: "normal" },
  { word: "wing", sentence: "My bird broke his right wing.", definition: "one of the two limbs of a bird, insect, or bat that helps it fly", difficulty: "normal" },
  { word: "kitchen", sentence: "She wants a house with a large kitchen.", definition: "a room where food is cooked and stored", difficulty: "normal" },
  { word: "person", sentence: "A dog is an animal, not a person.", definition: "a human being", difficulty: "normal" },
  { word: "short", sentence: "My father has short hair.", definition: "not long", difficulty: "normal" },
  { word: "same", sentence: "The twins wore the same dress.", definition: "resembling in every relevant respect", difficulty: "normal" },
  { word: "rat", sentence: "My mom screamed when she saw the rat.", definition: "an animal that looks like a large mouse", difficulty: "normal" },
  { word: "swing", sentence: "Monkeys swing from branch to branch of a tree.", definition: "to move backward and forward", difficulty: "normal" },
  { word: "wood", sentence: "The house is made out of wood.", definition: "the hard part of a tree's trunk and branches", difficulty: "normal" },
  { word: "four", sentence: "The car has four wheels.", definition: "one more than three", difficulty: "normal" },
  { word: "tiger", sentence: "A tiger can grow up to nine feet long.", definition: "a large, wild cat that has orange fur with black stripes", difficulty: "normal" },
  { word: "weather", sentence: "How Is the weather today?", definition: "the state of the air and atmosphere at a particular time and place", difficulty: "normal" },
  { word: "year", sentence: "The new year begins in January.", definition: "a period of twelve months", difficulty: "normal" },
  { word: "umbrella", sentence: "She shouldn't go out in the rain without an umbrella.", definition: "something you hold over your head to keep yourself dry when it rains", difficulty: "normal" },
  { word: "week", sentence: "| wonder what we will learn this week in class.", definition: "a period of time seven days long", difficulty: "normal" },
  { word: "windy", sentence: "The weather last week was windy.", definition: "a time or place marked by strong winds", difficulty: "normal" },
  { word: "wig", sentence: "The clown wears a bright orange wig.", definition: "a covering of hair for the head", difficulty: "normal" },
  { word: "sweater", sentence: "The sweater has long sleeves.", definition: "a knitted piece of clothing that keeps you warm", difficulty: "normal" },
  { word: "visit", sentence: "Next month we are going to visit my grandparents in New", definition: "to go to see places or people", difficulty: "normal" },
  { word: "trip", sentence: "We took a trip to Disneyland last fall.", definition: "a journey; the act of going to a place and returning", difficulty: "normal" },
  { word: "autumn", sentence: "| like to wear a jacket In autumn.", definition: "the season of the year between summer and winter", difficulty: "normal" },
  { word: "star", sentence: "One star is shining brighter than the others.", definition: "one of the very bright points of light that shines in the sky at night", difficulty: "normal" },
  { word: "tent", sentence: "He slept inside his tent.", definition: "a large piece of cloth held up by ropes and poles", difficulty: "normal" },
  { word: "that", sentence: "| think that is Mike's brother over there.", definition: "the person or thing seen, mentioned, or understood", difficulty: "normal" },
  { word: "yellow", sentence: "My favorite color is yellow.", definition: "the color of lemons or butter", difficulty: "normal" },
  { word: "soft", sentence: "My teddy bear is soft.", definition: "easy to bend or to shape, not firm or hard", difficulty: "normal" },
  { word: "black", sentence: "The words in this book are printed in black.", definition: "a very dark color; the opposite of white", difficulty: "normal" },
  { word: "chair", sentence: "We need one more chair at the table.", definition: "a seat with a back, four legs, and sometimes arms", difficulty: "normal" },
  { word: "April", sentence: "We celebrate my birthday in April.", definition: "the fourth month of the year, after March", difficulty: "normal" },
  { word: "car", sentence: "Mom drives me to school in her car.", definition: "a vehicle that has four wheels and an engine", difficulty: "normal" },
  { word: "fast", sentence: "He is a fast runner.", definition: "taking very little time; quick", difficulty: "normal" },
  { word: "book", sentence: "This is my favorite book to read.", definition: "a written work made of pages between two covers", difficulty: "normal" },
  { word: "closed", sentence: "The store is closed today, so we'll go tomorrow.", definition: "not open", difficulty: "normal" },
  { word: "cut", sentence: "The children cut the pictures using scissors.", definition: "to use a sharp tool (such as a knife) to open or divide something", difficulty: "normal" },
  { word: "corn", sentence: "Farm animals and people eat corn.", definition: "a yellow or white vegetable that grows on a tall, green plant", difficulty: "normal" },
  { word: "foot", sentence: "My foot hurts really bad.", definition: "the part of the body at the end of the leg", difficulty: "normal" },
  { word: "hot", sentence: "It is hot in the summer and cold in the winter.", definition: "having a high temperature", difficulty: "normal" },
  { word: "gift", sentence: "My uncle brought me a gift when | was sick.", definition: "something given freely; a present", difficulty: "normal" },
  { word: "March", sentence: "We celebrate St. Patrick's Day in March.", definition: "The third month of the year", difficulty: "normal" },
  { word: "butter", sentence: "| put butter on my pancakes.", definition: "a solid, yellow, fatty food made by churning milk or cream", difficulty: "normal" },
  { word: "hand", sentence: "Each hand has four fingers and a thumb.", definition: "the part of the body at the end of the arm", difficulty: "normal" },
  { word: "mouth", sentence: "He wiped his mouth with a napkin after eating.", definition: "the part of the body that helps people eat and talk", difficulty: "normal" },
  { word: "cap", sentence: "Can you bring me my favorite cap?", definition: "a small, soft hat that often has a visor", difficulty: "normal" },
  { word: "hop", sentence: "The rabbits hop across the lawn.", definition: "to make small Jumps on one or two feet", difficulty: "normal" },
  { word: "June", sentence: "My birthday is in June.", definition: "the six month of the year", difficulty: "normal" },
  { word: "nest", sentence: "The bird lays her eggs in the nest.", definition: "a structure made by birds to shelter eggs", difficulty: "normal" },
  { word: "place", sentence: "New York City is a nice place to visit.", definition: "a specific area or region of the world", difficulty: "normal" },
  { word: "paw", sentence: "The dog injured his paw.", definition: "the foot of an animal that has claws", difficulty: "normal" },
  { word: "pan", sentence: "Mom cooks the meat In a pan.", definition: "a shallow, open container used for cooking", difficulty: "normal" },
  { word: "wife", sentence: "He bought flowers for his wife.", definition: "a female partner in a marriage", difficulty: "normal" },
  { word: "pup", sentence: "The pup was only six months old.", definition: "a young dog", difficulty: "normal" },
  { word: "red", sentence: "| saw a shiny, red fire truck.", definition: "the color of rubies, ladybugs, or tomatoes", difficulty: "normal" },
  { word: "tongue", sentence: "My tongue Is inside my mouth.", definition: "the fleshy, moving part inside your mouth that helps you taste, swallow, and", difficulty: "normal" },
  { word: "sport", sentence: "Soccer is my favorite sport.", definition: "an athletic activity you do for fun and to compete with others", difficulty: "normal" },
  { word: "zebra", sentence: "We saw a zebra at the zoo!", definition: "an animal that looks like a horse and has black and white stripes on its body", difficulty: "normal" },
  { word: "pin", sentence: "| need a pin to hold the flower in my coat.", definition: "a short, thin piece of wire that has one sharp end to stick through things", difficulty: "normal" },
  { word: "plant", sentence: "Don't forget to water your plant.", definition: "a living thing that grows in the ground and usually has leaves or flowers", difficulty: "normal" },
  { word: "pot", sentence: "My mom prepares the soup in a pot.", definition: "a round, deep container used for cooking", difficulty: "normal" },
  { word: "ring", sentence: "She bought a gold ring.", definition: "a thin circle of metal or other material worn on the finger", difficulty: "normal" },
  { word: "queen", sentence: "The queen wore a beautiful crown.", definition: "a woman who rules a country or kingdom", difficulty: "normal" },
  { word: "window", sentence: "He opened the window.", definition: "an opening in a wall for letting in light or air", difficulty: "normal" },
  { word: "win", sentence: "She hopes to win the spelling bee.", definition: "to come in first in a race or contest", difficulty: "normal" },
  { word: "story", sentence: "| would like to hear that story again.", definition: "an account of something that happened, either true or made up", difficulty: "normal" },
  { word: "sun", sentence: "The sun is shining today.", definition: "the star around which the earth moves", difficulty: "normal" },
  { word: "arm", sentence: "Her arm was broken.", definition: "the part between the shoulder and the wrist", difficulty: "normal" },
  { word: "card", sentence: "She received a funny card on her birthday.", definition: "a flat piece of stiff paper or plastic", difficulty: "normal" },
  { word: "walk", sentence: "| walk five steps to the board.", definition: "to move by putting one foot in front of the other", difficulty: "normal" },
  { word: "run", sentence: "It's hard to run upa hill.", definition: "to move your legs very fast, so that you go faster than walking", difficulty: "normal" },
  { word: "this", sentence: "| really like this new toy.", definition: "the person, thing, or idea that is present or near in place", difficulty: "normal" },
  { word: "tall", sentence: "Tom is very tall compared to his sister.", definition: "of more than average height", difficulty: "normal" },
  { word: "top", sentence: "We climbed to the top of the mountain.", definition: "the highest part of anything", difficulty: "normal" },
  { word: "wet", sentence: "Her wet shoes made a mess on the kitchen floor.", definition: "covered with water; not dry", difficulty: "normal" },
  { word: "tree", sentence: "There Is a big tree near my house.", definition: "a large plant with a trunk, branches, and leaves", difficulty: "normal" },
  { word: "boat", sentence: "A boat can be moved by a motor.", definition: "a small vessel that carries people or things over water", difficulty: "normal" },
  { word: "yo-yo", sentence: "She learned a new trick with her yo-yo.", definition: "a thick grooved double disk with a string attached to its center", difficulty: "normal" },
  { word: "fin", sentence: "The fish's fin was very small.", definition: "a thin, wing-shaped part of a fish that helps it to swim", difficulty: "normal" },
  { word: "cup", sentence: "Would you like a cup of coffee?", definition: "a small round container, used especially for hot drinks", difficulty: "normal" },
  { word: "friend", sentence: "Max is Bobby's friend.", definition: "someone you like and who likes you", difficulty: "normal" },
  { word: "ZOO", sentence: "People visit the Zoo to see the animals.", definition: "a place where wild animals are kept", difficulty: "normal" },
  { word: "woman", sentence: "When a girl grows up, she becomes a woman.", definition: "a grown-up female person", difficulty: "normal" },
  { word: "up", sentence: "| went up the stairs.", definition: "toward the sky or ceiling", difficulty: "normal" },
  { word: "fruit", sentence: "Watermelon is my favorite fruit.", definition: "the part of a flowering plant that contains seeds", difficulty: "normal" },
  { word: "vest", sentence: "My uniform has a blue vest.", definition: "a sleeveless garment that usually is worn over a shirt and buttons down the front", difficulty: "normal" },
  { word: "canyon", sentence: "We saw a big canyon on our trip.", definition: "a deep, narrow valley with steep sides", difficulty: "normal" },
  { word: "evening", sentence: "We play outside every evening.", definition: "the time of day when the sun starts to go down and it begins to get dark outside", difficulty: "normal" },
  { word: "crayon", sentence: "Color the apple using a red crayon.", definition: "a stick or pencil of colored wax", difficulty: "normal" },
  { word: "game", sentence: "Let's play a new game with my cousins.", definition: "something done for fun or amusement; play", difficulty: "normal" },
  { word: "baby", sentence: "She went to the hospital to see the new baby.", definition: "a very young child", difficulty: "normal" },
  { word: "poor", sentence: "The poor man had no money to buy ice cream.", definition: "not having much money or possessions", difficulty: "normal" },
  { word: "apple", sentence: "An apple can be red or green.", definition: "a round fruit that grows on a tree", difficulty: "normal" },
  { word: "child", sentence: "She has been playing piano since she was a child.", definition: "a young person", difficulty: "normal" },
  { word: "brother", sentence: "Her brother is a doctor.", definition: "a boy or man that has the same parents as another person", difficulty: "normal" },
  { word: "fireman", sentence: "The fireman drives a big, red truck.", definition: "a person whose work is putting out fires", difficulty: "normal" },
  { word: "twelve", sentence: "There are twelve eggs in a dozen.", definition: "a number equal to one more than 11", difficulty: "normal" },
  { word: "father", sentence: "John's father has three children.", definition: "aman who has a child or children", difficulty: "normal" },
  { word: "dress", sentence: "| like my pink dress.", definition: "a piece of clothing worn by women and girls", difficulty: "normal" },
  { word: "circle", sentence: "Please draw a circle around the correct answer.", definition: "a round shape", difficulty: "normal" },
  { word: "mask", sentence: "The firefighter wears a mask.", definition: "a covering that hides or protects the face", difficulty: "normal" },
  { word: "mug", sentence: "My mom drinks hot chocolate in a mug.", definition: "a drinking cup with a handle", difficulty: "normal" },
  { word: "hen", sentence: "The hen laid three eggs.", definition: "an adult female chicken", difficulty: "normal" },
  { word: "flower", sentence: "| picked a beautiful flower from the garden.", definition: "the part of a plant that produces seeds", difficulty: "normal" },
  { word: "desk", sentence: "The teacher has a big desk.", definition: "a piece of furniture with a flat or slanting top on which to write or place a book", difficulty: "normal" },
  { word: "fish", sentence: "Salmon is a type of fish.", definition: "an animal that lives in water, is covered with scales, and breathes by taking water", difficulty: "normal" },
  { word: "color", sentence: "My shirt is the color red.", definition: "a quality perceived by the eye when an object reflects light, such as red, yellow, or", difficulty: "normal" },
  { word: "cookies", sentence: "Max eats cookies during lunch.", definition: "small, flat, sweet desserts made from flour and sugar", difficulty: "normal" },
  { word: "count", sentence: "|can count to 100!", definition: "to name numbers in order", difficulty: "normal" },
  { word: "eight", sentence: "He's working until eight o'clock.", definition: "one more than seven", difficulty: "normal" },
  { word: "cake", sentence: "My mom baked a delicious cake for my dad's birthday.", definition: "a baked mixture of flour, sugar, eggs, and other ingredients", difficulty: "normal" },
  { word: "fall", sentence: "Leaves fall from the trees.", definition: "to drop or come down from a higher place", difficulty: "normal" },
  { word: "flag", sentence: "Every country and state has its own flag.", definition: "a piece of colored cloth with stars or other symbols on it", difficulty: "normal" },
  { word: "fun", sentence: "We had a lot of fun at the party.", definition: "enjoyment, amusement, or lighthearted pleasure", difficulty: "normal" },
  { word: "twenty", sentence: "| have twenty colored pencils.", definition: "a number equal to two times 10", difficulty: "normal" },
  { word: "head", sentence: "The head is where the eyes, ears, nose, and mouth are.", definition: "the top part of the human body", difficulty: "normal" },
  { word: "fork", sentence: "| need a spoon, fork, and knife to eat my food.", definition: "something to eat with, with two or more sharp points", difficulty: "normal" },
  { word: "ghost", sentence: "My brother told mea scary story about a ghost.", definition: "in stories, a white shape that scares people", difficulty: "normal" },
  { word: "plate", sentence: "| put my apple slices on a blue plate.", definition: "a shallow, usually circular object from which food is eaten or served", difficulty: "normal" },
  { word: "hug", sentence: "My mom and dad always hug me.", definition: "to put your arms around someone especially as a way of showing love or", difficulty: "normal" },
  { word: "Friday", sentence: "We have gym class on Friday.", definition: "the day after Thursday; sixth day of the week", difficulty: "normal" },
  { word: "bow", sentence: "The singer made a deep bow as we clapped.", definition: "to bend your head or body", difficulty: "normal" },
  { word: "jar", sentence: "The teacher has a Jar filled with candy.", definition: "a container with a wide mouth usually made of glass or pottery", difficulty: "normal" },
  { word: "igloo", sentence: "The Inuit family live in an igloo.", definition: "a circular house made of hard blocks of snow", difficulty: "normal" },
  { word: "jump", sentence: "They jump over the fence.", definition: "to throw yourself up into the air", difficulty: "normal" },
  { word: "happy", sentence: "He is happy that you came to visit.", definition: "feeling joy, pleasure, or contentment", difficulty: "normal" },
  { word: "lamb", sentence: "Mary had a little lamb.", definition: "a young sheep", difficulty: "normal" },
  { word: "jacket", sentence: "My father's jacket Is black.", definition: "a short coat", difficulty: "normal" },
  { word: "hat", sentence: "Max puts his hat on.", definition: "a piece of clothing for the head", difficulty: "normal" },
  { word: "neck", sentence: "The giraffe has a long neck.", definition: "the part of the body between the head and shoulders", difficulty: "normal" },
  { word: "jet", sentence: "The jet soared through the sky.", definition: "an aircraft", difficulty: "normal" },
  { word: "monkey", sentence: "My favorite animal is a monkey.", definition: "a hairy animal that usually lives in trees, with long arms and a long tail", difficulty: "normal" },
  { word: "furry", sentence: "My cat is furry and small.", definition: "covered with hair", difficulty: "normal" },
  { word: "jacks", sentence: "Those children are playing Jacks.", definition: "a game played with a small ball and little pieces of metal", difficulty: "normal" },
  { word: "hard", sentence: "The turtle has a hard shell.", definition: "not easy to bend, cut or break", difficulty: "normal" },
  { word: "lemon", sentence: "Most people put lemon juice in their tea.", definition: "a sour, yellow fruit", difficulty: "normal" },
  { word: "Tuesday", sentence: "| will arrive on Tuesday morning.", definition: "the day after Monday", difficulty: "normal" },
  { word: "taxi", sentence: "We took a taxi to the airport.", definition: "a car that you can pay to take you from one place to another", difficulty: "normal" },
  { word: "three", sentence: "| have three sisters.", definition: "one more than two", difficulty: "normal" },
  { word: "teacher", sentence: "She is a first grade teacher.", definition: "a person who helps students learn", difficulty: "normal" },
  { word: "sled", sentence: "They rode the sled down the snowy hill.", definition: "a vessel used for sliding over ice or snow", difficulty: "normal" },
  { word: "storm", sentence: "The storm knocked over a tree InN my yard.", definition: "a period of harsh weather with strong winds, rain, snow, or hail", difficulty: "normal" },
  { word: "July", sentence: "July has thirty-one days.", definition: "the seven month of the year", difficulty: "normal" },
  { word: "bedroom", sentence: "My toys are in my bedroom.", definition: "the room you sleep in", difficulty: "normal" },
  { word: "knees", sentence: "| fell down and hurt my knees.", definition: "the joints in the middle of human legs", difficulty: "normal" },
  { word: "milk", sentence: "| like to have milk with my cereal.", definition: "a white liquid made by female mammals", difficulty: "normal" },
  { word: "pants", sentence: "Jeans area type of pa nts.", definition: "clothing worn to cover the legs, from the waist to the ankles", difficulty: "normal" },
  { word: "moon", sentence: "The moon is round like a ball.", definition: "the earth's natural satellite that can be seen in the night sky", difficulty: "normal" },
  { word: "pencil", sentence: "| drew the picture with a pencil.", definition: "a thin, wooden device with a point at one end used for writing or drawing", difficulty: "normal" },
  { word: "pet", sentence: "My pet is a hamster.", definition: "an animal that is kept in the home as a companion rather than for work", difficulty: "normal" },
  { word: "play", sentence: "Let's play baseball outside.", definition: "to do an activity for fun", difficulty: "normal" },
  { word: "old", sentence: "My grandfather is very old.", definition: "having lived a long time", difficulty: "normal" },
  { word: "nine", sentence: "Tina is nine years old.", definition: "a number after eight", difficulty: "normal" },
  { word: "nose", sentence: "Rudolph the reindeer has a red nose.", definition: "the part of the face that sticks out just above the mouth", difficulty: "normal" },
  { word: "August", sentence: "We have school break in August.", definition: "the eighth month of the year", difficulty: "normal" },
  { word: "mop", sentence: "My mother cleans the floor with a mop.", definition: "a tool for cleaning floors made of a bundle of cloth or yarn fastened to a long", difficulty: "normal" },
  { word: "May", sentence: "We celebrate Mother's Day In May.", definition: "the fifth month of the year, after April", difficulty: "normal" },
  { word: "pear", sentence: "My favorite fruit is a juicy, green pear.", definition: "a sweet, juicy fruit that is shaped like a bell", difficulty: "normal" },
  { word: "pen", sentence: "| like to write my notes with a blue pen.", definition: "a tool you use when you write or draw with ink", difficulty: "normal" },
  { word: "oval", sentence: "The hen laid an egg shaped like an oval.", definition: "a shape like an egg", difficulty: "normal" },
  { word: "over", sentence: "The bird flies over the tree.", definition: "in an upward and forward direction across something", difficulty: "normal" },
  { word: "picture", sentence: "Dad took a picture of my sister and me.", definition: "a drawing, photograph, or painting of someone or something", difficulty: "normal" },
  { word: "seven", sentence: "There are seven days in a week.", definition: "one more than six", difficulty: "normal" },
  { word: "ruler", sentence: "| use a ruler to measure the triangle.", definition: "a straight strip of wood, metal, or plastic used to measure how long something is", difficulty: "normal" },
  { word: "sister", sentence: "Peter has a sister named Mary.", definition: "a girl or woman that has the same parents as another person", difficulty: "normal" },
  { word: "jelly", sentence: "| like peanut butter and jelly sandwiches.", definition: "a soft, sweet food made with fruit and sugar that is usually spread on toast", difficulty: "normal" },
  { word: "socks", sentence: "Put your socks on before your shoes.", definition: "knitted coverings for the feet", difficulty: "normal" },
  { word: "salad", sentence: "We put lettuce and carrots in the salad.", definition: "having a lot of rain", difficulty: "normal" },
  { word: "sleep", sentence: "It's easy to sleep when it's quiet.", definition: "to rest your body and mind", difficulty: "normal" },
  { word: "sad", sentence: "| was sad when my best friend moved away.", definition: "feeling bad about things; not happy", difficulty: "normal" },
  { word: "ship", sentence: "Peter traveled to Spain ona ship.", definition: "a very large boat that travels on oceans or large lakes", difficulty: "normal" },
  { word: "shoes", sentence: "My shoes got dirty on our hike.", definition: "something you wear on your foot", difficulty: "normal" },
  { word: "scarf", sentence: "| need a scarf for my snowman.", definition: "a piece of cloth worn around the neck and shoulders", difficulty: "normal" },
  { word: "rabbit", sentence: "The magician pulled a rabbit out of his hat.", definition: "a furry animal with long ears and short tail", difficulty: "normal" },
  { word: "thin", sentence: "A sheet of paper is very thin.", definition: "not big from one side to the other", difficulty: "normal" },
  { word: "those", sentence: "Here are those pictures you asked for.", definition: "plural of that", difficulty: "normal" },
  { word: "accident", definition: "an unexpected event that happens suddenly", sentence: "She spilled her juice by accident.", difficulty: "challenging" },
	{ word: "raincoat", definition: "a waterproof coat worn in the rain", sentence: "He put on his yellow raincoat before going outside.", difficulty: "challenging" },
	{ word: "pancakes", definition: "flat, round cakes made from batter and cooked on a griddle", sentence: "We ate pancakes with syrup for breakfast.", difficulty: "challenging" },
	{ word: "triangle", definition: "a shape with three sides and three corners", sentence: "The sign was shaped like a bright red triangle.", difficulty: "challenging" },
	{ word: "straight", definition: "without bends or curves", sentence: "Draw a straight line from one point to the other.", difficulty: "challenging" },
	{ word: "tomorrow", definition: "the day after today", sentence: "We will finish the project tomorrow.", difficulty: "challenging" },
	{ word: "fireplace", definition: "a place in a home where a fire can be built", sentence: "They sat by the warm fireplace on a cold night.", difficulty: "challenging" },
	{ word: "yesterday", definition: "the day before today", sentence: "Yesterday we visited the park.", difficulty: "challenging" },
	{ word: "pineapple", definition: "a tropical fruit with spiky skin and sweet yellow flesh", sentence: "She cut the pineapple into juicy slices.", difficulty: "challenging" },
	{ word: "snowflake", definition: "a tiny piece of frozen ice that falls from the sky", sentence: "Each snowflake has a unique shape.", difficulty: "challenging" },
	{ word: "grapefruit", definition: "a large, slightly bitter citrus fruit", sentence: "He ate half a grapefruit for breakfast.", difficulty: "challenging" },
	{ word: "example", definition: "something that shows or explains an idea", sentence: "The teacher gave an example to help us understand.", difficulty: "challenging" },
	{ word: "hungry", definition: "feeling the need to eat", sentence: "After the long walk, everyone felt hungry.", difficulty: "challenging" },
	{ word: "chocolate", definition: "a sweet treat made from cocoa beans", sentence: "She shared her chocolate bar with her friend.", difficulty: "challenging" },
	{ word: "rainbow", definition: "a colorful arc seen in the sky after rain", sentence: "A rainbow appeared after the storm ended.", difficulty: "challenging" },
	{ word: "laugh", definition: "to make a happy sound when something is funny", sentence: "The joke made everyone laugh.", difficulty: "challenging" },
	{ word: "museum", definition: "a place where important objects are displayed", sentence: "We saw dinosaur bones at the museum.", difficulty: "challenging" },
	{ word: "children", definition: "young boys and girls", sentence: "The children played games in the yard.", difficulty: "challenging" },
	{ word: "sunshine", definition: "light and warmth from the sun", sentence: "We enjoyed the sunshine at the beach.", difficulty: "challenging" },
	{ word: "alphabet", definition: "the set of letters used in a language", sentence: "She practiced writing the alphabet.", difficulty: "challenging" },
	{ word: "movement", definition: "the act of changing position or place", sentence: "The dancer’s movement was graceful and smooth.", difficulty: "challenging" },
	{ word: "neighbor", definition: "a person who lives near you", sentence: "Our neighbor brought us cookies.", difficulty: "challenging" },
	{ word: "exercise", definition: "activity that helps keep the body healthy", sentence: "Running is a good form of exercise.", difficulty: "challenging" },
	{ word: "cylinder", definition: "a solid shape with two circular ends", sentence: "A soda can is shaped like a cylinder.", difficulty: "challenging" },
	{ word: "breakfast", definition: "the first meal of the day", sentence: "We had eggs and toast for breakfast.", difficulty: "challenging" },
	{ word: "ice cream", definition: "a sweet frozen dessert", sentence: "He ordered chocolate ice cream in a cone.", difficulty: "challenging" },
	{ word: "delicious", definition: "tasting very good", sentence: "The cookies were warm and delicious.", difficulty: "challenging" },
	{ word: "grandchildren", definition: "the children of your children", sentence: "She loves spending time with her grandchildren.", difficulty: "challenging" },
	{ word: "planet", definition: "a large body in space that orbits a star", sentence: "Earth is the third planet from the sun.", difficulty: "challenging" },
	{ word: "goldfish", definition: "a small orange fish often kept as a pet", sentence: "Her goldfish swam happily in its bowl.", difficulty: "challenging" },
	{ word: "cheese", definition: "a food made from milk", sentence: "He added cheese to his sandwich.", difficulty: "challenging" },
	{ word: "grandfather", definition: "the father of your mother or father", sentence: "My grandfather told us stories from his childhood.", difficulty: "challenging" },
	{ word: "grandmother", definition: "the mother of your mother or father", sentence: "Her grandmother taught her how to bake.", difficulty: "challenging" },
	{ word: "orange", definition: "a round citrus fruit with a thick peel", sentence: "She peeled an orange for a snack.", difficulty: "challenging" },
	{ word: "sandwich", definition: "two slices of bread with filling between them", sentence: "He packed a turkey sandwich for lunch.", difficulty: "challenging" },
	{ word: "bread", definition: "a baked food made from flour and water", sentence: "She sliced the bread for dinner.", difficulty: "challenging" },
	{ word: "suitcase", definition: "a container used for carrying clothes when traveling", sentence: "He packed his suitcase for the trip.", difficulty: "challenging" },
	{ word: "beautiful", definition: "very pleasing to look at", sentence: "The sunset was bright and beautiful.", difficulty: "challenging" },
	{ word: "store", definition: "a place where people buy things", sentence: "We went to the store to get groceries.", difficulty: "challenging" },
	{ word: "trace", definition: "to copy or follow the outline of something", sentence: "She used a pencil to trace the drawing.", difficulty: "challenging" },
	{ word: "broom", definition: "a tool used for sweeping floors", sentence: "He grabbed the broom to clean the kitchen.", difficulty: "challenging" },
	{ word: "glass", definition: "a hard, clear material used for windows and cups", sentence: "The window was made of thick glass.", difficulty: "challenging" },
	{ word: "mushrooms", definition: "a type of soft, edible fungus", sentence: "She added mushrooms to the pasta.", difficulty: "challenging" },
	{ word: "spaghetti", definition: "long, thin pasta noodles", sentence: "We ate spaghetti with tomato sauce.", difficulty: "challenging" },
	{ word: "toothpaste", definition: "a paste used for cleaning teeth", sentence: "He squeezed toothpaste onto his brush.", difficulty: "challenging" },
	{ word: "french fries", definition: "potato strips cooked in oil", sentence: "She ordered french fries with her burger.", difficulty: "challenging" },
	{ word: "mountain", definition: "a very high hill", sentence: "The mountain was covered in snow.", difficulty: "challenging" },
	{ word: "airplane", definition: "a vehicle that flies through the air", sentence: "The airplane landed smoothly on the runway.", difficulty: "challenging" },
	{ word: "everyone", definition: "all the people in a group", sentence: "Everyone cheered when the show began.", difficulty: "challenging" },
];


/***********************
 * STATE
 ***********************/

let remainingWords = [];
let sessionWords = [];
let wrongWords = [];
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let currentWord = null;
let swipeInitialized = false;
let infoArea;

const SWIPE_THRESHOLD = 50; // pixels


/***********************
 * INITIALIZATION
 ***********************/
 
 
function initFreshState() {
  remainingWords = getFilteredWords();
  sessionWords = [];
  wrongWords = [];
  currentIndex = 0;
}

function init() {
  const restored = loadState();
  infoArea = document.getElementById("infoArea");

  if (restored && sessionWords.length > 0) {
    showWord();
  } else {
    initFreshState();
	updateDisplay("Press Start");
  }
  
  setupSwipe();
}


function setupSwipe() {
  if (swipeInitialized) return;
  swipeInitialized = true;

  const wordEl = document.getElementById("word");

  wordEl.addEventListener("touchstart", e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  wordEl.addEventListener("touchend", e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });
}


window.onload = init;

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;

  if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;

  if (deltaX > 0) {
    markCorrect(); // swipe right
  } else {
    markWrong(); // swipe left
  }
}

function onModeChange() {
  clearInfo();
  
  console.log("onModeChange() called");

  // HARD reset in-memory state when grade changes
  remainingWords = [];
  sessionWords = [];
  wrongWords = [];
  currentIndex = 0;

  const restored = loadState();
  
  if (restored && sessionWords.length > 0) {
    showWord();
  } else {
    remainingWords = getFilteredWords();
    updateDisplay("Press Start");
  }
}

function getFilteredWords() {
  const includeNormal = document.getElementById("normalChk").checked;
  const includeChallenging = document.getElementById("challengingChk").checked;

  if (!includeNormal && !includeChallenging) {
    alert("Select at least one difficulty level");
    return [];
  }

  return getSelectedWordBank().filter(w =>
    (w.difficulty === "normal" && includeNormal) ||
    (w.difficulty === "challenging" && includeChallenging)
  );
}


/***********************
 * SESSION LOGIC
 ***********************/

function startSession(n) {
  
  // const remWords = document.getElementById("remainingWords");
  
  if (sessionWords.length > 0 && currentIndex < sessionWords.length) {
    showWord();
    return;
  }
  
  sessionWords = [];
  currentIndex = 0;

  if (remainingWords.length === 0) {
    updateDisplay("No words left. Reset.");
    return;
  }

  

  for (let i = 0; i < n && remainingWords.length > 0; i++) {
    const idx = Math.floor(Math.random() * remainingWords.length);
    sessionWords.push(remainingWords.splice(idx, 1)[0]);
  }
  
  // remWords.innerHTML = "/" + remainingWords.length

  showWord();
  saveState();
}

function startWrongWordSession() {
	sessionWords = [...wrongWords];
	wrongWords = [];
	currentIndex = 0
	
	
	document.getElementById("wrongWordsButton").classList.add("hidden");
	
	showWord();
	saveState();
	
}

/***********************
 * UI ACTIONS
 ***********************/
 function getCurrentGradeKey() {
  const grade = document.getElementById("gradeSelect").value;
  return grade === "grade1" ? "1st" : "6th";
} 
 
 function getSelectedWordBank() {
  const grade = document.getElementById("gradeSelect").value;
  return grade === "grade1" ? grade1Words : grade6Words;
}
 
function markCorrect() {
  saveState();
  animateSwipe("right");
}

function markWrong() {
  wrongWords.push(sessionWords[currentIndex]);
  saveState();
  animateSwipe("left");
}

function nextWord() {
  currentIndex++;

  if (currentIndex >= sessionWords.length) {
    showResults();
  } else {
    showWord();
  }
  clearInfo();
  saveState();
}

/***********************
 * DISPLAY
 ***********************/

function showWord() {
  const wordEl = document.getElementById("word");
  // const remSessionWords = document.getElementById("remainingSessionWords");
  const w = sessionWords[currentIndex];


  // remSessionWords.innerHTML = sessionWords.length + " words remaining";
  currentWord = w;
  // debug(JSON.stringify(currentWord, null, 2));
  wordEl.style.transition = "none";
  wordEl.style.transform = "translateX(0)";
  wordEl.style.opacity = "1";
  
  wordEl.offsetHeight;
  
  wordEl.style.transition = "";
  
  
  
  updateDisplay(w.word);
  
}

function showResults() {
  if (wrongWords.length === 0) {
    updateDisplay("Perfect score! 🎉");
    return;
  }

  const list = wrongWords
    .map(w => `• ${w.word}`)
    .join("<br>");

  document.getElementById("wordContent").innerHTML =
    "<strong>Words to review:</strong><br><br>" + list;
	
  document.getElementById("wrongWordsButton").classList.remove("hidden");
}

function updateDisplay(text) {
  document.getElementById("wordContent").innerHTML = text;
}

/***********************
 * RESET
 ***********************/

function resetAll() {
  localStorage.removeItem(getStorageKey());
  initFreshState();
  updateDisplay("Press Start");
  clearInfo();
}

/***********************
 * SAVE/RELOAD
 ***********************/
function getModeKey() {
  const n = document.getElementById("normalChk").checked;
  const c = document.getElementById("challengingChk").checked;

  if (n && c) return "both";
  if (n) return "normal";
  if (c) return "challenging";
  return "none";
}

function getStorageKey() {
  return `spellingAppState_v1_${getCurrentGradeKey()}_${getModeKey()}`;
}

function saveState() {
  const state = {
    remainingWords,
    sessionWords,
    wrongWords,
    currentIndex,
  };
  localStorage.setItem(getStorageKey(), JSON.stringify(state));
}

function loadState() {
	
	
  const raw = localStorage.getItem(getStorageKey());
  if (!raw) return false;

  try {
    const state = JSON.parse(raw);
    remainingWords = state.remainingWords || [];
    sessionWords = state.sessionWords || [];
    wrongWords = state.wrongWords || [];
    currentIndex = state.currentIndex || 0;
    return true;
  } catch {
    return false;
  }
}

function animateSwipe(direction) {
  const wordEl = document.getElementById("word");

  wordEl.classList.add(direction === "right" ? "swipe-right" : "swipe-left");

  setTimeout(() => {
    wordEl.classList.remove("swipe-right", "swipe-left");
    nextWord();
  }, 250);

}

function showDefinition() {
  if (!currentWord) return;

  infoArea.innerHTML = `
    <strong>Definition:</strong><br>
    ${currentWord.definition}
  `;
}

function showSentence() {
  
  if (!currentWord) return;

  infoArea.innerHTML = `
    <strong>Sentence:</strong><br>
    ${currentWord.sentence}
  `;
}

function clearInfo() {
  infoArea.innerHTML = "";
}

function debug(msg) {
  const el = document.getElementById("debug");
  el.textContent += msg + "\n";
}
