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
	{ word: "witnesses", definition: "people who see an event", sentence: "The witnesses described what happened.", difficulty: "normal" }
	]

const grade1Words = [
  { word: "cloudy", definition: "The sky was dark and cloudy.", sentence: "full of clouds; overcast", difficulty: "normal" },
  { word: "green", definition: "The tree's leaves were bright green.", sentence: "the color of most growing plants", difficulty: "normal" },
  { word: "skirt", definition: "She was wearing a blue skirt.", sentence: "a kind of clothing that hangs from the waist", difficulty: "normal" },
  { word: "scissors", definition: "| cut the picture with the scissors.", sentence: "a tool for cutting things", difficulty: "normal" },
  { word: "seal", definition: "|saw a seal in the ocean!", sentence: "a sea animal with thick fur", difficulty: "normal" },
  { word: "six", definition: "You are six years old.", sentence: "one more than five", difficulty: "normal" },
  { word: "shoulder", definition: "She pushed me with her shoulder.", sentence: "the part of the body between the neck and the arm", difficulty: "normal" },
  { word: "rainy", definition: "This was a wet, rainy summer.", sentence: "having a lot of rainful", difficulty: "normal" },
  { word: "truck", definition: "My dad has a green truck.", sentence: "a large motor vehicle used for carrying heavy loads", difficulty: "normal" },
  { word: "slow", definition: "My sister is a Slow eater.", sentence: "taking along time", difficulty: "normal" },
  { word: "under", definition: "Mom says there aren't monsters under my bed.", sentence: "below or beneath something", difficulty: "normal" },
  { word: "train", definition: "lam going to travel to Brazil by train.", sentence: "a line of railroad cars hooked together and pulled by an engine along tracks", difficulty: "normal" },
  { word: "January", definition: "My mom's birthday Is in January.", sentence: "the first month of the year", difficulty: "normal" },
  { word: "ball", definition: "You can throw, catch, or kick a ball.", sentence: "something round, often a toy used in games", difficulty: "normal" },
  { word: "belt", definition: "A belt helps to hold up your pants.", sentence: "a strip of cloth or leather worn around your waist", difficulty: "normal" },
  { word: "banana", definition: "| put a banana In my smoothie.", sentence: "a curved, yellow fruit that grows in large bunches", difficulty: "normal" },
  { word: "brown", definition: "She has brown eyes.", sentence: "having the color of coffee or chocolate", difficulty: "normal" },
  { word: "cold", definition: "Snow and ice are cold.", sentence: "not hot", difficulty: "normal" },
  { word: "quack", definition: "| heard a duck's quack near the lake.", sentence: "to make the characteristic cry of a duck", difficulty: "normal" },
  { word: "bug", definition: "My sister wants to catch that bug.", sentence: "an insect", difficulty: "normal" },
  { word: "fat", definition: "The cat is getting fat because you feed It too much.", sentence: "having a lot of flesh on the body", difficulty: "normal" },
  { word: "egg", definition: "The bird had one egg in her nest.", sentence: "an oval object that is laid by female birds", difficulty: "normal" },
  { word: "hot dog", definition: "She prefers a hamburger instead of a hot dog.", sentence: "a small cooked sausage that is mild in flavor and is usually served ina long roll", difficulty: "normal" },
  { word: "blue", definition: "The water in the lake looks blue.", sentence: "the color of the clear sky during the day", difficulty: "normal" },
  { word: "frog", definition: "| caught a small, green frog by the pond.", sentence: "a small animal that lives part of the time in water and part of the time on land", difficulty: "normal" },
  { word: "kite", definition: "Patty flew her kite in the park.", sentence: "a light wooden frame that is covered with paper, cloth, or plastic", difficulty: "normal" },
  { word: "hello", definition: "She said hello to her uncle with a big hug.", sentence: "What people say when they greet someone", difficulty: "normal" },
  { word: "blouse", definition: "She wore a pretty blouse.", sentence: "an often somewhat formal shirt for women and girls", difficulty: "normal" },
  { word: "mailman", definition: "The mailman brought a birthday card for Lisa.", sentence: "a man whose job is to deliver mail", difficulty: "normal" },
  { word: "leg", definition: "He broke his leg skiing.", sentence: "one of the long body parts used for standing, walking, and running", difficulty: "normal" },
  { word: "Monday", definition: "We have computer class on Monday.", sentence: "the day after Sunday; the second day of the week", difficulty: "normal" },
  { word: "man", definition: "That man is my grandfather.", sentence: "an adult male human being", difficulty: "normal" },
  { word: "mouse", definition: "There iS a mouse in the room!", sentence: "a small animal with soft fur and a long, thin, hairless tail", difficulty: "normal" },
  { word: "down", definition: "May I sit down, please?", sentence: "to a lower place", difficulty: "normal" },
  { word: "box", definition: "All my toys are in the box.", sentence: "a container with stiff sides, shaped like a rectangle or a square", difficulty: "normal" },
  { word: "clap", definition: "We clap our hands to the music.", sentence: "to hit the hands together to make a sound", difficulty: "normal" },
  { word: "dog", definition: "That dog barks all day long.", sentence: "an animal with four legs, commonly kept as a pet", difficulty: "normal" },
  { word: "finish", definition: "| will finish my homework before dinner.", sentence: "to come to anend", difficulty: "normal" },
  { word: "doll", definition: "My daughter has a beautiful doll.", sentence: "a toy that looks like a baby ora child", difficulty: "normal" },
  { word: "fire", definition: "We built a fire to keep warm.", sentence: "the flame, heat, and light caused by something burning", difficulty: "normal" },
  { word: "one", definition: "| have one baseball bat.", sentence: "the lowest cardinal number; refers to a single thing", difficulty: "normal" },
  { word: "pig", definition: "My favorite farm animal is a pig.", sentence: "an animal with a fat body, short legs, and a curly tail", difficulty: "normal" },
  { word: "robot", definition: "A robot can help people work.", sentence: "a machine that is run by a computer", difficulty: "normal" },
  { word: "foam", definition: "The waves left white foam on the beach.", sentence: "a light frothy mass of fine bubbles formed in or on the surface of a liquid", difficulty: "normal" },
  { word: "sing", definition: "He likes to sing happy songs.", sentence: "to make music with one's voice", difficulty: "normal" },
  { word: "girl", definition: "A girl grows up to be a woman.", sentence: "a female child", difficulty: "normal" },
  { word: "slim", definition: "The pencil is slim, making it easy to hold in your small", sentence: "of small diameter or thickness", difficulty: "normal" },
  { word: "school", definition: "On Sundays | do not go to school.", sentence: "the place where students go to learn", difficulty: "normal" },
  { word: "wing", definition: "My bird broke his right wing.", sentence: "one of the two limbs of a bird, insect, or bat that helps it fly", difficulty: "normal" },
  { word: "kitchen", definition: "She wants a house with a large kitchen.", sentence: "a room where food is cooked and stored", difficulty: "normal" },
  { word: "person", definition: "A dog is an animal, not a person.", sentence: "a human being", difficulty: "normal" },
  { word: "short", definition: "My father has short hair.", sentence: "not long", difficulty: "normal" },
  { word: "same", definition: "The twins wore the same dress.", sentence: "resembling in every relevant respect", difficulty: "normal" },
  { word: "rat", definition: "My mom screamed when she saw the rat.", sentence: "an animal that looks like a large mouse", difficulty: "normal" },
  { word: "swing", definition: "Monkeys swing from branch to branch of a tree.", sentence: "to move backward and forward", difficulty: "normal" },
  { word: "wood", definition: "The house is made out of wood.", sentence: "the hard part of a tree's trunk and branches", difficulty: "normal" },
  { word: "four", definition: "The car has four wheels.", sentence: "one more than three", difficulty: "normal" },
  { word: "tiger", definition: "A tiger can grow up to nine feet long.", sentence: "a large, wild cat that has orange fur with black stripes", difficulty: "normal" },
  { word: "weather", definition: "How Is the weather today?", sentence: "the state of the air and atmosphere at a particular time and place", difficulty: "normal" },
  { word: "year", definition: "The new year begins in January.", sentence: "a period of twelve months", difficulty: "normal" },
  { word: "umbrella", definition: "She shouldn't go out in the rain without an umbrella.", sentence: "something you hold over your head to keep yourself dry when it rains", difficulty: "normal" },
  { word: "week", definition: "| wonder what we will learn this week in class.", sentence: "a period of time seven days long", difficulty: "normal" },
  { word: "windy", definition: "The weather last week was windy.", sentence: "a time or place marked by strong winds", difficulty: "normal" },
  { word: "wig", definition: "The clown wears a bright orange wig.", sentence: "a covering of hair for the head", difficulty: "normal" },
  { word: "sweater", definition: "The sweater has long sleeves.", sentence: "a knitted piece of clothing that keeps you warm", difficulty: "normal" },
  { word: "visit", definition: "Next month we are going to visit my grandparents in New", sentence: "to go to see places or people", difficulty: "normal" },
  { word: "trip", definition: "We took a trip to Disneyland last fall.", sentence: "a journey; the act of going to a place and returning", difficulty: "normal" },
  { word: "autumn", definition: "| like to wear a jacket In autumn.", sentence: "the season of the year between summer and winter", difficulty: "normal" },
  { word: "star", definition: "One star is shining brighter than the others.", sentence: "one of the very bright points of light that shines in the sky at night", difficulty: "normal" },
  { word: "tent", definition: "He slept inside his tent.", sentence: "a large piece of cloth held up by ropes and poles", difficulty: "normal" },
  { word: "that", definition: "| think that is Mike's brother over there.", sentence: "the person or thing seen, mentioned, or understood", difficulty: "normal" },
  { word: "yellow", definition: "My favorite color is yellow.", sentence: "the color of lemons or butter", difficulty: "normal" },
  { word: "soft", definition: "My teddy bear is soft.", sentence: "easy to bend or to shape, not firm or hard", difficulty: "normal" },
  { word: "black", definition: "The words in this book are printed in black.", sentence: "a very dark color; the opposite of white", difficulty: "normal" },
  { word: "chair", definition: "We need one more chair at the table.", sentence: "a seat with a back, four legs, and sometimes arms", difficulty: "normal" },
  { word: "April", definition: "We celebrate my birthday in April.", sentence: "the fourth month of the year, after March", difficulty: "normal" },
  { word: "car", definition: "Mom drives me to school in her car.", sentence: "a vehicle that has four wheels and an engine", difficulty: "normal" },
  { word: "fast", definition: "He is a fast runner.", sentence: "taking very little time; quick", difficulty: "normal" },
  { word: "book", definition: "This is my favorite book to read.", sentence: "a written work made of pages between two covers", difficulty: "normal" },
  { word: "closed", definition: "The store is closed today, so we'll go tomorrow.", sentence: "not open", difficulty: "normal" },
  { word: "cut", definition: "The children cut the pictures using scissors.", sentence: "to use a sharp tool (such as a knife) to open or divide something", difficulty: "normal" },
  { word: "corn", definition: "Farm animals and people eat corn.", sentence: "a yellow or white vegetable that grows on a tall, green plant", difficulty: "normal" },
  { word: "foot", definition: "My foot hurts really bad.", sentence: "the part of the body at the end of the leg", difficulty: "normal" },
  { word: "hot", definition: "It is hot in the summer and cold in the winter.", sentence: "having a high temperature", difficulty: "normal" },
  { word: "gift", definition: "My uncle brought me a gift when | was sick.", sentence: "something given freely; a present", difficulty: "normal" },
  { word: "March", definition: "We celebrate St. Patrick's Day in March.", sentence: "The third month of the year", difficulty: "normal" },
  { word: "butter", definition: "| put butter on my pancakes.", sentence: "a solid, yellow, fatty food made by churning milk or cream", difficulty: "normal" },
  { word: "hand", definition: "Each hand has four fingers and a thumb.", sentence: "the part of the body at the end of the arm", difficulty: "normal" },
  { word: "mouth", definition: "He wiped his mouth with a napkin after eating.", sentence: "the part of the body that helps people eat and talk", difficulty: "normal" },
  { word: "cap", definition: "Can you bring me my favorite cap?", sentence: "a small, soft hat that often has a visor", difficulty: "normal" },
  { word: "hop", definition: "The rabbits hop across the lawn.", sentence: "to make small Jumps on one or two feet", difficulty: "normal" },
  { word: "June", definition: "My birthday is in June.", sentence: "the six month of the year", difficulty: "normal" },
  { word: "nest", definition: "The bird lays her eggs in the nest.", sentence: "a structure made by birds to shelter eggs", difficulty: "normal" },
  { word: "place", definition: "New York City is a nice place to visit.", sentence: "a specific area or region of the world", difficulty: "normal" },
  { word: "paw", definition: "The dog injured his paw.", sentence: "the foot of an animal that has claws", difficulty: "normal" },
  { word: "pan", definition: "Mom cooks the meat In a pan.", sentence: "a shallow, open container used for cooking", difficulty: "normal" },
  { word: "wife", definition: "He bought flowers for his wife.", sentence: "a female partner in a marriage", difficulty: "normal" },
  { word: "pup", definition: "The pup was only six months old.", sentence: "a young dog", difficulty: "normal" },
  { word: "red", definition: "| saw a shiny, red fire truck.", sentence: "the color of rubies, ladybugs, or tomatoes", difficulty: "normal" },
  { word: "tongue", definition: "My tongue Is inside my mouth.", sentence: "the fleshy, moving part inside your mouth that helps you taste, swallow, and", difficulty: "normal" },
  { word: "sport", definition: "Soccer is my favorite sport.", sentence: "an athletic activity you do for fun and to compete with others", difficulty: "normal" },
  { word: "zebra", definition: "We saw a zebra at the zoo!", sentence: "an animal that looks like a horse and has black and white stripes on its body", difficulty: "normal" },
  { word: "pin", definition: "| need a pin to hold the flower in my coat.", sentence: "a short, thin piece of wire that has one sharp end to stick through things", difficulty: "normal" },
  { word: "plant", definition: "Don't forget to water your plant.", sentence: "a living thing that grows in the ground and usually has leaves or flowers", difficulty: "normal" },
  { word: "pot", definition: "My mom prepares the soup in a pot.", sentence: "a round, deep container used for cooking", difficulty: "normal" },
  { word: "ring", definition: "She bought a gold ring.", sentence: "a thin circle of metal or other material worn on the finger", difficulty: "normal" },
  { word: "queen", definition: "The queen wore a beautiful crown.", sentence: "a woman who rules a country or kingdom", difficulty: "normal" },
  { word: "window", definition: "He opened the window.", sentence: "an opening in a wall for letting in light or air", difficulty: "normal" },
  { word: "win", definition: "She hopes to win the spelling bee.", sentence: "to come in first in a race or contest", difficulty: "normal" },
  { word: "story", definition: "| would like to hear that story again.", sentence: "an account of something that happened, either true or made up", difficulty: "normal" },
  { word: "sun", definition: "The sun is shining today.", sentence: "the star around which the earth moves", difficulty: "normal" },
  { word: "arm", definition: "Her arm was broken.", sentence: "the part between the shoulder and the wrist", difficulty: "normal" },
  { word: "card", definition: "She received a funny card on her birthday.", sentence: "a flat piece of stiff paper or plastic", difficulty: "normal" },
  { word: "walk", definition: "| walk five steps to the board.", sentence: "to move by putting one foot in front of the other", difficulty: "normal" },
  { word: "run", definition: "It's hard to run upa hill.", sentence: "to move your legs very fast, so that you go faster than walking", difficulty: "normal" },
  { word: "this", definition: "| really like this new toy.", sentence: "the person, thing, or idea that is present or near in place", difficulty: "normal" },
  { word: "tall", definition: "Tom is very tall compared to his sister.", sentence: "of more than average height", difficulty: "normal" },
  { word: "top", definition: "We climbed to the top of the mountain.", sentence: "the highest part of anything", difficulty: "normal" },
  { word: "wet", definition: "Her wet shoes made a mess on the kitchen floor.", sentence: "covered with water; not dry", difficulty: "normal" },
  { word: "tree", definition: "There Is a big tree near my house.", sentence: "a large plant with a trunk, branches, and leaves", difficulty: "normal" },
  { word: "boat", definition: "A boat can be moved by a motor.", sentence: "a small vessel that carries people or things over water", difficulty: "normal" },
  { word: "yo-yo", definition: "She learned a new trick with her yo-yo.", sentence: "a thick grooved double disk with a string attached to its center", difficulty: "normal" },
  { word: "fin", definition: "The fish's fin was very small.", sentence: "a thin, wing-shaped part of a fish that helps it to swim", difficulty: "normal" },
  { word: "cup", definition: "Would you like a cup of coffee?", sentence: "a small round container, used especially for hot drinks", difficulty: "normal" },
  { word: "friend", definition: "Max is Bobby's friend.", sentence: "someone you like and who likes you", difficulty: "normal" },
  { word: "ZOO", definition: "People visit the Zoo to see the animals.", sentence: "a place where wild animals are kept", difficulty: "normal" },
  { word: "woman", definition: "When a girl grows up, she becomes a woman.", sentence: "a grown-up female person", difficulty: "normal" },
  { word: "up", definition: "| went up the stairs.", sentence: "toward the sky or ceiling", difficulty: "normal" },
  { word: "fruit", definition: "Watermelon is my favorite fruit.", sentence: "the part of a flowering plant that contains seeds", difficulty: "normal" },
  { word: "vest", definition: "My uniform has a blue vest.", sentence: "a sleeveless garment that usually is worn over a shirt and buttons down the front", difficulty: "normal" },
  { word: "canyon", definition: "We saw a big canyon on our trip.", sentence: "a deep, narrow valley with steep sides", difficulty: "normal" },
  { word: "evening", definition: "We play outside every evening.", sentence: "the time of day when the sun starts to go down and it begins to get dark outside", difficulty: "normal" },
  { word: "crayon", definition: "Color the apple using a red crayon.", sentence: "a stick or pencil of colored wax", difficulty: "normal" },
  { word: "game", definition: "Let's play anew game with my cousins.", sentence: "something done for fun or amusement; play", difficulty: "normal" },
  { word: "baby", definition: "She went to the hospital to see the new baby.", sentence: "a very young child", difficulty: "normal" },
  { word: "poor", definition: "The poor man had no money to buy ice cream.", sentence: "not having much money or possessions", difficulty: "normal" },
  { word: "apple", definition: "An apple can be red or green.", sentence: "a round fruit that grows on a tree", difficulty: "normal" },
  { word: "child", definition: "She has been playing piano since she was a child.", sentence: "a young person", difficulty: "normal" },
  { word: "brother", definition: "Her brother is a doctor.", sentence: "a boy or man that has the same parents as another person", difficulty: "normal" },
  { word: "fireman", definition: "The fireman drives a big, red truck.", sentence: "a person whose work is putting out fires", difficulty: "normal" },
  { word: "twelve", definition: "There are twelve eggs in a dozen.", sentence: "a number equal to one more than 11", difficulty: "normal" },
  { word: "father", definition: "John's father has three children.", sentence: "aman who has a child or children", difficulty: "normal" },
  { word: "dress", definition: "| like my pink dress.", sentence: "a piece of clothing worn by women and girls", difficulty: "normal" },
  { word: "circle", definition: "Please draw a circle around the correct answer.", sentence: "a round shape", difficulty: "normal" },
  { word: "mask", definition: "The firefighter wears a mask.", sentence: "a covering that hides or protects the face", difficulty: "normal" },
  { word: "mug", definition: "My mom drinks hot chocolate in a mug.", sentence: "a drinking cup with a handle", difficulty: "normal" },
  { word: "hen", definition: "The hen laid three eggs.", sentence: "an adult female chicken", difficulty: "normal" },
  { word: "flower", definition: "| picked a beautiful flower from the garden.", sentence: "the part of a plant that produces seeds", difficulty: "normal" },
  { word: "desk", definition: "The teacher has a big desk.", sentence: "a piece of furniture with a flat or slanting top on which to write or place a book", difficulty: "normal" },
  { word: "fish", definition: "Salmon is a type of fish.", sentence: "an animal that lives in water, is covered with scales, and breathes by taking water", difficulty: "normal" },
  { word: "color", definition: "My shirt is the color red.", sentence: "a quality perceived by the eye when an object reflects light, such as red, yellow, or", difficulty: "normal" },
  { word: "cookies", definition: "Max eats cookies during lunch.", sentence: "small, flat, sweet desserts made from flour and sugar", difficulty: "normal" },
  { word: "count", definition: "|can count to 100!", sentence: "to name numbers in order", difficulty: "normal" },
  { word: "eight", definition: "He's working until eight o'clock.", sentence: "one more than seven", difficulty: "normal" },
  { word: "cake", definition: "My mom baked a delicious cake for my dad's birthday.", sentence: "a baked mixture of flour, sugar, eggs, and other ingredients", difficulty: "normal" },
  { word: "fall", definition: "Leaves fall from the trees.", sentence: "to drop or come down from a higher place", difficulty: "normal" },
  { word: "flag", definition: "Every country and state has its own flag.", sentence: "a piece of colored cloth with stars or other symbols on it", difficulty: "normal" },
  { word: "fun", definition: "We had a lot of fun at the party.", sentence: "enjoyment, amusement, or lighthearted pleasure", difficulty: "normal" },
  { word: "twenty", definition: "| have twenty colored pencils.", sentence: "a number equal to two times 10", difficulty: "normal" },
  { word: "head", definition: "The head is where the eyes, ears, nose, and mouth are.", sentence: "the top part of the human body", difficulty: "normal" },
  { word: "fork", definition: "| need a spoon, fork, and knife to eat my food.", sentence: "something to eat with, with two or more sharp points", difficulty: "normal" },
  { word: "ghost", definition: "My brother told mea scary story about a ghost.", sentence: "in stories, a white shape that scares people", difficulty: "normal" },
  { word: "plate", definition: "| put my apple slices on a blue plate.", sentence: "a shallow, usually circular object from which food is eaten or served", difficulty: "normal" },
  { word: "hug", definition: "My mom and dad always hug me.", sentence: "to put your arms around someone especially as a way of showing love or", difficulty: "normal" },
  { word: "Friday", definition: "We have gym class on Friday.", sentence: "the day after Thursday; sixth day of the week", difficulty: "normal" },
  { word: "bow", definition: "The singer made a deep bow as we clapped.", sentence: "to bend your head or body", difficulty: "normal" },
  { word: "jar", definition: "The teacher has a Jar filled with candy.", sentence: "a container with a wide mouth usually made of glass or pottery", difficulty: "normal" },
  { word: "igloo", definition: "The Inuit family live in an igloo.", sentence: "a circular house made of hard blocks of snow", difficulty: "normal" },
  { word: "jump", definition: "They jump over the fence.", sentence: "to throw yourself up into the air", difficulty: "normal" },
  { word: "happy", definition: "He is happy that you came to visit.", sentence: "feeling joy, pleasure, or contentment", difficulty: "normal" },
  { word: "lamb", definition: "Mary had a little lamb.", sentence: "a young sheep", difficulty: "normal" },
  { word: "jacket", definition: "My father's jacket Is black.", sentence: "a short coat", difficulty: "normal" },
  { word: "hat", definition: "Max puts his hat on.", sentence: "a piece of clothing for the head", difficulty: "normal" },
  { word: "neck", definition: "The giraffe has a long neck.", sentence: "the part of the body between the head and shoulders", difficulty: "normal" },
  { word: "jet", definition: "The jet soared through the sky.", sentence: "an aircraft", difficulty: "normal" },
  { word: "monkey", definition: "My favorite animal is a monkey.", sentence: "a hairy animal that usually lives in trees, with long arms and a long tail", difficulty: "normal" },
  { word: "furry", definition: "My cat is furry and small.", sentence: "covered with hair", difficulty: "normal" },
  { word: "jacks", definition: "Those children are playing Jacks.", sentence: "a game played with a small ball and little pieces of metal", difficulty: "normal" },
  { word: "hard", definition: "The turtle has a hard shell.", sentence: "not easy to bend, cut or break", difficulty: "normal" },
  { word: "lemon", definition: "Most people put lemon juice in their tea.", sentence: "a sour, yellow fruit", difficulty: "normal" },
  { word: "Tuesday", definition: "| will arrive on Tuesday morning.", sentence: "the day after Monday", difficulty: "normal" },
  { word: "taxi", definition: "We took a taxi to the airport.", sentence: "a car that you can pay to take you from one place to another", difficulty: "normal" },
  { word: "three", definition: "| have three sisters.", sentence: "one more than two", difficulty: "normal" },
  { word: "teacher", definition: "She is a first grade teacher.", sentence: "a person who helps students learn", difficulty: "normal" },
  { word: "sled", definition: "They rode the sled down the snowy hill.", sentence: "a vessel used for sliding over ice or snow", difficulty: "normal" },
  { word: "storm", definition: "The storm knocked over a tree InN my yard.", sentence: "a period of harsh weather with strong winds, rain, snow, or hail", difficulty: "normal" },
  { word: "July", definition: "July has thirty-one days.", sentence: "the seven month of the year", difficulty: "normal" },
  { word: "bedroom", definition: "My toys are in my bedroom.", sentence: "the room you sleep in", difficulty: "normal" },
  { word: "knees", definition: "| fell down and hurt my knees.", sentence: "the joints in the middle of human legs", difficulty: "normal" },
  { word: "milk", definition: "| like to have milk with my cereal.", sentence: "a white liquid made by female mammals", difficulty: "normal" },
  { word: "pants", definition: "Jeans area type of pa nts.", sentence: "clothing worn to cover the legs, from the waist to the ankles", difficulty: "normal" },
  { word: "moon", definition: "The moon is round like a ball.", sentence: "the earth's natural satellite that can be seen in the night sky", difficulty: "normal" },
  { word: "pencil", definition: "| drew the picture with a pencil.", sentence: "a thin, wooden device with a point at one end used for writing or drawing", difficulty: "normal" },
  { word: "pet", definition: "My pet is a hamster.", sentence: "an animal that is kept in the home as a companion rather than for work", difficulty: "normal" },
  { word: "play", definition: "Let's play baseball outside.", sentence: "to do an activity for fun", difficulty: "normal" },
  { word: "old", definition: "My grandfather is very old.", sentence: "having lived a long time", difficulty: "normal" },
  { word: "nine", definition: "Tina is nine years old.", sentence: "a number after eight", difficulty: "normal" },
  { word: "nose", definition: "Rudolph the reindeer has a red nose.", sentence: "the part of the face that sticks out just above the mouth", difficulty: "normal" },
  { word: "August", definition: "We have school break in August.", sentence: "the eighth month of the year", difficulty: "normal" },
  { word: "mop", definition: "My mother cleans the floor with a mop.", sentence: "a tool for cleaning floors made of a bundle of cloth or yarn fastened to a long", difficulty: "normal" },
  { word: "May", definition: "We celebrate Mother's Day In May.", sentence: "the fifth month of the year, after April", difficulty: "normal" },
  { word: "pear", definition: "My favorite fruit is a juicy, green pear.", sentence: "a sweet, juicy fruit that is shaped like a bell", difficulty: "normal" },
  { word: "pen", definition: "| like to write my notes with a blue pen.", sentence: "a tool you use when you write or draw with ink", difficulty: "normal" },
  { word: "oval", definition: "The hen laid an egg shaped like an oval.", sentence: "a shape like an egg", difficulty: "normal" },
  { word: "over", definition: "The bird flies over the tree.", sentence: "in an upward and forward direction across something", difficulty: "normal" },
  { word: "picture", definition: "Dad took a picture of my sister and me.", sentence: "a drawing, photograph, or painting of someone or something", difficulty: "normal" },
  { word: "seven", definition: "There are seven days in a week.", sentence: "one more than six", difficulty: "normal" },
  { word: "ruler", definition: "| use a ruler to measure the triangle.", sentence: "a straight strip of wood, metal, or plastic used to measure how long something is", difficulty: "normal" },
  { word: "sister", definition: "Peter has a sister named Mary.", sentence: "a girl or woman that has the same parents as another person", difficulty: "normal" },
  { word: "jelly", definition: "| like peanut butter and jelly sandwiches.", sentence: "a soft, sweet food made with fruit and sugar that is usually spread on toast", difficulty: "normal" },
  { word: "socks", definition: "Put your socks on before your shoes.", sentence: "knitted coverings for the feet", difficulty: "normal" },
  { word: "salad", definition: "We put lettuce and carrots in the salad.", sentence: "having a lot of rain", difficulty: "normal" },
  { word: "sleep", definition: "It's easy to sleep when it's quiet.", sentence: "to rest your body and mind", difficulty: "normal" },
  { word: "sad", definition: "| was sad when my best friend moved away.", sentence: "feeling bad about things; not happy", difficulty: "normal" },
  { word: "ship", definition: "Peter traveled to Spain ona ship.", sentence: "a very large boat that travels on oceans or large lakes", difficulty: "normal" },
  { word: "shoes", definition: "My shoes got dirty on our hike.", sentence: "something you wear on your foot", difficulty: "normal" },
  { word: "scarf", definition: "| need a scarf for my snowman.", sentence: "a piece of cloth worn around the neck and shoulders", difficulty: "normal" },
  { word: "rabbit", definition: "The magician pulled a rabbit out of his hat.", sentence: "a furry animal with long ears and short tail", difficulty: "normal" },
  { word: "thin", definition: "A sheet of paper is very thin.", sentence: "not big from one side to the other", difficulty: "normal" },
  { word: "those", definition: "Here are those pictures you asked for.", sentence: "plural of that", difficulty: "normal" },

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
  infoArea = document.getElementById("infoArea");
  remainingWords = getFilteredWords();
  sessionWords = [];
  wrongWords = [];
  currentIndex = 0;
}

function init() {
  const restored = loadState();

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
  const w = sessionWords[currentIndex];

  currentWord = w
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

  document.getElementById("word").innerHTML =
    "<strong>Words to review:</strong><br><br>" + list;
}

function updateDisplay(text) {
  document.getElementById("word").innerHTML = text;
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
  return `spellingAppState_v1_${getCurrentGradeKey}_${getModeKey()}`;
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

